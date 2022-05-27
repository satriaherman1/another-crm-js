import { CloseIcon, DeleteSquareIcon, PhoneFilledIcon } from "@src/components/common/Icon";
import { useEffect, useRef, useState } from "react";
import "./styles.scss";
export default function CallKeyboard(props) {
    const { className, changeFunc, targetValue, showKeyboard, setShowKeyboard, callAction, setTargetValue } = props;
    const [isShowKeyboard, setIsShowKeyboard] = useState(showKeyboard);
    const keypadInputRef = useRef(null);
    useEffect(() => {
        setIsShowKeyboard(showKeyboard);
    }, [showKeyboard]);
    return (<div className={`${isShowKeyboard && "show-keyboard"}  crm-keypad-container `}>
      <button onClick={() => {
            setIsShowKeyboard(false);
            setShowKeyboard(false);
        }} className="flex gap-x-2 items-center absolute top-[-3%] left-[-4%] p-1 bg-crm-gray-400 rounded-full border border-gray-500">
        <CloseIcon fill="#fff"/>
      </button>
      <div className="flex">
        <input onClick={() => {
            setIsShowKeyboard(true);
        }} ref={keypadInputRef} onFocus={() => {
            event?.preventDefault();
            keypadInputRef.current?.blur();
        }} type="text" value={targetValue} className="calls-keypad w-full border-0 py-4 text-white bg-transparent px-4 outline-0 border-b border-gray-700" placeholder="type phone number "/>
        <button className="bg-crm-red  rounded " onClick={() => {
            const val = targetValue.slice(0, targetValue.length - 1);
            setTargetValue(val);
        }}>
          <DeleteSquareIcon width="80px" fill="#fff"/>
        </button>
      </div>

      <div className={`crm-keypad ${className ?? ""} `}>
        <section className="flex gap-x-15">
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "1")}>
            <span className="text-[24px]">1</span>
            <span className="text-crm-gray-600 font-normal invisible">ABC</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "2")}>
            <span className="text-[24px]">2</span>
            <span className="text-crm-gray-600 font-normal ">ABC</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "3")}>
            <span className="text-[24px]">3</span>
            <span className="text-crm-gray-600 font-normal ">DEF</span>
          </button>
        </section>

        <section className="flex gap-x-15">
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "4")}>
            <span className="text-[24px]">4</span>
            <span className="text-crm-gray-600 font-normal ">GHI</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "5")}>
            <span className="text-[24px]">5</span>
            <span className="text-crm-gray-600 font-normal ">JKL</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "6")}>
            <span className="text-[24px]">6</span>
            <span className="text-crm-gray-600 font-normal ">MNO</span>
          </button>
        </section>

        <section className="flex gap-x-15">
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "7")}>
            <span className="text-[24px]">7</span>
            <span className="text-crm-gray-600 font-normal ">PQRS</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "8")}>
            <span className="text-[24px]">8</span>
            <span className="text-crm-gray-600 font-normal ">TUV</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "9")}>
            <span className="text-[24px]">9</span>
            <span className="text-crm-gray-600 font-normal ">WXYZ</span>
          </button>
        </section>

        <section className="flex gap-x-15">
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "*")}>
            <span className="text-[24px]">*</span>
            <span className="text-crm-gray-600 font-normal invisible">ABC1</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "0")}>
            <span className="text-[24px]">0</span>
            <span className="text-crm-gray-600 font-normal invisible">ABC</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "#")}>
            <span className="text-[24px]">#</span>
            <span className="text-crm-gray-600 font-normal invisible">DEF</span>
          </button>
        </section>

        <button onClick={callAction} className="bg-crm-green-300 p-3 w-[fit-content] rounded-full ">
          <PhoneFilledIcon fill="#fff"/>
        </button>
      </div>
    </div>);
}
