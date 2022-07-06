import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const User = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        // backend jokhon admin add korbo tokhon modified name e ekti field thakbe:
        if (data.modifiedCount > 0) {
          toast.success(`${email} is now an admin`, { id: "admin-1" });
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>

      <td>
        {role !== "admin" ? (
          <button class="btn btn-xs" onClick={makeAdmin}>
            Make Admin
          </button>
        ) : (
          <span className="text-green-600">{email} already an admin</span>
        )}
      </td>
      <td>
        <button class="btn btn-xs bg-red-500 text-white">Remove Admin</button>
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default User;
