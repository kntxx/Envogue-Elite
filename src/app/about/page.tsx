
import React from "react";
import Aboutus from "./About";
import Team from "./Team";
import Bagdes from "./Bagdes";
import PageWrapper from "../page-wrapper";
const About = () => {
  return (
    <div>
      <PageWrapper>
        <Aboutus />
        <Team />
        <Bagdes />
      </PageWrapper>
    </div>
  );
};

export default About;
