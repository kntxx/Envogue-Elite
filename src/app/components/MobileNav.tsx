"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { navbar } from "../constants/data";

import Link from "next/link";
type MobileNavProps = {
  onItemClick: () => void;
};

const MobileNav = ({ onItemClick }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {

    setIsOpen(false);
    
    onItemClick();
  };

  return (
    <nav className="bg-primarywhite  bg-no-repeat bg-cover bg-center h-full text-primaryblack">
      <motion.ul
        variants={fadeIn("none", 0.1)}
        initial="hidden"
        whileInView={"show"}
        className="flex flex-col items-center justify-center h-full gap-y-6"
      >
        <li className="cursor-pointer text-[20px] font-thin border-b">
          <Link href="/" onClick={handleLinkClick}>
            Home
          </Link>{" "}
        </li>
        <li className="cursor-pointer text-[20px] font-thin border-b">
          <Link href="/about" onClick={handleLinkClick}>
            About
          </Link>{" "}
        </li>
        <li className="cursor-pointer text-[20px] font-thin border-b">
          <Link href="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};

export default MobileNav;
