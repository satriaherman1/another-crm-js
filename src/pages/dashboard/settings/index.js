import FilterTab from "@src/components/common/FilterTab";
import SettingsManagePeople from "@src/components/pages/dashboard/settings/manage-people";
import SettingsProperty from "@src/components/pages/dashboard/settings/property";
import VoiceSettings from "@src/components/pages/dashboard/settings/voice-settings";
import DashboardLayout from "@src/layout/dashboard-layout";
import React, { useEffect, useState } from "react";
export default function Settings() {
  const [activeFilterTab, setActiveFilterTab] = useState("property");
  const [settingsContent, setSettingsContent] = useState();
  const filterList = [
    {
      key: "property",
      activeIndicator: activeFilterTab,
      onClick: () => setActiveFilterTab("property"),
    },
    {
      key: "settings",
      activeIndicator: activeFilterTab,
      onClick: () => setActiveFilterTab("settings"),
    },
    {
      key: "voice settings",
      activeIndicator: activeFilterTab,
      onClick: () => setActiveFilterTab("voice settings"),
    },
    {
      key: "custom status",
      activeIndicator: activeFilterTab,
      onClick: () => setActiveFilterTab("custom status"),
    },
    {
      key: "manage people",
      activeIndicator: activeFilterTab,
      onClick: () => setActiveFilterTab("manage people"),
    },
  ];
  useEffect(() => {
    switch (activeFilterTab) {
      case "manage people":
        setSettingsContent(<SettingsManagePeople />);
        break;
      case "property":
        setSettingsContent(<SettingsProperty />);
        break;
      case "voice settings":
        setSettingsContent(<VoiceSettings />);
        break;
    }
  }, [activeFilterTab]);
  return (
    <DashboardLayout>
      <div className="py-4 px-5 bg-crm-dark-300 my-4">
        <FilterTab tabButton={filterList} className="gap-x-5" />

        {settingsContent}
      </div>
    </DashboardLayout>
  );
}
