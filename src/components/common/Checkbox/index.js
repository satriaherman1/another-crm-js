import "./styles.scss";
export default function Checkbox(props) {
    const { label, className } = props;
    return (<label className={`${className ?? ""} checkbox-container`}>
      <input type="checkbox" className="custom-checkbox"/>
      <span className="checkmark"></span>
      <p className="mb-0">{label}</p>
    </label>);
}
