import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import LoginLoading from "../Shared/LoginLoading";

const Payment = () => {
  const { id } = useParams();
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(`http://localhost:5000/booking/${id}`, {
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
    <div class="card w-[50%] mx-auto bg-base-100 shadow-xl">
      <div class="card-body ">
        <h2 class="card-title text-white">
          Hello <span className="text-success">{appointment?.patientName}</span>
        </h2>
        <p>
          Your Appointment:
          <span className="text-red-400">{appointment?.date}</span> at{" "}
          <span className="text-purple-500">{appointment?.slot}</span>
        </p>
        <p>Please pay : ${appointment?.price}</p>
      </div>
    </div>
  );
};

export default Payment;
