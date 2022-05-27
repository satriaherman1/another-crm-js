import moment from "moment";
import FormatService from "@src/utility/services/format.service";
import DashboardTaskTable from "@src/components/pages/dashboard/task-table";
import { useState } from "react";
export default function DashboardTaskList() {
    const formatService = new FormatService();
    const [checkAll, setCheckAll] = useState(false);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const DueDateColumn = (props) => {
        const { dueDate } = props;
        return (<span className="text-crm-mutted-blue w-[200px] whitespace-nowrap">
        Due <br /> <>{moment(dueDate).fromNow()}</>
      </span>);
    };
    const ImageColumnTable = () => {
        return <img src="/src/assets/img/avatar-example.png" width="35px" height="35px" className="rounded-full" style={{ maxWidth: "unset" }}/>;
    };
    const InitialName = (props) => {
        const { fullName } = props;
        return <span className="border-crm-gray-300 uppercase rounded-full bg-crm-gray-200 border p-3 text-white text-[20px]">{formatService.generateInitialName(fullName)}</span>;
    };
    const NameColumnTable = (props) => {
        const { name, position } = props;
        return (<div className="flex flex-col">
        <span className="capitalize">{name}</span>
        <span className="text-crm-gray-600 whitespace-nowrap">{position}</span>
      </div>);
    };
    const TaskColumnTable = (props) => {
        const { difficulty, content } = props;
        return (<p className="task-column-table" style={{ wordBreak: "break-all" }}>
        <span className="capitalize border-crm-gray-300 bg-crm-gray-200 border p-1 px-2 rounded-md mr-1">{difficulty}</span>
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
      </p>);
    };
    const columns = [
        {
            field: "image",
            display: false,
        },
        {
            field: "name",
            display: false,
        },
        {
            field: "task",
            display: false,
        },
        {
            field: "initialName",
            display: false,
        },
        {
            field: "dueDate",
            display: false,
        },
    ];
    const rows = [
        {
            id: 1,
            value: [
                {
                    field: "image",
                    value: <ImageColumnTable />,
                },
                {
                    field: "name",
                    value: <NameColumnTable name="Dimas Ariyanto" position="CO-Founder & CEO"/>,
                },
                {
                    field: "task",
                    value: (<TaskColumnTable difficulty="normal" content={formatService.truncate(`Deliver : <span class="text-crm-primary">Prospect Keith L</span> for
              <span class="text-crm-primary">Tool Step #1 (Manual Email)</span> of <span class="text-crm-primary">Enterprise Custom - Email</span>"`, 190)}/>),
                },
                {
                    field: "initialName",
                    value: <InitialName fullName="dimas ariyanto"/>,
                },
                {
                    field: "dueDate",
                    value: <DueDateColumn dueDate="2022-04-07"/>,
                },
            ],
        },
        {
            id: 2,
            value: [
                {
                    field: "image",
                    value: <ImageColumnTable />,
                },
                {
                    field: "name",
                    value: <NameColumnTable name="satria herman" position="Founder & CTO"/>,
                },
                {
                    field: "task",
                    value: (<TaskColumnTable difficulty="normal" content={formatService.truncate(`Deliver : <span class="text-crm-primary">Prospect Keith L</span> for
              <span class="txt-crm-primary">Tool Step #1 (Manual Email)</span> of <span class="text-crm-primary">Enterprise Custom - Email</span>"`, 190)}/>),
                },
                {
                    field: "initialName",
                    value: <InitialName fullName="Satria Herman"/>,
                },
                {
                    field: "dueDate",
                    value: <DueDateColumn dueDate="2022-04-02"/>,
                },
            ],
        },
    ];
    const TaskHeading = () => {
        return (<>
        <div className="flex items-center py-2 px-3 border-r border-crm-gray-400">
          <h3 className="text-crm-primary text-[32px] font-semibold">4</h3>
          <p className="ml-3 text-crm-gray-600">Total</p>
        </div>
        <div className="flex items-center py-2 px-3 border-r border-crm-gray-400">
          <h3 className="text-[32px] font-semibold">3</h3>
          <p className="ml-3 text-crm-gray-600">Email</p>
        </div>
        <div className="flex items-center py-2 px-3 border-r border-crm-gray-400">
          <h3 className="text-[32px] font-semibold">1</h3>
          <p className="ml-3 text-crm-gray-600">Linkedin</p>
        </div>
      </>);
    };
    return (<section className="text-white mt-5 mb-9 basis-[58%] overflow-y-hidden bg-crm-dark-300 text-white w-full px-5 py-3 rounded-md">
      <DashboardTaskTable checkAll={checkAll} heading={<TaskHeading />} rows={rows} columns={columns} className="bg-transparent"/>
    </section>);
}
