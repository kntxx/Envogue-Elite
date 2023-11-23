"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { useState } from "react";
import { navbar } from "../constants/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { logoImage, link } = navbar;

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  const handleItemClick = () => {
    setToggle(false);
  };

  return (
    <nav className="bg-primaryblack py-5  fixed left-0 w-full z-10  ">
      <div className="container mx-auto text-primarywhite ">
        <div className="flex justify-between items-center ">
          <motion.div
            variants={fadeIn("none", 0.1)}
            initial="hidden"
            whileInView={"show"}
          >
            <Link href="/">
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
              <li
                onClick={() => router.push("/")}
                className={`font-thin cursor-pointer transition-transform duration-300 hover:scale-110 ${
                  pathname === "/" ? "border-b-2 border-primarywhite" : ""
                }`}
              >
                Home
              </li>
              <li
                onClick={() => router.push("/about")}
                className={`font-thin cursor-pointer transition-transform duration-300 hover:scale-110 ${
                  pathname === "/about" ? "border-b-2 border-primarywhite" : ""
                }`}
              >
                About
              </li>
              <li
                onClick={() => router.push("/contact")}
                className={`font-thin cursor-pointer transition-transform duration-300 hover:scale-110 ${
                  pathname === "/contact"
                    ? "border-b-2 border-primarywhite"
                    : ""
                }`}
              >
                Contact
              </li>
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
