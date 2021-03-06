import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div
      class="card lg:max-w-lg shadow-xl"
      style={{
        background: "#fff",
        boxShadow: " 3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
        borderRadius: "18px",
        color: "#3A4256",
      }}
    >
      <div class="card-body text-center">
        <h2 class="card-title text-secondary mx-auto">{name}</h2>
        <p>
          {slots?.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">
              No {slots?.length > 0 ? "slots" : "slot"} Available
            </span>
          )}
        </p>
        <p className="text-center">
          {slots?.length} {slots?.length > 0 ? "items" : "item"} available
        </p>

        <p>
          price:
          <small> ${price}</small>
        </p>

        <div class="card-actions justify-center">
          <label
            for="booking-modal"
            class="btn btn-secondary text-white"
            disabled={slots?.length === 0}
            onClick={() => setTreatment(service)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
