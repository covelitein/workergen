"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaBuilding,
  FaChevronLeft,
  FaChevronRight,
  FaCoffee,
  FaExclamationTriangle,
  FaHandshake,
  FaTools,
} from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Slider() {
  const swiperRef = useRef<SwiperType>();

  return (
    <section className="relative">
      {/* Swiper Slider */}
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full px-3"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {/* Swiper Slides */}
        {[
          {
            name: "Jane Reyes",
            desc: "Engage with Jane Reyes",
            status:
              "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
            img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            icon: <FaCoffee className="text-xl" />,
          },
          {
            name: "Allan Munger",
            desc: "Prepare for meeting with Allan",
            status:
              "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
            img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            icon: <FaHandshake className="text-xl" />,
          },
          {
            name: "Winford Asher",
            desc: "Discuss Cafe A100 for business",
            status:
              "Winford is evaluating Cafe A100 for potential use in his commercial venture.",
            img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
            icon: <FaBuilding className="text-xl" />,
          },
          {
            name: "Josia Love",
            desc: "Service plan upgrade discussion",
            status:
              "Josia wants to explore options for upgrading to a more advanced service plan.",
            img: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
            icon: <FaTools className="text-xl" />,
          },
          {
            name: "Harrison Curtis",
            desc: "Address throughput concerns",
            status:
              "Harrison is seeking assistance to resolve a throughput issue on EspressoMaster.",
            img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            icon: <FaExclamationTriangle className="text-xl" />,
          },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <Card>
              <CardContent className="py-4 px-3 rounded-lg">
                <div className="flex items-center gap-3 mb-5">
                  <Avatar>
                    <AvatarImage src={slide.img} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="">
                    <h3 className="text-sm">{slide.name}</h3>
                    <p className="text-sm">COO . Northwind Traders</p>
                  </div>
                </div>
                <div className="bg-blue-100 text-sm p-5 rounded-md">
                  <p className="mb-4 flex items-center gap-3">
                    {slide.icon}
                    <span>{slide.desc}</span>
                  </p>
                  <span className="text-sm">{slide.status}</span>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination */}
      <div className="absolute w-full flex items-center justify-center -bottom-4">
        <div className="swiper-custom-pagination"></div>
      </div>
      {/* Navigation Buttons */}
      <div className="absolute z-[9] top-1/2 w-full flex justify-between items-center">
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-white border text-card-foreground shadow-sm p-3 rounded-full cursor-pointer pointer-events-auto -ml-4"
        >
          <FaChevronLeft />
        </div>
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-white border text-card-foreground shadow-sm p-3 rounded-full cursor-pointer pointer-events-auto -mr-3"
        >
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
}
