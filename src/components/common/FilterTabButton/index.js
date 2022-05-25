import "./styles.scss";
export default function FilterTabButton(props) {
    const { tabButton, className } = props;
    return (<div className={`${className ?? ""} flex  filter-tab-button`}>
      {tabButton.map((btn) => (<button onClick={btn.onClick} className={`${btn.activeIndicator === btn.key && "active"}`}>
          {btn.key}
        </button>))}
    </div>);
}
