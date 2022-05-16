import { MessageQuestionIcon } from "@src/config/pathImage";
import Button from "@src/components/common/Button";
import Checkbox from "@src/components/common/Checkbox";
import AuthLayout from "@src/layout/auth-layout";
import { useNavigate } from "react-router-dom";
import CrmOtpInput from "@src/components/common/OtpInput";
import { useState } from "react";
export default function Verification() {
    const [otpValue, setOtpValue] = useState("");
    const [email, setEmail] = useState("satriaherman967@gmail.com");
    const navigate = useNavigate();
    const submitVerifiCation = () => {
        navigate("/invite");
    };
    return (<AuthLayout>
      <h2 className="text-[36px] mt-9 md:mt-0 font-semibold text-white leading-[120%]">We just emailed you</h2>
      <p className="text-crm-gray-600 mt-2">Please enter the code verification we emailed you</p>
      <a href={`http://mailto:${email}`} target="_blank" className="text-crm-primary">
        {email}
      </a>

      <section className="mt-12 flex flex-col">
        <label htmlFor="" className="text-white">
          Confirmation Code
        </label>
        <CrmOtpInput className="my-5" value={otpValue} handleChange={(val) => setOtpValue(val)}/>
      </section>

      <Checkbox label="Forgot Password" className="text-crm-gray-600 text-[14px] mt-6"/>

      <Button onClick={submitVerifiCation} variant="primary" className="w-full mt-6">
        Next
      </Button>

      <button className="bg-transparent border-0 text-crm-gray-600 font-normal mt-4">Resend verification code</button>

      <span className="ml-auto mt-20 block w-[fit-content] flex gap-2 items-center">
        <img src={MessageQuestionIcon} alt="" width="30px"/>
        <p className="text-white">Support</p>
      </span>
    </AuthLayout>);
}
