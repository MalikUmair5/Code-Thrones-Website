import React from "react";
import "../app/globals.css"
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Technologoies from "./sections/Technologies";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Technologoies />
    </>
  );
}
