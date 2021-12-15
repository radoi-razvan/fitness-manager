import React from "react";
import { Course } from "../Course";
import { STATE } from "../State";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export const CourseList = () => {
  const [courses, setCourses] = useAtom(STATE.COURSES);
  let params = useParams();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await dataHandler.getCourses(params.gymId);
    setCourses(response.data);
  };

  return (
    <div id="trainers">
      <NavLink className="btn-1 btn-fixed-left" exact to={`/gyms/${params.gymId}/courses/add`}>
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
        />
      ))}
    </div>
  );
};
