import Button from "@src/components/common/Button";
import Checkbox from "@src/components/common/Checkbox";
import InputRadio from "@src/components/common/InputRadio";
import useLocalData from "@src/utility/hooks/useLocalData";
import React, { useEffect, useState } from "react";
export default function DashboardTaskTable(props) {
  const { className, columns, rows, head, heading } = props;
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [datas, setDatas] = useState();

  useEffect(() => {
    const initRows = rows.map((r) => {
      r.checked = false;
      return r;
    });

    setDatas(initRows);
  }, []);

  const handleSelectAll = (e) => {
    const newDatas = datas.map((data) => {
      data.checked = e.target.checked;
      return data;
    });
    setIsCheckAll(e.target.checked);

    setDatas(newDatas);
  };

  const TableHeadAdvanced = () => (
    <section className="flex justify-between w-full pt-4 gap-10 items-center">
      <div className="flex ml-2 whitespace-nowrap">
        <Checkbox name="selectAll" id="selectAll" onChange={handleSelectAll} checked={isCheckAll} />
        <p className="text-white ml-4 w-[fit-content]">Upcoming Task</p>
      </div>
      <div className="flex items-center whitespace-nowrap">
        <p className="text-crm-mutted-blue">Sort By:</p>
        <InputRadio className="ml-3 " name="sort" label="Priority" />
        <InputRadio className="ml-2" name="sort" label="Prospec Engagement" />
      </div>
      <Button
        onClick={() =>
          dispatch({
            type: "SHOW_PLUGIN_MODAL",
          })
        }
        variant="primary"
        className="whitespace-nowrap ml-5"
      >
        Start 4 Task
      </Button>
    </section>
  );
  return (
    <div className={` overflow-x-scroll  `}>
      {head ?? <TableHeadAdvanced />}

      <section className="flex my-4 border-b border-crm-gray-350">{heading}</section>

      <table className={`${className ?? ""}  min-w-full relative block  dark:divide-gray-700 `}>
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            {/* <th scope="col" className="p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-all" className="sr-only">
              checkbox
            </label>
          </div>
        </th> */}
            {columns.map((c) => (
              <th scope="col" className={`${!c.display && "hidden"} py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400`}>
                {c.field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="  dark:bg-gray-800 dark:divide-gray-700">
          {datas !== undefined &&
            datas.map((r) => (
              <tr className="">
                <td className="p-2 w-4">
                  <div className="flex items-center">
                    <Checkbox
                      onChange={(e) => {
                        let currentData = r;
                        currentData.checked = e.target.checked;

                        const updatedData = [...datas, { ...currentData }];
                        let result = updatedData.filter((val, index, self) => index === self.findIndex((t) => t.id === val.id));
                        setDatas(result);
                      }}
                      checked={r.checked}
                    />
                  </div>
                </td>
                {r?.value?.map((val) => (
                  <td className="py-4 px-2 text-sm  font-medium text-white  dark:text-white">{val.value}</td>
                ))}
                {/* <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
              <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </a>
            </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
