import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import faker from "@faker-js/faker";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import { useState } from "react";
import FilterTab from "@src/components/common/FilterTab";
import Button from "@src/components/common/Button";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import { ArrowDownOutlinedIcon } from "@src/components/common/Icon";
const moment = extendMoment(originalMoment);
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        // title: {
        //   display: true,
        //   text: "Chart.js Line Chart",
        // },
    },
};
const labels = ["Today", "Fri Apr 15", "Sat Apr 16", "Sun Apr 17", "Mon Apr 18", "Tue Apr 19", "Wed Apr 20", "Thu Apr 21"];
export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: labels.map(() => faker.datatype.number({ min: -1, max: 1.5 })),
            borderColor: "#0EC8CE",
            backgroundColor: "#0EC8CE",
        },
        {
            label: "Dataset 2",
            data: labels.map(() => faker.datatype.number({ min: -1, max: 1.5 })),
            borderColor: "#ffffff",
            backgroundColor: "#ffffff",
        },
    ],
};
export default function DashboardStatistic() {
    const [activeTab, setActiveTab] = useState("task");
    const today = moment();
    const [dateFilter, setDateFilter] = useState(moment.range(today.clone().subtract(7, "days"), today.clone()));
    const [openDateFilter, setOpenDateFilter] = useState(false);
    const taskTabButton = [
        {
            key: "task",
            onClick: () => setActiveTab("task"),
            activeIndicator: activeTab,
        },
        {
            key: "emails",
            onClick: () => setActiveTab("emails"),
            activeIndicator: activeTab,
        },
    ];
    return (<section className="dashboard-statistic  bg-crm-dark-300 text-white w-full px-5 py-3 rounded-md h-[fit-content]">
      <FilterTab tabButton={taskTabButton}/>

      <div className="flex flex-col md:flex-row gap-2 justify-between  md:items-center py-5">
        <p className="text-white  font-semibold">Upcoming Task</p>

        <div className="relative">
          <Button onClick={() => setOpenDateFilter(!openDateFilter)} variant="gray" className="flex items-center" paddingClassName="px-5 py-3">
            {moment(dateFilter.start).format("DD MMMM, YYYY")} - {moment(dateFilter.end).format("DD MMMM, YYYY")}
            <ArrowDownOutlinedIcon fill="#fff" className="ml-2"/>
          </Button>
          {openDateFilter && (<div className="absolute">
              <DateRangePicker singleDateRange className="bg-white" value={dateFilter} onSelect={(val) => {
                setDateFilter(val);
                setOpenDateFilter(false);
            }}/>
            </div>)}
        </div>
      </div>
      <div className="statistic-summary flex mt-4 mb-8 flex-wrap gap-y-5">
        <span className="flex pr-5 border-r border-[#616161]">
          <h4 className="text-white font-semibold text-[30px]">12</h4>
          <p className="text-crm-gray-600 ml-3">Completed</p>
        </span>
        <span className="flex pr-5 border-r border-[#616161] md:pl-5 pl-3">
          <h4 className="text-white font-semibold text-[30px]">0%</h4>
          <p className="text-crm-gray-600 ml-3">Emails</p>
        </span>
        <span className="flex pr-5 border-r border-[#616161] md:pl-5 pl-0">
          <h4 className="text-white font-semibold text-[30px]">100%</h4>
          <p className="text-crm-gray-600 ml-3">Calls</p>
        </span>
        <span className="flex pr-5 md:pl-5 pl-3">
          <h4 className="text-white font-semibold text-[30px]">0%</h4>
          <p className="text-crm-gray-600 ml-3">Calls</p>
        </span>
      </div>

      <div className="w-full">
        <Line options={options} data={data}/>
      </div>
    </section>);
}
