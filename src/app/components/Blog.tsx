"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { blog } from "../constants/data";
import Image from "next/image";
const Blog = () => {
  return (
    <section className=" min-h-[76vh] lg:min-h-screen flex items-center ">
      <div className="mx-auto container">
        <div className="flex flex-col items-center justify-center ">
          <div>
            <motion.h1
              variants={fadeIn("none", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="title mb-3 text-center"
            >
              Style Chronicles
            </motion.h1>
            <motion.p
              variants={fadeIn("none", 0.2)}
              initial="hidden"
              whileInView={"show"}
              className="subheading text-center"
            >
              Unleash Your Fashion Journeys
            </motion.p>
          </div>
          <div className="grid lg:grid-cols-3 gap-x-5 mt-6">
            {blog.map((item, index) => (
              <div key={index} className="flex  flex-col items-center justify-center w-full md:w-[500px] lg:w-full">
                <motion.div
                  variants={fadeIn("none", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                >
                  <Image
                    alt="blog image"
                    src={item.image}
                    width="500"
                    height="500"
                    className="w-[320] h-[183] md:w-[420px] md:h-[283px]"
                  />
                </motion.div>
                <div className="mt-6 flex flex-col items-center justify-center text-center lg:text-left lg:items-start hover:cursor-pointer mb-4 ">
                  <motion.h1
                    variants={fadeIn("none", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    className="text-[30px]  max-w-[360px] leading-relaxed mb-2"
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p
                    variants={fadeIn("none", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    className="text-[15px] underline tracking-wide font-thin mb-2 md:w-[360px] lg:w-full"
                  >
                    {item.descri}
                  </motion.p>
                  <motion.a
                    variants={fadeIn("none", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    className="font-thin text-[13px] border-b border-black"
                    href="#"
                  >
                    {item.link}
                  </motion.a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
