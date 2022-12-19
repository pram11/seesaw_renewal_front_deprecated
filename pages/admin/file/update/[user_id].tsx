import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import AdminSidebar from '../components/admin-sidebar'
import AdminDefaultInputForm from '../components/admin-default-input-form'
import AdminSelectInputForm from '../components/admin-select-input-form'
import AdminButton from '../components/admin-button'

const AdminupdateUser = (props) => {
  return (
    <>
      <div className="adminupdate-user-container">
        <Head>
          <title>adminupdateUser - exported project</title>
          <meta
            property="og:title"
            content="adminupdateUser - exported project"
          />
        </Head>
        <div className="adminupdate-user-adminuserupdatedesktop">
          <div className="adminupdate-user-frame119">
            <Header
              headerTitle="홍길동"
              rootClassName="header-root-class-name1"
              headerRightText=" "
            ></Header>
            <div className="adminupdate-user-body">
              <AdminSidebar rootClassName="admin-sidebar-root-class-name"></AdminSidebar>
              <div className="adminupdate-user-contents">
                <span className="adminupdate-user-text">
                  <span>사용자 정보</span>
                </span>
                <AdminDefaultInputForm
                  label="이름"
                  textinput_placeholder="홍길동"
                ></AdminDefaultInputForm>
                <AdminSelectInputForm
                  rootClassName="admin-select-input-form-root-class-name"
                  label="권한"
                ></AdminSelectInputForm>
                <AdminDefaultInputForm></AdminDefaultInputForm>
                <AdminDefaultInputForm label="닉네임"></AdminDefaultInputForm>
                <AdminDefaultInputForm
                  label="전화번호"
                  textinput_placeholder="+82-010-4331-6207"
                ></AdminDefaultInputForm>
                <AdminDefaultInputForm
                  label="주소"
                  textinput_placeholder="경기도 용인시 기흥구"
                ></AdminDefaultInputForm>
                <AdminDefaultInputForm label="생년월일"></AdminDefaultInputForm>
                <AdminDefaultInputForm label="성별"></AdminDefaultInputForm>
                <div className="adminupdate-user-frame115">
                  <AdminButton
                    rootClassName="admin-button-root-class-name2"
                    text="저장"
                  ></AdminButton>
                  <AdminButton
                    rootClassName="admin-button-root-class-name4"
                    text="비밀번호 변경"
                  ></AdminButton>
                  <AdminButton
                    rootClassName="admin-button-root-class-name3"
                    text="삭제"
                  ></AdminButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .adminupdate-user-container {
            width: 100%;
            display: flex;
            overflow: scroll;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .adminupdate-user-adminuserupdatedesktop {
            width: 100%;
            height: 1024px;
            display: flex;
            padding: Space-Unit;
            overflow: hidden;
            position: relative;
            max-width: 100%;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .adminupdate-user-frame119 {
            flex: 1;
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .adminupdate-user-body {
            gap: 16px;
            width: 100%;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            padding-left: 16px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            padding-right: 16px;
          }
          .adminupdate-user-contents {
            flex: 4;
            display: flex;
            padding: 16px 0;
            position: relative;
            align-self: stretch;
            box-sizing: border-box;
            overflow-y: scroll;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .adminupdate-user-text {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 8px;
            text-decoration: none;
          }
          .adminupdate-user-frame115 {
            gap: 16px;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
          }
        `}
      </style>
    </>
  )
}

export default AdminupdateUser
