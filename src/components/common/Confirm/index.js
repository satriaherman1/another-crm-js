import Button from "@src/components/common/Button";
import { CloseIcon } from "@src/components/common/Icon";
import "./styles.scss";
export default function Confirm(props) {
  const { title, nextButtonContent, description, icon, visible, onClose, children, className } = props;

  return (
    <>
      <div className={`modal-confirm-container ${!visible ? "hidden" : "block"}`}></div>
      <div className={`modal-confirm-component  ${className ?? ""}  ${!visible ? "hidden" : "block"}`}>
        <section className="flex gap-5">
          {icon}
          <div>
            <h4 className="text-white text-[18px]">{title}</h4>
            <p className="text-crm-gray-170 mt-2">{description}</p>

            <div className="flex gap-3 mt-4 justify-end">
              <button onClick={onClose} className="bg-white px-4 py-2 h-[fit-content] rounded">
                Cancel
              </button>
              <button className="bg-crm-red text-white px-4 py-2 h-[fit-content] rounded"> {nextButtonContent}</button>
            </div>
          </div>
        </section>
        {/* <section className="max-h-[90vh] overflow-y-scroll ">{children}</section> */}
      </div>
    </>
  );
}
