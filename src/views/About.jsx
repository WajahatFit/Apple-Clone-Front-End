import React from "react";
import Section0 from "../components/Section0";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div className="bg-lightWhite">
        <Section0 />
        <Section1 />
        <Section2 />
        <Footer />
      </div>
    </>
  );
}
