import Button from "@src/components/common/Button";
import { ReloadIcon } from "@src/components/common/Icon";

import MiniInput from "@src/components/common/MiniInput";
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
  return (
    <DashboardLayout>
      <div className="flex items-center w-full justify-between mt-5">
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
      <div className="bg-crm-dark-300 mt-5 py-10"></div>
    </DashboardLayout>
  );
}
