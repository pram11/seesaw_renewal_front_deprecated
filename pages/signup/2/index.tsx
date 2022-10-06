import React from 'react'
import Head from 'next/head'

import BackHeader from '../../../components/back-header'
import BoxInput from '../../../components/box-input'
import TrueFalseButton from '../../../components/true-false-button'
import { useRouter } from 'next/router'
const SignUp2 = (props:{

}) => {

  const router = useRouter();
  const onClickNext=()=>{
  }

  const onClickPrev=()=>{
    router.back();
  }
  
  return (
    <>
      <div className="sign-up2-container">
        <Head>
          <title>SignUp2 - exported project</title>
          <meta property="og:title" content="SignUp2 - exported project" />
        </Head>
        <BackHeader
          headerTitle="회원가입"
          rootClassName="back-header-root-class-name3"
          headerRightText=" "
        ></BackHeader>
        <BoxInput
          inputText="Please enter your nickname"
          inputTitle="NICKNAME"
          rootClassName="box-input-root-class-name3"
        ></BoxInput>
        <BoxInput
          inputText="Enter your phone number"
          inputTitle="Phone Number"
          rootClassName="box-input-root-class-name4"
        ></BoxInput>
        <div className="sign-up2-group27">
          <div className="sign-up2-group86">
            <input
              type="checkbox"
              checked="true"
              className="sign-up2-checkbox"
            />
            <span className="sign-up2-text">Phone Number</span>
          </div>
          <div className="sign-up2-group28">
            <input
              type="checkbox"
              checked="true"
              className="sign-up2-checkbox1"
            />
            <span className="sign-up2-text1">Guide for Terms of Service</span>
          </div>
          <div className="sign-up2-group281">
            <input
              type="checkbox"
              checked="true"
              className="sign-up2-checkbox2"
            />
            <span className="sign-up2-text2">
              Guide for private information collection and use
            </span>
          </div>
        </div>
        <TrueFalseButton
          text="Prev"
          text1="Next"
          rootClassName="true-false-button-root-class-name3"
          onClickTrue={()=>{}}
          onClickFalse={onClickPrev}
        ></TrueFalseButton>
      </div>
      <style jsx>
        {`
          .sign-up2-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sign-up2-group27 {
            width: 100%;
            height: auto;
            position: relative;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            background-color: var(--dl-color-default-grey);
          }
          .sign-up2-group86 {
            left: 0px;
            height: 60px;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-default-grey);
          }
          .sign-up2-checkbox {
            width: 30px;
            height: 30px;
            margin-right: var(--dl-space-space-unit);
          }
          .sign-up2-text {
            color: rgba(0, 0, 0, 1);
            width: 100%;
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            align-items: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-up2-group28 {
            top: 119px;
            right: -1px;
            width: 100%;
            height: 60px;
            display: flex;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            border-style: none;
            border-width: 0;
            padding-left: var(--dl-space-space-unit);
            border-radius: 0px 0px 0px 0px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .sign-up2-checkbox1 {
            width: 30px;
            height: 30px;
            margin-right: var(--dl-space-space-unit);
          }
          .sign-up2-text1 {
            color: var(--dl-color-black-black500);
            width: 100%;
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sign-up2-group281 {
            top: 119px;
            right: -1px;
            width: 100%;
            height: 60px;
            display: flex;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            border-style: none;
            border-width: 0;
            padding-left: var(--dl-space-space-unit);
            border-radius: 0px 0px 0px 0px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .sign-up2-checkbox2 {
            width: 30px;
            height: 30px;
            margin-right: var(--dl-space-space-unit);
          }
          .sign-up2-text2 {
            color: var(--dl-color-black-black500);
            width: 100%;
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default SignUp2
