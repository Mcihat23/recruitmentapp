import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Candidates from "./pages/Candidates";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <Container className="container-xl">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/candidates/:id" element={<Details />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
