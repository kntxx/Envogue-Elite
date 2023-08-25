"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { iconsbrand } from "../constants/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const Brand = () => {
  return (
    <section className="section flex items-center justify-center h-[10vh] md:h-[20vh] lg:min-h-[26vh]">
      <motion.div
        variants={fadeIn("none", 0.1)}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto h-full items-center justify-center flex "
      >
        <Marquee>
          <ul className="flex justify-between items-center space-x-11 mr-11 md:space-x-16 lg:space-x-24 ">
            {iconsbrand.map((item, index) => (
              <li className=" " key={index}>
                <Image
                  src={item.image}
                  alt="brand icon"
                  width={0}
                  height={0}
                  className=" w-full h-auto "
                />
              </li>
            ))}
          </ul>
        </Marquee>
      </motion.div>
    </section>
  );
};

export default Brand;
