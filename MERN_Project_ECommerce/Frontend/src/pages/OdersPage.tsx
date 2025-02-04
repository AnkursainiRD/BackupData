import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType={
    _id:string;
    amount:number;
    quantity:number;
    discount:number;
    status:ReactElement;
    action:ReactElement
}
const columns: Column<DataType>[]=[
    {
        Header:"ID",
        accessor:"_id"
    },
    {
        Header:"Quantity",
        accessor:"quantity"
    },
    {
        Header:"Discount",
        accessor:"discount"
    },
    {
        Header:"Amount",
        accessor:"amount"
    },
    {
        Header:"Status",
        accessor:"status"
    },
    {
        Header:"Action",
        accessor:"action"
    }
]
function OdersPage() {
    const [rows]=useState([
        {
            _id:'asdfej',
            amount:7612,
            quantity:2,
            discount:1200,
            status:<span className="red">Processing</span>,
            action:<Link to={'/orders/asdfej'}>View</Link> 
        }
    ])
    const Table=TableHOC<DataType>(columns,rows,"dashboard-product-box","Orders")();
  return (
    <div className="container">
        <h1>My Orders</h1>
        {Table}
    </div>
  )
}

export default OdersPage