import { LockIcon, MailIcon, MessageQuestionIcon } from "@src/config/pathImage";
import Input from "@src/components/common/Input";
import Button from "@src/components/common/Button";
import Checkbox from "@src/components/common/Checkbox";
import AuthLayout from "@src/layout/auth-layout";
import { NavLink } from "react-router-dom";
export default function SignIn() {
    return (<AuthLayout>
      <h2 className="text-[36px] mt-9 md:mt-0 font-semibold text-white leading-[120%]">Welcome to Another Crm</h2>
      <p className="text-crm-gray-600 mt-2">Create your account</p>

      <section className="mt-12 flex flex-col">
        <label htmlFor="" className="text-white">
          Email Address
        </label>
        <Input icon={MailIcon} type="text" placeholder="Enter your email address"/>
      </section>
      <section className="mt-6 flex flex-col">
        <label htmlFor="" className="text-white">
          Password
        </label>
        <Input icon={LockIcon} type="password" placeholder="Minimum 8 characters"/>
      </section>

      <Checkbox label="Forgot Password" className="text-crm-gray-600 text-[14px] mt-6"/>

      <Button variant="primary" className="w-full mt-6">
        Sign In
      </Button>

      <p className="mt-[5vh] text-white">
        don't have an account? <br />
        <NavLink to="/sign-up" className="text-crm-primary">
          Sign Up
        </NavLink>
      </p>

      <span className="ml-auto mt-20 block w-[fit-content] flex gap-2 items-center">
        <img src={MessageQuestionIcon} alt="" width="30px"/>
        <p className="text-white">Support</p>
      </span>
    </AuthLayout>);
}
