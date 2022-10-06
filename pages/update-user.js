import React from 'react'
import Head from 'next/head'

import BackHeader from '../components/back-header'
import TextDisplay from '../components/text-display'

const UpdateUser = (props) => {
  return (
    <>
      <div className="update-user-container">
        <Head>
          <title>UpdateUser - exported project</title>
          <meta property="og:title" content="UpdateUser - exported project" />
        </Head>
        <BackHeader
          rootClassName="back-header-root-class-name5"
          headerRightText=" "
        ></BackHeader>
        <div className="update-user-container1">
          <div className="update-user-container2">
            <img
              alt="IMAGE1I260"
              src="/playground_assets/image1i260-8ip8-200h.png"
              className="update-user-i-m-a-g-e1"
            />
          </div>
          <span className="update-user-text">닉네임</span>
        </div>
        <TextDisplay
          displayTitle="email"
          rootClassName="text-display-root-class-name1"
        ></TextDisplay>
        <TextDisplay
          displayTitle="nickname"
          rootClassName="text-display-root-class-name5"
        ></TextDisplay>
        <TextDisplay
          displayTitle="address"
          rootClassName="text-display-root-class-name3"
        ></TextDisplay>
        <TextDisplay
          displayTitle="phone number"
          rootClassName="text-display-root-class-name2"
        ></TextDisplay>
        <TextDisplay
          displayTitle="name"
          rootClassName="text-display-root-class-name6"
        ></TextDisplay>
        <TextDisplay
          displayTitle="birthdate"
          rootClassName="text-display-root-class-name4"
        ></TextDisplay>
        <TextDisplay
          displayTitle="sex"
          rootClassName="text-display-root-class-name7"
        ></TextDisplay>
        <TextDisplay
          displayTitle="language"
          rootClassName="text-display-root-class-name8"
        ></TextDisplay>
      </div>
      <style jsx>
        {`
          .update-user-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .update-user-container1 {
            width: 100%;
            height: 182px;
            display: flex;
            align-self: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            align-content: center;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
            background-color: var(--dl-color-black-black100);
          }
          .update-user-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
          }
          .update-user-i-m-a-g-e1 {
            width: 64px;
            height: 64px;
            display: block;
            box-sizing: border-box;
            border-color: transparent;
            border-radius: 32px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .update-user-text {
            color: rgba(0, 0, 0, 1);
            width: 100%;
            height: auto;
            display: block;
            font-size: 24px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 479px) {
            .update-user-container2 {
              justify-content: center;
            }
            .update-user-text {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default UpdateUser
