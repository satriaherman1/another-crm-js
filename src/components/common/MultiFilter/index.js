import Button from "@src/components/common/Button";
import { ArrowDownOutlinedIcon, CloseIcon, FilterOutlinedIcon } from "@src/components/common/Icon";
import { useEffect, useState } from "react";
import InputRadio from "../InputRadio";
import "./styles.scss";

export default function MultiFilter(props) {
  const { icon, filters, state, setState } = props;
  const [openFilter, setOpenFilter] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <>
      <div
        className="relative text-white text-[14px]"
        style={{
          zIndex: 20,
        }}
      >
        <section className={`relative filter-button ${isFiltered ? "filtered" : ""}`}>
          <button onClick={() => setOpenFilter(!openFilter)}>{icon ?? <FilterOutlinedIcon />}</button>
          <button
            className="clear-filter"
            onClick={() => {
              setIsFiltered(false);
            }}
          >
            <CloseIcon fill="white" width="14" height="14" />
          </button>
        </section>
        <div className={`absolute min-w-[160px]  top-[100%] md:left-[-200%] ${!openFilter ? "hidden z-30" : "block z-0"}`}>
          <div className="crm-check-all py-3 px-4 bg-crm-gray-300 flex items-center rounded-t-md w-full">
            <span className="mx-auto">Sort By</span>
          </div>
          <div className="filter-list p-2 pb-0 bg-crm-dark-300 rounded-b-md">
            {filters !== undefined &&
              filters.length > 1 &&
              filters.map((filter) => (
                <section key={filter.name} className="flex flex-col p-2  w-full font-normal">
                  <div className="flex items-center">
                    <InputRadio
                      type="radio"
                      value={filter.name}
                      name={filter.key}
                      onChange={(e) => {
                        setState(e.target.value);
                        !isFiltered && setIsFiltered(true);
                      }}
                      checked={filter.checked}
                    />
                    <span className="capitalize">{filter.name}</span>
                  </div>
                </section>
              ))}

            <Button onClick={() => setOpenFilter(false)} variant="primary" className="my-3 w-full">
              Apply
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`${!openFilter && "hidden"} fixed top-0 left-0 w-[100vw] h-[100vh] z-10" `}
        onClick={() => {
          setOpenFilter(false);
          console.log("test");
        }}
      ></div>
    </>
  );
}
