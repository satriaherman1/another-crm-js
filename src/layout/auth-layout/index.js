import { LogoFull } from "@src/config/pathImage";
import "./styles.scss";
export default function AuthLayout(props) {
    const { className, children } = props;
    return (<div className={`bg-crm-dark h-[100vh]  overflow-y-scroll ${className !== null && className !== void 0 ? className : ""}`}>
      <div className="flex flex-col md:flex-row items-center ">
        <div className="sign-in-banner hidden md:block p-7 flex flex-col">
          <div className="banner-content p-5 h-full">
            <img src={LogoFull} width="200px" alt=""/>

            <h2 className="text-[28px] mt-[20%]">We are here</h2>
            <h1 className="capitalize text-[48px] leading-[120%] font-semibold mt-5">to Increase your Productivity</h1>
            <p className="mt-10 font-light leading-[125%]">lLorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices adipiscing accumsan.</p>

            <div className="mt-[50%] block">
              <p>
                {" "}
                By clicking the button above, you agree to our <br />{" "}
                <a href="" className="underline bold">
                  Terms of Service and Privacy Policy .
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="h-full py-9 px-6 md:ml-16 md:w-[40%] justify-self-center">{children}</div>
      </div>
    </div>);
}
