import Dropdown from "@src/components/common/Dropdown";
import { AddIcon, CallSlashIcon, ClocklIcon, HeadphoneIcon, LevelIcon, MicrophoneIcon, MoreRectangleIcon, PhoneFilledIcon, VoiceSquareIcon } from "@src/components/common/Icon";
import DashboardLayout from "@src/layout/dashboard-layout";
import KioskBoard from "kioskboard";
import { useEffect } from "react";
export default function Calls() {
    const callsFilter = [
        {
            label: "Log Call & Complete",
            value: "Log Call & Complete",
        },
    ];
    useEffect(() => {
        KioskBoard.run(".calls-keypad", {
            keysArrayOfObjects: [
                { "0": "A", "1": "B", "2": "C" },
                { "0": "D", "1": "E", "2": "F" },
            ],
            keysNumpadArrayOfNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            theme: "dark",
        });
    }, []);
    return (<DashboardLayout>
      <div className="bg-crm-dark-300 my-5  rounded-md text-white">
        <section className=" py-6 px-8">
          Calls
          <div className="flex gap-x-5  my-4">
            <div className="py-2 px-3 rounded-md bg-crm-gray-200 border border-crm-gray-300 w-[fit-content] flex items-center">
              <ClocklIcon />
            </div>
            <Dropdown className="bg-crm-gray-200 rounded" borderVariantClass="border border-crm-gray-300" variant="outlined" optList={callsFilter}/>
          </div>
        </section>
        <section className="bg-crm-gray-280 py-5 px-7 border-t border-crm-gray-200">
          <div className="flex flex-col lg:flex-row gap-y-5 justify-between">
            <div className="flex gap-x-2">
              <div className="py-3 px-5 rounded-md text-crm-yellow border border-crm-gray-300 bg-crm-gray-200 font-semibold w-[fit-content]">+1 8923 9293 42900</div>
              <button>
                <AddIcon fill="#0EC8CE"/>
              </button>
            </div>
            <div className="flex gap-x-2">
              <button>
                <MicrophoneIcon />
              </button>
              <button>
                <HeadphoneIcon />
              </button>
              <button>
                <MicrophoneIcon />
              </button>
            </div>
          </div>

          <div className="my-6 flex flex-col lg:flex-row gap-y-6 justify-between items-center">
            <section className="flex flex-col lg:flex-row gap-y-4 items-center">
              <img src={"/src/assets/img/avatar-example.png"} width={60} alt=""/>

              <div className="flex flex-col lg:ml-5">
                <h5 className="text-white font-semibold text-[20px]">Jordan Olivas</h5>
                <p className="text-crm-gray-600 mt-1 mb-0">Co-Founder & CEO</p>
              </div>

              <button className="bg-crm-red p-3 rounded-full lg:ml-12">
                <PhoneFilledIcon fill="#fff"/>
              </button>
            </section>

            <section className="flex items-center">
              <VoiceSquareIcon />
              <span className="ml-3">00.45</span>
              <div className="w-[2px] h-[25px] bg-crm-gray-300 block ml-3"></div>

              <button className="ml-6">
                <CallSlashIcon />
              </button>
              <button className="ml-6 p-2 rounded-md bg-crm-gray-300 border border-crm-gray-200">
                <MoreRectangleIcon />
              </button>
              <button className="ml-5">
                <LevelIcon />
              </button>
            </section>
          </div>
        </section>

        <section className="bg-crm-dark-300">
          <input onClick={() => {
            window === null || window === void 0 ? void 0 : window.scrollTo(0, 100);
        }} type="text" className="calls-keypad w-full border-0 py-4 text-white bg-transparent px-4 outline-0" data-kioskboard-type="numpad" placeholder="type phone number here"/>
        </section>
      </div>
    </DashboardLayout>);
}
