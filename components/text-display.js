import React from 'react'

import PropTypes from 'prop-types'

const TextDisplay = (props) => {
  return (
    <>
      <div className={`text-display-group50 ${props.rootClassName} `}>
        <span className="text-display-text">{props.displayTitle}</span>
        <span className="text-display-text1">{props.displayValue}</span>
      </div>
      <style jsx>
        {`
          .text-display-group50 {
            width: 100%;
            height: 80px;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 0px 0px 0px 0px;
          }
          .text-display-text {
            top: 16px;
            left: 16px;
            color: rgba(0, 0, 0, 1);
            width: 313px;
            height: auto;
            position: absolute;
            font-size: 20px;
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
          .text-display-text1 {
            top: 44px;
            left: 16px;
            color: rgba(27, 29, 29, 1);
            width: 313px;
            height: auto;
            position: absolute;
            font-size: 20px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .text-display-root-class-name {
            top: 182px;
            left: 0px;
            position: absolute;
            margin-right: 0;
            margin-bottom: 0;
          }
        `}
      </style>
    </>
  )
}

TextDisplay.defaultProps = {
  rootClassName: '',
  displayTitle: 'title',
  displayValue: 'value',
}

TextDisplay.propTypes = {
  rootClassName: PropTypes.string,
  displayTitle: PropTypes.string,
  displayValue: PropTypes.string,
}

export default TextDisplay
