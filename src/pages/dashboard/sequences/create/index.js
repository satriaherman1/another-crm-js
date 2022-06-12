import Button from "@src/components/common/Button";
import Dropdown from "@src/components/common/Dropdown";
import Input from "@src/components/common/Input";
import MiniInput from "@src/components/common/MiniInput";
import DashboardLayout from "@src/layout/dashboard-layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateSequences() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="bg-crm-dark-300 mt-5 px-5 py-10 text-white">
        <section className="flex justify-between pb-4">
          <h3 className="text-[24px] font-semibold">Add Sequences</h3>
          <Button variant="blue" paddingClassName="px-3 py-2">
            Back
          </Button>
        </section>
        <section className="border-t border-crm-gray-300 py-4 flex flex-col gap-y-7">
          <div>
            <label htmlFor="name" className="text-crm-gray-500">
              Name
            </label>
            <MiniInput className="block w-full mt-2" name="name" id="name" variant="crm-gray" isNoMaxWidth />
          </div>
          <div>
            <label htmlFor="name" className="text-crm-gray-500">
              Choose Schedule
            </label>
            <Dropdown
              optList={[
                {
                  label: "Choose Schedule",
                  value: "Chosee Schedule",
                },
              ]}
              className="block w-full mt-2"
              name="name"
              id="name"
              variant="outlined"
              isNoMaxWidth
            />
          </div>
          <div>
            <label htmlFor="name" className="text-crm-gray-500">
              Select Sharing Option
            </label>
            <Dropdown
              optList={[
                {
                  label: "Choose whom to share with",
                  value: "Choose whom to share with",
                },
              ]}
              className="block w-full mt-2"
              name="name"
              id="name"
              variant="outlined"
              isNoMaxWidth
            />
          </div>
        </section>

        <Button onClick={() => navigate("/dashboard/sequences/detail")} variant="primary" className="ml-auto block">
          Submit
        </Button>
      </div>
    </DashboardLayout>
  );
}
