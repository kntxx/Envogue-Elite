"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Image from "next/image";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-[76vh] lg:min-h-screen flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col text-center md:text-left  justify-between items-center space-y-5 md:flex-row">
          <motion.div
            variants={fadeIn("none", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <Image
              src="/about/aboutimg.png"
              width="500"
              height="500"
              alt=""
              className="w-[240px] md:w-[300px] lg:w-[386px] h-full "
            />
          </motion.div>
          <div className="flex-1 max-w-[320px] md:max-w-full">
            <motion.h1
              variants={fadeIn("none", 0.2)}
              initial="hidden"
              whileInView={"show"}
              className="title"
            >
              Experience Timeless Elegance
            </motion.h1>
            <motion.p
              variants={fadeIn("none", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="subheading mb-5 md:mb-6 "
            >
              Discover a world of sophistication and style at Envogue Elite. As
              a boutique clothing brand, we celebrate individuality and
              reimagine high-end fashion. From opulent gowns to chic ensembles,
              our designs empower you to make a statement.
            </motion.p>
            <motion.button
            variants={fadeIn("none", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="border font-thin text-[12px] lg:text-[16px] p-2 outline-1 outline outline-primaryblack text-primaryblack">
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
