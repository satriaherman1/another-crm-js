import { ArrowDown } from "@src/components/common/Icon";
import DataTable from "react-data-table-component";
import "./styles.scss";
export default function CrmDatatable(props) {
    const { data, pagination, sortIcon, columns, className, selectableRows } = props;
    return (<section className={`crm-datatable ${className !== null && className !== void 0 ? className : ""}`}>
      <DataTable sortIcon={sortIcon !== null && sortIcon !== void 0 ? sortIcon : <ArrowDown />} pagination={pagination !== null && pagination !== void 0 ? pagination : false} columns={columns} data={data} selectableRows={selectableRows !== null && selectableRows !== void 0 ? selectableRows : false}/>
    </section>);
}
