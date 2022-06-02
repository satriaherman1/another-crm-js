import Button from "@src/components/common/Button";
import CrmDatatable from "@src/components/common/Datatable";
import Dropdown from "@src/components/common/Dropdown";
import FilterTabButton from "@src/components/common/FilterTabButton";
import MiniInput from "@src/components/common/MiniInput";

export default function CreateProperty() {
  const typePropertiesList = [
    {
      label: "Account",
      value: "account",
    },
    {
      label: "Contact",
      value: "contact",
    },
    {
      label: "Devon Webb",
      value: "devon webb",
    },
    {
      label: "Opportunity",
      value: "opportunity",
    },
    {
      label: "Task",
      value: "task",
    },
  ];
  return (
    <form className="text-white max-w-[800px] my-7 flex flex-col gap-y-4">
      <section className="flex flex-col gap-2">
        <label>Name</label>
        <MiniInput variant="crm-transparent" placeholder="Annual Revenue" isNoMaxWidth />
      </section>
      <section className="flex flex-col gap-2">
        <label>Type Properties</label>
        <Dropdown optList={typePropertiesList} variant="outlined" id="type" className="block py-2 min-w-[250px] w-full" isNoMaxWidth />
      </section>
      <section className="flex flex-col gap-2">
        <label>Field Type</label>
        <Dropdown optList={typePropertiesList} variant="outlined" id="field" className="block py-2 min-w-[250px] w-full" isNoMaxWidth />
      </section>
      <Button variant="primary" className="ml-auto block mt-5">
        Submit
      </Button>
    </form>
  );
}
