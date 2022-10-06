import React from 'react'

import PropTypes from 'prop-types'

const BoxInput = (props) => {
  return (
    <>
      <div className={`box-input-group27 ${props.rootClassName} `}>
        <div className="box-input-group86">
          <span className="box-input-text">{props.inputTitle}</span>
        </div>
        <div className="box-input-group28">
          <input className="box-input-text1" 
          type={props.inputType?props.inputType:null}
          placeholder={props.placeholder}

          ></input>
        </div>
      </div>
      <style jsx>
        {`
          .box-input-group27 {
            width: 100%;
            height: 120px;
            position: relative;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            background-color: var(--dl-color-default-grey);
          }
          .box-input-group86 {
            left: 0px;
            height: 60px;
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
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-default-grey);
          }
          .box-input-text {
            color: rgba(0, 0, 0, 1);
            width: 100%;
            height: auto;
            font-size: 20px;
            align-self: auto;
            font-style: Bold;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            align-items: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            margin-left: var(--dl-space-space-unit);
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .box-input-group28 {
            top: 119px;
            right: -1px;
            width: 100%;
            height: 60px;
            display: flex;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            border-radius: 0px 0px 0px 0px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .box-input-text1 {
            width: 100%;
            height: 100%;
            font-size: 20px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            padding: var(--dl-space-space-unit);
            text-decoration: none;
            border:0
          }
          .box-input-text1::placeholder {
            color: rgba(113, 119, 118, 1);
            width: 100%;
            height: 100%;
            font-size: 20px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
            border:0
          }
        `}
      </style>
    </>
  )
}

BoxInput.defaultProps = {
  rootClassName: '',
  inputTitle: '타이틀',
  inputText: '내용',
}

BoxInput.propTypes = {
  rootClassName: PropTypes.string,
  inputTitle: PropTypes.string,
  inputText: PropTypes.string,
}

export default BoxInput
