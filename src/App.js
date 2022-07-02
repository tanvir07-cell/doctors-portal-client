import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <div className="App max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/appointment"
            element={<Appointment></Appointment>}
          ></Route>

          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </div>
    )
  );
}

export default App;
