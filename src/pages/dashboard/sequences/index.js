import Button from "@src/components/common/Button";
import { ReloadIcon } from "@src/components/common/Icon";

import MiniInput from "@src/components/common/MiniInput";
import SequencesTable from "@src/components/pages/dashboard/sequences/table";
import { SearchIcon } from "@src/config/pathImage";
import DashboardLayout from "@src/layout/dashboard-layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sequences() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
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
      <div className="flex flex-col md:flex-row md:items-center w-full justify-between mt-5 gap-5">
        <MiniInput icon={SearchIcon} variant="crm-gray" className="max-w-[300px]" placeholder="Search Sequences" />

        <section className="flex gap-x-2">
          <button className="bg-crm-dark-300 p-3 rounded-md">
            <ReloadIcon />
          </button>
          <Button onClick={() => navigate("create")} variant="blue" className="whitespace-nowrap">
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
