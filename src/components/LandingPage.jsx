import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
