import React, { useState } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useUpdateAtom } from "jotai/utils";
import { STATE } from "../State";

export const ExerciseForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const setExercises = useUpdateAtom(STATE.EXERCISES);

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
    let response = null;
    if (splitPath[splitPath.length - 1] === "add") {
      response = await dataHandler.postExercise(
        params.gymId,
        params.courseId,
        formData
      );
      setExercises(params);
    } else {
      response = await dataHandler.putExercise(
        params.gymId,
        params.courseId,
        params.exerciseId,
        formData
      );
      setExercises(params);
    }

    typeof response !== "undefined" &&
    (response.status === 201 || response.status === 204)
      ? history.push(
          `/gyms/${params.gymId}/courses/${params.courseId}/exercises`
        )
      : history.push(location);
  };

  return (
    <section className="vh-90">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="trainer-item backdrop-item text-black card mt-5 pt-5">
              <div className="card-body  p-md-5" id="register-body">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 txt-main-color">
                      {splitPath[splitPath.length - 1] === "add"
                        ? "Add"
                        : "Edit"}{" "}
                      Exercise
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
                            placeholder="Exercise Name"
                            name="name"
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
