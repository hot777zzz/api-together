import React from "react";
import { Table } from "antd";



export default function DataSta() {
    return (
        <div>
            <h1>数据统计</h1>
            <Table
                columns={columns}
                dataSource={data}
                bordered
            >

            </Table>
        </div>
    );
}