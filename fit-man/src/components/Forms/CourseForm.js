import React, { useState } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

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

  let params = useParams();

  const handle = (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setFormData(newData);
  };

  const submit = async (e) => {
    e.preventDefault();
    const response =
      splitPath[splitPath.length - 1] === "add"
        ? await dataHandler.postCourse(params.gymId, formData)
        : await dataHandler.putCourse(params.gymId, params.courseId, formData);

    typeof response !== "undefined" &&
    (response.status === 201 || response.status === 204)
      ? history.push(`/gyms/${params.gymId}/courses`)
      : history.push(location);
  };

  //   const fileUploadHandler = (e) => {
  //     console.log(e.target.files[0]);
  //     if(formData.name > 0) {
  //         e.target.files[0].name = formData.name;
  //     }
  //     console.log(e.target.files[0].name);
  //   };

  return (
    <section className="vh-90">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="trainer-item backdrop-item text-black">
              <div className="card-body  p-md-5" id="register-body">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 txt-main-color">
                      {splitPath[splitPath.length - 1] === "add"
                        ? "Add"
                        : "Edit"}{" "}
                      Course
                    </p>

                    <form
                      className="mx-1 mx-md-4"
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
