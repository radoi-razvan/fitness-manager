import React, { useState } from "react";
import { dataHandler } from "./DataManager/DataHandler";
import "./css/App.css";
import { Navbar } from "./components/common/Navbar";
import { GymList } from "./components/Lists/GymList";
import { WelcomePage } from "./components/WelcomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CourseList } from "./components/Lists/CourseList";
import { ExerciseList } from "./components/Lists/ExerciseList";
import { TrainerList } from "./components/Lists/TrainerList";
import { RegistrationForm } from "./components/Forms/RegistrationForm";
import { GymForm } from "./components/Forms/GymForm";
import { CourseForm } from "./components/Forms/CourseForm";
import { ExerciseForm } from "./components/Forms/ExerciseForm";
import { TrainerForm } from "./components/Forms/TrainerForm";
import { Provider } from "jotai";

function App() {
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });

  const handle = (e) => {
    const newData = { ...logData };
    newData[e.target.id] = e.target.value;
    setLogData(newData);
  };

  const submit = async (e) => {
    e.preventDefault();
    const warningIcon = document.getElementById("warningIcon");
    const warningText = document.getElementById("warningText");

    const response = await dataHandler.postLogin(logData);
    if (typeof response !== "undefined" && response.status === 200) {
      window.location.reload(false);
    } else {
      warningIcon.classList.remove("forms-warnings-hide");
      warningText.classList.remove("forms-warnings-hide");
    }
  };

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <main id="main">
            <Switch>
              <Route exact path="/">
                <WelcomePage />
              </Route>
              <Route path="/gyms/:gymId/courses/:courseId/trainers/:trainerId/edit">
                <TrainerForm />
              </Route>
              <Route path="/gyms/:gymId/courses/:courseId/trainers/add">
                <TrainerForm />
              </Route>
              <Route path="/gyms/:gymId/courses/:courseId/trainers">
                <TrainerList />
              </Route>
              <Route path="/gyms/:gymId/courses/:courseId/exercises/:exerciseId/edit">
                <ExerciseForm />
              </Route>
              <Route path="/gyms/:gymId/courses/:courseId/exercises/add">
                <ExerciseForm />
              </Route>
              <Route path="/gyms/:gymId/courses/:courseId/exercises">
                <ExerciseList />
              </Route>
              <Route path="/gyms/:gymId/courses/:courseId/edit">
                <CourseForm />
              </Route>
              <Route path="/gyms/:gymId/courses/add">
                <CourseForm />
              </Route>
              <Route path="/gyms/:gymId/courses">
                <CourseList />
              </Route>
              <Route path="/gyms/:gymId/edit">
                <GymForm />
              </Route>
              <Route path="/gyms/add">
                <GymForm />
              </Route>
              <Route path="/gyms">
                <GymList />
              </Route>
              <Route path="/register">
                <RegistrationForm />
              </Route>
            </Switch>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header d-flex justify-content-center">
                    <h1
                      className="modal-title fw-bold txt-main-color"
                      id="exampleModalLabel"
                    >
                      Login
                    </h1>
                  </div>
                  <div className="modal-body">
                    <form
                      className="mx-1 mx-md-4"
                      method="POST"
                      autoComplete="off"
                      onSubmit={(e) => submit(e)}
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-envelope-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e) => handle(e)}
                            value={logData.email}
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="your_email@gmail.com"
                            name="name"
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-lock-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e) => handle(e)}
                            value={logData.password}
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="password"
                            name="password"
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i
                          className="bi bi-exclamation-triangle-fill fa-lg me-3 fa-fw label-icons-signin text-danger forms-warnings-hide"
                          id="warningIcon"
                        ></i>
                        <div
                          className="form-outline flex-fill mb-0 forms-warnings-hide"
                          id="warningText"
                        >
                          <span className="form-control text-danger">
                            Invalid credentials!
                          </span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-main-color btn-lg"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
