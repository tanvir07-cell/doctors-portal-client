import React from "react";
import HomeTestimonial from "../../HomeTestimonial/HomeTestimonial";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import Care from "../Care/Care";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
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
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
