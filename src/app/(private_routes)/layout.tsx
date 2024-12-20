import { Topbar } from "@/components/layout";
import { DashboardLayout } from "@/sections/layout/DashboardLayout";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-sidebar">
      <Topbar />
      <DashboardLayout>{children}</DashboardLayout>
    </main>
  );
}
