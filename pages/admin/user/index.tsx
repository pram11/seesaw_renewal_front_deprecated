import React from 'react'
import Head from 'next/head'

import Header from '../../../components/header'
import AdminSidebar from '../../../components/admin/Sidebar'
import DropDownSelect from '../../../components/admin/DropDownSelect'
import AdminUserTable from '../../../components/admin/UserTable'
import AdminButton from '../../../components/admin/Button'

const AdminuserList = (props) => {
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
            headerTitle="사용자 목록"
            rootClassName="header-root-class-name"
            headerRightText=" "
          ></Header>
          <div className="adminuser-list-frame118">
            <AdminSidebar></AdminSidebar>
            <div className="adminuser-list-group113">
              <form className="adminuser-list-form">
                <DropDownSelect text="이름"></DropDownSelect>
                <div className="adminuser-list-group47">
                  <input
                    type="text"
                    placeholder="placeholder"
                    className="adminuser-list-textinput input"
                  />
                </div>
                <DropDownSelect text="정렬기준"></DropDownSelect>
                <button className="adminuser-list-buttonlg">
                  <span className="adminuser-list-text">
                    <span>검색</span>
                  </span>
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
          }
          .adminuser-list-buttonlg {
            width: 120px;
            height: 48px;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            background-color: var(--dl-color-blue-blue500);
          }
          .adminuser-list-text {
            top: 9px;
            color: rgba(255, 255, 255, 1);
            width: 120px;
            height: auto;
            position: absolute;
            font-size: 24px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
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

export default AdminuserList
