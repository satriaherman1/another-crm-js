import "./styles.scss";
export default function Input(props) {
    const { type, name, id, placeholder, icon, className, style } = props;
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
    console.log(inputStyles, icon);
    return (<input style={style ? { ...style, ...inputStyles } : inputStyles} type={type} name={name !== null && name !== void 0 ? name : ""} id={id !== null && id !== void 0 ? id : ""} placeholder={placeholder !== null && placeholder !== void 0 ? placeholder : ""} className={`${className !== null && className !== void 0 ? className : ""} ${!icon ? "px-5" : " pl-[48px] pr-[7px] "} py-[15px]  ${crmTypeClass} crm-input mt-3 max-w-[500px]`}/>);
}
