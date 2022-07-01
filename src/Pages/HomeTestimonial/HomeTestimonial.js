import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const HomeTestimonial = () => {
  return (
    <section
      className="lg:flex items-center mt-64"
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex-1">
        <img src={doctor} alt="" className="mt-[-200px]" />
      </div>
      <div className="flex-1">
        <h3 className="text-primary font-bold text-xl">Appointment</h3>
        <h2 className="text-white text-3xl mt-5">Make an appointment Today</h2>
        <p className="mt-3 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button class="mt-7 mb-7 btn btn-primary bg-gradient-to-r from-secondary to-primary text-uppercase font-bold text-white">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HomeTestimonial;
