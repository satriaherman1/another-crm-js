import "./styles.scss";
export default function Switch(props) {
  const { label, className, checked, onChange, name, id, onClick, defaultChecked } = props;
  return (
    <label className={`${className ?? ""} switch-container`}>
      <input onClick={onClick} id={id ?? ""} name={name ?? ""} onChange={onChange} defaultChecked={defaultChecked} checked={checked} type="checkbox" className="custom-checkbox" />
      <span className="slider round"></span>
      <p className="mb-0">{label}</p>
    </label>
  );
}
