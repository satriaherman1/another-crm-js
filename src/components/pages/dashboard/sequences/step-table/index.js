import Switch from "@src/components/common/Switch";

export default function StepTable(props) {
  const { data } = props;

  return (
    <div className=" md:overflow-x-visible text-white">
      {data.map((d, key) => (
        <section className="px-8 py-6 bg-[#282C38] my-4 overflow-x-scroll">
          <div className="flex justify-between ">
            <div className="flex">
              {d.icon} <span className="font-semibold ml-3">{d.name}</span>
            </div>
            <div className="flex items-center">
              <span className="bg-crm-green-300 px-3 py-2 rounded-lg">Finished</span>
              <span className="ml-6">{d.duration}</span>
            </div>
          </div>
          {d.thread.map((t) => (
            <div className="flex justify-between mt-3">
              <div className="flex min-w-[202px] gap-x-6 self-end ">
                <Switch />
                <p>{t.name}</p>

                <p className="paragraph-truncate max-w-[420px]">{t.description}</p>
              </div>

              <div className="flex gap-x-5 ">
                <div className="flex flex-col justify-center">
                  <h3 className="text-[20px] text-center mb-0">{t.delivered}</h3>
                  <p className="opacity-80 ">Delivered</p>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[20px] text-center mb-0">{t.opened}</h3>
                  <p className="opacity-80 ">Opened</p>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[20px] text-center mb-0">{t.replied}</h3>
                  <p className="opacity-80 ">Replied</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
