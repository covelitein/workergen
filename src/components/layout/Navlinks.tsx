"use client";

import { AlignJustify, ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";

export function Navlinks({
  items,
  myWorks,
  sales,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  myWorks: { title: string; icon: LucideIcon }[];
  sales: { title: string; icon: ReactNode }[];
}) {
  return (
    <SidebarGroup>
      <div className="mb-3 px-3 py-3">
        <AlignJustify size={20} />
      </div>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  {item.items && (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {item.items && item.items.length > 0 && (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>

      <SidebarGroupLabel className="mt-5 text-base font-bold">
        My Works
      </SidebarGroupLabel>
      <SidebarMenu className="mt-1">
        {myWorks.map((work) => (
          <SidebarMenuButton key={work.title}>
            {work.icon && <work.icon />}
            {work.title}
          </SidebarMenuButton>
        ))}
      </SidebarMenu>
      <SidebarGroupLabel className="mt-5 text-base font-bold">
        Sales
      </SidebarGroupLabel>
      <SidebarMenu className="mt-1">
        {sales.map((s) => (
          <SidebarMenuButton key={s.title}>
            {s.icon}
            {s.title}
          </SidebarMenuButton>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
