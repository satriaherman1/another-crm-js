import { useRef, useState } from "react";
import "./styles.scss";
export default function Dropdown(props) {
    const { className, optList, onClick, variant, onChange, paddingClassName, id, name } = props;
    const [showOptLabel, setShowOptLabel] = useState(false);
    const selectRef = useRef(null);
    let dropdownVariantClass;
    const handleClickDropdown = () => {
        setShowOptLabel(!showOptLabel);
    };
    switch (variant) {
        case "outlined":
            dropdownVariantClass = "crm-dropdown-outlined";
            break;
    }
    return (<div className={`relative crm-dropdown max-w-[500px] ${className !== null && className !== void 0 ? className : ""}`}>
      <select id={id !== null && id !== void 0 ? id : ""} name={name !== null && name !== void 0 ? name : ""} onClick={() => handleClickDropdown()} ref={selectRef} className={`${dropdownVariantClass}  py-2 px-3`}>
        {optList.map((opt) => (<option key={opt.value} value={opt.value}>
            {opt.label}
          </option>))}
      </select>

      <ul className={`absolute text-white text-[14px] ${showOptLabel ? "block" : "hidden"} `}>
        {optList.map((opt) => (<li onClick={() => {
                if (selectRef.current && selectRef.current.value) {
                    selectRef.current.value = opt.value;
                }
                setShowOptLabel(!showOptLabel);
            }} key={opt.value}>
            {opt.label}
          </li>))}
      </ul>
    </div>);
}
