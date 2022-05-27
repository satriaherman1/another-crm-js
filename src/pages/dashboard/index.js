import DashboardLayout from "@src/layout/dashboard-layout";
import { Calendar2Icon, EyeIcon, FilterOutlinedIcon, FilterRemoveOutlined, MailIcon, MonitorIcon, SendIcon, TickCircleIcon, UserOutlined, VideoCircleIcon } from "@src/components/common/Icon";
import DashboardActivityList from "@src/components/pages/dashboard/activity-list";
import DashboardStatistic from "@src/components/pages/dashboard/statistic";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import DashboardTaskList from "@src/components/pages/dashboard/task-list";
import NestedFilter from "@src/components/common/NestedFilter";
import { useState } from "react";
import "./styles.scss";
import DateRangePicker from "react-daterange-picker";
const moment = extendMoment(originalMoment);
export default function Dashboard() {
    const filterTypeList = [
        {
            name: "email",
            filterList: [
                {
                    label: "opened",
                },
                {
                    label: "clicked",
                },
                {
                    label: "replied",
                },
                {
                    label: "received",
                },
            ],
        },
        {
            name: "calls",
            filterList: [
                {
                    label: "opened",
                },
                {
                    label: "clicked",
                },
                {
                    label: "replied",
                },
                {
                    label: "received",
                },
            ],
        },
        {
            name: "sms",
            filterList: [
                {
                    label: "opened",
                },
                {
                    label: "clicked",
                },
                {
                    label: "replied",
                },
                {
                    label: "received",
                },
            ],
        },
    ];
    const today = moment();
    const [dateFilter, setDateFilter] = useState(moment.range(today.clone().subtract(7, "days"), today.clone()));
    const [openDateFilter, setOpenDateFilter] = useState(false);
    return (<DashboardLayout>
      <div className="flex flex-col md:flex-row  mt-8 w-full gap-5 ">
        <div className="md:w-[60%]">
          <DashboardStatistic />
          <DashboardTaskList />
        </div>

        <section className=" py-4 bg-crm-dark-300 md:w-[40%] h-[fit-content] rounded-md">
          <div className="flex flex-wrap gap-3">
            <NestedFilter icon={<FilterOutlinedIcon />} label="Type" filters={filterTypeList}/>
            <NestedFilter icon={<UserOutlined />} label="Person" filters={filterTypeList}/>
            <div className="relative">
              <button onClick={() => setOpenDateFilter(!openDateFilter)} className="rounded-md border border-crm-gray-350 ml-3 bg-crm-gray-200 py-1 px-2">
                <Calendar2Icon fill="#fff"/>
              </button>
              {openDateFilter && (<div className="absolute left-[-400%] md:left-[-300%]">
                  <DateRangePicker singleDateRange className="bg-white " value={dateFilter} onSelect={(val) => {
                setDateFilter(val);
                setOpenDateFilter(false);
            }}/>
                </div>)}
            </div>
            <button className="rounded-md border border-crm-gray-350 ml-3 bg-crm-gray-200 p-2">
              <FilterRemoveOutlined />
            </button>
          </div>

          <div className="w-full bg-crm-gray-400 mt-4 py-3 px-5 text-crm-gray border-y border-crm-gray-350">2 weeks ago</div>

          <DashboardActivityList icon={<EyeIcon />} mailDate="test" createdDate="06/01/22 04:11:05" content="Prospect Keith Hnaituk opened No Cod BNPL Comparison Tool Step #1 (Manual Email) of Enterprise Custom - Email Only Sequence" footerElement={<div className="acivity-list-bottom flex gap-9 px-4 mt-4 text-crm-gray-500 text-[14px] ">
                <div className="flex items-center">
                  <MailIcon />
                  <span className="ml-2">{moment("2022/04/21 18:30:10").fromNow()}</span>
                </div>
                <div className="flex items-center">
                  <MonitorIcon />
                  <span className="ml-2">United States</span>
                </div>
              </div>}/>
          <DashboardActivityList icon={<SendIcon />} mailDate="hi" createdDate="06/01/22 08:11:05" content="Prospect Keith Hnaituk opened No Cod BNPL Comparison Tool Step #1 (Manual Email) of Enterprise Custom - Email Only Sequence" footerElement={<h2 className="font-semibold px-4 text-white mt-4">
                No Cod BNPL Comparision Tool <span className="text-crm-primary font-normal">View</span>
              </h2>}/>
          <DashboardActivityList icon={<TickCircleIcon fill="#0EC8CE"/>} mailDate="hi" createdDate="06/01/22 20:11:05" content="You completed a task regarding prospect Keith Hnatiuk"/>
          <DashboardActivityList icon={<VideoCircleIcon />} mailDate="hi" createdDate="06/01/22 10:11:05" content="You resumed Keith Hnatiuk from Step #2 (Manual Email) of Enterprise Custom - Email Only Sequence"/>
        </section>
      </div>
    </DashboardLayout>);
}
