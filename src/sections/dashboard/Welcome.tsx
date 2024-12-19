"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Slider from "./Slider";

export default function Welcome() {
  return (
    <Card>
      <CardHeader className="gap-4 max-sm:px-4">
        {/* Title Section */}
        <div>
          <h3>
            <strong>
              Hi Mona, 68% of goal achieved and rest can be achieved by focusing
              on 20 top leads
            </strong>
          </h3>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4">
          {/* col-span-2 with Cards */}
          <div className="md:col-span-2">
            {/* Subtitle Section */}
            <div className="mb-5">
              <p className="text-sm md:pr-3">
                Copilot has pinpointed 20 key leads that show strong purchase
                intent and are actively engaging. These leads need your focus.
              </p>
            </div>

            {/* Carousel */}
            <Slider />
          </div>

          {/* Other key activities */}
          <div>
            <h3 className="font-bold text-lg md:text-xl text-gray-400 mb-2">
              Other key activities
            </h3>
            <Card>
              <CardContent className="sm:p-4 p-3">
                <h4 className="font-semibold">Cafe A100 for Woodland Bank</h4>
                <p className="text-sm text-muted-foreground">
                  Woodland Bank • $280,000 • 8 days to close
                </p>
                <span className="text-xs text-blue-600">
                  Review draft and reply to Chris Naido
                </span>
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardContent className="p-4">
                <h4 className="font-semibold">
                  Partnership opportunity for Fabrikam
                </h4>
                <p className="text-sm text-muted-foreground">
                  Fabrikam • $5,000,000 • 12 days to close
                </p>
                <span className="text-xs text-blue-600">
                  Prepare me for Fabrikam’s key stakeholder meeting
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
