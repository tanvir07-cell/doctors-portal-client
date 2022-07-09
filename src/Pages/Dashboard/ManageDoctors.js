import React, { useState } from "react";
import { useQuery } from "react-query";
import LoginLoading from "../Shared/LoginLoading";
import DeleteModalDoctor from "./DeleteModalDoctor";
import ManageDoctor from "./ManageDoctor";

const ManageDoctors = () => {
  const [showModal, setShowModal] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <LoginLoading></LoginLoading>;
  }
  return (
    <div>
      <h2 className="text-2xl mt-5">Manage Doctors</h2>
      <h1>Total Doctors : {doctors.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => (
              <ManageDoctor
                doctor={doctor}
                index={index}
                refetch={refetch}
                setShowModal={setShowModal}
              ></ManageDoctor>
            ))}
          </tbody>
        </table>

        {showModal && (
          <DeleteModalDoctor setShowModal={setShowModal}></DeleteModalDoctor>
        )}
      </div>
    </div>
  );
};

export default ManageDoctors;
