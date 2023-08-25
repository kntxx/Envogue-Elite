"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Image from "next/image";
const Testimonials = () => {
  return (
    <section className="min-h-[76vh] lg:min-h-screen mb-11 md:mb-0 flex items-center">
      <div className="mx-auto container mt-11">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="">
            <motion.h1
              variants={fadeIn("none", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="title text-center mb-11 font-meduim"
            >
              Word of Elegance
            </motion.h1>
            <div className="flex  max-w-[500px] mb-11 ">
              <motion.div
                variants={fadeIn("none", 0.2)}
                initial="hidden"
                whileInView={"show"}
                className=""
              >
                <Image
                  alt="Avatar "
                  src="/testimonial/avatar.svg"
                  width="500"
                  height="500"
                  className="w-[100px]"
                />
              </motion.div>
              <div className="ml-11">
                <motion.h1
                  variants={fadeIn("none", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  className="text-[16px] md:text-[30px] mb-2"
                >
                  Élodie Dupont
                </motion.h1>
                <motion.p
                  variants={fadeIn("none", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  className="font-thin mb-2 text-[13px]  md:text-[15px]"
                >
                  “Enchantée! I recently discovered the captivating world of
                  Envogue Elite, and I must say, it's an absolute treasure trove
                  of elegance and style.”
                </motion.p>
                <motion.p
                  variants={fadeIn("none", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                >
                  Designer
                </motion.p>
              </div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("none", 0.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex  justify-center"
          >
            <Image
              alt="testimonial image"
              src="/testimonial/testimonial.png"
              width="500"
              height="500"
              className="w-[240px] md:w-[300px] lg:w-[386px] h-full "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
