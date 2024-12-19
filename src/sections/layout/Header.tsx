"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { AlignJustify, ChevronDown, Plus, Trash } from "lucide-react";
import { PiChartLineDuotone, PiUsersThree } from "react-icons/pi";
import { LiaListSolid } from "react-icons/lia";
import { VscRefresh } from "react-icons/vsc";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { MdOutlineFilterList, MdOutlineEditNote } from "react-icons/md";
import { LuClock9 } from "react-icons/lu";

export default function Header() {
  return (
    <header className="sticky top-12 z-50 sm:px-3 px-2 sm:py-3 py-2">
      <Card className="py-2 sm:px-4 px-2 flex items-center justify-between shrink-0 items-center gap-2">
        {/* Dropdown Menu */}
        <div className="flex items-center gap-2">
          <AlignJustify />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center sm:gap-2 gap-1 [&_svg]:size-4">
              <span className="text-sm">My open leads</span>
              <ChevronDown className="text-base" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <div className="lg:flex hidden items-center gap-2 md:gap-4">
            <div className="flex items-center gap-1">
              <PiChartLineDuotone className="text-xl" />
              <span className="text-sm">Show chart</span>
            </div>
            <div className="flex items-center gap-1">
              <LiaListSolid className="text-xl" />
              <span className="text-sm">Focused view</span>
            </div>
            <div className="flex items-center gap-1">
              <Plus className="text-base" />
              <span className="text-sm">New</span>
            </div>
            <div className="flex items-center gap-1">
              <VscRefresh className="text-lg" />
              <span className="text-sm">Refresh</span>
            </div>
            <div className="flex items-center gap-1">
              <PiUsersThree className="text-lg" />
              <span className="text-sm">Collaborate</span>
            </div>
            <div className="flex items-center gap-1">
              <Trash size={16} />
              <span className="text-sm">Delete</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="border-l border-l-[2px] px-1 max-sm:hidden">
                <ChevronDown size={18} />
              </div>
              <div className="">
                <HiOutlineDotsVertical />
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="">
                <div className="py-2 flex items-center bg-blue-600 px-3 gap-1.5 rounded-md text-white">
                  <FaRegShareFromSquare />
                  <div className="w-[1px] h-5 bg-gray-100"></div>
                  <ChevronDown size={20} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <LuClock9 />
                  Smart data
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MdOutlineFilterList />
                  Edit filters
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MdOutlineEditNote />
                  Edit columns
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Card>
    </header>
  );
}
