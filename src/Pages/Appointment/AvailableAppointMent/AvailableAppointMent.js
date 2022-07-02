import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import Service from "../Service/Service";

const AvailableAppointMent = ({ date }) => {
  const [services, setServices] = useState([]);
  // for opening modal:
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-center text-secondary font-bold mb-8">
        Available Services on {format(date, "PP")}
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service?._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {/* johkhon treatment set hoye jabe tokhon jate modal ti dekhay */}
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointMent;
