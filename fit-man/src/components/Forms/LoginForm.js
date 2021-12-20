import React, { useState } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

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
    if (typeof response !== "undefined" && response.status === 200)
    {
      history.push("/")
    }
    else 
    {
      warningIcon.classList.remove("forms-warnings-hide");
      warningText.classList.remove("forms-warnings-hide");
    }
  };

  return (
    <section className="vh-90">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="trainer-item backdrop-item text-black">
              <div className="card-body p-md-5" id="login-body">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 txt-main-color">
                      Login
                    </p>

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
                        <i className="bi bi-exclamation-triangle-fill fa-lg me-3 fa-fw label-icons-signin text-danger forms-warnings-hide" id="warningIcon"></i>
                        <div className="form-outline flex-fill mb-0 forms-warnings-hide" id="warningText">
                          <span className="form-control text-danger">Invalid credentials!</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};
