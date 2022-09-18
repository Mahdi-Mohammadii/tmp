import React from "react";
import Brands from "./brands";
import Footer from "./footer";
import Menu from "./header/index";
import NewComer from "./new-comer";
import Popular from "./popular";
import Subscribe from "./subscribe";
import Testimonial from "./testimonial";
import TopSection from "./topSection";
import Tools from "./tool"

const Intro = () => {
  return (
    <>
      <Menu />
      <TopSection />
      <Tools />
      <Popular />
      <NewComer />
      <Brands />
      <Testimonial />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Intro;
