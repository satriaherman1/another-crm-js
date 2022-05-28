import "./styles.scss";
export default function Checkbox(props) {
  const { label, className, checked, onChange, name, id, onClick, defaultChecked } = props;
  return (
    <label className={`${className ?? ""} checkbox-container`}>
      <input onClick={onClick} id={id ?? ""} name={name ?? ""} onChange={onChange} defaultChecked={defaultChecked} checked={checked} type="checkbox" className="custom-checkbox" />
      <span className="checkmark"></span>
      <p className="mb-0">{label}</p>
    </label>
  );
}
