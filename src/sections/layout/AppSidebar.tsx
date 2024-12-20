"use client";

import * as React from "react";
import {
  Home,
  Clock3,
  Pin,
  Rocket,
  FilePenLine,
  Plus,
  UserCog,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Navlinks } from "@/components/layout/Navlinks";
import { TbUserQuestion, TbDeviceTabletQuestion } from "react-icons/tb";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { AgentSkillContent } from "../dashboard";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "Recent",
      url: "/dashboard/recent",
      icon: Clock3,
      isActive: false,
      items: [],
    },
    {
      title: "Pinned",
      url: "/dashboard/pinned",
      icon: Pin,
      isActive: false,
      items: [],
    },
    {
      title: "Agent Skill",
      icon: UserCog,
      isActive: false,
      isModalTriggered: true,
      children: <AgentSkillContent />,
    },
  ],
  myWorks: [
    {
      title: "Sales Accelerator",
      icon: Rocket,
    },
    {
      title: "Dashboards",
      icon: Plus,
    },
    {
      title: "Activities",
      icon: FilePenLine,
    },
  ],

  sales: [
    {
      title: "Leads",
      icon: <MdOutlineWifiCalling3 />,
    },
    {
      title: "Opportunities",
      icon: <TbDeviceTabletQuestion />,
    },
    {
      title: "Competitors",
      icon: <TbUserQuestion />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-sidebar" {...props}>
      <SidebarContent className="-px-1">
        <Navlinks
          items={data.navMain}
          myWorks={data.myWorks}
          sales={data.sales}
        />
      </SidebarContent>
      <SidebarFooter className="p-4 "></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
