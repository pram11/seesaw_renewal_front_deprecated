import React from 'react'
import Head from 'next/head'

import BackHeader from '../../../components/back-header'
import Buttonlg from '../../../components/buttonlg'

const SignUpSuccess = (props:{
  
}) => {
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
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="sign-up-success-image"
              />
            </div>
            <span className="sign-up-success-text">
              You have Successfully Registered!
            </span>
          </div>
          <div className="sign-up-success-container4">
            <Buttonlg
              text="Write my Resume"
              rootClassName="buttonlg-root-class-name"
            ></Buttonlg>
          </div>
          <div className="sign-up-success-container5">
            <Buttonlg
              text="Go find Job"
              rootClassName="buttonlg-root-class-name2"
            ></Buttonlg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sign-up-success-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sign-up-success-container1 {
            flex: 1;
            width: 200px;
            display: flex;
            flex-direction: column;
          }
          .sign-up-success-container2 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .sign-up-success-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .sign-up-success-image {
            width: 100px;
            object-fit: cover;
          }
          .sign-up-success-container4 {
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
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
              padding: var(--dl-space-space-unit);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .sign-up-success-container3 {
              margin-bottom: var(--dl-space-space-unit);
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
