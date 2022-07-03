import { format } from "date-fns/esm";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const [user] = useAuthState(auth);
  const { name, slots } = treatment;
  const handleModalSubmit = (event) => {
    event.preventDefault();
    console.log(event?.target?.name?.value);

    // after clicking submit button the modal is gone
    setTreatment(null);
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
            <select class="select select-bordered w-full max-w-xs">
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
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
