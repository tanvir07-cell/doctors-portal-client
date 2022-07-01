import React, { useState } from "react";
import Footer from "../Home/Footer/Footer";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointMent from "./AvailableAppointMent/AvailableAppointMent";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointMent date={date}></AvailableAppointMent>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
