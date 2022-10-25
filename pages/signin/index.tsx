import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Header from '../../components/header'
import DefaultInput from '../../components/default-input'
import SocialButtons from '../../components/social-buttons'
import ButtonLg from '../../components/ButtonLg'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { seesawTokenState } from '../../states'
import { useSignIn } from '../../services/users'
import { useUserRoles } from '../../utils/user'
import AlertModal from '../../components/modal/AlertModal'

const Login = (props:any) => {
  const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_TOKEN']);
  const [seesawToken,setSeesawTokenState]= useRecoilState(seesawTokenState);
  const [modalState,setModalState] = useState(false);
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");
  const {refetch:signIn} = useSignIn(email,password);
  const getUserRoles = useUserRoles();
  const onClickSignIn = async () => {
    const response = await signIn();
    console.log(response);
    if (response.status==="success"){
      const roles = getUserRoles();
      if (roles.includes("ADMIN")){
        router.push("/admin/user");
      }else{
        router.push("/chat");
      }
      console.log(roles)
    }else{
      console.log("로그인 실패")
      setModalState(true);
    }
  }
  const router = useRouter();
  return (
    <>
      <div className="login-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="login-frame">
          <Header headerRightText='' headerTitle="SIGN IN"></Header>
          <div className="login-container1">
            <img
              alt="IMAGE03A12244"
              src="/playground_assets/image03a12244-1qry-500w.png"
              className="login-i-m-a-g-e03a1"
            />
          </div>
          <div className="login-container2">
            <DefaultInput text="EMAIL" onChange={val=>setEmail(val)} type="email"></DefaultInput>
            <DefaultInput text="PASSWORD" onChange={val=>setPassword(val)} type="password" placeholder = ""></DefaultInput>
            <span className="login-text">
              <span>forgot your password?</span>
            </span>
          </div>
          <SocialButtons></SocialButtons>
          <div className="login-container3">
            <ButtonLg text="SIGN IN" onClick={()=>{onClickSignIn()}}></ButtonLg>
            <ButtonLg text="SIGN UP" onClick={()=>{router.push("/signup")}}></ButtonLg>
          </div>
        </div>
      </div>
      {
        modalState?(
          <AlertModal headerText="Alert" bodyText="Invalid email or password" footerText="OK" onClose={()=>{setModalState(false)}} />
          
        ):null

      }
      <style jsx>
        {`
          .login-container {
            min-height: 100vh;
          }
          .login-frame {
            width: 100%;
            height: 926px;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 0px 0px 0px 0px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .login-container1 {
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .login-i-m-a-g-e03a1 {
            width: 479px;
            box-sizing: border-box;
            border-color: transparent;
            margin-right: 0;
            margin-bottom: 0;
          }
          .login-container2 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .login-text {
            color: rgba(113, 119, 118, 1);
            width: calc(479px - 32px);
            height: auto;
            font-size: 16px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .login-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 160px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-around;
          }
          @media (max-width: 479px) {
            .login-i-m-a-g-e03a1 {
              width: 100%;
              height: auto;
            }
            .login-container2 {
              display: block;
            }
            .login-text {
              position: static;
              margin-left: var(--dl-space-space-unit);
            }
            .login-container3 {
              display: block;
            }
          }
        `}
      </style>
    </>
  )
}

export default Login
