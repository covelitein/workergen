"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Slider from "./Slider";
import { Image } from "@nextui-org/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LuPencil, LuAward } from "react-icons/lu";
import { VscSend } from "react-icons/vsc";
import { RiSparkling2Fill } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiCheckCircleBold } from "react-icons/pi";
import { PiCellSignalHigh } from "react-icons/pi";
import { SlLike, SlDislike } from "react-icons/sl";

export default function Welcome() {
  return (
    <Card>
      <CardHeader className="gap-4 max-sm:px-4">
        {/* Title Section */}
        <div>
          <h3>
            <strong className="">
              <span className="inline-flex">
                <Image
                  src={"/illustrations/copilot.png"}
                  width={30}
                  className="inline"
                  alt="copilot"
                />
                Hi Mona
              </span>
              , 68% of goal achieved and rest can be achieved by focusing on 20
              top leads
            </strong>
          </h3>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4">
          {/* col-span-2 with Cards */}
          <div className="md:col-span-2">
            {/* Subtitle Section */}
            <div className="mb-5">
              <p className="text-sm md:pr-3">
                Copilot has pinpointed 20 key leads that show strong purchase
                intent and are actively engaging. These leads need your focus.
              </p>
            </div>

            {/* Carousel */}
            <Slider />
          </div>

          {/* Other key activities */}
          <div>
            <h3 className="font-bold text-lg md:text-xl text-gray-400 mb-2">
              Other key activities
            </h3>
            <Card>
              <CardContent className="sm:p-4 p-3">
                <div className="flex items-center">
                  <div className="inline-block h-8 w-8 bg-gray-500 rounded-full mr-1"></div>
                  <h4 className="font-semibold inline-block">
                    Cafe A100 for Woodland Bank
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Woodland Bank • $280,000 • 8 days to close
                </p>
                <p className="bg-blue-50 p-2">
                  <span className="text-xs text-blue-600">
                    Review draft and reply to Chris Naido
                  </span>
                </p>
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardContent className="sm:p-4 p-3">
                <div className="flex items-start">
                  <div className="inline-block h-8 w-8 bg-gray-500 rounded-full mr-1"></div>
                  <h4 className="font-semibold inline-block">
                    Partnership opportunity for Fabrikam
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Fabrikam • $5,000,000 • 12 days to close
                </p>
                <p className="bg-blue-50 p-2">
                  <span className="text-xs text-blue-600">
                    Prepare me for Fabrikam’s key stakeholder meeting
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
