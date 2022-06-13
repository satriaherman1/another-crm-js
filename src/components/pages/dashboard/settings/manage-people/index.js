import InputWithSelect from "@src/components/common/InputWithSelect";
import MiniInput from "@src/components/common/MiniInput";
import { SearchIcon } from "@src/config/pathImage";
import Button from "@src/components/common/Button";
import CrmDatatable from "@src/components/common/Datatable";
import { ArrowDownOutlinedIcon, SettingDottedIcon } from "@src/components/common/Icon";
import { memo, useState } from "react";
import FormatService from "@src/utility/services/format.service";
function SettingsManagePeople() {
  const formatService = new FormatService();
  const SettingButton = () => {
    const [showListButton, setShowListButton] = useState(false);
    return (
      <div className="relative overflow-visible text-white">
        <button className="mx-auto block ml-5" onClick={() => setShowListButton(true)}>
          <SettingDottedIcon />
        </button>

        <ul className={`${!showListButton && "hidden"} cursor-pointer z-[6] bg-crm-gray-300 rounded-md text-[14px] top-[100%] left-1/2  transform -translate-y-1/2 -translate-x-1/2 absolute`}>
          <li className="px-3 py-2 ">Edit</li>
          <li className="px-3 py-2 border-t border-crm-gray-450 0">Delete</li>
        </ul>

        {showListButton && <div className={`fixed w-[100vw] h-[100vh] top-0 left-0 z-[5] `} onClick={() => setShowListButton(false)}></div>}
      </div>
    );
  };
  const data = [
    {
      id: 1,
      name: "Azizah Mubashar",
      email: "azizah.mubashar@qisstpay.com",
      role: "member",
      last_active: "Mar 28",
    },
    {
      id: 2,
      name: "Azizah Mubashar",
      email: "azizah.mubashar@qisstpay.com",
      role: "member",
      last_active: "Mar 28",
    },
  ];
  const columns = [
    {
      id: 1,
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: "Email",
      selector: (row) => formatService.truncate(row.email, 12),
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: "Role",
      selector: (row) => (
        <button className="py-2 px-3 bg-crm-green-800 box-border text-crm-green font-semibold rounded flex items-center">
          <span>{row.role}</span> <ArrowDownOutlinedIcon className="ml-2" />
        </button>
      ),
      sortable: true,
      reorder: true,
    },
    {
      id: 4,
      name: "Last Active",
      selector: (row) => row.last_active,
      sortable: true,
      reorder: true,
    },
    {
      id: 5,
      name: "Settings",
      selector: () => <SettingButton />,
      sortable: true,
      reorder: true,
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mt-6 lg:items-center">
        <div className="text-white ">
          <span className="">Full Member (8)</span>
          <span className="ml-4 text-crm-gray-600">Guest (0/33)</span>
        </div>

        <div className="flex flex-col lg:flex-row md:w-[70%] lg:items-center ">
          <MiniInput icon={SearchIcon} variant="crm-gray" placeholder="Search by name or email" type="text" className="py-3 mt-3 lg:mt-0 md:w-[60%]" />
          <InputWithSelect variant="crm-gray" placeholder="Invite by Email" className="mt-3 lg:mt-0 mx-3 self-center" />

          <Button variant="primary" className="whitespace-nowrap mt-5 lg:mt-0 w-[fit-content]">
            Send Invite
          </Button>
        </div>
      </div>

      <CrmDatatable className="mt-10" columns={columns} data={data} selectableRows pagination />
    </>
  );
}
export default memo(SettingsManagePeople);
