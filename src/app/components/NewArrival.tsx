"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import React from "react";
import NewArrivalSwiper from "./NewArrivalSwiper";
import { IoIosArrowRoundForward } from "react-icons/io";

const NewArrival = () => {
  return (
    <section className="section min-h-[80vh]  flex items-center">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row relative">
          <div className="flex flex-col  lg:h-[300px] justify-center items-center text-center lg:text-left lg:items-start lg:max-w-[500px]">
            <motion.h1
              variants={fadeIn("none", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="title"
            >
              Latest Trends Unveiled
            </motion.h1>
            <motion.p
              variants={fadeIn("none", 0.2)}
              initial="hidden"
              whileInView={"show"}
              className="subheading max-w-[320px] md:max-w-[360px] lg:max-w-full mb-5 md:mb-6 "
            >
              Be the first to discover our freshest arrivals, carefully
              handpicked to elevate your style.
            </motion.p>
            <motion.div
              variants={fadeIn("none", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="hidden lg:flex items-center "
            >
              <a href="#" className="text-[16px]">
                Discover All
              </a>
              <div className="text-2xl  ">
                <IoIosArrowRoundForward />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("none", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="md:max-w-[700px] lg:absolute md:-right-[105px]"
          >
            <NewArrivalSwiper />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
//
