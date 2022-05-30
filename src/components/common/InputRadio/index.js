import "./styles.scss";
export default function InputRadio(props) {
  const { label, className, name, value, onChange, checked } = props;
  return (
    <label className={`crm-radio-container ${className ?? ""}`}>
      <span>{label}</span>
      <input checked={checked} onChange={onChange} type="radio" value={value} name={name} />
      <span className="checkmark"></span>
    </label>
  );
}
