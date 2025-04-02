"use client";

import React, { useRef } from "react";
import Button from "../../core/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // Import icons for buttons

const videoSources = [
  "/slider-videos/2.mp4",
  "/slider-videos/3.mp4",
  "/slider-videos/2.mp4",
  "/slider-videos/3.mp4",
  "/slider-videos/2.mp4",
  "/slider-videos/3.mp4",
  "/slider-videos/2.mp4",
  "/slider-videos/3.mp4",
];

const SliderVideo = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const swiperRef = useRef<SwiperType>(null);

  return (
    <div className="container py-[48px] lg:py-[96px] relative">
      {/* Header Section */}
      <div className="md:flex justify-between">
        <header className="text-center md:text-left">
          <h1 className="text-brand-dark font-semibold text-4xl">
            You do you! We handle the rest
          </h1>
          <p className="mt-5 text-xl">
            We’re always on the lookout for passionate, dynamic, and talented
            individuals.
          </p>
        </header>

        <div className="mt-8 flex justify-center md:block md:mt-0 h-fit">
          <Button link="/contact">Join Us</Button>
        </div>
      </div>

      {/* Swiper Video Carousel */}
      <div className="mt-[64px] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="w-full"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {videoSources.map((videoSrc, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <video
                autoPlay
                loop
                muted
                className="w-full h-[600px] object-cover rounded-lg"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex space-x-8 mt-8">
        {/* Custom Navigation Buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className=" bg-white border border-[#EAECF0] rounded-full w-12 h-12 flex items-center justify-center text-gray-800 hover:bg-gray-100 transition"
        >
          <HiChevronLeft size={24} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className=" bg-white border border-[#EAECF0] rounded-full w-12 h-12 flex items-center justify-center text-gray-800 hover:bg-gray-100 transition"
        >
          <HiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SliderVideo;
