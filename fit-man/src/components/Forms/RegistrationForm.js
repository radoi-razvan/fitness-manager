import React, { useState } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { useHistory } from "react-router-dom";

export const RegistrationForm = () => {
  const [regData, setRegData] = useState({
    name: "",
    userRole: "Owner",
    email: "",
    password: "",
    repeatedPassword: "",
  });

  const history = useHistory();

  const handle = (e) => {
    const newData = { ...regData };
    newData[e.target.id] = e.target.value;
    setRegData(newData);
  };

  const submit = async (e) => {
    e.preventDefault();
    const warningIcon = document.getElementById("warningIcon");
    const warningText = document.getElementById("warningText");

    if (regData.password === regData.repeatedPassword) {
      const response = await dataHandler.postRegister(regData);
      typeof response !== "undefined" && response.status === 201
        ? history.push("/")
        : history.go(0);
    } else {
      warningIcon.classList.remove("forms-warnings-hide");
      warningText.classList.remove("forms-warnings-hide");
    }
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
                      Register
                    </p>

                    <form
                      className="mx-1 mx-md-4 ps-5 pe-5"
                      method="POST"
                      onSubmit={(e) => submit(e)}
                      autoComplete="off"
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-person-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e) => handle(e)}
                            value={regData.name}
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Your Name"
                            name="name"
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-person-badge fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <select
                            onChange={(e) => handle(e)}
                            value={regData.userRole}
                            name="userRole"
                            id="userRole"
                            className="form-control"
                            required
                          >
                            <option value="Owner"> Gym Owner </option>
                            <option value="Participant"> Gym Member </option>
                          </select>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-envelope-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e) => handle(e)}
                            value={regData.email}
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="your_email@gmail.com"
                            name="email"
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-lock-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e) => handle(e)}
                            value={regData.password}
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
                        <i className="bi bi-key-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            onChange={(e) => handle(e)}
                            value={regData.repeatedPassword}
                            type="password"
                            id="repeatedPassword"
                            className="form-control"
                            placeholder="Repeat your password"
                            name="repeatedPassword"
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
                            Passwords don't match!
                          </span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-main-color btn-lg"
                        >
                          Sign Up
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
