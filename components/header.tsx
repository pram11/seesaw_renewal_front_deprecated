import React, { MouseEventHandler } from 'react'

import PropTypes from 'prop-types'

const Header = (props:{
  Vector_alt:string,
  Vector_src:string,
  headerRightText:string|null,
  text:string
  onMenuClick:MouseEventHandler|undefined
}) => {
  return (
    <>
      <div className="header-container">
        <img
          alt={"menu"}
          src={"/playground_assets/vectori221-3ej.svg"}
          className="header-vector"
          onClick={props.onMenuClick}
        />
        <span className="header-text">{props.text}</span>
        <span className="header-text1">{props.headerRightText}</span>
      </div>
      <style jsx>
        {`
          .header-container {
            flex: 0 0 auto;
            width: 100%;
            height: 60px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
            background-color: var(--dl-color-blue-blue600);
          }
          .header-vector {
            height: 32x;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: 0;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .header-text {
            flex: 1;
            color: rgb(255, 255, 255);
            width: 100%;
            height: auto;
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
          .header-text1 {
            color: var(--dl-color-gray-white);
            width: 64px;
            font-size: 20px;
            text-align: right;
            padding-top: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  Vector_alt: 'VectorI221',
  headerRightText: null,
  headerTitle: '메뉴명',
  Vector_src: '/playground_assets/vectori221-3ej.svg',
  onMenuClick:undefined
}


export default Header
