import React from 'react'
import * as FileSaver from 'file-saver'
import XLSX from 'sheetjs-style'
import {Button} from 'react-bootstrap'


const ExcelExport = ({excelData, fileName}) => {

    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtention = ".xlsx";

    const exportToExcel= async () => {

        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = { Sheets : { 'data' : ws }, SheetNames : ['data']}; 
        const excelBuffer = XLSX.write(wb, {bookType : 'xlsx', type : 'array'}); 
        const data = new Blob([excelBuffer], { type: fileType});
        FileSaver.saveAs(data, fileName + fileExtention); 
    }

  return (
    // <div>excelexport</div>.
    <>
        <div title="Excel Eport" >
            <Button variant="success" 
                onClick={(e)=>exportToExcel(fileName)} 
                style={{ cursor : "pointer", fontSize: 14 }}
            >
                Excel Export
            </Button>
        </div>
    </>
  )
}

export default ExcelExport