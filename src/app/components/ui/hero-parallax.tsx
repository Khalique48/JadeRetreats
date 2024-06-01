"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://jadehospitainment.com/wp-content/uploads/slider/cache/21bc91a2a993b0176714b75d0a6c3698/1-6.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="text-center text-white bg-none p-8">
                <h2 className="text-xl underline-offset-8 md:text-4xl underline font-bold mb-4">
                  JADE HOSPITAINMENT
                </h2>
                <p className="text-sm font-bold md:text-lg mb-4">
                  Innovate and rejuvenate in our sanctuaries where cutting-edge
                  amenities meet serene wellness
                </p>
                <button className="bg-none border border-spacing-1 text-white hover:text-black hover:bg-white font-bold py-2 px-4 rounded-full">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://jadehospitainment.com/wp-content/uploads/slider/cache/7c5533549928b845bc9ac54f62c71885/5-6.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="text-center text-white">
                <h1 className="text-xl underline-offset-8 md:text-4xl underline font-bold mb-2">
                  JADE HOSPITAINMENT
                </h1>
                <p className="text-sm font-bold md:text-lg mb-6">
                  Luxury reimagined to transform your experience into an
                  unforgettable journey
                </p>
                <button className="bg-none border border-spacing-1 text-white hover:text-black hover:bg-white font-bold py-2 px-4 rounded-full">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://jadehospitainment.com/wp-content/uploads/slider/cache/231e8c8bd618ca5c0ad0882144dc91df/13-2.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="text-center text-white">
                <h1 className="text-xl underline-offset-8 md:text-4xl underline font-bold mb-2">
                  JADE HOSPITAINMENT
                </h1>
                <p className="text-sm font-bold md:text-lg mb-6">
                  Discover Jade Elegance with bespoke luxury wrapped in the
                  embrace of nature
                </p>
                <button className="bg-none border border-spacing-1 text-white hover:text-black hover:bg-white font-bold py-2 px-4 rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://jadehospitainment.com/wp-content/uploads/slider/cache/3f96a285dd0fc0d2af35bc61fa38fdef/21-4.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="text-center text-white">
                <h1 className="text-xl underline-offset-8 md:text-4xl underline font-bold mb-2">
                  JADE HOSPITAINMENT
                </h1>
                <p className="text-sm font-bold md:text-lg mb-6">
                  Celebrate in serenity at our exclusive retreats, where every
                  detail caters to your premium comfort
                </p>
                <button className="bg-none border border-spacing-1 text-white hover:text-black hover:bg-white font-bold py-2 px-4 rounded-full">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </>
  );
};

export default Hero;
