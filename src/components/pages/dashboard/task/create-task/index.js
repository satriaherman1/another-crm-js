import Dropdown from "@src/components/common/Dropdown";
import MiniInput from "@src/components/common/MiniInput";
import Button from "@src/components/common/Button";
export default function CreateTask(props) {
    const { setShowModal } = props;
    const timeZone = [
        {
            label: "GMT",
            value: "GMT",
        },
    ];
    const ownerList = [
        {
            label: "Jordan Olivas",
            value: "Jordan Olivas",
        },
    ];
    const prospectStageList = [
        {
            label: "No Stage",
            value: "no stage",
        },
    ];
    const accountList = [
        {
            label: "admin",
            value: "admin",
        },
    ];
    return (<div className="flex flex-col gap-y-6 my-5 ">
      <div className="flex flex-col md:flew-row gap-x-5 ">
        <section>
          <label htmlFor="firstName">First Name</label>
          <MiniInput variant="crm-transparent" id="firstName" type="text" className="block py-2 mt-2 min-w-[250px]"/>
        </section>
        <section>
          <label htmlFor="lastName">Last Name</label>
          <MiniInput variant="crm-transparent" id="lastName" type="text" className="block py-2 mt-2 min-w-[250px]"/>
        </section>
      </div>
      <div className="flex flex-col md:flew-row gap-x-5 ">
        <section>
          <label htmlFor="email">Email</label>
          <MiniInput variant="crm-transparent" id="email" type="text" className="block py-2 mt-2 min-w-[250px]"/>
        </section>
        <section>
          <label htmlFor="company">Company</label>
          <MiniInput variant="crm-transparent" id="lastName" type="text" className="block py-2 mt-2 min-w-[250px]"/>
        </section>
      </div>
      <div className="flex flex-col md:flew-row gap-x-5 ">
        <section>
          <label htmlFor="title">Title</label>
          <MiniInput variant="crm-transparent" id="title" type="text" className="block py-2 mt-2 min-w-[250px]"/>
        </section>
        <section>
          <label htmlFor="timeZone">Time Zone(IANA)</label>
          <Dropdown variant="outlined" optList={timeZone} id="timeZone" placeholder="Choose" className="block py-2  min-w-[250px]"/>
        </section>
      </div>
      <div className="flex flex-col md:flew-row gap-x-5 ">
        <section>
          <label htmlFor="owner">Owner</label>
          <Dropdown variant="outlined" optList={ownerList} id="owner" placeholder="Choose" className="block py-2  min-w-[250px]"/>
        </section>
        <section>
          <label htmlFor="prospectStage">Prospect Stage</label>
          <Dropdown variant="outlined" optList={prospectStageList} id="prospectStage" placeholder="Choose" className="block py-2  min-w-[250px]"/>
        </section>
      </div>
      <div className="flex flex-col md:flew-row gap-x-5 ">
        <section className="w-full">
          <label htmlFor="tags">Tags</label>
          <MiniInput placeholder="enter tags..." variant="crm-transparent" id="tags" type="text" className="block py-2 mt-2 min-w-[250px] w-full" isNoMaxWidth/>
        </section>
      </div>
      <div className="flex flex-col md:flew-row gap-x-5 ">
        <section className="w-full">
          <label htmlFor="account">Account</label>
          <Dropdown isNoMaxWidth variant="outlined" optList={accountList} id="prospectStage" placeholder="account" className="block py-2  min-w-[250px] w-full"/>
        </section>
      </div>

      <section className="flex justify-between items-center text-[14px]">
        <p>
          <a href="" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="" className="underline">
            Privacy Policy
          </a>{" "}
          .
        </p>

        <Button variant="primary" onClick={() => setShowModal(false)}>
          Submit
        </Button>
      </section>
    </div>);
}
