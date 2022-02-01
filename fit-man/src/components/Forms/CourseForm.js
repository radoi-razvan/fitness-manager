import React, { useState } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useUpdateAtom } from "jotai/utils";
import { STATE } from "../State";

export const CourseForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    defaultPrice: "",
    description: "",
    schedule: "",
  });

  const history = useHistory();

  const location = useLocation();
  const splitPath = location.pathname.split("/");
  const setCourses = useUpdateAtom(STATE.COURSES);
  let params = useParams();

  const handle = (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setFormData(newData);
  };

  const submit = async (e) => {
    e.preventDefault();
    let response = null;
    if (splitPath[splitPath.length - 1] === "add") {
      response = await dataHandler.postCourse(params.gymId, formData);
      setCourses(params.gymId);
    } else {
      response = await dataHandler.putCourse(
        params.gymId,
        params.courseId,
        formData
      );
      setCourses(params.gymId);
    }

    typeof response !== "undefined" &&
    (response.status === 201 || response.status === 204)
      ? history.push(`/gyms/${params.gymId}/courses`)
      : history.push(location);
  };

  return (
    <section className="input-form">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-xl-6">
            <div className="trainer-item backdrop-item text-black card">
              <div>
                <div className="row justify-content-center">
                  <div>
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 txt-main-color">
                      {splitPath[splitPath.length - 1] === "add"
                        ? "Add"
                        : "Edit"}{" "}
                      Course
                    </p>

                    <form
                      className="mx-1 mx-md-4 ps-5 pe-5"
                      method={
                        splitPath[splitPath.length - 1] === "add"
                          ? "POST"
                          : "PUT"
                      }
                      onSubmit={(e) => submit(e)}
                      autoComplete="off"
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-tags-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e) => handle(e)}
                            value={formData.name}
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Course Name"
                            name="name"
                            required
                          />
                        </div>
                      </div>

                      {/* <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-image fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label htmlFor="avatar">Choose a picture (.png):</label>
                          <input
                          onChange={(e) => fileUploadHandler(e)}
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png"
                            //accept="image/png, image/jpeg"
                            className="form-control"
                            required
                          />
                        </div>
                      </div> */}

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-currency-dollar fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e) => handle(e)}
                            value={formData.defaultPrice}
                            type="number"
                            step=".01"
                            min="1"
                            id="defaultPrice"
                            className="form-control"
                            placeholder="Price"
                            name="defaultPrice"
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-info-square-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e) => handle(e)}
                            value={formData.description}
                            type="text"
                            id="description"
                            className="form-control"
                            placeholder="Description"
                            name="description"
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-calendar-week-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e) => handle(e)}
                            value={formData.schedule}
                            type="text"
                            id="schedule"
                            className="form-control"
                            placeholder="Schedule"
                            name="schedule"
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-main-color btn-lg"
                        >
                          {splitPath[splitPath.length - 1] === "add"
                            ? "Add"
                            : "Edit"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
