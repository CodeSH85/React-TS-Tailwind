import { Component, ReactHTMLElement, useEffect, useState } from "react";
import { ColModel } from "../../../models/colModel";
import { Db_Data } from "../../../models/dbData";
import _colModel from "../../../models/colModel.json";
import _dbData from "../../../models/dbData.json";
import Table from "../../UI/Virtual-Table";
import { InputComp } from "../../UI";

const ReportModule = () => {

  let [colModel, setColModel] = useState<ColModel[]>(_colModel);
  let [dbData, setDbData] = useState<Db_Data[]>(_dbData);

  // let [activeRow, setActiveRow] = useState<Db_Data>();
  let [activeRow, setActiveRow] = useState<any>({
    crt_date: "",
    crt_user: "",
    id: "",
    order_no: "",
    selected: false
  });

  const getActiveRow = (rowData: Db_Data) => {
    setActiveRow(rowData);
  }

  const setNewValue = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setActiveRow((prev: any) => {
      const updateVal = {
        ...prev,
        [key]: key === "selected" ? false : e?.currentTarget?.value
      }

      return updateVal;
    })

    // setActiveRow(e.currentTarget.value);
  }

  useEffect(() => {
    
  }, [activeRow.crt_date, activeRow.crt_user, activeRow.id, activeRow.order_no, activeRow.selected])

  return (
    <>
      <div className="">
        {
         colModel.map((col, index) => {
          return (
            <span key={index}>
              <InputComp
                type={col.type}
                value={activeRow[col.key]}
                onChange={e => setNewValue(e, col.key)}
                name={col.key}
              ></InputComp>
            </span>
          )
         })
        }
      </div>
      <div className="">
        Report Name
      </div>
      <div className="">

      </div>
      <div className="w-full">
        <Table
          tableHeaders={colModel}
          tableData={dbData}
          getActiveRow={getActiveRow}
          setActiveRow={setActiveRow}
        ></Table>
      </div>
    </>
  )
}

export default ReportModule;
