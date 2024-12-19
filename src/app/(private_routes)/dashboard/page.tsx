import { Welcome } from "@/sections/dashboard";
import LeadsTable from "@/sections/dashboard/LeadsTable";
import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <Welcome />
      <LeadsTable />
    </div>
  );
}
