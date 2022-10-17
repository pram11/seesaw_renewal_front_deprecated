import React, { useState } from 'react'

import CodeTableHeader from './CodeTableHeader'
import CodeTableRow from './CodeTableRow'

const CodeTable = (props) => {
  const[userList, setUserList] = useState([
    {
      id:1,
      parent_code:"FILE_TYPE",
      parent_label:"파일 타입",
      child_code:"A01",
      child_label:"이미지",
      comment:"파일 타입에 대한 코드입니다.",
      create_date:"2022/10/04 23:43:08",
      isSelected:false
    }//mock
  ]);
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
          <CodeTableHeader></CodeTableHeader>
        </thead>
        <tbody style={{width:"100%"}}>
          {userList.map((item)=>{return (
          <CodeTableRow 
            item_id={item.id.toString()}
            parent_code={item.parent_code}
            parent_label={item.parent_label}
            child_code={item.child_code}
            child_label={item.child_label}
            comment={item.comment}

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

export default CodeTable
