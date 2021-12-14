import React from "react";
import "./css/App.css";
import { Navbar } from "./components/common/Navbar";
// import { Footer } from "./components/common/Footer";
import { GymList } from "./components/GymList";
import { WelcomePage } from "./components/WelcomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CourseList } from "./components/CourseList";
import { ExerciseList } from "./components/ExerciseList";
import { TrainerList } from "./components/TrainerList";
import { RegistrationForm } from "./components/RegistrationForm";
import { LoginForm } from "./components/LoginForm";
import { AddGymForm } from "./components/Forms/AddGymForm";

function App() {
  // const location = useLocation();

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
              <Route path="/gyms/:gymId/courses/:courseId/trainers">
                <TrainerList />
              </Route>
              <Route path="/gyms/:gymId/courses/:courseId/exercises">
                <ExerciseList />
              </Route>
              <Route path="/gyms/:gymId/courses">
                <CourseList />
              </Route>
              <Route path="/gyms/add">
                <AddGymForm />
              </Route>
              <Route path="/gyms">
                <GymList />
              </Route>
              <Route path="/register">
                <RegistrationForm />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
