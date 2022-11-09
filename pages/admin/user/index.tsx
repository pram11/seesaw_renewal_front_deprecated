import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from '../../../components/header'
import AdminSidebar from '../../../components/admin/Sidebar'
import AdminUserTable from '../../../components/admin/user/UserTable'
import AdminButton from '../../../components/admin/Button'
import { useUserList } from '../../../services/users'
import { useCookies } from 'react-cookie'
import { useRecoilValue } from 'recoil'
import { seesawTokenState } from '../../../states'
import AlertModal from '../../../components/modal/AlertModal'
import UpdateUserModal from "../../../components/admin/user/UpdateUserModal";
import CreateUserModal from '../../../components/admin/user/CreateUserModal'
import { useCommonCodeChildList } from '../../../services/codes'
const DropDownSelect = dynamic(()=>import('../../../components/admin/DropDownSelect'),{ssr:false})
const AdminUserList = (props) => {
  const [isSidebarOpen,showSidebar] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['ADMIN_DESKTOPONLY_ALERT_CONFIRM']);
  const [desktopOnlyAlert,setDesktopOnlyAlert] = useState(false);
  const [userList, setUserList] = useState([]);
  const [queryTypeList, setQueryTypeList] = useState([]);
  const [queryType, setQueryType] = useState<string>("AUQ01");
  const [queryValue, setQueryValue] = useState("");
  const [updateUserModal,setUpdateUserModal] = useState(false);
  const [createUserModal,setCreateUserModal] = useState(false);
  const [userToUpdate,setUserToUpdate] = useState(null);
  const userListRequest = useUserList({
    queryType:queryType,
    queryValue:queryValue
  })
  const commonCodechildList = useCommonCodeChildList({
    parentCode:"AU01"
  });
  
  useEffect(()=>{
    console.log("userListRequest",userListRequest.status)
    if(userListRequest.status==="success"){
      setUserList(userListRequest.data)

    }
  },[userListRequest.data])

  useEffect(()=>{
    console.log("commonCodeChildList Status:",commonCodechildList.status)
    if (commonCodechildList.status === "success") {
      console.log("queryTypeList: ",commonCodechildList.data)
      let queryTypeList = commonCodechildList.data.map((item)=>{
        return {
          id:item.id.code,
          value:item.label,
        }
      })
      console.log("queryTypeList: ",queryTypeList)
      setQueryTypeList(queryTypeList)
    }
    if (commonCodechildList.status === "error") {
      console.error("error:",commonCodechildList.error)
    }
  },[commonCodechildList.data])

   
  useEffect(()=>{
    if (cookies.ADMIN_DESKTOPONLY_ALERT_CONFIRM==="true"||cookies.ADMIN_DESKTOPONLY_ALERT_CONFIRM===undefined){
      setDesktopOnlyAlert(true);
    }
  
  },[]);

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
  const onSelectQueryType = (evt)=>{
    console.log("onSelectQueryType",evt.target)
    setQueryType(evt.target.value);
    // setQueryType(val);
  }
  const submitSearchForm = (evt)=>{
    evt.preventDefault();
    console.log("submitSearchForm")
    userListRequest.refetch();
  }
  return (
    <>
      <div className="adminuser-list-container">
        <Head>
          <title>adminuserList - exported project</title>
          <meta
            property="og:title"
            content="adminuserList - exported project"
          />
        </Head>
        <div className="adminuser-list-adminusermanagedesktop">
          <Header
            text="사용자 목록"
            rootClassName="header-root-class-name"
            headerRightText=" "
            onMenuClick={()=>{showSidebar(!isSidebarOpen)}}
          ></Header>
          <div className="adminuser-list-frame118">
            {isSidebarOpen?<AdminSidebar/>:null}
            <div className="adminuser-list-group113">
              <form className="adminuser-list-form" onSubmit={submitSearchForm}>
                <DropDownSelect options={queryTypeList}  onSelect={(event)=>{onSelectQueryType(event)}}></DropDownSelect>
                <div className="adminuser-list-group47">
                  <input
                    type="text"
                    placeholder="placeholder"
                    className="adminuser-list-textinput input"
                    onChange={(evt)=>{setQueryValue(evt.target.value)}}
                  />
                </div>
                
                <DropDownSelect options={[{id:"1",value:"정렬기준"}]}></DropDownSelect>
                <button className="adminuser-list-buttonlg adminuser-list-text">
                    검색
                </button>
              </form>
              <div className="adminuser-list-container1">
              <AdminUserTable userList={userList} setSelected={(id,val)=>{setSelected(id,val)}} onClick={
                (id)=>{
                  console.log("click:",id)
                  setUserToUpdate(id);
                  setUpdateUserModal(true);
                }
              }></AdminUserTable>
            <div className="adminuser-list-button-group">
              <AdminButton
                text="사용자 추가"
                onClick={()=>{
                  console.log("create user")
                  setCreateUserModal(true)
                }}
                rootClassName="admin-button-root-class-name"
              ></AdminButton>
              <AdminButton
                text="선택 삭제"
                rootClassName="admin-button-root-class-name1"
                type="red"
              ></AdminButton>
            </div>
          </div>
              
              
            </div>
          </div>
        </div>
      </div>
      {
      desktopOnlyAlert?
        <AlertModal 
        headerText='알림' 
        bodyText='데스크탑에 최적화된 화면입니다. 데스크탑을 이용하여 설정 바랍니다.' 
        onClose={()=>{setDesktopOnlyAlert(false);setCookie("ADMIN_DESKTOPONLY_ALERT_CONFIRM","false")}}/>
      :null}
      {updateUserModal?
          <UpdateUserModal 
          onClose={()=>{setUpdateUserModal(false)}} 
          userID={userToUpdate}/>
        :null}
      {createUserModal?
          <CreateUserModal
          onClose={()=>{setCreateUserModal(false)}}/>
        :null}
      <style jsx>
        {`
          .adminuser-list-container {
            width: 100%;
            display: flex;
            overflow: scroll;
            min-height: 100vh;
            flex-direction: column;
          }
          .adminuser-list-adminusermanagedesktop {
            width: 100%;
            height: 1024px;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 40px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .adminuser-list-frame118 {
            gap: 16px;
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            padding-left: var(--dl-space-space-unit);
            margin-bottom: 0;
            padding-right: var(--dl-space-space-unit);
          }
          .adminuser-list-group113 {
            flex: 4;
            display: block;
            padding: 0;
            position: relative;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            margin-right: 0;
            margin-bottom: 0;
            flex-direction: column;
            background-color: transparent;
          }
          .adminuser-list-form {
            gap: 8px;
            width: auto;
            height: auto;
            display: flex;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #f4f4f4;
          }
          .adminuser-list-group47 {
            height: 48px;
            display: flex;
            padding: 0;
            position: relative;
            flex-grow: 1;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .adminuser-list-textinput {
            flex: 1;
            width: auto;
            height: 100%;
            border-width: 0px;
            font-size:24px;
          }
          .adminuser-list-buttonlg {
            width: 120px;
            height: 48px;
            display: block;
            position: relative;
            box-sizing: border-box;
            text-align:center;
            line-height:48px;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            background-color: var(--dl-color-blue-blue500);
          }
          .adminuser-list-text {
            color: rgba(255, 255, 255, 1);
            width: 120px;
            font-size: 24px;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-align:center;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .adminuser-list-container1 {
            gap: 16px;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .adminuser-list-button-group {
            gap: 8px;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
          }
          @media (max-width: 1200px) {
            .adminuser-list-group47 {
              flex: 1;
              background-color: #ffffff;
            }
          }
        `}
      </style>
    </>
  )
}

export default AdminUserList
