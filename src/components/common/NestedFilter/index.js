import Button from "@src/components/common/Button";
import { ArrowDownOutlinedIcon, CloseIcon, FilterOutlinedIcon } from "@src/components/common/Icon";
import { useEffect, useState } from "react";
import "./styles.scss";

export default function NestedFilter(props) {
  const { label, icon, filters, state, setState } = props;
  const [openFilter, setOpenFilter] = useState();
  const [filtered, setFiltered] = useState([]);
  const [filteredLen, setFilteredLen] = useState([]);

  useEffect(() => {
    const initState = filters.map((filter) => {
      filter.checked = false;
      filter.filterList.map((fl) => {
        fl.checked = false;
      });
      return filter;
    });
    setState(initState);
  }, []);

  useEffect(() => {
    const checkFilterChecked = (filter) => {
      return filter.checked;
    };
    const checkedChildFilter = state.map((f) => f.filterList.filter(checkFilterChecked));
    const checkedFilter = state.filter(checkFilterChecked);
    let ccfLenCount = 0;
    let ccfLen = checkedChildFilter.map((ccf) => ccf.length);
    ccfLen.map((ccf) => {
      ccfLenCount += ccf;
    });

    setFilteredLen(ccfLenCount + checkedFilter.length);
  }, [state]);

  return (
    <>
      <div
        className="relative text-white text-[14px]"
        style={{
          zIndex: 20,
        }}
      >
        <section className={`filter-button ${filteredLen > 0 && "filtered"}`}>
          <button className="flex items-center" onClick={() => setOpenFilter(!openFilter)}>
            {icon ?? <FilterOutlinedIcon />}
            <span className="ml-2 capitalize">{label}</span>
            <ArrowDownOutlinedIcon className="ml-3" fill="#fff" />
          </button>
          <button
            className="clear-filter"
            onClick={() => {
              const checkedChildFilter = state.map((f) => {
                f.checked = false;
                f.filterList.map((fl) => {
                  fl.checked = false;
                  return fl;
                });
                return f;
              });
              setState(checkedChildFilter);
            }}
          >
            <CloseIcon fill="white" width="14" height="14" />
          </button>
        </section>
        <div className={`absolute min-w-[160px]  top-[100%] left-[0%] ${!openFilter ? "hidden z-30" : "block z-0"}`}>
          <div className="crm-check-all py-3 px-4 bg-crm-gray-300 flex items-center rounded-t-md w-full">
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  let currentFilter = state.map((filter) => {
                    filter.checked = true;
                    filter.filterList.map((fl) => {
                      fl.checked = true;
                      return fl;
                    });
                    return filter;
                  });

                  setState(currentFilter);
                }
              }}
            />
            <span className="ml-2">All</span>
          </div>
          <div className="filter-list p-2 pb-0 bg-crm-dark-300 rounded-b-md">
            {state !== undefined &&
              state.length > 1 &&
              state.map((filter) => (
                <section key={filter.name} className="flex flex-col p-2  w-full font-normal">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        let currentFilter = filter;
                        currentFilter.checked = !filter.checked;
                        if (currentFilter.checked) {
                          currentFilter.filterList = currentFilter.filterList.map((r) => {
                            r.checked = true;
                            return r;
                          });
                        }

                        const updatedState = [...state, { ...currentFilter }];
                        let result = updatedState.filter((val, index, self) => index === self.findIndex((t) => t.name === val.name));
                        setState(result);
                      }}
                      checked={filter.checked}
                    />
                    <button onClick={(e) => e.currentTarget?.parentElement?.parentElement?.classList.toggle("open")} className="w-full flex">
                      <label className="ml-2 capitalize">{filter.name}</label>

                      <ArrowDownOutlinedIcon className="transform rotate-[270deg] ml-auto" fill="#98A5CD" />
                    </button>
                  </div>
                  <div className="filter-child-list ml-2 py-3">
                    {filter.filterList.map((fl) => (
                      <section key={fl.label} className="flex py-2">
                        <input
                          type="checkbox"
                          onChange={() => {
                            let currentFilter = filter;
                            currentFilter.filterList = currentFilter.filterList.map((crfl) => {
                              if (crfl.label === fl.label) {
                                crfl.checked = !crfl.checked;
                              }
                              return crfl;
                            });

                            const updatedState = [...state, { ...currentFilter }];
                            const result = updatedState.filter((val, index, self) => index === self.findIndex((t) => t.name === val.name));

                            setState(result);
                          }}
                          checked={fl.checked}
                        />
                        <label className="ml-2 block capitalize">{fl.label}</label>
                      </section>
                    ))}
                  </div>
                </section>
              ))}

            <Button
              onClick={() => {
                setFiltered(state);
                setOpenFilter(false);
              }}
              variant="primary"
              className="my-3 w-full"
            >
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
