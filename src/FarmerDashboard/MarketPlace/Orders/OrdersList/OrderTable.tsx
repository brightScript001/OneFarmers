import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DataGridRow } from "./Types";

interface OrderTableProps {
  rows: DataGridRow[];
}

const columns: GridColDef[] = [
  { field: "customerName", headerName: "Customer", width: 150 },
  { field: "product", headerName: "Product", width: 250 },
  { field: "orderId", headerName: "Order ID", width: 150 },
  { field: "quantity", headerName: "Quantity (kg)", width: 150 },
  { field: "price", headerName: "Total Price", width: 150 },
  { field: "dateOfOrder", headerName: "Date of Order", width: 150 },
];

export const OrderTable: React.FC<OrderTableProps> = ({ rows }) => (
  <DataGrid
    rows={rows}
    columns={columns}
    pagination
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 10 },
      },
    }}
    // checkboxSelection
    autoHeight
    disableSelectionOnClick
  />
);
