import DashboardLayout from "@src/layout/dashboard-layout";
import { useState } from "react";
import Button from "@src/components/common/Button";
import FilterTab from "@src/components/common/FilterTab";
import Switch from "@src/components/common/Switch";
import { ReloadIcon } from "@src/components/common/Icon";

export default function CreateSequences() {
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
      <div className="bg-crm-dark-300 mt-5 py-10">
        <div className="flex items-center w-full">
          <Switch className="mx-5" />
          <FilterTab tabButton={sequencesTabButton} className="gap-x-5 w-[70%]" />
          <button className="bg-crm-gray-400 p-3 border border-crm-gray-300 mx-2 rounded-md">
            <ReloadIcon />
          </button>
          <Button variant="blue" className="whitespace-nowrap">
            Create Sequences
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
