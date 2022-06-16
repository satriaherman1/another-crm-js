import DashboardLayout from "@src/layout/dashboard-layout";
import { useState } from "react";
import Button from "@src/components/common/Button";
import FilterTab from "@src/components/common/FilterTab";
import Switch from "@src/components/common/Switch";
import { CallIcon, MailIcon, MessageFilledIcon, MessageNotifIcon, ReloadIcon } from "@src/components/common/Icon";
import Modal from "@src/components/common/Modal";
import CreateSequenceStep from "@src/components/pages/dashboard/sequences/create-step";
import StepTable from "@src/components/pages/dashboard/sequences/step-table";

export default function DetailSequences() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showCreateStep, setShowCreateStep] = useState(false);
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

  const stepList = [
    {
      icon: <MailIcon />,
      name: "Auto Email - Day 1",
      finish: true,
      duration: "5 m",
      thread: [
        {
          name: "new thread",
          description: "Thank You for Reaching Out to QiistPay - Financial, Crypto, 1-Click, & More - Helllo, Thank you for raching out to",
          delivered: 10,
          opened: 60,
          replied: 2.4,
          finished: 20,
        },
      ],
    },
    {
      icon: <CallIcon />,
      name: "Auto Email - Day 1",
      finish: true,
      duration: "5 m",
      thread: [
        {
          name: "new thread",
          description: "Thank You for Reaching Out to QiistPay - Financial, Crypto, 1-Click, & More - Helllo, Thank you for raching out to",
          delivered: 10,
          opened: 60,
          replied: 2.4,
          finished: 20,
        },
      ],
    },
  ];

  const TableInfo = (props) => {
    return (
      <section className={`flex text-white ${props.className ?? ""}`}>
        <div className="flex items-center py-2 px-5 border-r border-crm-gray-300">
          <h3 className=" text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Steps</p>
        </div>
        <div className="flex items-center py-2 px-5 border-r border-crm-gray-300">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Days</p>
        </div>
        <div className="flex items-center py-2 px-5 border-r border-crm-gray-300">
          <h3 className="text-[26px] font-semibold">100%</h3>
          <p className="ml-3 text-crm-gray-600">Automated</p>
        </div>
        <div className="flex items-center py-2 px-5 ">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600"> Active</p>
        </div>
      </section>
    );
  };

  return (
    <DashboardLayout>
      <div className="bg-crm-dark-300 mt-5 py-10">
        <div className="flex flex-wrap  items-center w-full px-3">
          <Switch className="mx-5 basis-[20%] md:basis-[unset]" />
          <FilterTab tabButton={sequencesTabButton} className="gap-x-5 md:w-[70%] basis-[505] order-last md:order-[2]" />
          <button className="bg-crm-gray-400 p-3 border border-crm-gray-300 mx-2 rounded-md order-[2] md:order-3 md:ml-auto">
            <ReloadIcon />
          </button>
          <Button onClick={() => setShowCreateStep(true)} variant="blue" paddingClassName="p-3" className="whitespace-nowrap basis-[20%] md:basis-[unset] md:order-last ml-auto md:ml-0">
            Add Step
          </Button>
        </div>

        <TableInfo className="mt-7 pl-4 overflow-x-scroll" />
        <StepTable data={stepList} />
      </div>

      <Modal title="Add Step" visible={showCreateStep} onClose={() => setShowCreateStep(false)}>
        <CreateSequenceStep closeModal={() => setShowCreateStep(false)} />
      </Modal>
    </DashboardLayout>
  );
}
