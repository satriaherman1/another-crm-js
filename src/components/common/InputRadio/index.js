import "./styles.scss";
export default function InputRadio(props) {
    const { label, className, name } = props;
    return (<label className={`crm-radio-container ${className !== null && className !== void 0 ? className : ""}`}>
      <span>{label}</span>
      <input type="radio" name={name}/>
      <span className="checkmark"></span>
    </label>);
}
