import Switch from "@src/components/common/Switch";

export default function StepTable(props) {
  const { data } = props;

  return (
    <div className=" md:overflow-x-visible text-white">
      {data.map((d, key) => (
        <section className="md:px-8 px-4 py-6 bg-[#282C38] my-4 overflow-x-scroll">
          <div className="flex justify-between ">
            <div className="flex">
              {d.icon} <span className="font-semibold ml-3">{d.name}</span>
            </div>
            <div className="flex items-center">
              {d.finish && <span className="bg-crm-green-300 px-3 py-2 rounded-lg">Finished</span>}
              <span className="ml-6 hidden md:inline-block">{d.duration}</span>
            </div>
          </div>
          {d.thread.map((t) => (
            <div className="flex justify-between mt-3 flex-col gap-y-5 md:gap-y-0 md:flex-row">
              <div className="flex min-w-[202px] gap-x-6 md:self-end flex-col md:flex-row">
                <div className="hidden md:block">
                  <Switch />
                </div>
                <p className="basis-[60%]">{t.name}</p>

                <p className="paragraph-truncate max-w-[420px]">{t.description}</p>
              </div>

              <div className="flex gap-x-5 justify-center md:justify-start">
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

              <div className="flex justify-between md:hidden">
                <Switch className="md:hidden" />
                <span className="ml-6 md:hidden ">{d.duration}</span>
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
