import { format } from "date-fns";
import React from "react";

const AvailableAppointMent = ({ date }) => {
  return (
    <div>
      <h4 className="text-center text-secondary font-bold">
        Available Services on {format(date, "PP")}
      </h4>
    </div>
  );
};

export default AvailableAppointMent;
