import { CloseIcon } from "@src/components/common/Icon";
import useLocalData from "@src/utility/hooks/useLocalData";
import "./styles.scss";
export default function Modal(props) {
    const { title, visible, onClose, children, className } = props;
    const { store: { modal }, dispatch, } = useLocalData();
    return (<>
      <div className={`modal-container ${!visible ? "hidden" : "block"}`}></div>
      <div className={`modal-component ${className ?? ""}  ${!visible ? "hidden" : "block"}`}>
        <div className="flex justify-between min-w-[150px]">
          <h4 className="text-white font-semibold text-[20px] capitalize">{title}</h4>
          <button onClick={onClose}>
            <CloseIcon fill="#fff"/>
          </button>
        </div>

        <section className="max-h-[90vh] overflow-y-scroll">{children}</section>
      </div>
    </>);
}
