"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { useState, useEffect } from "react";
import { navbar } from "../constants/data";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { logoImage, link } = navbar;
  const [bg, setBg] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  const handleItemClick = () => {
    setToggle(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        bg ? "bg-primaryblack py-4 lg:py-5" : "bg-none"
      }  fixed left-0 w-full py-8  z-10 transition-all `}
    >
      <div className="container mx-auto text-primarywhite ">
        <div className="flex justify-between items-center ">
          <motion.div
            variants={fadeIn("none", 0.1)}
            initial="hidden"
            whileInView={"show"}
          >
            <Link to="home" spy={true} smooth={true} duration={800}>
              <Image
                src={logoImage}
                alt="logo image"
                width="0"
                height="0"
                className="w-full h-auto"
              />
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("none", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="max-w-auto"
          >
            <ul className="hidden md:flex space-x-11 font-xxthin md:text-[12px] lg:text-[14px] mr-8">
              {link.map((item, index) => (
                <li
                  key={index}
                  className="font-thin cursor-pointer transition-transform duration-300 hover:scale-110 "
                >
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="p-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn("none", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="hidden md:flex"
          >
            <ul className="">
              <li className="flex items-center space-x-3 ">
                <CiSearch className="text-[21px] cursor-pointer transition-transform duration-200 hover:scale-110" />
                <CiShoppingCart className="text-[21px] cursor-pointer transition-transform duration-200 hover:scale-110" />
                <CiUser className=" text-[21px] cursor-pointer transition-transform duration-200 hover:scale-110" />
              </li>
            </ul>
          </motion.div>

          <div className=" md:hidden">
            <motion.ul
              variants={fadeIn("none", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-row text-[19px] space-x-3 "
            >
              <li className="transition cursor-pointer" onClick={handleClick}>
                {toggle ? (
                  <VscClose className="text-[19px]" />
                ) : (
                  <CiMenuBurger />
                )}
              </li>
            </motion.ul>
          </div>

          <div
            className={`${
              toggle ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-[300px] h-screen transition-all`}
          >
            <MobileNav onItemClick={handleItemClick} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
