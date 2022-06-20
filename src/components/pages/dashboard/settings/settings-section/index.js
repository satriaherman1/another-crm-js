import Button from "@src/components/common/Button";
import Input from "@src/components/common/Input";

export default function SettingSection() {
  return (
    <div className="text-white py-4">
      <label>Invited By User Email</label>
      <Input className="block w-full" isNoMaxWidth />
      <span className="text-crm-green my-2 inline-block">It will charge according by subscription interval</span>
      <Button variant="primary" className="ml-auto block mt-6">
        Submit
      </Button>
    </div>
  );
}
