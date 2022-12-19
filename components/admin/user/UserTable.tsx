import React, { useEffect, useState } from 'react'
import { useUserList } from '../../../services/users';
import PropTypes from 'prop-types';
import AdminTableHeader from './TableHeader'
import AdminTableRow from './TableRow'

type UserTableProps = {
  userList: Array<any>,
  setSelected:Function,
  onClick:Function,
}

const AdminUserTable = (props:UserTableProps) => {
  

  return (
    <>
      <table className="admin-user-table-table">
        <thead style={{width:"100%"}}>
          <AdminTableHeader></AdminTableHeader>
        </thead>
        <tbody style={{width:"100%"}}>
          {props.userList.map((item)=>{return (
          <AdminTableRow 
            item_id={item.id.toString()}
            email={item.email}
            name={item.name}
            passport_id={item.passportID===null?undefined:item.passportID}
            alien_regenum={item.alienRegeNum===null?undefined:item.alienRegeNum}
            phonenum = {item.phonenum}
            create_date = {item.createDate.slice(0,10)+" "+item.createDate.slice(11,19)}
            getSelected = {(val)=>props.setSelected(item.id,val)}
            key={"admin-table-row-"+item.id}
            onClick={()=>{props.onClick(item.id)}}
          />)
          })}
        </tbody>
      </table>
      <style jsx>
        {`
          .admin-user-table-table {
            width: 100%;

            padding: 8px 0 0 0;
            position: relative;
            box-sizing: border-box;

            border-color: transparent;
            border-radius: 0px 0px 0px 0px;
            table-layout:fixed;
            border-spacing:1px;
          }
          .admin-user-table-table-contents {

          }
        `}
      </style>
    </>
  )
}
AdminUserTable.propTypes = {
  userList: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}
AdminUserTable.defaultProps = {
  userList: [],
  setSelected: ()=>{},
  onClick: ()=>{}
}

export default AdminUserTable
