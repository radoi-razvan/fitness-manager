import React from "react";
import { Course } from "../Course";
import { STATE, ownedGymsSetter, userSetter, loggedInSetter } from "../State";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export const CourseList = () => {
  const [courses, setCourses] = useAtom(STATE.COURSES);
  const [user, ] = useAtom(userSetter);
  const [loggedIn, ] = useAtom(loggedInSetter);
  let params = useParams();

  const [ownedGyms] = useAtom(ownedGymsSetter);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await dataHandler.getCourses(params.gymId);
    setCourses(response.data);
  };

  return (
    <div id="trainers">
      <NavLink
        className={`btn-1 btn-fixed-left ${
          !loggedIn ||
          !("Gyms" in user) ||
          !ownedGyms.includes(parseInt(params.gymId))
            ? "logout-display"
            : ""
        }`}
        exact
        to={`/gyms/${params.gymId}/courses/add`}
      >
        Add Course
      </NavLink>
      {courses.map((course, index) => (
        <Course
          name={course.Name}
          defaultPrice={course.DefaultPrice}
          description={course.Description}
          schedule={course.Schedule}
          courseId={course.CourseId}
          key={index}
          owned={ownedGyms.includes(parseInt(params.gymId))}
        />
      ))}
    </div>
  );
};
