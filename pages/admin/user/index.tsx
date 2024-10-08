import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../../../components/header'
import AdminSidebar from '../../../components/admin/Sidebar'
import AdminUserTable from '../../../components/admin/user/UserTable'
import AdminButton from '../../../components/admin/Button'
import { useDeleteUser, useUserList } from '../../../services/users'
import { useCookies } from 'react-cookie'

import AlertModal from '../../../components/modal/AlertModal'
import UpdateUserModal from "../../../components/admin/user/UpdateUserModal";
import CreateUserModal from '../../../components/admin/user/CreateUserModal'
import { getCommonCodeChildList } from '../../../services/codes'
import Pagination from '../../../components/admin/pagination/Pagination'
import { useRouter } from 'next/router'
import DropDownSelect from '../../../components/admin/DropDownSelect'

export async function getStaticProps() {
  const sortOptionItemList = await getCommonCodeChildList({parentCode:"AU02"});
  console.log(sortOptionItemList);
  const searchOptionItemList = await getCommonCodeChildList({parentCode:"AU01"});
  return {
    props: {
      searchOptionItemList:searchOptionItemList.map((item:any)=>{return {id:item.id.code,value:item.label}}),
      sortOptionItemList : sortOptionItemList.map((item:any)=>{return {id:item.id.code,value:item.label}})// 현재 미사용
    },
  }
}


const AdminUserList = (props) => {
  const [isSidebarOpen,showSidebar] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['ADMIN_DESKTOPONLY_ALERT_CONFIRM','SEESAW_ACCESS_TOKEN']);
  const [desktopOnlyAlert,setDesktopOnlyAlert] = useState(false);
  const [userList, setUserList] = useState([]);
  const [queryTypeList, setQueryTypeList] = useState([]);
  const [queryType, setQueryType] = useState<string>("AUQ01");
  const [queryValue, setQueryValue] = useState("");
  const [updateUserModal,setUpdateUserModal] = useState(false);
  const [createUserModal,setCreateUserModal] = useState(false);
  const [showSigninModal,setShowSigninModal] = useState(false);
  const [userToUpdate,setUserToUpdate] = useState(null);
  const router = useRouter();
  const [page,setPage] = useState(1);
  const [size,setSize] = useState(10);
  const [userCount,setUserCount] = useState(0);
  const [userToDelete,setUserToDelete] = useState<Array<string>>([]);
  const userListRequest = useUserList({
    queryType:queryType,
    queryValue:queryValue,
    page:page,
    size:size
  },page)
  const deleteUserRequest = useDeleteUser();
  
  const deleteUsers = () => {
    let selectedUserList:Array<string> = userList.filter((user:any)=>user.isSelected === true).map((user)=>user.id.toString());
    console.log(selectedUserList);

    selectedUserList.forEach((userId)=>{
      deleteUserRequest.mutate(userId);
    });
  }
  
  
  useEffect(()=>{
    console.log("userListRequest:",userListRequest)
    if(userListRequest.status==="success"){
      console.log("header:",userListRequest)
      setUserCount(userListRequest.data.count)
      setUserList(userListRequest.data.result)

    }
  },[userListRequest.data])

  // useEffect(()=>{
  //   console.log("searchOptionItemList Status:",searchOptionItemList.status)
  //   if (searchOptionItemList.status === "success") {
  //     console.log("queryTypeList: ",searchOptionItemList.data)
  //     let queryTypeList = searchOptionItemList.data.map((item)=>{
  //       return {
  //         id:item.id.code,
  //         value:item.label,
  //       }
  //     })
  //     console.log("queryTypeList: ",queryTypeList)
      
  //     setQueryTypeList(queryTypeList)
  //   }
  //   if (searchOptionItemList.status === "error") {
  //     console.error("error:",searchOptionItemList.error)
  //   }
  // },[searchOptionItemList.data])

  useEffect(()=>{
    if(cookies.SEESAW_ACCESS_TOKEN===undefined){
      setShowSigninModal(true)
    }
  },[])

   
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
  const submitSearchForm = (evt:React.FormEvent)=>{
    evt.preventDefault();
    console.log("submitSearchForm")
    setPage(1)
    userListRequest.refetch();
  }
  const calculateMaxPage = ()=>{
    return Math.ceil(userCount/size);
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
            headerRightText=" "
            onMenuClick={()=>{showSidebar(!isSidebarOpen)}}
          ></Header>
          <div className="adminuser-list-frame118">
            {isSidebarOpen?<AdminSidebar/>:null}
            <div className="adminuser-list-group113">
              <form className="adminuser-list-form" onSubmit={submitSearchForm}>
                 <DropDownSelect options={props.searchOptionItemList}  onSelect={(event)=>{onSelectQueryType(event)}}></DropDownSelect>
                <div className="adminuser-list-group47">
                  <input
                    type="text"
                    placeholder="placeholder"
                    className="adminuser-list-textinput input"
                    onChange={(evt)=>{setQueryValue(evt.target.value)}}
                  />
                </div>
                
                 {/* 
                  sorting 기능 추가시 사용  
                  <DropDownSelect options={props.sortOptionItemList} onSelect={function (event: React.SyntheticEvent<HTMLSelectElement, Event>): void {
                  throw new Error('Function not implemented.')
                  } }></DropDownSelect> 
                */}
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
              <div className='adminuser-pagination-container'>
                <Pagination 
                  currentPage={page-1}
                  size={size}
                  startFrom={1}
                  maxPage={calculateMaxPage()}
                  onClick={async (page:number)=>{
                    console.log("page:",page)
                    setPage(page);
                    userListRequest.refetch();
                  }}
                  enableFirst={true}
                  enableLast={true}
                />
              </div>
              
              
              
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
                onClick={()=>{deleteUsers()}}
              ></AdminButton>
            </div>
          </div>
              
              
            </div>
          </div>
        </div>
      </div>

      
      {showSigninModal?
        <AlertModal
          headerText="로그인이 필요합니다."
          bodyText="관리자 페이지에 접근하려면 로그인이 필요합니다."
          onClose={()=>{setShowSigninModal(false);router.push("/signin")}}
          />
        :null
      }
      {
      desktopOnlyAlert?
        <AlertModal 
        headerText='알림' 
        bodyText='데스크탑에 최적화된 화면입니다. 데스크탑을 이용하여 설정 바랍니다.' 
        onClose={()=>{setDesktopOnlyAlert(false);setCookie("ADMIN_DESKTOPONLY_ALERT_CONFIRM","false")}}
        
        />
      :null}
      {updateUserModal?
          <UpdateUserModal 
          onClose={()=>{setUpdateUserModal(false)}} 
          userID={userToUpdate}/>
        :null}
      {createUserModal?
          <CreateUserModal
          onClose={()=>{setCreateUserModal(false)}}
          refetchData={()=>{userListRequest.refetch()}}
          
          
          />
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
          .adminuser-pagination-container{
            display:flex;
            justify-content:center;
            margin-top:20px;
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
            flex: 6;
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
