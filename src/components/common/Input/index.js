import "./styles.scss";
export default function Input(props) {
    const { type, name, id, placeholder, icon, className, style, isNoMaxWidth, numpad } = props;
    let crmTypeClass;
    switch (type) {
        case "text":
            crmTypeClass = "crm-input-text";
            break;
        case "password":
            crmTypeClass = "crm-input-password";
            break;
    }
    const inputStyles = {
        backgroundImage: `url(${icon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "12px 47%",
    };
    return (<input style={style ? { ...style, ...inputStyles } : inputStyles} type={type} name={name ?? ""} id={id ?? ""} placeholder={placeholder ?? ""} className={`${className ?? ""} ${!icon ? "px-5" : " pl-[48px] pr-[7px] "} py-[15px]  ${crmTypeClass} ${!isNoMaxWidth && "max-w-[500px]"} crm-input mt-3 `} data-kioskboard-type={numpad ? "numpad" : ""}/>);
}
