"use client";

import { LinearData } from "@/types";

export const LinearGraph = ({
  data,
  target,
  achievedPercentage,
}: {
  data: LinearData;
  target: number;
  achievedPercentage: number;
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">1 month until Q4 ends</div>
        <div className="text-sm text-gray-500">
          Target: <span className="font-semibold">${target} million</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-5 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="absolute h-full bg-green-500"
          style={{ width: `${data.wonPercentage}%` }}
          title={`Won $${data.won}m`}
        ></div>
        <div
          className="absolute h-full bg-blue-500"
          style={{
            width: `${data.committedPercentage}%`,
            left: `${data.wonPercentage}%`,
          }}
          title={`Committed $${data.committed}m`}
        ></div>
        <div
          className="absolute h-full bg-purple-500"
          style={{
            width: `${data.bestCasePercentage}%`,
            left: `${data.wonPercentage + data.committedPercentage}%`,
          }}
          title={`Best Case $${data.bestCase}m`}
        ></div>
        <div
          className="absolute h-full bg-orange-500"
          style={{
            width: `${data.qualifiedPercentage}%`,
            left: `${
              data.wonPercentage +
              data.committedPercentage +
              data.bestCasePercentage
            }%`,
          }}
          title={`Qualified $${data.qualified}m`}
        ></div>
        <div
          className="absolute h-full bg-pink-500"
          style={{
            width: `${data.leadsPercentage}%`,
            left: `${
              data.wonPercentage +
              data.committedPercentage +
              data.bestCasePercentage +
              data.qualifiedPercentage
            }%`,
          }}
          title={`Leads $${data.leads}m`}
        ></div>
      </div>

      {/* Percentage Info */}
      <div className="flex justify-between items-center mt-2">
        <div className="text-sm text-gray-500">
          {achievedPercentage}% of target achieved
        </div>
      </div>

      {/* Segments Info */}
      <div className="flex justify-between text-sm mt-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500 inline-block"></span>
          <span>Won ${data.won}m</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-500 inline-block"></span>
          <span>Committed ${data.committed}m</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-purple-500 inline-block"></span>
          <span>Best Case ${data.bestCase}m</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-orange-500 inline-block"></span>
          <span>Qualified ${data.qualified}m</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-pink-500 inline-block"></span>
          <span>Leads ${data.leads}m</span>
        </div>
      </div>
    </div>
  );
};
