import React from "react";

const InfoCard = ({ img, heading, color }) => {
  return (
    <div
      class={`card lg:card-side bg-base-100 shadow-xl bg-${color}`}
      style={{ color: "#fff" }}
    >
      <figure class="mx-5">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{heading}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
