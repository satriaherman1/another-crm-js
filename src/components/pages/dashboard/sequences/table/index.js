import { MoreIcon } from "@src/components/common/Icon";
import Switch from "@src/components/common/Switch";
import Tooltip from "@src/components/common/Tooltip";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SequencesTable(props) {
  const { data } = props;
  const navigate = useNavigate();

  const DetailButton = () => {
    const [showDetailsButton, setShowDetailsButton] = useState(false);
    return (
      <div className="relative self-center h-[fit-content]">
        <button className="z-[7] block" onClick={() => setShowDetailsButton(true)}>
          <MoreIcon />
        </button>
        <ul className={`${!showDetailsButton && "hidden"} cursor-pointer z-[6] bg-crm-gray-300 rounded-md text-[14px] top-[100%] left-1/2  transform -translate-y-1/2 -translate-x-1/2 absolute`}>
          <li className="px-3 py-2 " onClick={() => navigate("detail")}>
            Details
          </li>
        </ul>

        {showDetailsButton && <div className={`fixed w-[100vw] h-[100vh] top-0 left-0 z-[5] `} onClick={() => setShowDetailsButton(false)}></div>}
      </div>
    );
  };

  return (
    <div className="overflow-x-scroll md:overflow-x-visible">
      {data.map((d, key) => (
        <section className="flex items-center gap-x-16 justify-between py-6 ">
          <div className="flex min-w-[202px]">
            <Tooltip content="pause sequence" position="top">
              <Switch />
            </Tooltip>
            <h4 className="text-[20px] ml-3 whitespace-nowrap">{d.name}</h4>
          </div>

          <div className="flex gap-x-5">
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] text-center mb-0">{d.active}</h3>
              <p className="opacity-80 ">Active</p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] text-center mb-0">{d.due}</h3>
              <p className="opacity-80 ">Due</p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] text-center mb-0">{d.total}</h3>
              <p className="opacity-80 ">Total</p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] text-center mb-0">{d.finished}</h3>
              <p className="opacity-80 ">Finished</p>
            </div>
          </div>
          <div className="flex gap-x-5">
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] text-center mb-0">{d.delivered}</h3>
              <p className="opacity-80 ">Delivered</p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] text-center mb-0">{d.opened}</h3>
              <p className="opacity-80 ">Opened</p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] text-center mb-0">{d.replied}</h3>
              <p className="opacity-80 ">Replied</p>
            </div>

            <Tooltip className="ml-9" content={d.profile.name} position="top">
              <img className="block" alt={d.profile.name} src={d.profile.imageUrl} width={50} />
            </Tooltip>

            <DetailButton />
          </div>
        </section>
      ))}
    </div>
  );
}
