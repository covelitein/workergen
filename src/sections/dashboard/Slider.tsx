"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardContent } from "@/components/ui/card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { leadsSlide } from "@/constants";
import { RiSparkling2Fill } from "react-icons/ri";
import DialogSlides from "./DialogSlides";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Slider() {
  const swiperRef = useRef<SwiperType>();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const openDialog = (index: number) => {
    setActiveIndex(index);
    setDialogOpen(true);
  };

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
            spaceBetween: 10,
          },
        }}
      >
        {/* Swiper Slides */}
        {leadsSlide.map((slide, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <Card onClick={() => openDialog(index)}>
              <CardContent className="py-4 px-3 rounded-lg">
                <div className="flex items-center gap-3 mb-5">
                  <Avatar>
                    <AvatarImage src={slide.img} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="">
                    <h3 className="">{slide.name}</h3>
                    <div
                      className={`flex items-center  justify-start ${
                        index + 1 == 2 ? "text-[0.65rem]" : "text-xs"
                      }`}
                    >
                      <h4>{slide.occupation}</h4>
                      <BsDot />
                      <h4>{slide.company}</h4>
                    </div>
                  </div>
                </div>
                <div className="mt-5 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg relative">
                  <RiSparkling2Fill className="absolute right-0 top-0 text-lg bg-white text-purple-400" />
                  <div className="flex items-center gap-2 text-sm">
                    {slide.icon}
                    <span>{slide.title}</span>
                  </div>
                  <p className="mt-2 text-sm">{slide.desc}</p>
                </div>
                <div className="mt-2 text-xs flex gap-2 items-center text-gray-400">
                  {slide.tags.map((tag, idx) =>
                    idx + 1 == 1 ? (
                      <div key={idx} className="flex items-center gap-1">
                        <h5 >{tag}</h5>
                        <BsDot />
                      </div>
                    ) : (
                      <h5 key={idx}>{tag}</h5>
                    )
                  )}
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
          className="bg-white border text-card-foreground shadow-sm p-2 rounded-full cursor-pointer pointer-events-auto -ml-4"
        >
          <FaChevronLeft />
        </div>
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-white border text-card-foreground shadow-sm p-2 rounded-full cursor-pointer pointer-events-auto -mr-3"
        >
          <FaChevronRight />
        </div>
      </div>

      <DialogSlides
        isOpen={isDialogOpen}
        setOpen={setDialogOpen}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </section>
  );
}
