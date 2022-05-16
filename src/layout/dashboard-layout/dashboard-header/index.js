import { NotificationIcon, Setting5Icon } from "@src/components/common/Icon";
import { StarIcon } from "@src/config/pathImage";
import { NavLink } from "react-router-dom";
export default function DashboardHeader() {
    const pathName = window.location.pathname;
    const urlPath = pathName.slice(1, pathName.length);
    const pathArr = urlPath.split("/");
    const path = pathArr[pathArr.length - 1];
    return (<div className="dashboard-head-layout  bg-crm-dark-300 flex flex-col md:flex-row md:items-center py-7 px-6 mt-4  rounded text-white">
      <div className="flex justify-between w-full md:w-[fit-content]">
        <h1 className="font-semibold text-[24px] w-[fit-content] capitalize">{path}</h1>

        <div className="ml-auto flex md:hidden ">
          <div className="divider h-[30px] w-[2px] bg-gray-700 mx-3"></div>
          <NotificationIcon />
          <Setting5Icon className="ml-3"/>
        </div>
      </div>
      <div className="flex mt-6 md:mt-0 flex-col md:flex-row md:items-center order-last md:order-2">
        <div className="divider hidden md:block h-[30px] w-[2px] bg-gray-700 mx-3"></div>
        <p>Trial Days Left :8 </p>

        <NavLink to="/order-summary">
          <div className="upgrade-box pb-1 pt-2 px-3 h-[fit-content] w-[fit-content] bg-[#282C38] flex items-center md:ml-2 mt-3 md:mt-0 rounded-md">
            <img src={StarIcon} width={20} alt="" className="-mt-1"/>
            <p className="uppercase text-crm-yellow ml-2 h-[fit-content] font-semibold">Upgrade billing plan</p>
          </div>
        </NavLink>
      </div>

      <div className="ml-auto  hidden md:flex order-last w-[fit-content]">
        <div className="divider h-[30px] w-[2px] bg-gray-700 mx-3"></div>
        <NotificationIcon />
        <Setting5Icon className="ml-3"/>
      </div>
    </div>);
}
