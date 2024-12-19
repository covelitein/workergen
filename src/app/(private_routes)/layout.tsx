import { DashboardLayout } from "@/sections/layout/DashboardLayout";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-sidebar">
      <div className="py-3 bg-black text-white sticky z-[99] w-full top-0 left-0">hello world</div>
      <DashboardLayout>{children}</DashboardLayout>
    </main>
  );
}
