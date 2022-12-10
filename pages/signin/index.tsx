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
import { useSendEmailConfirm, useSignIn } from '../../services/users'
import { getUserRoles, useUserRoles } from '../../utils/user'
import AlertModal from '../../components/modal/AlertModal'

const Login = (props:any) => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN',"SEESAW_REFRESH_TOKEN"]);
  const [loginFailureModalState,setLoginFailureModalState] = useState(false);
  const [emailConfirmModalState,setEmailConfirmModalState] = useState(false);
  const [networkErrorModalState,setNetworkErrorModalState] = useState(false);
  const [email,setEmail] = React.useState(router.query.email===undefined?'':router.query.email.toString());
  const [password,setPassword] = React.useState("");
  const signIn = useSignIn();
  const sendConfirmEmail = useSendEmailConfirm();
  const onClickSignIn = async () => {
    let res = await signIn.mutateAsync({email:email,password:password});
    console.log(res)
    if (res.status===200) {
      setCookie("SEESAW_ACCESS_TOKEN", res.accessToken, { path: "/" });
      setCookie("SEESAW_REFRESH_TOKEN",res.refreshToken,{path:"/"});
      const roles = getUserRoles(res.accessToken!);

      if (roles.includes("ADMIN")){
        console.log("admin")
        router.push("/admin/user");
      }else{
        console.log("user")
        router.push("/chat");
      }
      console.log(roles)
    }else{
      switch(res.response.errorCode){
        case "LOGIN_FAILURE":
          setLoginFailureModalState(true);
          break;
        case "EMAIL_NOT_CONFIRMED":
          setEmailConfirmModalState(true);
          await sendConfirmEmail.mutateAsync(email);
          break;
        default:
          setNetworkErrorModalState(true);
          break;
      }
    
    }
  }
  const onSubmit = (e:any) => {
    e.preventDefault();
    onClickSignIn();
  }
  
      // alert("로그인이 완료되었습니다.");))
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
          <form onSubmit={onSubmit}>
          <div className="login-container2">

            <DefaultInput text="EMAIL" onChange={val=>setEmail(val)} type="email" placeholder={"abc@theseesaw.kr"} value={email}></DefaultInput>
            <DefaultInput text="PASSWORD" onChange={val=>setPassword(val)} type="password" placeholder = "" value={password}></DefaultInput>
            <span className="login-text">
              <span>forgot your password?</span>
            </span>
          </div>
          <SocialButtons></SocialButtons>
          <div className="login-container3">
            <ButtonLg text="SIGN IN" onClick={onSubmit} buttonType="submit"></ButtonLg>
            <ButtonLg text="SIGN UP" onClick={()=>{router.push("/signup")}}></ButtonLg>
          </div>
          </form>
        </div>
      </div>
      {
        loginFailureModalState?(
          <AlertModal headerText="Alert" bodyText="Invalid email or password" footerText="OK" onClose={()=>{setLoginFailureModalState(false)}} />
          
        ):null

      }
      {
        emailConfirmModalState?(
          <AlertModal headerText="Alert" bodyText="
          Email not confirmed. 
          we sent you email again. 
          please check your email and varify your email.
          " footerText="OK" onClose={()=>{setEmailConfirmModalState(false)}} />
          
        ):null

      }
      {
        networkErrorModalState?(
          <AlertModal headerText="Alert" bodyText="
          Network error.
          " footerText="OK" onClose={()=>{setNetworkErrorModalState(false)}} />
          
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
