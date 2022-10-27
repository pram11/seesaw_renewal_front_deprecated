import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import {useMenuList} from "../../services/menus"
import AdminSidebarItem from './SidebarItem'
import { useRouter } from 'next/router'
type SidebarItem ={
  code:string,
  label:string,
  url:string,
  level:number,
  parent:string,
}
type SidebarProps = {
  initialSidebarParentCode: string,
  initialSidebarLevel: number,
}
const AdminSidebar = (props:SidebarProps) => {
  const [sidebarItemList,setSidebarItemList] = useState([])
  const router = useRouter()
  const [parentMenuCode,setParentMenuCode] = useState<string|null>(null);
  const [menuLevel,setMenuLevel] = useState(1);
  const [prevCode,setPrevCode] = useState<string|null>(null);
  const getMenuList = useMenuList({"parent":parentMenuCode,"level":menuLevel});

  useEffect(()=>{
    console.log("useEffect")
    if (getMenuList.status==="success"){
      setSidebarItemList(getMenuList.data);
    }
  },[getMenuList.data]);
  // if (getMenuList.data){  
  //   setSidebarItemList(getMenuList.data);
  // }
  // if (getMenuList.status==="success"&&getMenuList.data!=sidebarItemList){
  //   setSidebarItemList(getMenuList.data);
  // }

  console.log(getMenuList.status)
    getMenuList.refetch()
  const moveOrCallNextStep = async (item:SidebarItem) => {
    console.log("moveOrCallNextStep",item)
    if (item.url===null){
      setPrevCode(parentMenuCode);
      setParentMenuCode(item.code);
      setMenuLevel(item.level + 1);
      await getMenuList.refetch();
      if (getMenuList.status==="success"){

        setSidebarItemList(getMenuList.data);
      }
    }else{
      router.push(item.url);
    }
  }
  const moveBack = async()=>{
    setParentMenuCode(prevCode);
    console.log("moveBack")
    setMenuLevel(menuLevel - 1);
    await getMenuList.refetch();
    if (getMenuList.status==="success"){
      setSidebarItemList(getMenuList.data);
    }
  }

  return (
    <>
      <div className={`admin-sidebar-frame79 ${props.rootClassName} `}>
        {parentMenuCode!==null&&(<AdminSidebarItem id={"GO_BACK"} text="뒤로가기" onClick={()=>moveBack()} />)}
        {
          sidebarItemList.map((item)=>{
            return (<AdminSidebarItem text={item.label} onClick={()=>moveOrCallNextStep(item)} id={item.code}/>)
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
  initialSidebarParentCode: null,
  initialSidebarLevel: 1,
}

AdminSidebar.propTypes = {
  initialSidebarParentCode: PropTypes.string,
  initialSidebarLevel: PropTypes.number,
}

export default AdminSidebar
