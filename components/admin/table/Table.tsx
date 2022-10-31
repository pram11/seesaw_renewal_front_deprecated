import React, { useEffect, useState } from 'react'
import { useUserList } from '../../../services/users';
import PropTypes from 'prop-types';
import AdminTableHeader from './TableHeader'
import AdminTableRow from './TableRow'

export type rowItem = {
    id:string,
    title:string,
    order:number,
    style:object,
    type:string,
    options:[{}],
}
type valueItem = {
  id:string,
  name:string,
  value:string,
  type:string,

}
type UserTableProps = {
  headerStyle:object,
  valueItemList: Array<Array<valueItem>>,
  rowItemList:Array<any>,
  setSelected:Function,
  onClick:Function,
}

const AdminTable = (props:UserTableProps) => {
  

  return (
    <>
      <table className="admin-user-table-table">
        <thead style={{width:"100%"}}>
          <AdminTableHeader headerStyle={Object.assign({
            display: "flex",
            padding: "9px 16px",
            position: "relative",
            alignSelf: "stretch",
            boxSizing: "border-box",
            alignItems: "center",
            flexShrink: 0,
            borderColor: "transparent",
            marginRight: 0,
            borderRadius: "0px 0px 0px 0px",
            marginBottom: "10px",
            backgroundColor: "rgba(244, 244, 244, 1)",
            justifyContent:"space-between"}
            ,props.headerStyle)} items = {props.rowItemList}></AdminTableHeader>
        </thead>
        <tbody style={{width:"100%"}}>
          {props.valueItemList.map((item)=>{return (
          <AdminTableRow
            valueItemList = {item.valueItemList}
            id={item.id}
            name={item.name}
            value={item.value}
            type={item.type}
            onClick={()=>{props.onClick(item.id)}}
          />)
          })}
        </tbody>
      </table>
      <style jsx>
        {`
          .admin-user-table-table {
            flex: 1;
            left: 0px;
            width: 100%;
            display: flex;
            padding: 8px 0 0 0;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 0px 0px 0px 0px;
            flex-direction: column;
          }
          .admin-user-table-table-contents {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}
AdminTable.propTypes = {
  rowItemList:PropTypes.array.isRequired,
  itemList: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}
AdminTable.defaultProps = {
  rowItemList:[],
  itemList: [],
  setSelected: ()=>{},
  onClick: ()=>{}
}

export default AdminTable
