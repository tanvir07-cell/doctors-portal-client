import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import { useEffect, useState } from "react";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  useEffect(() => {
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = "none";
        setLoading(false);
      }, 2000);
    }
  }, [spinner]);

  return (
    !loading && (
      <div className="App  max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/appointment"
            element={
              <RequireAuth>
                <Appointment></Appointment>
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            {/* nested route: */}
            <Route index element={<MyAppointment></MyAppointment>}></Route>
            <Route path="review" element={<MyReview></MyReview>}></Route>
          </Route>

          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>

          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </div>
    )
  );
}

export default App;
