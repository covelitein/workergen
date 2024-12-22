"use client";

import { AppSidebar } from "./AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";
import Header from "./Header";

export function DashboardLayout({ children }: { children: ReactNode }) {
  

  return (
    <main>
      <SidebarProvider className="bg-sidebar">
        <AppSidebar />
        <SidebarInset className="w-full bg-sidebar pb-4 flex-1">
          <Header />
          <div className="w-full bg-sidebar overflow-x-hidden min-h-screen box-border sm:px-3 px-2 pt-1">
            <button>hello world</button>
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
