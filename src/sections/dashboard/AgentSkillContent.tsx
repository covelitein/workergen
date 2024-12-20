"use client";

import { Combobox } from "@/components/custom-combox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Image } from "@nextui-org/react";
import { ChevronDown, User } from "lucide-react";
import { useState } from "react";

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
            <CollapsibleContent className="mt-2 leading-[2.4] text-sm">
              When{" "}
              <Button className="ml-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <User />
                <span>any vendor</span>
              </Button>
              sends an email with changes to
              <Button className="ml-2 mr-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <User />
                <span>confirmed purchase orders</span>
              </Button>
              , check if the resulting
              <Button className="ml-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <User />
                <span>confirmed purchase orders</span>
              </Button>
              will allow
              <Button className="ml-2 mr-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <User />
                <span>confirmed purchase orders</span>
              </Button>
              to
              <Button className="ml-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <User />
                <span>confirmed purchase orders</span>
              </Button>
              .if so,
              <Button className="ml-2 bg-blue-200 text-blue-600 h-6 px-2 rounded-full hover:bg-blue-200 hover:text-blue-600">
                <User />
                <span>confirmed purchase orders</span>
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
          <Input
            type="email"
            placeholder="Enter email address"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddEmail();
            }}
            className="mb-2"
          />
          <div className="flex gap-2 flex-wrap mt-2">
            {emails.map((email, index) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-2 px-2 py-1"
              >
                {email}
                <button
                  className="ml-1 text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveEmail(email)}
                >
                  x
                </button>
              </Badge>
            ))}
          </div>
        </div>
        <Button onClick={handleAddEmail} className="w-full">
          Allow access
        </Button>
      </div>
    </div>
  );
}
