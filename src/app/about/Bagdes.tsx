"use client"

import React from "react";
import { Badges } from "../constants/data";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants";
const Bagdes = () => {
  return (
    <section className="section flex items-center h-[40vh] md:h-[30vh] lg:h-[65vh]">
      <div className="mx-auto container ">
        <div className="flex items-center justify-between flex-col md:flex-row ">
          {Badges.map((item) => (
            <div className="flex flex-col  md:w-[600px]" key={uuidv4()}>
              <div className="flex flex-col justify-center items-center gap-x-11 ">
                <motion.div
                  variants={fadeIn("none", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  className="   text-[55px]   lg:text-[70px]   "
                >
                  {React.createElement(item.icon)}
                </motion.div>
                <motion.h2
                    variants={fadeIn("none", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                className=" font-semibold md:text-[17px] lg:text-[20px]">
                  {item.title}
                </motion.h2>
                <motion.p
                    variants={fadeIn("none", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                className=" md:text-[13px] lg:text-[15px]">
                  {item.description}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bagdes;
