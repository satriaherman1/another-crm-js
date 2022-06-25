import CrmDatatable from "@src/components/common/Datatable";
import Dropdown from "@src/components/common/Dropdown";
import MiniInput from "@src/components/common/MiniInput";
import { SearchIcon } from "@src/config/pathImage";

export default function SequenceProspects() {
  const data = [
    {
      id: 1,
      name: "Azizah Mubashar",
      company: "Ailee Studio",
      stage: "",
      tags: "",
      persona: "",
      last_active: "Mar 28",
      email: "",
      status: ["mail", "phone"],
      owner: "Jordan Olivas",
      last_contacted: "5H",
    },
  ];
  const columns = [
    {
      id: 1,
      name: "Name",
      selector: (row) => (
        <div>
          {" "}
          <h6 className="text-white ">{row.name}</h6>
          <p className="text-mutted-blue mt-1">{row.company}</p>
        </div>
      ),
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: "Stage",
      selector: (row) => row.stage,
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: "Tags",
      selector: (row) => row.tags,
      sortable: true,
      reorder: true,
    },
    {
      id: 4,
      name: "Persona",
      selector: (row) => row.persona,
      sortable: true,
      reorder: true,
    },
    {
      id: 5,
      name: "Emails",
      selector: (row) => row.last_active,
      sortable: true,
      reorder: true,
    },
    {
      id: 5,
      name: "Status",
      selector: (row) => row.last_active,
      sortable: true,
      reorder: true,
    },
    {
      id: 5,
      name: "Owner",
      selector: (row) => row.owner,
      sortable: true,
      reorder: true,
    },
    {
      id: 5,
      name: "Last Contacted",
      selector: (row) => row.last_contacted,
      sortable: true,
      reorder: true,
    },
    {
      id: 5,
      name: "Action",
      selector: (row) => row.last_contacted,
      sortable: true,
      reorder: true,
    },
  ];

  const TableInfo = (props) => {
    return (
      <section className={`flex text-white ${props.className ?? ""} overflow-x-scroll`}>
        <div className="flex items-center py-2 px-5 border-r border-crm-gray-300">
          <h3 className=" text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Total</p>
        </div>
        <div className="flex items-center py-2 px-5 border-r border-crm-gray-300">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Pending</p>
        </div>
        <div className="flex items-center py-2 px-5 border-r border-crm-gray-300">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600 whitespace-nowrap">In Progress</p>
        </div>
        <div className="flex items-center py-2 px-5 ">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Paused</p>
        </div>
        <div className="flex items-center py-2 px-5 ">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Finished</p>
        </div>
        <div className="flex items-center py-2 px-5 ">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Opened</p>
        </div>
        <div className="flex items-center py-2 px-5 ">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Clicked</p>
        </div>
        <div className="flex items-center py-2 px-5 ">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Replied</p>
        </div>
        <div className="flex items-center py-2 px-5 ">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Bounced</p>
        </div>
        <div className="flex items-center py-2 px-5 ">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Failed</p>
        </div>
        <div className="flex items-center py-2 px-5 ">
          <h3 className="text-[26px] font-semibold">0</h3>
          <p className="ml-3 text-crm-gray-600">Called</p>
        </div>
      </section>
    );
  };

  return (
    <div className="p-3">
      <section className="flex my-3 gap-3">
        <div className="filter-box">View & Filters</div>
        <Dropdown
          variant="outlined"
          borderVariantClass="border border-[#757b8c]"
          optList={[
            {
              label: "test",
              value: "test",
            },
          ]}
          className="w-[80px] bg-crm-gray-200 text-white font-normal rounded-md border-crm-gray-350"
        />
        <MiniInput variant="crm-gray" className="max-w-[300px]" placeholder="Search Prospect" icon={SearchIcon} />
      </section>
      <TableInfo />
      <CrmDatatable className="mt-2" columns={columns} data={data} selectableRows pagination />
    </div>
  );
}
