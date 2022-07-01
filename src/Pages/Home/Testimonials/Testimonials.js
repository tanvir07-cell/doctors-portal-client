import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      _id: 1,
      img: people1,
      location: "California",
      name: " Brad Pitt",
      title:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      img: people2,
      location: "California",
      name: " Brad Pitt",
      title:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      img: people3,
      location: "California",
      name: " Brad Pitt",
      title:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className=" mb-5">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-primary text-xl font-bold">Testimonial</h4>
          <h2 className="text-3xl text-white">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} alt="" className="w-[192px] h-[156px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {testimonials?.map((testimonial) => (
          <Testimonial testimonial={testimonial}></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
