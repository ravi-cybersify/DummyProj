import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/lib/Navbar";
import About from "./components/section/About";
import Contact from "./components/section/Contact";
import Home from "./components/section/Home";
import Login from "./components/section/Login";
import Services from "./components/section/Services";
import Footer from "./components/lib/Footer";

function App() {
  return (
    <div className="App">
       <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

     <Footer />
    </div>
  );
}

export default App;
