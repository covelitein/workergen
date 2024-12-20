"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { ChevronDown, X } from "lucide-react";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuClock9 } from "react-icons/lu";
import { MdOutlineFilterList, MdOutlineEditNote } from "react-icons/md";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { HeaderLinks } from "@/constants";
import { HeaderNavlink } from "@/components/layout";
import { BiTestTube } from "react-icons/bi";

export default function Header() {
  return (
    <header className="sticky top-14 z-50 sm:px-3 px-2 sm:py-3 py-2">
      <Card className="flex items-center justify-between py-2 sm:px-4 px-2 gap-2">
        {/* Left Section: Sidebar and Dropdown */}
        <div className="flex items-center gap-3">
          <SidebarTrigger className="sxl:hidden [&_svg]:size-6" />

          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex items-center sm:gap-2 gap-1 [&_svg]:size-4"
              aria-label="Open dropdown"
            >
              <span className="text-sm">My open leads</span>
              <ChevronDown className="text-base" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {["Profile", "Billing", "Team", "Subscription"].map((item) => (
                <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right Section: Navigation and Actions */}
        <div className="flex items-center gap-2">
          {/* Navigation Links (visible on large screens) */}
          <div className="hidden lg:flex items-center gap-4">
            {HeaderLinks.map((link) => (
              <HeaderNavlink key={link.title} {...link} />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* More Actions Dropdown */}
            <div className="flex items-center">
              <div className="border-l border-gray-200 px-1 hidden sm:block">
                <ChevronDown size={20} />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger aria-label="More actions">
                  <HiOutlineDotsVertical size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="">
                  {HeaderLinks.map((link) => (
                    <DropdownMenuItem className="sxl:hidden" key={link.title}>
                      {link.icon} {link.title}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem>
                    <BiTestTube />
                    <span>demo item</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Share Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger aria-label="Share actions">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white rounded-md">
                  <FaRegShareFromSquare size={16} />
                  <div className="w-[1px] h-5 bg-gray-100"></div>
                  <ChevronDown size={20} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <LuClock9 className="mr-2" /> Smart data
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MdOutlineFilterList className="mr-2" /> Edit filters
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MdOutlineEditNote className="mr-2" /> Edit columns
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Card>
    </header>
  );
}
