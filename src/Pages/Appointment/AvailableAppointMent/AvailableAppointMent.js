import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import Service from "../Service/Service";
import { useQuery } from "react-query";
import LoginLoading from "../../Shared/LoginLoading";

const AvailableAppointMent = ({ date }) => {
  // const [services, setServices] = useState([]);
  const formattedDate = format(date, "PP");
  // for opening modal:
  const [treatment, setTreatment] = useState(null);

  // using react query to fetch data:
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <LoginLoading></LoginLoading>;
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${format(date, "PP")}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [date]);
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
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointMent;
