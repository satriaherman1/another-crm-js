import Button from "@src/components/common/Button";
import { ArrowDownOutlinedIcon, FilterOutlinedIcon } from "@src/components/common/Icon";
import { useState } from "react";
import "./styles.scss";
export default function NestedFilter(props) {
    const { label, icon, filters } = props;
    const [openFilter, setOpenFilter] = useState();
    return (<div className="relative text-white text-[14px]">
      <button onClick={() => setOpenFilter(!openFilter)} className="items-center flex p-2 font-normal rounded-md border border-crm-gray-350 ml-3 bg-crm-gray-200">
        {icon ?? <FilterOutlinedIcon />}
        <span className="ml-2 capitalize">{label}</span>
        <ArrowDownOutlinedIcon className="ml-3" fill="#fff"/>
      </button>
      <div className={`absolute min-w-[160px]  top-[100%] left-[0%] ${!openFilter ? "hidden z-30" : "block z-0"}`}>
        <div className="crm-check-all py-3 px-4 bg-crm-gray-300 flex items-center rounded-t-md w-full">
          <input type="checkbox"/>
          <span className="ml-2">All</span>
        </div>
        <div className="filter-list p-2 pb-0 bg-crm-dark-300 rounded-b-md">
          {filters.map((filter) => (<section className="flex flex-col p-2  w-full font-normal">
              <div className="flex">
                <input type="checkbox"/>
                <button onClick={(e) => e.currentTarget?.parentElement?.parentElement?.classList.toggle("open")} className="w-full flex">
                  <label className="ml-2 capitalize">{filter.name}</label>

                  <ArrowDownOutlinedIcon className="transform rotate-[270deg] ml-auto" fill="#98A5CD"/>
                </button>
              </div>
              <div className="filter-child-list ml-2 py-3">
                {filter.filterList.map((fl) => (<section className="flex py-2">
                    <input type="checkbox"/>
                    <label className="ml-2 block capitalize">{fl.label}</label>
                  </section>))}
              </div>
            </section>))}

          <Button onClick={() => setOpenFilter(false)} variant="primary" className="my-3 w-full">
            Apply
          </Button>
        </div>
      </div>
    </div>);
}
