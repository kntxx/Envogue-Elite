"use client";

import React from "react";
import { teams } from "../constants/data";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants";
const Team = () => {
  return (
    <section className="section min-h-[76vh] lg:min-h-screen flex items-center">
      <div className="mx-auto container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <motion.h1
              variants={fadeIn("none", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="title"
            >
              Meet Our Team
            </motion.h1>
            <motion.p
              variants={fadeIn("none", 0.2)}
              initial="hidden"
              whileInView={"show"}
              className="subheading text-center"
            >
              Group 1: Elevating e-commerce elegance.
              <br /> We blend creativity and tech to redefine online shopping.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3  gap-y-8  lg:w-[1050px] w-auto  mt-6">
            {teams.map((item) => (
              <motion.div
                variants={fadeIn("none", 0)}
                initial="hidden"
                whileInView={"show"}
                key={uuidv4()}
                className=" w-auto mx-auto  p-2 hover:scale-105 shadow  transition "
              >
                <Image
                  key={uuidv4()}
                  src={item.image}
                  width={1000}
                  height={1000}
                  alt="Team Picture"
                  quality={100}
                  className=" w-[150px] bg-gray-100  h-[200px]  md:w-[250px] hover:scale-105 hover:rotate-12 transition  md:h-[250px]  lg:w-[250px]  lg:h-[300px]  "
                />
                <div key={uuidv4()} className="mt-2">
                  <h2
                    key={uuidv4()}
                    className="text-[17px] lg:text-[20px] font-medium"
                  >
                    {item.name}
                  </h2>
                  <p key={uuidv4()} className="font-light ">
                    {item.title}
                  </p>

                  <div key={uuidv4()} className="flex mt-2 gap-x-2">
                    <a
                      key={uuidv4()}
                      className="md:text-[20px] lg:text-[20px]"
                      href={item.facebook}
                      target="_blank"
                    >
                      {" "}
                      {React.createElement(item.icon1)}
                    </a>
                    <a
                      key={uuidv4()}
                      className="md:text-[20px] lg:text-[22px]"
                      href={item.instagram}
                      target="_blank"
                    >
                      {" "}
                      {React.createElement(item.icon2)}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
