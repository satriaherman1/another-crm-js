import Checkbox from "@src/components/common/Checkbox";
import React from "react";
export default function DashboardTaskTable(props) {
    const { className, columns, rows, head, heading } = props;
    return (<div className={` overflow-x-scroll  `}>
      {head ?? ""}

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
            {columns.map((c) => (<th scope="col" className={`${!c.display && "hidden"} py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400`}>
                {c.field}
              </th>))}

            {/* <th scope="col" className="p-4">
          <span className="sr-only">Edit</span>
        </th> */}
          </tr>
        </thead>
        <tbody className="  dark:bg-gray-800 dark:divide-gray-700">
          {rows.map((r) => (<tr className="">
              <td className="p-2 w-4">
                <div className="flex items-center">
                  <Checkbox />
                </div>
              </td>
              {r?.value?.map((val) => (<td className="py-4 px-2 text-sm  font-medium text-white  dark:text-white">{val.value}</td>))}
              {/* <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
              <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </a>
            </td> */}
            </tr>))}
        </tbody>
      </table>
    </div>);
}
