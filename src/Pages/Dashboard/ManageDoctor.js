import React from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ManageDoctor = ({ doctor, index, refetch, setShowModal }) => {
  const { img, name, email } = doctor;
  const handleDeleteDoctorsModal = () => {
    setShowModal(doctor);
  };
  const handleDeleteDoctors = (email) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this doctor?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/doctor/${email}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            toast.success(`This ${name} deleted successfully!`);
            refetch();
            console.log(data);
          } else {
            toast.error(`Not deleted successfully!`);
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <label
          onClick={handleDeleteDoctorsModal}
          for="delete-confirm-modal "
          className="btn  btn-xs btn-error"
        >
          Delete
        </label>
        <button
          class="btn btn-xs btn-error"
          onClick={() => handleDeleteDoctors(email)}
        >
          Delete
        </button>
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default ManageDoctor;
