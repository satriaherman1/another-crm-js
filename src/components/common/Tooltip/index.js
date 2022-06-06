import { useState } from "react";
import "./styles.scss";

export default function Tooltip(props) {
  const { position, children, content, className } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  let positionClassName;

  switch (position) {
    case "top":
      positionClassName = "bottom-[102%] left-[-50%]";
      break;
  }

  return (
    <div className={`crm-tooltip ${className ?? ""}`} onMouseOver={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <div onMouseOver={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} className={`crm-tooltip-word ${showTooltip ? "block" : "hidden"} ${positionClassName}`}>
        {content}
      </div>
      {children}
    </div>
  );
}
