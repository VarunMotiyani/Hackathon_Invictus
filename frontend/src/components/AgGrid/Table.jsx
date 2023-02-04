// import React from "react";
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import Jsondata from '../../components-files-stats.json';
// import  { useState } from 'react';
// import TableData from "./TableData";
// import { useNavigate } from "react-router-dom";

// const SimpleComp = p =>{
//     const navigate = useNavigate();
//     return <><button onClick={()=>navigate(`/agrid/${p.value}`)}>{p.value}</button></>

// }
// const Table = () => {

//     // const [gridApi, setGridApi] = useState(null);
//     // const [gridColumnApi, setGridColumnApi] = useState(null);
//     // const [rowData, setRowData] = useState(null);

//     const values = Object.values(Jsondata);

//     // const navigateToList = () => {
//     //     navigate(`/agrid/{id}`);
//     // };

//     // const onGridReady = (params) => {
//     //     setGridApi(params.api);
//     //     setGridColumnApi(params.columnApi);

//         console.log(values);
//     const data = Jsondata.map((values)=> {
//         return {name: values.name , processed: 'Yes'};
//     });
//     console.log(data);

// //     const updateData = (data) => {
// //         setRowData(data);
// //       };

// //       fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
// //       .then((resp) => resp.json())
// //       .then((data) => updateData(data));
// //   };

//     const columns = [
//         {
//             headerName:"File Name", field:'name',
//             cellRenderer:SimpleComp

//         },
//         {
//             headerName:"Processed", field:'processed'
//         }
//     ]
//     const defaultColDef={
//         sortable:true, filter:true, resizable:true
//     }

//     // function onSelectionChanged(){
//     //     var selectedRows = gridApi.getSelectedRows();
//     //     console.log('Selection Changed', selectedRows);
//     // };

//     return(
//         <>
//         <div className="ag-theme-alpine"
//         style={{
//             height:'400px',
//             width: '75%'
//         }}>
//              <AgGridReact
//             // rowSelection={'single'}
//             // onGridReady={onGridReady}
//             // onSelectionChanged={onSelectionChanged}
//             // onRowClicked={(e)=> console.log(e.rowIndex)}
//             rowData={data} columnDefs={columns} defaultColDef={defaultColDef}/> 

           
//         </div>
//         </>
//     )
// }
// export default Table;