import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/lib/Navbar";
import Footer from "./components/lib/Footer";
import { lazy, Suspense } from "react";
import SimilarFooter from "./components/lib/SimilarFooter";
const Login = lazy(() => import("./components/section/Login"));
const Register = lazy(() => import("./components/section/Register"));
const Home = lazy(() => import("./components/section/Home"));
const About = lazy(() => import("./components/section/About"));
const Services = lazy(() => import("./components/section/Services"));
const Contact = lazy(() => import("./components/section/Contact"));

function App() {
  const location = useLocation();
  const endPath = location.pathname;
  console.log('path name', endPath)

  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/services"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Services />
            </Suspense>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Register />
            </Suspense>
          }
        ></Route>
      </Routes>

      {endPath !== '/' && endPath !== "/login" && endPath !== "/register" && <SimilarFooter />}

      {endPath !== "/login" && endPath !== "/register" && <Footer />}
    </div>
  );
}

export default App;
