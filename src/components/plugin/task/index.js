import Button from "@src/components/common/Button";
import FilterTab from "@src/components/common/FilterTab";
import { ArrowDownOutlinedIcon, ClocklIcon, CloseIcon } from "@src/components/common/Icon";
import MiniInput from "@src/components/common/MiniInput";
import TextEditor from "@src/components/common/TextEditor";
import useLocalData from "@src/utility/hooks/useLocalData";
import { useState } from "react";
import "./styles.scss";
export default function PluginTask() {
    const [activeFilterTab, setActiveFilterTab] = useState("task");
    const filterTabList = [
        {
            activeIndicator: activeFilterTab,
            key: "account",
            onClick: () => setActiveFilterTab("account"),
        },
        {
            activeIndicator: activeFilterTab,
            key: "contacts",
            onClick: () => setActiveFilterTab("contacts"),
        },
        {
            activeIndicator: activeFilterTab,
            key: "opportunities",
            onClick: () => setActiveFilterTab("opportunities"),
        },
        {
            activeIndicator: activeFilterTab,
            key: "task",
            onClick: () => setActiveFilterTab("task"),
        },
        {
            activeIndicator: activeFilterTab,
            key: "activity",
            onClick: () => setActiveFilterTab("activity"),
        },
    ];
    const { store: { pluginModal }, dispatch, } = useLocalData();
    return (<>
      <div className={`task-plugin-modal ${pluginModal ? "right-[3vw]" : "right-[-125vw]"}`}>
        <section className="w-full flex justify-center items-center relative py-4 px-5 border-b border-crm-gray-300">
          <section className="flex items-center gap-x-2">
            <button className="flex items-center">
              <ArrowDownOutlinedIcon className="transform rotate-90" fill="#fff"/>
            </button>
            <span>1 of 4 task</span>
            <button className="flex items-center">
              <ArrowDownOutlinedIcon className="transform rotate-270" fill="#fff"/>
            </button>
          </section>
          <button className="right-[20px] top-1/2 transform translate-y-[-50%] absolute">
            <CloseIcon fill="#fff"/>
          </button>
        </section>
        <FilterTab tabButton={filterTabList} className="px-4"/>

        <section className="py-4 px-5 flex">
          <div>
            <h4 className="text-crm-gray-500">Email</h4>
            <h3 className="text-white my-2">Dimas Ariyanto</h3>
            <p className="text-crm-gray-500 text-[14px]">CEO & Operation - QisstPay Islambad Pakistan</p>
            <p className="text-crm-gray-500 my-2 text-[14px]">Step #1 Enterprise Custom - Email Only Sequence</p>
          </div>

          <p className="text-crm-red text-[14px]">Due 10 minutes </p>
        </section>

        <section className="flex  items-center gap-x-5 py-5 border-y border-crm-gray-300  px-3">
          <span className="text-white">To</span>
          <MiniInput type="search" variant="crm-transparent" className="block"/>
          <span className="flex text-crm-gray">
            CC <span className="ml-3">Bcc</span>
          </span>
        </section>
        <section className="flex items-center gap-x-5 py-5 border-y border-crm-gray-300  px-3">
          <label htmlFor="subject" className="whitespace-nowrap">
            Subject :
          </label>
          <input type="text" placeholder="Your subject" className="border-0 outline-0 bg-transparent w-[98%]"/>
        </section>
        <TextEditor />

        <section className="py-4 border-t flex gap-x-4 border-crm-gray-300 px-5">
          <button className="py-2 px-4 rounded-lg border border-crm-gray-600">
            <ClocklIcon fill="#AFAFAF"/>
          </button>{" "}
          <Button variant="primary">Send & Complete</Button>
        </section>
      </div>

      {pluginModal && (<div onClick={() => dispatch({
                type: "HIDE_PLUGIN_MODAL",
            })} className="fixed top-0 w-[100vw] duration-300 h-[100vh] opacity-90 bg-crm-dark"></div>)}
    </>);
}
