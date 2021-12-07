import React from "react";
import { Course } from "./Course";
import { STATE } from "./State";
import { useAtom } from "jotai";
import axios from "axios";
import { useEffect } from "react";
import { dataHandler } from "../DataManager/DataHandler";

export const CourseList = () => {
  const [courses, setCourses] = useAtom(STATE.COURSES);

  useEffect(() => {
    getCourses();
  });

  const getCourses = async () => {
    const response = await dataHandler.getCourses();
    setCourses(response.data);
  };

  return (
    <div>
        {/* <div className="section-heading">
            <h2><em>{name}</em></h2>
        </div> */}
        <div>
          {courses.map((course, index) => {
            <Course
              name={course.Name}
              defaultPrice={course.DefaultPrice}
              description={course.Description}
              schedule={course.Schedule}
              courseId={course.CourseId}
              key={index}
            />
          })}
        </div>
        {/* <div>
            <em> {address} </em>
        </div> */}
    </div>
  );
}
