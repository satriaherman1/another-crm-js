import Button from "@src/components/common/Button";
import CrmDatatable from "@src/components/common/Datatable";
import FilterTabButton from "@src/components/common/FilterTabButton";
import { EditIcon, EyeIcon, TrashIcon } from "@src/components/common/Icon";
import { useState } from "react";
export default function SettingsProperty() {
    const [activeFilterButton, setActiveFilterButton] = useState("all properties");
    const filterList = [
        {
            key: "all properties",
            activeIndicator: activeFilterButton,
            onClick: () => setActiveFilterButton("all properties"),
        },
        {
            key: "deleted scenes",
            activeIndicator: activeFilterButton,
            onClick: () => setActiveFilterButton("deleted scenes"),
        },
    ];
    const data = [
        {
            id: 1,
            name: "Anual Revenue",
            type: "Lorem Ipsum",
            model: "New Model",
        },
        {
            id: 2,
            name: "Azizah Mubashar",
            type: "Lorem Ipsum",
            model: "New Model",
        },
        {
            id: 3,
            name: "Jordan Olivas",
            type: "Lorem Ipsum",
            model: "New Model",
        },
        {
            id: 4,
            name: "Jordan Olivas",
            type: "Lorem Ipsum",
            model: "New Model",
        },
        {
            id: 5,
            name: "Jordan Olivas",
            type: "Lorem Ipsum",
            model: "New Model",
        },
        {
            id: 6,
            name: "Jordan Olivas",
            type: "Lorem Ipsum",
            model: "New Model",
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
            name: "Type",
            selector: (row) => row.type,
            sortable: true,
            reorder: true,
        },
        {
            id: 3,
            name: "Model",
            selector: (row) => row.model,
            sortable: true,
            reorder: true,
        },
        {
            id: 4,
            name: "Action ",
            selector: (row) => (<div className="flex gap-x-2">
          <button>
            <EyeIcon fill="#5D5FEF"/>
          </button>
          <button>
            <EditIcon fill="#FACB22"/>
          </button>
          <button>
            <TrashIcon fill="#FA2256"/>
          </button>
        </div>),
            sortable: true,
            reorder: true,
        },
    ];
    return (<div className="text-white max-w-[800px] my-7">
      <p className="my-8">
        Properties store information about a contact, company, deal, or ticket. Your HubSpot account includes a number of contact, company, deal, and ticket properties by default.
      </p>
      <div className="flex flex-col md:flex-row justify-between w-full my-4 lg:items-center">
        <FilterTabButton tabButton={filterList}/>
        <Button variant="blue" className="mt-9 lg:mt-0">
          Create Properties
        </Button>
      </div>

      <CrmDatatable data={data} columns={columns}/>

      <Button variant="primary" className="ml-auto block mt-5">
        Submit
      </Button>
    </div>);
}
