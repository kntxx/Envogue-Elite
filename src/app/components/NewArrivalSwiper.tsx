"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { newarr } from "../constants/data";
import Image from "next/image";

const NewArrivalSwiper = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
    >
      {newarr.map((item, index) => (
        <SwiperSlide className="max-w-[256px]" key={index}>
          <div>
            <div className="flex items-center justify-center relative">
              <Image
                src={item.image}
                width='305' 
                height='0'
                alt="new arrival"
                className="w-[217px]"
              />
            </div>

            <div className="absolute text-white bottom-[20px] w-full font-thin text-center text-[10px] md:text-[14px] lg:text-[16px]  capitalize">
              {item.name}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewArrivalSwiper;
