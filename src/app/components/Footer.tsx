"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { Link } from "react-scroll/modules";
import Image from "next/image";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-11 bg-primaryblack ">
      <div className="container mx-auto text-primarywhite ">
        <div className="flex flex-col text-center md:text-left  justify-between items-center space-y-5 md:space-y-0 md:items-start md:flex-row ">
          <motion.div
            variants={fadeIn("none", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className=""
          >
            <Link to="home" spy={true} smooth={true} duration={800}>
              <Image
                src="/Logo.svg"
                alt="logo image"
                width="500"
                height="500"
                className="w-[130px] hover:cursor-pointer"
              />
            </Link>
            <p className="mt-1 para">
              Ed, Isidro Kintanar St,
              <br /> Argao, <br /> 6021 Cebu
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("none", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className=""
          >
            <h1 className="text-[20px]">Social Links</h1>
            <div className=" flex gap-x-3 items-center justify-center ">
              <a
                href="https://www.facebook.com/tnek18"
                className=" text-[17px] md:text-[20px] transition-transform duration-300 hover:scale-125"
                target="_blank"
              >
                <AiOutlineFacebook />
              </a>
              <a
                href="https://www.instagram.com/kentatixx18"
                className=" text-[17px] md:text-[20px] transition-transform duration-300 hover:scale-125"
                target="_blank"
              >
                <AiOutlineInstagram />
              </a>
              <a
                href="https://github.com/kntxx"
                className=" text-[17px] md:text-[20px] transition-transform duration-300 hover:scale-125"
                target="_blank"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("none", 0.3)}
            initial="hidden"
            whileInView={"show"}
          >
            <h1 className="text-[20px]">Menu</h1>
            <p className="para">Best Sellers</p>
            <p className="para">Recently viewed</p>
            <p className="para">Popular this week</p>
            <p className="para">All products</p>
          </motion.div>
          <motion.div
            variants={fadeIn("none", 0.4)}
            initial="hidden"
            whileInView={"show"}
          >
            <h1 className=" :text-[20px]">Categories</h1>
            <p className="para">About Us</p>
            <p className="para">Collections</p>
            <p className="para">Blog</p>
            <p className="para">Contact Us</p>
          </motion.div>
          <motion.div
            variants={fadeIn("none", 0.5)}
            initial="hidden"
            whileInView={"show"}
          >
            <h1 className="text-[20px]">Our Company</h1>
            <p className="para">Terms of Service</p>
            <p className="para">Privacy Policy</p>
            <p className="para">Shipping & Returns</p>
            <p className="para">Careers</p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("none", 0.6)}
          initial="hidden"
          whileInView={"show"}
          className="w-full bg-white h-[1px] hidden md:flex my-5"
        ></motion.div>
        <motion.p
          variants={fadeIn("none", 0.7)}
          initial="hidden"
          whileInView={"show"}
          className="text-[12px] md:text-[17px] mt-5 font-thin text-center"
        >
          Group 1 - All rights reserved &#169; 2023
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
