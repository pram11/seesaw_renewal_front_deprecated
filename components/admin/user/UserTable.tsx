import React, { useEffect, useState } from 'react'
import { useUserList } from '../../../services/users';

import AdminTableHeader from './TableHeader'
import AdminTableRow from './TableRow'

const AdminUserTable = (props) => {
  const[userList, setUserList] = useState([
    {
      id:1,
      email:"test@gmail.com",
      name:"Ronald K.Edwards",
      passport_id:"A12344321",
      alien_regenum:"123456-4321234",
      phonenum:"010-1234-4321",
      create_date:"2022/08/20 10:00:00",
      isSelected:false
    }//mock
  ]);
  const userListRequest = useUserList({
    name: '',
    id: '',
    passport_num: '',
    phonenum: '',
    email: ''
  })
  if (userListRequest.status==='loading') {
    return <div>loading</div>
  }
  if (userListRequest.status==='error') {
    console.log("error",userListRequest.error)

  }
  if (userListRequest.status==='success') { 
    console.log("response data:",userListRequest.data)
    // setUserList(userListRequest.data)
  }

  const setSelected = (id,val)=>{
    console.log("checked:",val)
    let newList = userList;
    newList.forEach((item)=>{
      if(item.id===id){
        item.isSelected = val;
      }
    })
    console.log("newList:",newList)
    setUserList(newList)
    console.log(userList)
  }
  console.log("user Count:",userList.length)
  return (
    <>
      <table className="admin-user-table-table">
        <thead style={{width:"100%"}}>
          <AdminTableHeader></AdminTableHeader>
        </thead>
        <tbody style={{width:"100%"}}>
          {userList.map((item)=>{return (
          <AdminTableRow 
            item_id={item.id.toString()}
            email={item.email}
            name={item.name}
            passport_id={item.passport_id}
            alien_regenum={item.alien_regenum}
            phonenum = {item.phonenum}
            create_date = {item.create_date}
            getSelected = {(val)=>setSelected(item.id,val)}
            key={"admin-table-row-"+item.id}
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

export default AdminUserTable
