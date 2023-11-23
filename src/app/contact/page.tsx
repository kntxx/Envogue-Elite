"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants";
import PageWrapper from "../page-wrapper";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
const contact = () => {
  return (
    <PageWrapper>
      <section className="section flex items-center h-full lg:h-screen ">
        <div className="mx-auto container">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-11 m-11 lg:m-0">
            {/* //! left */}
            <motion.div
              variants={fadeIn("none", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col justify-center items-center w-[340px] h-[450px] gap-11 shadow"
            >
              {/* //! left */}
              <div className="flex flex-col gap-3 w-[250px]">
                <div className="flex flex-row gap-4  items-center">
                  <span className=" text-[20px] bg-black rounded-full items-center flex justify-center text-white w-[30px] h-[30px]">
                    <BsTelephone />
                  </span>
                  <h1 className="text-[17px] lg:text-[20px] font-medium">
                    Call To Us
                  </h1>
                </div>
                <p className="text-[15px] lg:text-[18px] font-light">
                  We are available 24/7 days a week
                </p>
                <p className="text-[13px] lg:text-[15px]">
                  Phone: +639123456789
                </p>
              </div>
              {/* //! right */}
              <div className="flex flex-col gap-3 w-[250px]">
                <div className="flex flex-row gap-4  items-center">
                  <span className="text-[20px] bg-black rounded-full items-center flex justify-center text-white w-[30px] h-[30px]">
                    <CiMail />
                  </span>
                  <h1 className="text-[17px] lg:text-[20px] font-medium">
                    Write To US
                  </h1>
                </div>
                <p className="text-[13px] lg:text-[15px] font-light">
                  Fill out our form and we will contact <br /> you within 24
                  hours.
                </p>
                <p className="text-[13px] lg:text-[15px]">
                  Emails: support@exclusive.com
                </p>
                <p className="text-[13px] lg:text-[15px]">
                  Emails: customer@exclusive.com
                </p>
              </div>
            </motion.div>

            {/* //* right */}
            <motion.div
              variants={fadeIn("none", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="w-[340px] lg:flex-1 shadow lg:h-[450px] flex flex-col"
            >
              <form className="flex  p-5 flex-col  items-center justify-between  h-full gap-5">
                <motion.div
                  variants={fadeIn("none", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                className="flex flex-col lg:flex-row md:items-center justify-between gap-5 w-full">
                  <input
                    placeholder="Your Email"
                    className="bg-whitegray  h-[70px] lg:h-[50px] w-full p-4 outline-none"
                  />
                  <input
                    placeholder="Your Name"
                    className="bg-whitegray  h-[70px] lg:h-[50px] w-full p-4 outline-none"
                  />
                  <input
                    placeholder="Your Phone"
                    className="bg-whitegray  h-[70px] lg:h-[50px] w-full p-4 outline-none"
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("none", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                className="w-full h-[110px] lg:h-full flex flex-col">
                  <textarea
                    placeholder="Your Message"
                    className="bg-whitegray w-full h-full outline-none p-4 resize-none"
                  ></textarea>
                </motion.div>
                <div className="">
                  <button className="bg-black  text-white text-[15px] p-2">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default contact;
