import React, { useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { dataHandler } from "../DataManager/DataHandler";
import {
  userSetter,
  loggedInSetter,
  attendedCoursesSetter,
  STATE,
} from "./State";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { FitManStorage, getDownloadURL, ref } from "../Firebase/firebaseConfig";

export const Course = ({
  name,
  defaultPrice,
  description,
  schedule,
  courseId,
  owned,
}) => {
  const user = useAtomValue(userSetter);
  const loggedIn = useAtomValue(loggedInSetter);
  const attendedCourses = useAtomValue(attendedCoursesSetter);
  const setCourses = useUpdateAtom(STATE.COURSES);
  const setTotalGymMembers = useUpdateAtom(STATE.GYMS_MEMBERS);
  const totalCoursesMembers = useAtomValue(STATE.COURSES_MEMBERS);
  const setTotalCoursesMembers = useUpdateAtom(STATE.COURSES_MEMBERS);

  let params = useParams();

  const deleteEvent = (e) => {
    e.preventDefault();
    dataHandler.deleteCourse(params.gymId, courseId).then(() => {
      setCourses(params.gymId);
      setTotalGymMembers();
      setTotalCoursesMembers();
    });
  };

  const joinCourse = (e) => {
    e.preventDefault();
    dataHandler.postParticipant(params.gymId, courseId).then(() => {
      setCourses(params.gymId);
      setTotalGymMembers();
      setTotalCoursesMembers();
    });
  };

  const leaveCourse = (e) => {
    e.preventDefault();
    dataHandler.deleteParticipant(params.gymId, courseId).then(() => {
      setCourses(params.gymId);
      setTotalGymMembers();
      setTotalCoursesMembers();
    });
  };

  const getImage = () => {
    let storageRef = ref(FitManStorage, "/images/course" + courseId + ".png");
    getDownloadURL(storageRef).then((response) => {
      const imgElement = document.getElementById("courseImage" + courseId);
      try {
        imgElement.setAttribute("src", response);
      } catch (error) {
        getImage();
      }
    });
  };

  return (
    <div className="card-item course">
      <img id={`courseImage${courseId}`} alt={name} onLoad={getImage()} />
      <div className="card-text">
        <span>
          {name}
          <NavLink
            className={`bi bi-pencil-square ms-3 btn-icon ${
              !loggedIn || !("Gyms" in user) || !owned ? "logout-display" : ""
            }`}
            exact
            to={`/gyms/${params.gymId}/courses/${courseId}/edit`}
          />
          <i
            className={`delete-icon bi bi-trash-fill ms-3 btn-icon ${
              !loggedIn || !("Gyms" in user) || !owned ? "logout-display" : ""
            }`}
            onClick={(e) => deleteEvent(e)}
          />
        </span>
        <p className="address">
          <span>
            <i className="bi bi-people-fill"></i>{" "}
            {totalCoursesMembers.map(
              (o) => o.CourseId === courseId && o.TotalCourseMembers
            )}
          </span>
        </p>
        <p>$ {defaultPrice}/month</p>
        <h4>{description}</h4>
        <p>Monday to Sunday: {schedule}</p>
        <p>
          <NavLink to={`/gyms/${params.gymId}/courses/${courseId}/exercises`}>
            Exercises
          </NavLink>
        </p>
        <p>
          <NavLink to={`/gyms/${params.gymId}/courses/${courseId}/trainers`}>
            Trainers
          </NavLink>
        </p>

        {"CourseParticipants" in user ? (
          !attendedCourses.includes(courseId) ? (
            <div className="btn-2" onClick={(e) => joinCourse(e)}>
              <em>JOIN</em> this course
            </div>
          ) : (
            <div className="btn-2" onClick={(e) => leaveCourse(e)}>
              <em>LEAVE</em> this course
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
