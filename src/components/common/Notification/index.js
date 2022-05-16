import Button from "@src/components/common/Button";
import { NotificationBing } from "@src/components/common/Icon";
import "./styles.scss";
export default function CrmNotification(props) {
    const { title, message, visible, onClose } = props;
    return (<>
      <div className={`notification-container ${!visible ? "hidden" : "block"}`}></div>
      <div className={`notification-component  ${!visible ? "hidden" : "block"}`}>
        <div className="flex gap-x-4">
          <span className="rounded-full h-[fit-content] bg-crm-dark p-2">
            <NotificationBing />
          </span>
          <div>
            <h4 className="text-[22px]  font-semibold mb-3">{title}</h4>
            <p className="text-crm-gray-370">{message}</p>
          </div>
        </div>
        <Button onClick={onClose} variant="dark" paddingClassName="py-2 px-5" className="ml-auto block mt-3">
          close
        </Button>
      </div>
    </>);
}
