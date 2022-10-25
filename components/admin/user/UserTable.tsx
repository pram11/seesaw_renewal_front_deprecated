import React, { useEffect, useState } from 'react'
import { useUserList } from '../../../services/users';

import AdminTableHeader from './TableHeader'
import AdminTableRow from './TableRow'

const AdminUserTable = (props) => {
  
  const[userList, setUserList] = useState([
    {
      address: "test",
      addressExtra:"atesdffdas",
      alienRegeNum:null,
      birthdate:"2022-03-21T00:00:00.000+00:00",
      createDate: "2022-06-30T11:24:12.484+00:00",
      email: "an62071@gmail.com",
      id: 2,
      latitude: 1.12331,
      longitude: 3.12123,
      name: "test123",
      nickname: "test",
      passportID: null,
      passwordUpdateDate: "2022-06-30T11:24:12.451+00:00",
      phonenum: "+82-010-1234-4321",
      sex: "male",
      sido: "test",
      sigungu: "123123",
      updateDate: "2022-06-30T11:24:12.484+00:00",
      isSelected:false
    }//mock
  ]);
  const userListRequest = useUserList({
    queryType:'byName',
    queryValue:""
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
  useEffect(()=>{
    setUserList(userListRequest.data)
  },[])

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
            passport_id={item.passportID===null?undefined:item.passportID}
            alien_regenum={item.alienRegeNum===null?undefined:item.alienRegeNum}
            phonenum = {item.phonenum}
            create_date = {item.createDate.slice(0,10)+" "+item.createDate.slice(11,19)}
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
