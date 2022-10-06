import React from 'react'

import PropTypes from 'prop-types'

const BackHeader = (props) => {
  return (
    <>
      <div className={`back-header-back-header ${props.rootClassName} `}>
        <img
          alt={props.Vector_alt}
          src={props.Vector_src}
          className="back-header-vector"
        />
        <span className="back-header-text">{props.headerTitle}</span>
        <span className="back-header-text1">{props.headerRightText}</span>
      </div>
      <style jsx>
        {`
          .back-header-back-header {
            width: 100%;
            height: 60px;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 0px 0px 0px 0px;
            background-color: var(--dl-color-blue-blue600);
          }
          .back-header-vector {
            width: 17px;
            height: 26px;
            box-sizing: border-box;
            margin-top: var(--dl-space-space-unit);
            margin-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .back-header-text {
            color: rgba(255, 255, 255, 1);
            width: 100%;
            height: auto;
            font-size: 24px;
            align-self: auto;
            font-style: Bold;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .back-header-text1 {
            color: rgba(255, 255, 255, 1);
            width: 64px;
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: Medium;
            margin-top: var(--dl-space-space-unit);
            text-align: right;
            font-family: Roboto;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .back-header-root-class-name {
            top: 0px;
            left: 0px;
            position: absolute;
            margin-right: 0;
            margin-bottom: 0;
          }

          @media (max-width: 479px) {
            .back-header-vector {
              margin-left: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

BackHeader.defaultProps = {
  Vector_src: '/playground_assets/vectori260-oyhk.svg',
  Vector_alt: 'VectorI260',
  headerTitle: '타이틀명',
  headerRightText: '메뉴',
  rootClassName: '',
}

BackHeader.propTypes = {
  Vector_src: PropTypes.string,
  Vector_alt: PropTypes.string,
  headerTitle: PropTypes.string,
  headerRightText: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BackHeader
