"use client";

import { TbGridDots } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import { TfiLightBulb } from "react-icons/tfi";
import { GoPlus } from "react-icons/go";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { MdOutlineQuestionMark } from "react-icons/md";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu"; // Ensure this path is correct
import { AlignJustify } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between py-2 bg-[#152533] text-white sticky z-50 w-full top-0 px-4 md:px-5">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <TbGridDots className="text-lg md:text-xl" />
        <span className="border-r-2 border-white pr-2 mr-2">
          Dynamics 365
        </span>
        <span className="text-sm md:text-base max-sm:hidden">Sales Hub</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Visible Links for Medium+ Screens */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/dashboard" className="p-2 rounded-md hover:bg-[#1e3447]">
            <TfiLightBulb className="text-lg md:text-xl" />
          </Link>
          <Link href="/dashboard" className="p-2 rounded-md hover:bg-[#1e3447]">
            <GoPlus className="text-lg md:text-xl" />
          </Link>
          <Link href="/dashboard" className="p-2 rounded-md hover:bg-[#1e3447]">
            <HiOutlineCog6Tooth className="text-lg md:text-xl" />
          </Link>
          <Link href="/dashboard" className="p-2 rounded-md hover:bg-[#1e3447]">
            <MdOutlineQuestionMark className="text-lg md:text-xl" />
          </Link>
          <Link href="/dashboard" className="p-2 rounded-md hover:bg-[#1e3447]">
            <FiMessageSquare className="text-lg md:text-xl" />
          </Link>
        </div>

        {/* Dropdown for Small Screens */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 rounded-md hover:bg-[#1e3447]">
              <AlignJustify className="text-lg md:text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1e3447] md:hidden z-50 text-white rounded-md shadow-lg">
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 p-2 hover:bg-[#2a4560]"
                >
                  <TfiLightBulb /> <span>Lightbulb</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 p-2 hover:bg-[#2a4560]"
                >
                  <GoPlus /> <span>Add</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 p-2 hover:bg-[#2a4560]"
                >
                  <HiOutlineCog6Tooth /> <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 p-2 hover:bg-[#2a4560]"
                >
                  <MdOutlineQuestionMark /> <span>Help</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 p-2 hover:bg-[#2a4560]"
                >
                  <FiMessageSquare /> <span>Messages</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Always Visible Avatar */}
        <Avatar>
          <AvatarImage
            src="https://i.pravatar.cc/150?u=a042581f4e29026708d"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
