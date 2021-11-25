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
      <Navbar />
      <main id="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/api/gyms" component={GymList} />
          </Switch>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
