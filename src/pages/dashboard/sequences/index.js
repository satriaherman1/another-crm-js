import DashboardLayout from "@src/layout/dashboard-layout";
import { useState } from "react";
import FilterTab from "../../../components/common/FilterTab";
import Switch from "../../../components/common/Switch";
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
      <div className="bg-crm-dark-300 mt-5 py-10">
        <div className="flex items-center w-full">
          <Switch className="mx-5" />
          <FilterTab tabButton={sequencesTabButton} className="gap-x-5 w-full" />
        </div>
      </div>
    </DashboardLayout>
  );
}
