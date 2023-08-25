"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { newarr } from "../constants/data";

const slide = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {newarr.map((item, index) => (
        <SwiperSlide>
          <div key={index}>
            <Image src={item.image} width="230" height="350" alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default slide;
