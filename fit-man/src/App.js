import './App.css';
import { Footer } from './components/common/Footer';
import { Navbar } from './components/common/Navbar';

function App() {
  return (
    <div className="container">
        <Navbar />
        <main id="main">
          Welcome to Fitness Manager!
        </main>
        <Footer />
    </div>
  );
}

export default App;
