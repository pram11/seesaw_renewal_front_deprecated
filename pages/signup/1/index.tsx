import React, { useState } from 'react'
import Head from 'next/head'

import BackHeader from '../../../components/back-header'
import BoxInput from '../../../components/box-input'
import TrueFalseButton from '../../../components/true-false-button'
import Link from 'next/link'
import { useRouter } from 'next/router'
const SignUp = (props:{
  
}) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const router = useRouter();
  const isInputValueValid=()=>{
    return true;
  }
  const onClickNext=()=>{
    if (isInputValueValid()){
      router.push({
        pathname:"/signup/2",
        query:{
          email:email,
          password:password
        }
    })
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
        ></BoxInput>
        <BoxInput
          placeholder="Enter your password"
          inputTitle="Password"
          rootClassName="box-input-root-class-name1"
          inputType="password"
        ></BoxInput>
        <BoxInput
          placeholder="Confirm your password"
          inputTitle="Password Confirm"
          rootClassName="box-input-root-class-name2"
          inputType="password"
        ></BoxInput>
        <TrueFalseButton
          onClickTrue={onClickNext}
          onClickFalse={()=>{

          }}

          text="Prev"
          text1="Next"
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
