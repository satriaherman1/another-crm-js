import { useEffect, useState } from "react";
import { LockIcon } from "@src/components/common/Icon";
import BillCheckbox from "@src/components/pages/order-summary/bill-checkbox";
import OrderSummaryPaymentForm from "@src/components/pages/order-summary/payment-form";
import { AmericanExpressLogo, MasterCardLogo, VisaLogo } from "@src/config/pathImage";
import OrderSummaryOrderFeature from "@src/components/pages/order-summary/order-feature";
import Dropdown from "@src/components/common/Dropdown";

export default function OrderSummary() {
  const [fullName, setFullName] = useState("Jordan Olivas");
  const [initialName, setInitialName] = useState("");
  const [selectedBill, setSelectedBill] = useState("");
  const [selectedBillPrice, setSelectedBillPrice] = useState();

  useEffect(() => {
    const arrFullName = fullName.split(" ");
    let initial;
    arrFullName.map((fn) => {
      initial !== undefined ? (initial += fn.charAt(0)) : (initial = fn.charAt(0));
    });
    setTimeout(() => setInitialName(initial), 200);
  }, []);

  const billingList = [
    {
      label: "intro",
      value: "intro",
    },
    {
      label: "unlimited",
      value: "unlimited",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row bg-crm-dark h-full overflow-y-scroll">
      <section className="text-white md:overflow-y-scroll  px-6 py-12 md:pl-[10%] md:pr-14 md:pt-17">
        <h2 className="text-[32px] font-semibold ">Order Summary</h2>
        <p className="mt-2 text-crm-gray-600">Upgrade Your Plan</p>

        <div className="initial-name p-1 pr-5 w-[fit-content] flex items-center border border-crm-gray-600 rounded-full my-9">
          <span className="initial-avatar text-[24px] text-crm-dark font-semibold p-4 rounded-full bg-crm-primary inline-block">{initialName}</span>
          <h3 className="text-[20px] ml-4">{fullName}</h3>
        </div>

        <hr className="my-8 bg-crm-gray-600 opacity-40" />

        <div className="flex gap-x-3 items-center">
          <p className="text-[20px]">Billing Plan</p>
          <Dropdown borderVariantClass="border border-[#757b8c]" optList={billingList} variant="outlined" className="bg-crm-gray-200 border-crm-gray-350 text-white font-normal rounded-md" />
        </div>

        <div className="flex flex-col md:pl-0 md:flex-row mt-4 gap-8">
          <BillCheckbox
            billType="Yearly"
            price="16.00"
            onClick={() => {
              setSelectedBill("yearly");
              setSelectedBillPrice(16.0);
            }}
            active={selectedBill === "yearly"}
          />
          <BillCheckbox
            billType="Monthly"
            price="19.00"
            onClick={() => {
              setSelectedBill("monthly");
              setSelectedBillPrice(19.0);
            }}
            active={selectedBill === "monthly"}
          />
        </div>

        {selectedBill && (
          <div className="mt-9 ">
            <p className="text-[18px] font-semibold lowercase">
              <span className="capitalize">{selectedBill}</span> Plan
            </p>

            <div className="border-y justify-between border-dashed border-crm-dark-400  mt-4 flex py-2">
              <p className="text-[14px]">3 Licenses</p>
              <h5 className="font-semibold text-crm-primary">${selectedBillPrice}.00</h5>
            </div>

            <button className="border-0 bg-none text-crm-orange font-normal capitalize my-2">change plans</button>

            <div className="flex items-center w-full mt-9">
              <p className="text-[18px] self-center font-semibold ">Payment details</p>
              <LockIcon className="ml-4" />
            </div>

            <OrderSummaryPaymentForm />
          </div>
        )}
      </section>

      <section className="bg-crm-dark-400 mt-20 md:mt-0 py-9 md:pb-0  w-full md:w-[40%] md:pt-17 px-9 text-white ">
        <h3 className="text-crm-primary text-[32px] font-semibold">intro</h3>
        <p className="mt-3">3 Sequences</p>

        <OrderSummaryOrderFeature />

        <p className="mt-12">We accept the following cards</p>
        <div className="mt-4 flex gap-7">
          <img src={VisaLogo} className="w-[72px] h-[45px]" alt="" />
          <img src={MasterCardLogo} className="w-[79px] h-[47px]" alt="" />
          <img src={AmericanExpressLogo} className="w-[115px] h-[47px]" alt="" />
        </div>
      </section>
    </div>
  );
}
