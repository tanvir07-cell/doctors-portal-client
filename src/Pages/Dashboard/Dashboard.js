import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useQuery } from "react-query";
import auth from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  // fetch data using react-query:
  const { data: appointments, isLoading } = useQuery(["booking"], () =>
    fetch(`http://localhost:5000/booking?patientEmail=${user?.email}`).then(
      (res) => res.json()
    )
  );

  return (
    <div class="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content mx-5">
        {/* <!-- Page content here --> */}
        <h2 className="text-2xl mt-5 text-primary mb-5">Dashboard</h2>
        <h2 className="mb-5">Total Appointment : {appointments?.length}</h2>
        <div class="overflow-x-auto">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Slot</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {appointments?.map((a, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{a?.patientName}</td>
                  <td>{a?.patientEmail}</td>
                  <td>{a?.date}</td>
                  <td>{a?.slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Outlet />

        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-50 bg-accent  text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Sidebar Item 1</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Sidebar Item 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
