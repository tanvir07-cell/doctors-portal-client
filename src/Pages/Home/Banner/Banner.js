import React from "react";
import chair from "../../../assets/images/chair.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen  bg-hero  bg-no-repeat bg-left-bottom hero-banner"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 80vh)" }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          class="lg:max-w-lg rounded-lg shadow-2xl rounded-xl w-full bg-gradient-to-r p-[5px] from-secondary to-primary  "
        />
        <div>
          <h1 class="lg:text-5xl text-3xl font-bold ">
            Your New Smile Starts Here
          </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-uppercase font-bold text-white mb-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
