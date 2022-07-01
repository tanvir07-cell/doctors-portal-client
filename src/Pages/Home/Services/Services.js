import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "../Home/Service/Service";

const Services = () => {
  const serviceDetails = [
    {
      _id: 1,
      img: `${cavity}`,
      title: "Cavity Filling",
      color: `{primary}`,
    },
    {
      _id: 2,
      img: `${fluoride}`,
      title: "Fluoride",
    },
    {
      _id: 3,
      img: `${whitening}`,
      title: "whitening",
    },
  ];
  return (
    <div className="text-center my-16">
      <div>
        <h4 className="uppercase  bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text font-bold">
          Our Services
        </h4>
        <h2 className="text-4xl my-5">Services We Provide</h2>
      </div>

      {/* for dynamic service card: */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        style={{ color: "#3A4256" }}
      >
        {serviceDetails.map((service) => (
          <Service
            img={service?.img}
            title={service?.title}
            key={service?._id}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
