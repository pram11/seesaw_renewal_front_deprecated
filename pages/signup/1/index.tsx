import React, { useState } from 'react'
import Head from 'next/head'

import BackHeader from '../../../components/BackHeader'
import BoxInput from '../../../components/box-input'
import TrueFalseButton from '../../../components/buttons/TrueFalseButton/TrueFalseButton'
import Link from 'next/link'
import { useRouter } from 'next/router'
const SignUp = (props:{
  
}) => {
  const router = useRouter();
  const [email,setEmail] = useState<string>(router.query.email===undefined?'':router.query.email.toString());
  const [password,setPassword] = useState<string>(router.query.password===undefined?'':router.query.password.toString());
  const [passwordCheck,setPasswordCheck] = useState<string>("");
  const [nickname,setNickname] = useState(router.query.nickname??'');
  const [phonenum,setPhonenum] = useState(router.query.phonenum??'');
  const isInputValueValid=()=>{
    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }
    if (password.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return false;
    }
    //이메일 중복 확인
    
    return true;
  }
  const onClickNext=()=>{
    if (isInputValueValid()){
      router.push({
        pathname:"/signup/2",
        query:{
          email:email,
          password:password,
          nickname:nickname,
          phonenum:phonenum,

        }
    },"/signup/2");
    }
  }
  return (
    <>
      <div className="sign-up-container">
        <Head>
          <title>SignUp - exported project</title>
          <meta property="og:title" content="SignUp - exported project" />
        </Head>
        <BackHeader
          headerTitle="회원가입"
          rootClassName="back-header-root-class-name2"
          headerRightText=" "
        ></BackHeader>
        <BoxInput
          placeholder="Please enter your email"
          inputTitle="EMAIL"
          rootClassName="box-input-root-class-name"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        ></BoxInput>
        <BoxInput
          placeholder="Enter your password"
          inputTitle="Password"
          rootClassName="box-input-root-class-name1"
          inputType="password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        ></BoxInput>
        <BoxInput
          placeholder="Confirm your password"
          inputTitle="Password Confirm"
          rootClassName="box-input-root-class-name2"
          inputType="password"
          value={passwordCheck}
          onChange={(e)=>{setPasswordCheck(e.target.value)}}
        ></BoxInput>
        <TrueFalseButton
          onClickTrue={onClickNext}
          onClickFalse={()=>{
            router.back();
          }}
          falseButtonText="Prev"
          trueButtonText="Next"
          rootClassName="true-false-button-root-class-name1"
        ></TrueFalseButton>
      </div>
      <style jsx>
        {`
          .sign-up-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default SignUp
