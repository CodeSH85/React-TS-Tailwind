import { Component, useEffect, useState } from "react";
import { ColModel } from "../../../models/colModel";
import { Db_Data } from "../../../models/dbData";
import _colModel from "../../../../public/colModel.json";
import _dbData from "../../../../public/dbData.json";
import Table from "../../UI/Table/Virtual-Table";
import { InputComp } from "../../UI";

const ReportModule = () => {

  let [colModel, setColModel] = useState<ColModel[]>(_colModel);
  let [dbData, setDbData] = useState<Db_Data[]>(_dbData);

  const thStyle = {
    position: 'inline'
  }

  return (
    <>
      <div className="">
        {
         colModel.map((col, index) => {
          return (
            <span key={index}>
              <label htmlFor="">{col.title}</label>
              <InputComp type={col.type}></InputComp>
            </span>
          )
         }) 
        }
      </div>
      <div className="">
        Report Name
      </div>
      <div className="w-full">
        <Table 
          tableHeaders={colModel}
          tableData={dbData}
        ></Table>
      </div>
    </>
  )
}

export default ReportModule;
