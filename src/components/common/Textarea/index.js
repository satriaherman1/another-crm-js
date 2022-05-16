import "./styles.scss";
export default function TextArea(props) {
    const { value, id, name, rows, placeholder, icon, className, style } = props;
    let crmTypeClass;
    const inputStyles = {
        background: `url(${icon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "3% 47%",
    };
    return (<textarea style={style ? { ...style, ...inputStyles } : inputStyles} rows={rows !== null && rows !== void 0 ? rows : 3} id={id !== null && id !== void 0 ? id : ""} name={name !== null && name !== void 0 ? name : ""} placeholder={placeholder !== null && placeholder !== void 0 ? placeholder : ""} className={`${className !== null && className !== void 0 ? className : ""} ${!icon ? "px-5" : " pl-[48px] pr-[7px] "} py-[15px]  ${crmTypeClass} crm-textarea mt-3 max-w-[500px]`}>
      {value !== null && value !== void 0 ? value : ""}
    </textarea>);
}
