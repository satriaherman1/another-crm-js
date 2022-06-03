import Button from "@src/components/common/Button";
import Confirm from "@src/components/common/Confirm";
import CrmDatatable from "@src/components/common/Datatable";
import FilterTabButton from "@src/components/common/FilterTabButton";
import { EditIcon, EyeIcon, TrashIcon, WarningIcon } from "@src/components/common/Icon";
import Modal from "@src/components/common/Modal";
import CreateProperty from "@src/components/pages/dashboard/settings/property/create";
import { useState } from "react";

export default function SettingsProperty() {
  const [activeFilterButton, setActiveFilterButton] = useState("all properties");
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const filterList = [
    {
      key: "all properties",
      activeIndicator: activeFilterButton,
      onClick: () => setActiveFilterButton("all properties"),
    },
    {
      key: "archived",
      activeIndicator: activeFilterButton,
      onClick: () => setActiveFilterButton("archived"),
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
      selector: (row) => (
        <div className="flex gap-x-2">
          <button>
            <EyeIcon fill="#5D5FEF" />
          </button>
          <button>
            <EditIcon fill="#FACB22" />
          </button>
          <button onClick={() => setShowConfirmDelete(true)}>
            <TrashIcon fill="#FA2256" />
          </button>
        </div>
      ),
      sortable: true,
      reorder: true,
    },
  ];
  return (
    <>
      <div className="text-white max-w-[800px] my-7">
        <p className="my-8">
          Properties store information about a contact, company, deal, or ticket. Your HubSpot account includes a number of contact, company, deal, and ticket properties by default.
        </p>
        <div className="flex flex-col md:flex-row justify-between w-full my-4 lg:items-center">
          <FilterTabButton tabButton={filterList} />
          <Button onClick={() => setShowModalCreate(true)} variant="blue" className="mt-9 lg:mt-0">
            Create Properties
          </Button>
        </div>

        <CrmDatatable data={data} columns={columns} pagination />

        <Button variant="primary" className="ml-auto block mt-5">
          Submit
        </Button>
      </div>

      <Modal visible={showModalCreate} onClose={() => setShowModalCreate(false)} title={`create property`}>
        <CreateProperty />
      </Modal>

      <Confirm
        title="Confirm Delete"
        icon={
          <div className="bg-crm-red-100 h-[fit-content] p-3 rounded-full bg">
            <WarningIcon />
          </div>
        }
        description="Are you sure you want to delete this account? All of your data will be permanently removed from our servers forever. This action cannot be undone."
        visible={showConfirmDelete}
        nextButtonContent="Delete"
        onClose={() => setShowConfirmDelete(false)}
      />
    </>
  );
}
