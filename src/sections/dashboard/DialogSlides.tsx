import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { Dispatch, SetStateAction, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { RiSparkling2Fill } from "react-icons/ri";
import { leadsSlide } from "@/constants";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { LuAward, LuPencil } from "react-icons/lu";
import { VscSend } from "react-icons/vsc";
import { SlDislike, SlLike } from "react-icons/sl";
import { PiCellSignalHigh, PiCheckCircleBold } from "react-icons/pi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DialogSlides({
  isOpen,
  setOpen,
  activeIndex,
  setActiveIndex,
}: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) {
  const dialogSwiperRef = useRef<SwiperType>();

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      dialogSwiperRef.current?.slidePrev();
    }
  };

  const handleNext = () => {
    if (activeIndex < leadsSlide.length - 1) {
      setActiveIndex(activeIndex + 1);
      dialogSwiperRef.current?.slideNext();
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl max-h-full overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>{leadsSlide[activeIndex].title}</DialogTitle>
          </DialogHeader>
          <div className="w-full h-full relative overflow-x-hidden">
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".swiper-custom-pagination",
              }}
              modules={[Pagination, Navigation]}
              initialSlide={activeIndex}
              onBeforeInit={(swiper) => {
                dialogSwiperRef.current = swiper;
                swiper.slideTo(activeIndex);
              }}
              className="mySwiper w-full h-full"
            >
              {leadsSlide.map((lead, index) => (
                <SwiperSlide key={index}>
                  <div className="">
                    <Card>
                      <CardContent className="py-3 px-4 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={lead.img} alt={lead.name} />
                          <AvatarFallback>{lead.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">Jane Reyes</h3>
                          <p className="text-sm text-gray-400">
                            {lead.occupation}, {lead.company}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="mt-5 sm:pb-3">
                      <div className="bg-blue-50 rounded-lg p-4 flex flex-wrap items-center justify-between">
                        <p className="text-sm font-semibold bg-gradient-to-r from-blue-800 to-purple-500 text-transparent bg-clip-text">
                          <RiSparkling2Fill className="inline text-lg text-purple-700" />{" "}
                          {lead.title}
                        </p>
                        <div className="flex items-center flex-wrap gap-2 mt-2 sm:mt-0">
                          <Button className="h-8 px-3 bg-white hover:bg-white text-gray-600 flex items-center">
                            <LuPencil />
                            <span className="ml-1">Edit</span>
                          </Button>
                          <Button className="h-8 px-3 bg-gradient-to-r from-blue-800 to-purple-500 flex items-center">
                            <VscSend />
                            <span className="ml-1">Approve and Send</span>
                          </Button>
                        </div>
                      </div>

                      <div className="sm:px-3 mt-6">
                        <Tabs defaultValue="Engage" className="">
                          <TabsList>
                            <TabsTrigger value="Engage">Engage</TabsTrigger>
                            <TabsTrigger value="Research">Research</TabsTrigger>
                          </TabsList>

                          <TabsContent value="Engage" className="p-4">
                            <Card>
                              <CardContent></CardContent>
                            </Card>
                          </TabsContent>

                          <TabsContent value="Research" className="">
                            <Card className="w-full">
                              <CardContent className="sm:px-3 px-0 py-0 sm:py-3">
                                <div className="bg-blue-50 sm:p-4 p-2 rounded-lg">
                                  <h3 className="bg-gradient-to-r from-blue-800 to-purple-500 text-transparent bg-clip-text font-semibold">
                                    Why I picked this lead
                                  </h3>
                                  <ul className="text-sm mt-4 sm:list-disc sm:pl-6">
                                    {lead.details.whyPicked.map(
                                      (reason, idx) => (
                                        <li key={idx}>{reason}</li>
                                      )
                                    )}
                                  </ul>

                                  <div className="grid gap-4 mt-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-2">
                                    <Card className="flex py-4 px-6 flex-wrap items-center gap-3">
                                      <PiCheckCircleBold className="md:text-7xl text-5xl text-purple-600" />
                                      <div>
                                        <h3 className="text-lg font-semibold">
                                          Decision Maker
                                        </h3>
                                        <h5 className="bg-gradient-to-br from-blue-800 to-purple-500 text-transparent bg-clip-text font-bold">
                                          Yes
                                        </h5>
                                      </div>
                                    </Card>

                                    <Card className="flex flex-wrap py-4 px-6 items-center gap-3">
                                      <LuAward className="md:text-5xl text-5xl text-purple-600" />
                                      <div>
                                        <h3 className="text-lg font-semibold">
                                          Potential <br /> Deal Value
                                        </h3>
                                        <h5 className="bg-gradient-to-br from-blue-800 to-purple-500 text-transparent bg-clip-text font-bold">
                                          $1M
                                        </h5>
                                      </div>
                                    </Card>

                                    <Card className="flex flex-wrap py-4 px-6 items-center gap-3">
                                      <PiCellSignalHigh className="sm:text-7xl text-5xl text-purple-600" />
                                      <div>
                                        <h3 className="text-lg font-semibold">
                                          Intent
                                        </h3>
                                        <h5 className="bg-gradient-to-br from-blue-800 to-purple-500 text-transparent bg-clip-text font-bold">
                                          High
                                        </h5>
                                      </div>
                                    </Card>
                                  </div>
                                </div>

                                <div className="flex justify-between items-center flex-wrap max-sm:gap-2 mt-6 py-2 px-2">
                                  <div className="flex gap-2">
                                    <Button className="h-8 text-xs bg-gray-300 text-gray-700 hover:bg-gray-300">
                                      D365 Sales
                                    </Button>
                                    <Button className="h-8 text-xs bg-gray-300 text-gray-700 hover:bg-gray-300">
                                      +2
                                    </Button>
                                  </div>
                                  <div className="flex flex-wrap gap-4 items-center">
                                    <Button className="sm:h-8 text-xs bg-gray-300 text-gray-700 hover:bg-gray-300">
                                      AI-generated content may be incorrect
                                    </Button>
                                    <div className="flex gap-2">
                                      <SlLike />
                                      <SlDislike />
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </Card>
                    <Card className="mt-5">
                      <CardContent className="py-4 px-4 w-full">
                        <h3 className="font-semibold">About {lead.name}</h3>
                        <p className="mt-2 text-sm">{lead.about}</p>
                      </CardContent>
                    </Card>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute z-[9] top-1/2 w-full flex justify-between items-center">
            <div
              onClick={handlePrev}
              className="bg-white border text-card-foreground shadow-sm p-2 rounded-full cursor-pointer pointer-events-auto"
            >
              <FaChevronLeft />
            </div>
            <div
              onClick={handleNext}
              className="bg-white border text-card-foreground shadow-sm p-2 rounded-full cursor-pointer pointer-events-auto"
            >
              <FaChevronRight />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
