import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import AdminSidebarItem from './SidebarItem'
type SidebarItem ={
  id:string,
  text:string,
  targetURL:string,
}
const AdminSidebar = (props) => {
  const [sidebarItemList,setSidebarItemList] = useState([
    {id:"user",text:"사용자관리",targetURL:"/admin/user"},
    {id:"code",text:"코드관리",targetURL:"/admin/code"},
    {id:"file",text:"파일관리",targetURL:"/admin/file"},
    {id:"role",text:"권한관리",targetURL:"/admin/role"},
    {id:"signout",text:"로그아웃",targetURL:"/signout"}

  ])
  useEffect(()=>{

  },[])
  return (
    <>
      <div className={`admin-sidebar-frame79 ${props.rootClassName} `}>
        {
          sidebarItemList.map((item)=>{
            return (<AdminSidebarItem text={item.text} onClick={()=>{location.href = item.targetURL}} id={item.id}/>)
          })
        }
      </div>
      <style jsx>
        {`
          .admin-sidebar-frame79 {
            flex: 2;
            height: inherit;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

AdminSidebar.defaultProps = {
  rootClassName: '',
}

AdminSidebar.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdminSidebar
