import "./styles.scss";
export default function TextArea(props) {
    const { value, id, name, rows, placeholder, icon, className, style } = props;
    let crmTypeClass;
    const inputStyles = {
        background: `url(${icon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "3% 47%",
    };
    return (<textarea style={style ? { ...style, ...inputStyles } : inputStyles} rows={rows ?? 3} id={id ?? ""} name={name ?? ""} placeholder={placeholder ?? ""} className={`${className ?? ""} ${!icon ? "px-5" : " pl-[48px] pr-[7px] "} py-[15px]  ${crmTypeClass} crm-textarea mt-3 max-w-[500px]`}>
      {value ?? ""}
    </textarea>);
}
