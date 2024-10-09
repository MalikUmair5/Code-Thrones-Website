import React from "react";
import "../app/globals.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Technologoies from "./sections/Technologies";
import Services from "./sections/Services";
import Line from "./components/line";
import ServicesDiscription from "./sections/ServicesDiscription";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Technologoies />
      <Services />
      <Line />
      <ServicesDiscription />
    </>
  );
}
