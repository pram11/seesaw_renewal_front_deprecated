import React from 'react'

import PropTypes from 'prop-types'

const Header = (props:{
  Vector_alt:string,
  Vector_src:string,
  headerRightText:string,
  text:string

}) => {
  return (
    <>
      <div className="header-container">
        <img
          alt={props.Vector_alt}
          src={props.Vector_src}
          className="header-vector"
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
  headerRightText: 'Text',
  headerTitle: '메뉴명',
  Vector_src: '/playground_assets/vectori221-3ej.svg',
}

Header.propTypes = {
  Vector_alt: PropTypes.string,
  headerRightText: PropTypes.string,
  headerTitle: PropTypes.string,
  Vector_src: PropTypes.string,
}

export default Header
