import Button from "@src/components/common/Button";
import Checkbox from "@src/components/common/Checkbox";
import InputRadio from "@src/components/common/InputRadio";
import useLocalData from "@src/utility/hooks/useLocalData";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ArrowDownOutlinedIcon } from "../../../common/Icon";
import "./styles.scss";

export default function DashboardTaskTable(props) {
  const { className, columns, rows, head, heading } = props;
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [datas, setDatas] = useState(rows);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  const { dispatch } = useLocalData();

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

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setDatas(rows.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(rows.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % rows.length;
    setItemOffset(newOffset);
    console.log(event.selected, itemsPerPage, rows.length);
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
    <div>
      <div className={` overflow-x-scroll  `}>
        {head ?? <TableHeadAdvanced />}

        <section className="flex my-4 border-b border-crm-gray-350">{heading}</section>

        <table className={`${className ?? ""}  min-w-full relative block  dark:divide-gray-700 `}>
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              {columns.map((c) => (
                <th scope="col" className={`${!c.display && "hidden"} py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400`}>
                  {c.field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="  dark:divide-gray-700">
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
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        className="crm-react-paginate ml-auto mt-4 mb-2"
        activeLinkClassName="active-paginate"
        breakLabel="..."
        nextLabel={<ArrowDownOutlinedIcon fill="#fff" className="transform rotate-[-90deg]" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<ArrowDownOutlinedIcon fill="#fff" className="transform rotate-90" />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
