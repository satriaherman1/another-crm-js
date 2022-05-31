import Button from "@src/components/common/Button";
import Dropdown from "@src/components/common/Dropdown";
import MiniInput from "@src/components/common/MiniInput";
import DashboardLayout from "@src/layout/dashboard-layout";
import { useState } from "react";

export default function Schedules() {
  const [mondaySchedule, setMondaySchedule] = useState({
    start: "",
    end: "",
  });
  const timeZoneList = [
    {
      label: "GMT",
      value: "GMT",
    },
  ];
  const scheduleList = [
    {
      label: "12:00 AM",
      value: "12:00 AM",
    },
    {
      label: "01:00 PM",
      value: "01:00 PM",
    },
    {
      label: "02:00 PM",
      value: "02:00 PM",
    },
    {
      label: "03:00 PM",
      value: "03:00 PM",
    },
  ];
  return (
    <DashboardLayout>
      <div className="bg-crm-dark-300 py-7 px-4 md:px-8 text-white mt-8">
        <h4 className="text-[18px] font-semibold">Account Details</h4>

        <div className="flex flex-wrap flex-col md:flex-row gap-4 mt-5 ">
          <section>
            <label htmlFor="fullName">Full Name</label>
            <MiniInput className="mt-2 block" placeholder="your full name" variant="crm-transparent" id="fullName" type="text" />
          </section>
          <section className="">
            <label htmlFor="fullName">Select Time Zone</label>

            <Dropdown variant="outlined" className="mt-2 min-w-[200px]" optList={timeZoneList} />
          </section>

          <Button variant="yellow" paddingClassName="py-3 px-6" className="font-normal md:self-end">
            Appy Same like First Day
          </Button>
        </div>

        <section className="flex flex-wrap flex-col lg:flex-row lg:items-center gap-y-3 lg:w-[fit-content] rounded-lg py-2 px-3 border border-crm-gray-300 mt-6 lg:min-w-[820px] lg:justify-between">
          <h5 className="text-white">Monday : 12:00am - 12:00pm</h5>
          <div className="flex flex-wrap gap-4 flex-col md:flex-row">
            <Dropdown
              onChange={(e) => {
                const currentSchedule = mondaySchedule;
                console.log(e);
                currentSchedule.start = e.current.value;
                setMondaySchedule(currentSchedule);
              }}
              value={mondaySchedule.start}
              variant="outlined"
              className="min-w-[200px] "
              borderVariantClass="border border-crm-gray-170"
              optList={scheduleList}
            />
            <Dropdown
              onChange={(e) => {
                const currentSchedule = mondaySchedule;
                currentSchedule.end = e.target.value;
                setMondaySchedule(currentSchedule);
              }}
              variant="outlined"
              className="min-w-[200px] "
              borderVariantClass="border border-crm-gray-170"
              optList={scheduleList}
            />
            <Button onClick={() => setMondaySchedule({ start: "12:00 AM", end: "12:00 AM" })} variant="blue" paddingClassName="py-2 px-5">
              Clear
            </Button>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:w-[fit-content] rounded-lg gap-4 py-2 px-3 border border-crm-gray-300 mt-6 lg:min-w-[820px] lg:justify-between">
          <h5 className="text-white">Tuesday : 12:00am - 12:00pm</h5>
          <div className="flex flex-wrap gap-4 flex-col md:flex-row">
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Button variant="blue" paddingClassName="py-2 px-5">
              Clear
            </Button>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:w-[fit-content] rounded-lg gap-4 py-2 px-3 border border-crm-gray-300 mt-6 lg:min-w-[820px] lg:justify-between">
          <h5 className="text-white">Wednesday : 12:00am - 12:00pm</h5>
          <div className="flex flex-wrap gap-4 flex-col md:flex-row">
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Button variant="blue" paddingClassName="py-2 px-5">
              Clear
            </Button>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:w-[fit-content] rounded-lg gap-4 py-2 px-3 border border-crm-gray-300 mt-6 lg:min-w-[820px] lg:justify-between">
          <h5 className="text-white">Thursday : 12:00am - 12:00pm</h5>
          <div className="flex flex-wrap gap-4 flex-col md:flex-row">
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Button variant="blue" paddingClassName="py-2 px-5">
              Clear
            </Button>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:w-[fit-content] rounded-lg gap-4 py-2 px-3 border border-crm-gray-300 mt-6 lg:min-w-[820px] lg:justify-between">
          <h5 className="text-white">Friday : 12:00am - 12:00pm</h5>
          <div className="flex flex-wrap gap-4 flex-col md:flex-row">
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Button variant="blue" paddingClassName="py-2 px-5">
              Clear
            </Button>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:w-[fit-content] rounded-lg gap-4 py-2 px-3 border border-crm-gray-300 mt-6 lg:min-w-[820px] lg:justify-between">
          <h5 className="text-white">Saturday : 12:00am - 12:00pm</h5>
          <div className="flex flex-wrap gap-4 flex-col md:flex-row">
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Button variant="blue" paddingClassName="py-2 px-5">
              Clear
            </Button>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row lg:items-center gap-y-3 lg:w-[fit-content] rounded-lg gap-4 py-2 px-3 border border-crm-gray-300 mt-6 lg:min-w-[820px] lg:justify-between">
          <h5 className="text-white">Sunday : 12:00am - 12:00pm</h5>
          <div className="flex flex-wrap gap-4 flex-col md:flex-row">
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Dropdown variant="outlined" className="min-w-[200px]" borderVariantClass="border border-crm-gray-170" optList={scheduleList} />
            <Button variant="blue" paddingClassName="py-2 px-5">
              Clear
            </Button>
          </div>
        </section>

        <div className="lg:max-w-[820px] mt-7">
          <Button variant="primary" className=" ml-auto block">
            Submit
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
