import { format } from "date-fns/esm";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { name, slots, _id, price } = treatment;
  const handleModalSubmit = (event) => {
    event.preventDefault();
    const slot = event.target?.slot?.value;
    console.log(slot);

    // post to the database:
    const formattedDate = format(date, "PP");
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot: slot,
      price,
      patientEmail: user?.email,
      patientName: user?.displayName,
      phone: event?.target?.phone?.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.alert(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          window.alert(
            `Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        setTreatment(null);
        refetch();
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Booking for : {name}</h3>
          <form
            className="flex flex-col justify-center  items-center gap-5 mt-5"
            onSubmit={handleModalSubmit}
          >
            <input
              type="text"
              placeholder="Type here"
              value={format(date, "PP")}
              disabled
              class="input input-bordered w-full max-w-xs"
            />
            <select class="select select-bordered w-full max-w-xs" name="slot">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your name"
              class="input input-bordered w-full max-w-xs"
              name="name"
              value={user?.displayName}
              disabled
            />
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-xs"
              name="email"
              value={user?.email}
              disabled
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
              name="phone"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary text-white w-full max-w-xs"
            />
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
