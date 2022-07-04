import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import DarkMode from "../../DarkMode/DarkMode";
import auth from "../../Firebase/firebase.init";
import "./Navbar.css";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [show, setShow] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button onClick={() => signOut(auth)} className="btn btn-ghost">
            LogOut
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
      {/* <li>
        <Link to>
          <DarkMode></DarkMode>
        </Link>
      </li> */}
    </>
  );
  return (
    <div className="nav-bg">
      <div class="navbar bg-gradient-to-r from-secondary to-primary text-white">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              {!show ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setShow(!show)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              ) : (
                <ImCross onClick={() => setShow(!show)}></ImCross>
              )}
            </label>

            {show && (
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-gradient-to-r from-secondary to-primary text-white"
              >
                {menuItems}
              </ul>
            )}
          </div>
          <h1 class=" normal-case text-xl">Doctors Portal</h1>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
