import Button from "@src/components/common/Button";
import Checkbox from "@src/components/common/Checkbox";
import InputRadio from "@src/components/common/InputRadio";
export default function DashboardTaskTable(props) {
    const { className, columns, rows, head } = props;
    return (<div className="overflow-x-scroll py-8 ">
      {head && (<section className="flex justify-between w-full gap-10 items-center">
          <div className="flex ml-2 whitespace-nowrap">
            <Checkbox />
            <p className="text-white ml-4 w-[fit-content]">Upcoming Task</p>
          </div>
          <div className="flex items-center whitespace-nowrap">
            <p className="text-crm-mutted-blue">Sort By:</p>
            <InputRadio className="ml-3 " name="sort" label="Priority"/>
            <InputRadio className="ml-2" name="sort" label="Prospec Engagement"/>
          </div>
          <Button variant="primary" className="whitespace-nowrap ml-5">
            Start 4 Task
          </Button>
        </section>)}

      <section className="flex my-4 border-b border-crm-gray-350">
        <div className="flex items-center py-2 px-3 border-r border-crm-gray-400">
          <h3 className="text-crm-primary text-[32px] font-semibold">4</h3>
          <p className="ml-3 text-crm-gray-600">Total</p>
        </div>
        <div className="flex items-center py-2 px-3 border-r border-crm-gray-400">
          <h3 className="text-[32px] font-semibold">3</h3>
          <p className="ml-3 text-crm-gray-600">Email</p>
        </div>
        <div className="flex items-center py-2 px-3 border-r border-crm-gray-400">
          <h3 className="text-[32px] font-semibold">1</h3>
          <p className="ml-3 text-crm-gray-600">Linkedin</p>
        </div>
      </section>

      <table className={`${className !== null && className !== void 0 ? className : ""}  min-w-full relative block  dark:divide-gray-700 `}>
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
          {rows.map((r) => {
            var _a;
            return (<tr className="">
              <td className="p-2 w-4">
                <div className="flex items-center">
                  <Checkbox />
                </div>
              </td>
              {(_a = r === null || r === void 0 ? void 0 : r.value) === null || _a === void 0 ? void 0 : _a.map((val) => (<td className="py-4 px-2 text-sm  font-medium text-white  dark:text-white">{val.value}</td>))}
              {/* <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </a>
                </td> */}
            </tr>);
        })}
        </tbody>
      </table>
    </div>);
}
