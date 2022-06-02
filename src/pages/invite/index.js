import Input from "@src/components/common/Input";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { LogoFullWhite, MailIcon } from "../../config/pathImage";

export default function Invite() {
  const navigate = useNavigate();
  const invitePeopleAction = () => {
    navigate("/dashboard");
  };
  return (
    <div className="bg-crm-dark text-white p-8 md:px-[10%] md:pt-[6%] h-full">
      <img src={LogoFullWhite} alt="" width="250px" />

      <h1 className="text-[36px] font-semibold mt-15 leading-[120%]">Invite people to your workspace</h1>
      <p className="font-light text-crm-gray-600 mt-5">our mission is to to Increase your productivity</p>

      <section className="mt-10 flex flex-col">
        <label htmlFor="" className="text-white font-semibold">
          Email Address
        </label>
        <Input placeholder="“Click enter to add another user" type="text" icon={MailIcon} />

        <Button onClick={invitePeopleAction} variant="primary" className="w-[fit-content] mt-6">
          Done
        </Button>
      </section>
    </div>
  );
}
