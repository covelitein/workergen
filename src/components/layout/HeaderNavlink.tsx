import { LucideIcon } from "lucide-react";
import React, { ReactNode } from "react";

export default function HeaderNavlink({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-1">
      {icon}
      <span className="text-sm">{title}</span>
    </div>
  );
}
