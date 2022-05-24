import { ActivityIcon, Calendar2Icon, CallIcon, LogoutIcon, MailIcon, MenuIcon, Note2Icon, NoteIcon, PriceTagIcon, SettingIcon, TicketIcon, UserGroupIcon, UserProfileIcon, } from "@src/components/common/Icon";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function DashboardNavList(props) {
    const { isMinimize, className } = props;
    const [activeSidebarList, setActiveSidebarList] = useState("");
    useEffect(() => {
        const pathName = window.location.pathname;
        const urlPath = pathName.slice(1, pathName.length);
        console.log(urlPath);
        setActiveSidebarList(urlPath);
    }, []);
    return (<ul className={`mt-3 ${className}`}>
      <li className={`py-4 ${activeSidebarList === "dashboard" ? "navlist-active" : ""} `}>
        <NavLink to="/dashboard" className="flex">
          <MenuIcon fill={activeSidebarList === "dashboard" ? "#0EC8CE" : ""} className={`${isMinimize && "mx-auto"}`}/>
          {!isMinimize && <p className="ml-3">Dashboard</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${/account/i.test(activeSidebarList) ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard/account" className="flex">
          <UserProfileIcon className={`${isMinimize && "mx-auto"}`} fill={/account/i.test(activeSidebarList) ? "#0EC8CE" : ""}/>
          {!isMinimize && <p className="ml-3">Account</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "contact" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <UserGroupIcon className={`${isMinimize && "mx-auto"}`}/>
          {!isMinimize && <p className="ml-3">Contact</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "invited-user" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <TicketIcon className={`${isMinimize && "mx-auto"}`}/>
          {!isMinimize && <p className="ml-3">Invited User</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "opportunities" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <PriceTagIcon className={`${isMinimize && "mx-auto"}`}/>
          {!isMinimize && <p className="ml-3">Opportunities</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${/calls/i.test(activeSidebarList) ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard/calls" className="flex">
          <CallIcon className={`${isMinimize && "mx-auto"}`} fill={/calls/i.test(activeSidebarList) ? "#0EC8CE" : ""}/>
          {!isMinimize && <p className="ml-3">Calls</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "sequences" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <Note2Icon className={`${isMinimize && "mx-auto"}`}/>
          {!isMinimize && <p className="ml-3">Sequences</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${/schedules/i.test(activeSidebarList) ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard/schedules" className="flex">
          <Calendar2Icon className={`${isMinimize && "mx-auto"}`} fill={/schedules/i.test(activeSidebarList) ? "#0EC8CE" : ""}/>
          {!isMinimize && <p className="ml-3">Schedules</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "leads" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <ActivityIcon className={`${isMinimize && "mx-auto"}`}/>
          {!isMinimize && <p className="ml-3">Leads</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${/task/i.test(activeSidebarList) ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard/task" className="flex">
          <NoteIcon className={`${isMinimize && "mx-auto"}`} fill={/task/i.test(activeSidebarList) ? "#0EC8CE" : ""}/>
          {!isMinimize && <p className="ml-3">Task</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "gmail" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <MailIcon className={`${isMinimize && "mx-auto"}`} fill="#98A5CD"/>
          {!isMinimize && <p className="ml-3">Gmail</p>}
        </NavLink>
      </li>

      <li className={`py-4 mt-10 ${activeSidebarList === "dashboard/settings" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard/settings" className="flex">
          <SettingIcon className={`${isMinimize && "mx-auto"}`} fill="#98A5CD"/>
          {!isMinimize && <p className="ml-3">Settings</p>}
        </NavLink>
      </li>
      <li className="py-4 ">
        <NavLink to="/dashboard" className="flex">
          <LogoutIcon className={`${isMinimize && "mx-auto"}`}/>
          {!isMinimize && <p className="ml-3 text-crm-red">Logout</p>}
        </NavLink>
      </li>
    </ul>);
}
