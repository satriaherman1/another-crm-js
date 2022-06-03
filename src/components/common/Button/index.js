export default function Button(props) {
  const { variant, children, className, onClick, paddingClassName } = props;
  let crmVariantBtnClass;
  switch (variant) {
    case "primary":
      crmVariantBtnClass = "bg-crm-primary text-crm-dark-400";
      break;
    case "secondary":
      crmVariantBtnClass = "bg-crm-secondary";
      break;
    case "blue":
      crmVariantBtnClass = "bg-blue-500 text-white";
      break;
    case "yellow":
      crmVariantBtnClass = "bg-crm-yellow text-crm-dark";
      break;
    case "dark":
      crmVariantBtnClass = "bg-crm-dark text-white";
      break;
    case "gray":
      crmVariantBtnClass = "bg-crm-gray-300 text-white";
      break;
    case "red":
      crmVariantBtnClass = "bg-crm-red text-white";
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`${crmVariantBtnClass} ${className ?? ""} ${paddingClassName ? paddingClassName : "px-8 py-3"} h-[fit-content] rounded-lg font-semibold crm-button max-w-[500px]`}
    >
      {children}
    </button>
  );
}
