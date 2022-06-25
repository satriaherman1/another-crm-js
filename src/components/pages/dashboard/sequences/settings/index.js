import Dropdown from "@src/components/common/Dropdown";
import Input from "@src/components/common/Input";

export default function SequenceSettings() {
  const sequenceTypeList = [
    {
      label: "step by day internal",
      value: "step by day internal",
    },
  ];
  return (
    <div className="text-white px-7 py-4">
      <h4 className="text-[20px] font-semibold">General Information</h4>
      <div className="flex flex-col gap-y-2">
        <section className="flex flex-col  mt-3">
          <label className="block">Name</label>
          <Input type="text" className="block" />
        </section>
        <section className="flex flex-col gap-y-2 mt-3">
          <label className="block">Sequence Type</label>
          <Dropdown optList={sequenceTypeList} type="text" className="block" paddingClassName="py-4 pl-3 pr-[30px]" />
        </section>
        <section className="flex flex-col gap-y-2 mt-3">
          <label className="block">Delivery Schedule</label>
          <Dropdown optList={sequenceTypeList} type="text" className="block" paddingClassName="py-4 pl-3 pr-[30px]" />
        </section>
      </div>
    </div>
  );
}
