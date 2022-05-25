import Button from "@src/components/common/Button";
import Dropdown from "@src/components/common/Dropdown";
import Input from "@src/components/common/Input";
import CrmNotification from "@src/components/common/Notification";
import TextArea from "@src/components/common/Textarea";
import { MailIcon, MobileIcon } from "@src/config/pathImage";
import DashboardLayout from "@src/layout/dashboard-layout";
import { useState } from "react";
export default function Account() {
    const [showNotif, setShowNotif] = useState(true);
    const optList = [
        {
            label: "test",
            value: "test",
        },
    ];
    const cityList = [
        {
            label: "Jepara",
            value: "jepara",
        },
    ];
    return (<DashboardLayout>
      <div className="bg-crm-dark-300 px-5 py-6 mt-5 text-white flex justify-between flex-col lg:flex-row">
        <div>
          <div className="flex flex-col lg:flex-row gap-x-5">
            <section>
              <label htmlFor="firstName">First Name</label>
              <Input type="text" id="firstName" placeholder="first name" className="block py-2 w-full"/>
            </section>
            <section className="mt-3 md:mt-0">
              <label htmlFor="lastName">Last Name</label>
              <Input type="text" id="lastName" placeholder="last name" className="block py-2 w-full"/>
            </section>
          </div>
          <div className=" mt-5">
            <label htmlFor="">Emails</label>
            <div className="flex gap-x-3 items-center">
              <Input icon={MailIcon} type="search" placeholder="last name" className="w-full py-2"/>
              <Button variant="blue" paddingClassName="py-2 px-3" className="h-[fit-content] mt-3 font-normal">
                Add
              </Button>
            </div>
          </div>
          <div className=" mt-5">
            <label htmlFor="">Phone</label>
            <div className="flex gap-x-3 items-center">
              <Input icon={MobileIcon} type="search" placeholder="last name" className="w-full py-2"/>
              <Button variant="blue" paddingClassName="py-2 px-3" className="h-[fit-content] mt-3 font-normal">
                Add
              </Button>
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="">Birth Date (MM/DD/YYYY)</label>
            <div className="flex gap-x-3 items-center">
              <Input type="text" placeholder="MM" className="w-[70px] py-2"/>
              <Input type="text" placeholder="DD" className="w-[70px] py-2"/>
              <Input type="text" placeholder="YYYY" className="w-[87px] py-2"/>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="address1">Address 1</label>
            <div className="flex gap-x-3 items-center">
              <Input id="address1" type="text" placeholder="Address 1" className="w-full py-2"/>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="address2">Address 2</label>
            <div className="flex gap-x-3 items-center">
              <Input id="address2" type="text" placeholder="Address 2" className="w-full py-2"/>
            </div>
          </div>
          <div className="mt-5 gap-x-4 flex">
            <section className="w-full">
              <label htmlFor="state">State</label>
              <div className="flex gap-x-3 items-center">
                <Dropdown variant="outlined" optList={optList} placeholder="Address 2" className="w-full py-2"/>
              </div>
            </section>
            <section className="w-full">
              <label htmlFor="city">City</label>
              <div className="flex gap-x-3 items-center">
                <Dropdown variant="outlined" optList={cityList} placeholder="Address 2" id="city" className="w-full py-2"/>
              </div>
            </section>
          </div>
        </div>

        <div className="md:w-1/2">
          <section>
            <label htmlFor="">Personal Note</label>
            <TextArea className="block w-full" rows={6} placeholder="personal note"></TextArea>
          </section>
          <section className="mt-5">
            <label htmlFor="customField">Custom Field</label>
            <Input type="text" id="customField" placeholder="custom" className="block py-2 w-full"/>
          </section>
          <section className="mt-5">
            <label htmlFor="customField">Account</label>
            <Dropdown className="w-full mt-3" variant="outlined" optList={optList}/>
          </section>

          <section className="flex mt-5">
            <Button variant="primary">Save Changes</Button>
          </section>
        </div>
      </div>
      <CrmNotification visible={showNotif} onClose={() => setShowNotif(false)} title="Register Notification" message="An email has been sent to your for verification! Please verify your account from there."/>
    </DashboardLayout>);
}
