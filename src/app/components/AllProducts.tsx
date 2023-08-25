"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { allProducts } from "../constants/data";
import Image from "next/image";
const AllProducts = () => {
  return (
    <section
      id="products"
      className="section min-h-[76vh] lg:min-h-screen flex items-center"
    >
      <div className="mx-auto container">
        <div className="flex flex-col items-center justify-center text-center">
          <div>
            <motion.h1
              variants={fadeIn("none", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="title "
            >
              Explore Our Full Collection
            </motion.h1>
            <motion.p
              variants={fadeIn("none", 0.2)}
              initial="hidden"
              whileInView={"show"}
              className="subheading "
            >
              Discover curated elegance for confident expression.
            </motion.p>
          </div>
          <div className=" mt-6 grid grid-cols-2 lg:grid-cols-4 grid-row md:w-[500px] lg:w-full gap-y-2 gap-x-5 ">
            {allProducts.map((product, index) => (
              <div key={index} className="flex flex-col items-center ">
                <motion.div
                  variants={fadeIn("none", 0)}
                  initial="hidden"
                  whileInView={"show"}
                  className="hover:scale-110 transition-all p-2 hover:bg-white hover:shadow-2xl  "
                >
                  <Image
                    alt="Product Image"
                    src={product.image}
                    width="500"
                    height="500"
                    className=" w-[160px] h-[201px] md:w-[260px] md:h-[326px] lg:w-[305px] lg:h-[375px] mb-2 "
                  />

                  <div className="text-left ">
                    <p className="mb-2 ">{product.name}</p>
                    <p className="font-thin mb-2">{product.price}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
