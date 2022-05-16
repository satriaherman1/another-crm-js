import { LogoFullWhite } from "@src/config/pathImage";
import { HamburgerMenuIcon } from "@src/components/common/Icon";
import DashboardNavList from "./dashboard-nav-list";
import { useState } from "react";
import DashboardHeader from "./dashboard-header";
import "./styles.scss";
export default function DashboardLayout(props) {
    const { children } = props;
    const [isMinimize, setIsMinimize] = useState(false);
    const [isOpenNav, setIsOpenNav] = useState(false);
    return (<>
      <section className="fixed  top-0 z-30 w-full md:hidden  sidebar overflow-scroll duration-200 p-3  bg-crm-dark-300  text-crm-mutted-blue h-[fit-content]">
        <div className="flex justify-between px-3">
          {!isMinimize && <img src={LogoFullWhite} alt="" width={170}/>}

          <button className={`bg-none border-0 ${isMinimize && "ml-[20px]"}`} onClick={() => setIsOpenNav(!isOpenNav)}>
            <HamburgerMenuIcon />
          </button>
        </div>
      </section>

      <section className={`${isOpenNav ? "left-0" : "left-[-100vw]"} w-2/3 fixed  z-50 md:hidden  sidebar overflow-scroll duration-200 py-3  bg-crm-dark-300  text-crm-mutted-blue h-[100vh]`}>
        <img src={LogoFullWhite} alt="" width={170} className="block mx-2"/>
        <p className="text-crm-mutted-blue uppercase mt-8 pl-6">Menu</p>

        <DashboardNavList isMinimize={isMinimize}/>
      </section>

      <div className={`${!isOpenNav ? "hidden" : ""} nav-background fixed top-0 opacity-80 w-[100vw] h-[100vh] bg-crm-dark z-40`} onClick={() => setIsOpenNav(!isOpenNav)}></div>

      <div className="flex h-full  bg-crm-dark pr-5 ">
        <section className={`hidden md:block sidebar overflow-scroll duration-200 py-8  bg-crm-dark-300 max-w-[260px]  text-crm-mutted-blue h-full ${isMinimize ? "w-[90px]" : "w-full"}`}>
          <div className="flex justify-between px-3">
            {!isMinimize && <img src={LogoFullWhite} alt="" width={170}/>}

            <button className={`bg-none border-0 ${isMinimize && "ml-[20px]"}`} onClick={() => setIsMinimize(!isMinimize)}>
              <HamburgerMenuIcon />
            </button>
          </div>

          {!isMinimize && <p className="text-crm-mutted-blue uppercase mt-8 pl-6">Menu</p>}

          <DashboardNavList isMinimize={isMinimize}/>
        </section>

        <section className="crm-dashboard-content mt-15 md:mt-3 ml-8 w-full overflow-y-scroll">
          <DashboardHeader />
          {children}
        </section>
      </div>
    </>);
}
