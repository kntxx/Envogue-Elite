"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import React from "react";
import { icons } from "../constants/data";

const NewsLetter = () => {
  return (
    <section className="  h-[55vh] flex items-center w-full bg-newsbg bg-center bg-cover bg-no-repeat   text-primarywhite">
      <div className="container mx-auto text-center justify-center flex">
        <div className="w-[600px]">
          <motion.h1
            variants={fadeIn("none", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="title mb-3"
          >
            Fashion Forward Newsletter
          </motion.h1>
          <motion.p
            variants={fadeIn("none", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="subheading mb-3"
          >
            Unleash the World of High-End Fashion: <br /> Trendsetters' Haven
            and Exclusive Fashion Finds Await!
          </motion.p>
          <div className=" mb-3 flex justify-evenly items-center w-full">
            {icons.map((item, index) => (
              <motion.div
                variants={fadeIn("none", 0.3)}
                initial="hidden"
                whileInView={"show"}
                className="flex items-center justify-center"
                key={index}
              >
                {React.createElement(item.icon)} <span>{item.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <motion.div
              variants={fadeIn("none", 0.4)}
              initial="hidden"
              whileInView={"show"}
              className="lg:w-[447px] flex justify-between"
            >
              <input
                className="bg-transparent text-center border border-white w-full h-auto p-2"
                placeholder="Your@Email.com"
              />
              <button className="text-primaryblack bg-primarywhite  w-[100px]  font-thin text-[12px] lg:text-[16px] p-2 outline-none ">
                Submit
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
