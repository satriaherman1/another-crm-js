import { useRef, useState } from "react";
import "./styles.scss";
export default function Dropdown(props) {
  const { className, optList, onClick, variant, onChange, paddingClassName, id, name, borderVariantClass, placeholder, isNoMaxWidth } = props;
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
  return (
    <>
      <div className={`relative crm-dropdown ${!isNoMaxWidth ? "max-w-[500px]" : ""}  ${className ?? ""}`}>
        <select
          placeholder={placeholder}
          id={id ?? ""}
          name={name ?? ""}
          onClick={() => handleClickDropdown()}
          ref={selectRef}
          className={`${dropdownVariantClass} ${borderVariantClass ?? "base-border"}  py-2 pl-3 pr-[30px]`}
        >
          {optList.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <ul
          className={`absolute text-white text-[14px]  `}
          style={{
            display: showOptLabel ? "block" : "none",
          }}
        >
          {optList.map((opt) => (
            <li
              onClick={() => {
                if (selectRef.current && selectRef.current.value) {
                  selectRef.current.value = opt.value;
                }
                setShowOptLabel(!showOptLabel);
              }}
              key={opt.value}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${!showOptLabel && "hidden"} fixed top-0 left-0 w-[100vw] h-[100vh] z-10" `}
        onClick={() => {
          setShowOptLabel(false);
          console.log("test");
        }}
      ></div>
    </>
  );
}
