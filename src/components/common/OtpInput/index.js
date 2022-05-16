import OtpInput from "react-otp-input";
import "./styles.scss";
export default function CrmOtpInput(props) {
    const { value, handleChange, className } = props;
    return <OtpInput className={`crm-otp-input ${className !== null && className !== void 0 ? className : ""}`} value={value} onChange={handleChange} numInputs={4} separator={<span> - </span>}/>;
}
