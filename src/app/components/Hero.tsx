"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const Hero = () => {
  return (
    <section id="home">
      <div className="flex items-center w-full bg-herobg bg-center bg-cover bg-no-repeat h-screen  text-primarywhite">
        <div className="container mx-auto text-center ">
          <motion.h1
            variants={fadeIn("none", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className=" font-playfair  lg:font-regular text-[35px] md:text-[60px] lg:text-[95px]"
          >
            Elegance Meets Fashion's Finest Grace
          </motion.h1>
          <motion.button
            variants={fadeIn("none", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="font-thin mt-11 text-[14px] lg:text-[16px] p-2 bg-primarywhite text-primaryblack "
          >
            Shop Collection
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
