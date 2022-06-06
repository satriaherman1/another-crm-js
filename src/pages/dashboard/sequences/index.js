import Button from "@src/components/common/Button";
import { ReloadIcon } from "@src/components/common/Icon";

import MiniInput from "@src/components/common/MiniInput";
import Switch from "@src/components/common/Switch";
import Tooltip from "@src/components/common/Tooltip";
import SequencesTable from "@src/components/pages/dashboard/sequences/table";
import { SearchIcon } from "@src/config/pathImage";
import DashboardLayout from "@src/layout/dashboard-layout";
import { useState } from "react";

export default function Sequences() {
  const [activeTab, setActiveTab] = useState("overview");
  const sequencesTabButton = [
    {
      key: "overview",
      onClick: () => setActiveTab("overview"),
      activeIndicator: activeTab,
    },
    {
      key: "insights",
      onClick: () => setActiveTab("insights"),
      activeIndicator: activeTab,
    },
    {
      key: "settings",
      onClick: () => setActiveTab("settings"),
      activeIndicator: activeTab,
    },
    {
      key: "prospects",
      onClick: () => setActiveTab("prospects"),
      activeIndicator: activeTab,
    },
  ];

  const sequencesData = [
    {
      name: "Meetings",
      active: 21,
      due: 19,
      total: 42,
      finished: 20,
      delivered: 10,
      opened: 60,
      replied: 2.4,
      profile: {
        name: "Satria Herman",
        imageUrl: "https://i.ibb.co/GQB3LnC/avatar-example.png",
      },
    },
    {
      name: "Linkedin Steps",
      active: 21,
      due: 19,
      total: 42,
      finished: 20,
      delivered: 10,
      opened: 60,
      replied: 2.4,
      profile: {
        name: "Satria Herman",
        imageUrl: "https://i.ibb.co/GQB3LnC/avatar-example.png",
      },
    },
    {
      name: "Manual Task",
      active: 21,
      due: 19,
      total: 42,
      finished: 20,
      delivered: 10,
      opened: 60,
      replied: 2.4,
      profile: {
        name: "Satria Herman",
        imageUrl: "https://i.ibb.co/GQB3LnC/avatar-example.png",
      },
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col md:fle-row md:items-center w-full justify-between mt-5 gap-5">
        <MiniInput icon={SearchIcon} variant="crm-gray" className="max-w-[300px]" placeholder="Search Sequences" />

        <section className="flex gap-x-2">
          <button className="bg-crm-dark-300 p-3 rounded-md">
            <ReloadIcon />
          </button>
          <Button variant="blue" className="whitespace-nowrap">
            Create Sequences
          </Button>
        </section>
      </div>
      <div className="bg-crm-dark-300 mt-5  px-9 overflow-x-visible text-white relative">
        <SequencesTable data={sequencesData} />
      </div>
    </DashboardLayout>
  );
}
