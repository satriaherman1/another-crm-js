export default function BillCheckbox(props) {
    const { active, onClick, className, billType, price } = props;
    const borderActiveClass = "border border-crm-primary";
    return (<div onClick={onClick} className={`${active && borderActiveClass} ${className} bill-select-box w-[300px] bg-crm-gray-400 py-6 px-4 relative duration-100`}>
      <h2 className="text-white text-[22px] font-semibold">Billed {billType}</h2>
      <p className="text-crm-gray-600 mt-1">Member per month</p>

      <h1 className="text-crm-primary font-semibold text-[36px] mt-8">
        <span className="text-[24px]">$</span>
         {price}
      </h1>

      <div className={`absolute  right-4 top-4 check-bullet p-[3px] w-[20px] h-[20px] rounded-full bg-white`}>
        <div className={`w-full duration-100 h-full bg-crm-primary rounded-full ${!active && "opacity-0"}`}></div>
      </div>
    </div>);
}
