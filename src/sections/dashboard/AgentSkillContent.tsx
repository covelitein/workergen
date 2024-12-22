"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Image } from "@nextui-org/react";
import { ChevronDown, User, X } from "lucide-react";
import { useState } from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { PiCopySimple } from "react-icons/pi";
import { HiOutlineArrowUturnRight } from "react-icons/hi2";

export default function AgentSkillContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [emails, setEmails] = useState<string[]>(["purchasing@contoso.com"]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddEmail = () => {
    if (inputValue.trim() && !emails.includes(inputValue.trim())) {
      setEmails([...emails, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveEmail = (email: string) => {
    setEmails(emails.filter((e) => e !== email));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      handleAddEmail();
    } else if (e.key === "Backspace" && !inputValue && emails.length > 0) {
      // Remove the last email when input is empty and backspace is pressed
      setEmails(emails.slice(0, -1));
    }
  };
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Image src="/illustrations/copilot.png" alt="copilot" width={30} />
        <h3 className="text-lg font-bold">Agent Skill</h3>
      </div>
      <Card>
        <CardContent className="py-3 px-3">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild className="cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="text-sm">
                  Check if on-hand inventory will allow all sales orders to ship
                  without delays
                </span>
                {/* Icon rotates based on the collapsible state */}
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    isOpen && "rotate-180"
                  }`}
                />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 leading-[2.5] text-sm">
              When{" "}
              <Button className="ml-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <User />
                <span>any vendor</span>
              </Button>
              sends an email with changes to
              <Button className="ml-2 mr-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <FaRegFileLines />
                <span>confirmed purchase orders</span>
              </Button>
              , check if the resulting
              <Button className="ml-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <AiOutlineAlignLeft />
                <span>on-hand inventory</span>
              </Button>
              will allow
              <Button className="ml-2 mr-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <PiCopySimple />
                <span>all sales order</span>
              </Button>
              to
              <Button className="ml-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <HiOutlineArrowUturnRight />
                <span>ship without delay</span>
              </Button>
              .if so,
              <Button className="ml-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <HiOutlineArrowUturnRight />
                <span>update purchase order</span>
              </Button>
              to reflect the change.
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <Image src="/illustrations/outlook.png" width={30} />
          <h3 className="text-lg font-bold">Enable email access</h3>
        </div>
        <p className="text-sm mt-3">
          Allow the agent to access email inboxes to read mail from known
          vendors.
        </p>
        <div className="relative mt-4">
          <div className="flex items-center gap-2 flex-wrap md:flex-nowrap">
            {/* Input with email chips */}
            <div className="flex items-center flex-wrap border rounded-md px-3 py-2 focus-within:ring focus-within:ring-blue-500 flex-1">
              {emails.map((email, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="flex items-center gap-2 px-2 py-1 mr-2 mb-1 rounded-lg"
                >
                  {email}
                  <button
                    className="ml-1 text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveEmail(email)}
                  >
                    <X size={18}/>
                  </button>
                </Badge>
              ))}
              <input
                type="text"
                placeholder="Enter email address"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="flex-1 border-none outline-none"
              />
            </div>

            {/* Allow access button */}
            <Button
              onClick={handleAddEmail}
              className="w-full md:w-auto px-4 py-2 whitespace-nowrap"
            >
              Allow access
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
