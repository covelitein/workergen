'use client';

import DataTable from "@/components/datatable";
import { leadsData } from "@/constants";
import { Lead } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { format } from "date-fns";

export default function LeadsTable() {
  const leadsColumns: ColumnDef<Lead>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <span>{row.getValue("name")}</span>,
    },
    {
      accessorKey: "topic",
      header: "Topic",
      cell: ({ row }) => <span>{row.getValue("topic")}</span>,
    },
    {
      accessorKey: "statusReason",
      header: "Status Reason",
      cell: ({ row }) => (
        <span className="font-semibold">{row.getValue("statusReason")}</span>
      ),
    },
    {
      accessorKey: "createdOn",
      header: "Created On",
      cell: ({ row }) => (
        <span>{format(new Date(row.getValue("createdOn")), "M/dd/yyyy h:mm a")}</span>
      ),
    },
  ];

  return (
    <section className="mt-5">
      <DataTable columns={leadsColumns} data={leadsData} />
    </section>
  );
}
