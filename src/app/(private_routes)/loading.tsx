import React from "react";

export default function Loading() {
  return (
    <main className="min-h-screen w-full">
      <main className="animate-pulse">
        <div className="bg-gray-200 h-64"></div>
        <div className="w-full h-16 bg-gray-200 mt-4"></div>
        <div className="w-full bg-gray-200 overflow-x-hidden h-full box-border sm:px-3 px-2 pt-1">
          <div className="h-64 bg-gray-200 mt-4"></div>
        </div>
      </main>
    </main>
  );
}
