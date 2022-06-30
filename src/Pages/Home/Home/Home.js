import React from "react";
import HomeTestimonial from "../../HomeTestimonial/HomeTestimonial";
import Banner from "../Banner/Banner";
import Care from "../Care/Care";
import Info from "../Info/Info";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Care></Care>
      <HomeTestimonial></HomeTestimonial>
    </div>
  );
};

export default Home;
