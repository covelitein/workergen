import { Lead } from "@/types";
import { Plus, Trash } from "lucide-react";
import { ReactNode } from "react";
import { LiaListSolid } from "react-icons/lia";
import { PiChartLineDuotone, PiUsersThree } from "react-icons/pi";
import { VscRefresh } from "react-icons/vsc";
import { IoMailUnreadOutline } from "react-icons/io5";

export const leadsData: Lead[] = [
  {
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    statusReason: "New",
    createdOn: "2024-04-02T12:00:00",
  },
  {
    name: "Josia Love",
    topic: "Upgrading service plan",
    statusReason: "New",
    createdOn: "2024-03-30T07:45:00",
  },
  {
    name: "Harrison Curtis",
    topic: "Issue with throughput on EspressoMaster",
    statusReason: "New",
    createdOn: "2024-03-28T15:30:00",
  },
  {
    name: "Jermaine Berrett",
    topic: "New roaster in distribution facility",
    statusReason: "New",
    createdOn: "2024-03-25T11:05:00",
  },
  {
    name: "Gerald Stephens",
    topic: "Concerns on current machines",
    statusReason: "New",
    createdOn: "2024-03-23T16:50:00",
  },
  {
    name: "Halle Griffiths",
    topic: "Expanding business",
    statusReason: "New",
    createdOn: "2024-03-21T10:20:00",
  },
  {
    name: "Rachel Michael",
    topic: "Addressing service concerns",
    statusReason: "New",
    createdOn: "2024-03-19T13:15:00",
  },
  {
    name: "Alex Baker",
    topic: "Premium coffee beans",
    statusReason: "New",
    createdOn: "2024-03-17T08:00:00",
  },
  {
    name: "Lilly Pyles",
    topic: "Cafe A100 bulk rate",
    statusReason: "New",
    createdOn: "2024-03-13T14:45:00",
  },
  {
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    statusReason: "New",
    createdOn: "2024-03-10T09:30:00",
  },
];

export const HeaderLinks: { title: string; icon: ReactNode }[] = [
  {
    title: "Show chart",
    icon: <PiChartLineDuotone className="text-xl" />,
  },
  {
    title: "Focused view",
    icon: <LiaListSolid className="text-xl" />,
  },
  {
    title: "New",
    icon: <Plus className="text-base" />,
  },
  {
    title: "Refresh",
    icon: <VscRefresh className="text-lg" />,
  },
  {
    title: "Collaborate",
    icon: <PiUsersThree className="text-lg" />,
  },
  {
    title: "Delete",
    icon: <Trash size={16} />,
  },
];



export const leadsSlide = [
  {
    name: "Jane Reyes",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    occupation: "COO",
    company: "Northwind Traders",
    icon: <IoMailUnreadOutline />,
    title: "Engage with Jane Reyes",
    desc: "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    tags: ["Expand business", "High buying intent"],
    about: "Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shop offerings, ensuring consistent, high-quality service.",
    details: {
      insights: [
        { title: "Decision Maker", value: "Yes", icon: "✓" },
        { title: "Potential Deal Value", value: "$1M", icon: "$" },
        { title: "Intent", value: "High", icon: "🔼" },
      ],
      whyPicked: [
        "Jane is a key decision-maker browsing espresso machines.",
        "Reported 'slowness' during service requests.",
        "Company sees $200M in annual revenue from coffee shops.",
      ],
    },
  },
  {
    name: "Allan Munger",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    occupation: "Head of Real Estate Development",
    company: "Contoso Coffee",
    icon: <IoMailUnreadOutline />,
    title: "Prepare for meeting with Alan",
    desc: "Prepare for high-buying intent meeting scheduled for 2PM regarding upgrading service contract.",
    tags: ["Upcoming meeting", "Due today"],
    about: "Allan Munger is a key figure in Contoso Coffee's real estate expansion strategy. With years of experience managing multi-million dollar property acquisitions, Allan is instrumental in shaping the company's future. His insights and decisions drive significant growth opportunities.",
    details: {
      insights: [
        { title: "Decision Maker", value: "No", icon: "✗" },
        { title: "Potential Deal Value", value: "$2M", icon: "$" },
        { title: "Intent", value: "Medium", icon: "⬆️" },
      ],
      whyPicked: [
        "Alan is influential in Contoso's real estate strategy.",
        "Frequent meetings about property acquisitions.",
        "Part of a multi-million-dollar expansion project.",
      ],
    },
  },
  {
    name: "Mona Patel",
    img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    occupation: "Director of Operations",
    company: "First Coffee",
    icon: <IoMailUnreadOutline />,
    title: "Review supply chain strategy",
    desc: "Mona is evaluating potential suppliers for new coffee bean sources.",
    tags: ["Supply chain", "High priority"],
    about: "Mona Patel, the Director of Operations at First Coffee, is leading the company's efforts to improve supply chain efficiency. She is focused on identifying reliable suppliers and ensuring that First Coffee maintains its reputation for high-quality products. Mona's analytical skills and commitment to operational excellence make her a vital contributor to the company's success.",
    details: {
      insights: [
        { title: "Decision Maker", value: "Yes", icon: "✓" },
        { title: "Potential Deal Value", value: "$500K", icon: "$" },
        { title: "Intent", value: "High", icon: "🔼" },
      ],
      whyPicked: [
        "Mona is exploring suppliers for new coffee bean sources.",
        "She has a strong track record in optimizing operations.",
        "First Coffee is a key player in the industry.",
      ],
    },
  },
  {
    name: "Alex Baker",
    img: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    occupation: "VP of Marketing",
    company: "CafeCo",
    icon: <IoMailUnreadOutline />,
    title: "Plan new marketing campaign",
    desc: "Alex is strategizing for a regional marketing campaign launch.",
    tags: ["Marketing", "Campaign launch"],
    about: "Alex Baker, the Vice President of Marketing at CafeCo, is responsible for driving the company's brand strategy and market growth. Known for his innovative approach to marketing, Alex has successfully launched several high-impact campaigns. His leadership ensures that CafeCo remains at the forefront of customer engagement.",
    details: {
      insights: [
        { title: "Decision Maker", value: "Yes", icon: "✓" },
        { title: "Potential Deal Value", value: "$800K", icon: "$" },
        { title: "Intent", value: "Medium", icon: "⬆️" },
      ],
      whyPicked: [
        "Alex is developing a regional marketing strategy.",
        "He has a proven track record in campaign success.",
        "CafeCo is aiming to expand its market share.",
      ],
    },
  },
  {
    name: "Rachel Sanchez",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    occupation: "Sales Manager",
    company: "BrewWorks",
    icon: <IoMailUnreadOutline />,
    title: "Discuss sales opportunities",
    desc: "Rachel is analyzing quarterly sales reports and identifying growth opportunities.",
    tags: ["Sales", "Growth opportunities"],
    about: "Rachel Sanchez, a Sales Manager at BrewWorks, excels in driving sales growth and building strong client relationships. Her analytical approach and keen understanding of market trends enable her to identify new opportunities and deliver outstanding results. Rachel's dedication to her team and customers makes her an invaluable asset to BrewWorks.",
    details: {
      insights: [
        { title: "Decision Maker", value: "No", icon: "✗" },
        { title: "Potential Deal Value", value: "$1.5M", icon: "$" },
        { title: "Intent", value: "High", icon: "🔼" },
      ],
      whyPicked: [
        "Rachel is focused on identifying growth opportunities.",
        "She has a strong background in sales strategy.",
        "BrewWorks is expanding its reach in the market.",
      ],
    },
  },
];
