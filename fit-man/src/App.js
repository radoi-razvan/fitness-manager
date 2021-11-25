import "./App.css";
import { Footer } from "./components/common/Footer";
import { Navbar } from "./components/common/Navbar";
import { GymList } from "./components/GymList";
import { WelcomePage } from "./components/WelcomePage";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";

function App() {
  // const location = useLocation();

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <main id="main">
          <Switch>
            <Route path="/api/gyms">
              <GymList />
            </Route>
            <Route exact path="/">
              <WelcomePage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
