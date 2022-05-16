import { MoreIcon } from "@src/components/common/Icon";
import moment from "moment";
export default function DashboardActivityList(props) {
    const { content, createdDate, icon, footerElement } = props;
    return (<div className="activity-list py-5 border-t  border-crm-gray-350">
      <div className="activity-list-head flex items-center px-3 text-crm-gray-500">
        {icon}
        <span className="ml-2">Mar 8</span>
        <span className="ml-2 rounded-full w-[4px] h-[4px] bg-crm-gray-500"></span>
        <span className="ml-2">{moment(createdDate).format("hh:mm A")}</span>

        <MoreIcon className="ml-auto"/>
      </div>

      <div className="acivity-list-content px-4 mt-4 text-crm-gray-500 text-[14px] ">
        <p className="leading-[150%]">{content}</p>
      </div>
      {footerElement && footerElement}
    </div>);
}
