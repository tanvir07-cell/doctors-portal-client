import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  my-5">
      <InfoCard
        img={clock}
        heading={`Opening Hours`}
        color={` bg-gradient-to-r from-secondary to-primary`}
      ></InfoCard>
      <InfoCard
        img={marker}
        heading={`Visit Our Location`}
        color={`accent`}
      ></InfoCard>
      <InfoCard
        img={phone}
        heading={`Contact us Now`}
        color={` bg-gradient-to-r from-secondary to-primary`}
      ></InfoCard>
    </div>
  );
};

export default Info;
