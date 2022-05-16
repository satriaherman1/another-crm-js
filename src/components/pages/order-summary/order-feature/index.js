import { CloseCircleIcon, TickCircleIcon } from "@src/components/common/Icon";
export default function OrderSummaryOrderFeature() {
    return (<div className="flex  mt-4 gap-5">
      <ul>
        <li className="flex mt-5">
          <TickCircleIcon /> <span className="ml-3">Gmail Extension</span>
        </li>
        <li className="flex mt-5">
          <TickCircleIcon /> <span className="ml-3">Email Tracking</span>
        </li>
        <li className="flex mt-5">
          <TickCircleIcon /> <span className="ml-3">Calls-3 Free Hours</span>
        </li>
        <li className="flex mt-5">
          <TickCircleIcon /> <span className="ml-3">Opportunity Management</span>
        </li>
        <li className="flex mt-5">
          <TickCircleIcon /> <span className="ml-3">Custom Properties</span>
        </li>
        <li className="flex mt-5">
          <TickCircleIcon /> <span className="ml-3">Deal Management</span>
        </li>
        <li className="flex mt-5">
          <TickCircleIcon /> <span className="ml-3">Contact Managment</span>
        </li>
      </ul>
      <ul>
        <li className="flex mt-5">
          <TickCircleIcon /> <span className="ml-3">Lead Tracking</span>
        </li>
        <li className="flex mt-5">
          <TickCircleIcon /> <span className="ml-3">Templates</span>
        </li>
        <li className="flex mt-5">
          <TickCircleIcon /> <span className="ml-3">Manual Tasks</span>
        </li>
        <li className="flex mt-5">
          <CloseCircleIcon /> <span className="ml-3 text-crm-mutted-blue">Opportunity Updater</span>
        </li>
        <li className="flex mt-5">
          <CloseCircleIcon /> <span className="ml-3 text-crm-mutted-blue">Role Permissions</span>
        </li>
        <li className="flex mt-5">
          <CloseCircleIcon /> <span className="ml-3 text-crm-mutted-blue">API Access</span>
        </li>
      </ul>
    </div>);
}
