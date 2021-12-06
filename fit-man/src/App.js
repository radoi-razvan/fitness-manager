import React from 'react';
import "./css/App.css";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { GymList } from './components/GymList';
import { WelcomePage } from './components/WelcomePage';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  // const location = useLocation();
  // TODO apiGet, apiPost, apiPut, apiDelete file
  
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <main id="main">
          <Switch>
          <Route exact path="/">
              <WelcomePage />
          </Route>
          <Route path="/gyms">
            <GymList />
          </Route>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
