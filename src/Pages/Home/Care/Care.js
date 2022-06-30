import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Care = () => {
  return (
    <div class="hero min-h-screen mt-16 ">
      <div class="hero-content flex-col lg:flex-row gap-10">
        <img
          src={treatment}
          class="lg:max-w-lg rounded-lg shadow-2xl rounded-xl w-full bg-gradient-to-r p-[5px] from-secondary to-primary "
        />
        <div>
          <h1 class="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-uppercase font-bold text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Care;
