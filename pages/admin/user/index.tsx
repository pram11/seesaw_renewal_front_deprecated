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
const DropDownSelect = dynamic(()=>import('../../../components/admin/DropDownSelect'),{ssr:false})
const AdminUserList = (props) => {
  const [isSidebarOpen,showSidebar] = useState(false);
  
 
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
              <form className="adminuser-list-form">
                <DropDownSelect options={[{id:"1",value:"사용자명"}]} defaultValue={"1"}></DropDownSelect>
                <div className="adminuser-list-group47">
                  <input
                    type="text"
                    placeholder="placeholder"
                    className="adminuser-list-textinput input"
                  />
                </div>
                
                <DropDownSelect options={[{id:"1",value:"정렬기준"}]}></DropDownSelect>
                <button className="adminuser-list-buttonlg adminuser-list-text">
                    검색
                </button>
              </form>
              <div className="adminuser-list-container1">
                  <AdminUserTable></AdminUserTable>
                <div className="adminuser-list-button-group">
                  <AdminButton
                    text="사용자 추가"
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
