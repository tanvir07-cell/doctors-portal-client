import React from "react";

const Service = ({ img, title }) => {
  const serviceCard = {
    background: "#FFFFFF",
    boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
    borderRadius: "18px",
  };
  return (
    <div class="card lg:max-w-lg  shadow-xl" style={serviceCard}>
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;
