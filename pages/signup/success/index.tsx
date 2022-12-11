import React from 'react'
import Head from 'next/head'

import BackHeader from '../../../components/back-header';
import Buttonlg from '../../../components/Buttonlg'
import { useRouter } from 'next/router';
import { useSendEmailConfirm } from '../../../services/users';

const SignUpSuccess = () => {
  const router = useRouter();
  const sendMail = useSendEmailConfirm();
  return (
    <>
      <div className="sign-up-success-container">
        <Head>
          <title>SignUpSuccess - exported project</title>
          <meta
            property="og:title"
            content="SignUpSuccess - exported project"
          />
        </Head>
        <BackHeader
          rootClassName="back-header-root-class-name4"
          headerRightText=" "
        ></BackHeader>
        <div className="sign-up-success-container1">
          <div className="sign-up-success-container2">
            <div className="sign-up-success-container3">
              <img
                alt="image"
                src="/assets/common/seesaw_character_01.png"
                className="sign-up-success-image"
              />
              <span className="sign-up-success-text">
              You have Successfully Registered!
              <br />
              Please check and verify your email.
            </span>
            </div>
            
          </div>
          <div className="sign-up-success-container4">
            <small 
            className='sign-up-success-send-again'
            onClick={()=>{
              let response = sendMail.mutateAsync(router.query.email as string);
              console.log(response);
              
            }}>email not received? send again!</small>
            <Buttonlg
              text="Sign in"
              rootClassName="buttonlg-root-class-name"
              onClick={() => {
                router.push({pathname:'/signin',query:{email:router.query.email}},"/signin");
              }}

            ></Buttonlg>
          </div>
          
        </div>
      </div>
      <style jsx>
        {`
          .sign-up-success-container {
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sign-up-success-container1 {
            flex: 1;
            width:100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: var(--dl-space-space-unit);
          }
          .sign-up-success-container2 {
            flex: 1;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .sign-up-success-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
          }
          .sign-up-success-image {
            flex:1;
            width: 100%;
            max-width:300px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-up-success-container4 {
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
            flex-direction: column;

          }
          .sign-up-success-send-again{
            margin-bottom: var(--dl-space-space-unit);
          }
          .sign-up-success-container5 {
            width: 100%;
            height: 100px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 479px) {
            .sign-up-success-container1 {
              width: 100%;
            }
            .sign-up-success-container2 {
              height: auto;
              width:100%;
              padding: var(--dl-space-space-unit);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .sign-up-success-container3 {
              margin-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .sign-up-success-image {
              flex: 1;
              width: 100%;
              align-self: center;
            }
            .sign-up-success-text {
              font-size: 32px;
              text-align: center;
            }
            .sign-up-success-container4 {
              height: auto;
              
            }
            .sign-up-success-container5 {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default SignUpSuccess
