import React from 'react'

import PropTypes from 'prop-types'

const DropDownSelect = (props) => {
  return (
    <>
      <div className="drop-down-select-select-type">
        <div className="drop-down-select-select">
          <span className="drop-down-select-text">{props.text}</span>
          <img
            alt={props.Vector_alt}
            src={props.Vector_src}
            className="drop-down-select-vector"
          />
        </div>
      </div>
      <style jsx>
        {`
          .drop-down-select-select-type {
            width: 145px;
            height: 48px;
            display: flex;
            padding: 0;
            position: relative;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .drop-down-select-select {
            top: 0px;
            left: 0px;
            width: 145px;
            height: 48px;
            display: flex;
            position: absolute;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            background-color: var(--dl-color-gray-white);
          }
          .drop-down-select-text {
            top: 10px;
            left: 18px;
            color: rgba(27, 29, 29, 1);
            width: 108px;
            height: auto;
            position: absolute;
            font-size: 24px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .drop-down-select-vector {
            top: 19px;
            left: 118px;
            width: 16px;
            height: 10px;
            position: absolute;
            box-sizing: border-box;
            margin-right: 0;
            margin-bottom: 0;
          }
          @media (max-width: 1200px) {
            .drop-down-select-select {
              background-color: #ffffff;
            }
          }
        `}
      </style>
    </>
  )
}

DropDownSelect.defaultProps = {
  Vector_src: '/assets/admin/vector6082-1t6k.svg',
  Vector_alt: 'Vector6082',
  text: '선택값',
}

DropDownSelect.propTypes = {
  Vector_src: PropTypes.string,
  Vector_alt: PropTypes.string,
  text: PropTypes.string,
}

export default DropDownSelect
