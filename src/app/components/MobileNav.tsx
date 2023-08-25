import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { Link } from "react-scroll/modules";
import { navbar } from "../constants/data";
type MobileNavProps = {
  onItemClick: () => void;
};
const MobileNav = ({ onItemClick }: MobileNavProps) => {
  const { link } = navbar;
  return (
    <nav className="bg-primarywhite  bg-no-repeat bg-cover bg-center h-full text-primaryblack">
      <motion.ul
        variants={fadeIn("none", 0.1)}
        initial="hidden"
        whileInView={"show"}
        className="flex flex-col items-center justify-center h-full gap-y-6"
      >
        {link.map((item, index) => (
          <Link
            key={index}
            to={item.id}
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => onItemClick()}
          >
            <li className="cursor-pointer text-[20px] font-thin border-b">
              {item.name}
            </li>
          </Link>
        ))}
      </motion.ul>
    </nav>
  );
};

export default MobileNav;
