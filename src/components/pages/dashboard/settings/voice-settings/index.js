import Button from "@src/components/common/Button";
import Dropdown from "@src/components/common/Dropdown";
import Input from "@src/components/common/Input";
import { MobileIcon } from "@src/config/pathImage";
export default function VoiceSettings() {
    const countryList = [
        {
            label: "Indonesia",
            value: "Indonesia",
        },
        {
            label: "Pakistan",
            value: "Pakistan",
        },
    ];
    const locationList = [
        {
            label: "Jepara",
            value: "Jepara",
        },
        {
            label: "Jakarta",
            value: "Jakarta",
        },
    ];
    return (<div className="text-white my-8 h-[65vh] ">
      <h5 className="text-[18px]">My Another CRM phone numbers</h5>
      <p className="mt-1 my-3 opacity-70">Select the number your prospects will see when you will call them.</p>

      <div className="flex flex-col lg:flex-row gap-x-3 lg:items-center lg:w-1/2">
        <Input icon={MobileIcon} type="search" placeholder="phone number" className="w-full py-2"/>
        <Button variant="blue" paddingClassName="py-2 px-3" className="h-[fit-content] w-[fit-content] mt-3 font-normal whitespace-nowrap">
          Add Phones
        </Button>
      </div>
      <section className="flex flex-col lg:flex-row gap-x-5 lg:w-1/2">
        <div className="mt-5 gap-x-3 items-center w-full lg:w-1/2">
          <label htmlFor="country">Select Country</label>
          <Dropdown className="block mt-2 w-full" variant="outlined" optList={countryList}/>
        </div>
        <div className="mt-5 gap-x-3 items-center w-full lg:w-1/2">
          <label htmlFor="country">Select Location</label>
          <Dropdown className="block mt-2 w-full" variant="outlined" optList={locationList}/>
        </div>
      </section>

      <div className="lg:w-1/2">
        <Button variant="primary" className="mt-6 block ml-auto">
          Submit
        </Button>
      </div>
    </div>);
}
