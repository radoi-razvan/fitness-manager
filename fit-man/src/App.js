import React from "react";
import "./css/App.css";
import { Navbar } from "./components/common/Navbar";
// import { Footer } from "./components/common/Footer";
import { GymList } from "./components/Lists/GymList";
import { WelcomePage } from "./components/WelcomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CourseList } from "./components/Lists/CourseList";
import { ExerciseList } from "./components/Lists/ExerciseList";
import { TrainerList } from "./components/Lists/TrainerList";
import { RegistrationForm } from "./components/Forms/RegistrationForm";
import { LoginForm } from "./components/Forms/LoginForm";
import { GymForm } from "./components/Forms/GymForm";
import { CourseForm } from "./components/Forms/CourseForm";
import { ExerciseForm } from "./components/Forms/ExerciseForm";
import { TrainerForm } from "./components/Forms/TrainerForm";

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
