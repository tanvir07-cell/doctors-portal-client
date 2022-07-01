import { format } from "date-fns/esm";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse gap-5 lg:gap-64">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div
          style={{
            background: "#fff",
            boxShadow: " 3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "18px",
            color: "#3A4256",
          }}
        >
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
