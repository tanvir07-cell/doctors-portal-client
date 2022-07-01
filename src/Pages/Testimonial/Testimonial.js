import React from "react";

const Testimonial = ({ testimonial }) => {
  const testimonialCard = {
    background: "#FFFFFF",
    boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
    borderRadius: "18px",
    color: "#3A4256",
  };
  return (
    <div className="card lg:max-w-lg  shadow-xl" style={testimonialCard}>
      <div class="card-body">
        <h2 className="card-title">{testimonial?.title}</h2>

        <div className="flex items-center gap-3 mt-3">
          <div class="avatar">
            <div class="w-24  rounded-full ring ring-primary ring-offset-base-100 ">
              <img src={testimonial?.img} alt="" />
            </div>
          </div>

          <div>
            <p>{testimonial?.name}</p>
            <p>{testimonial?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
