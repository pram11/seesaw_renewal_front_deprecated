import React from 'react'

import PropTypes from 'prop-types'

const Buttonlg = (props) => {
  return (
    <>
      <div className={`buttonlg-container ${props.rootClassName} `}>
        <button className="buttonlg-buttonlg" type={props.buttonType} onClick={props.onClick}>
          <span className="buttonlg-text">{props.text}</span>
        </button>
      </div>
      <style jsx>
        {`
          .buttonlg-container {
            padding:0;
            display: flex;
            position: relative;
          }
          .buttonlg-buttonlg {
            width:calc(479px - 32px);
            max-width:calc(100% - 32px);
            height: 60px;
            display: flex;
            box-sizing: border-box;
            margin-top: HalfUnit;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: HalfUnit;
            justify-content: center;
            background-color: var(--dl-color-blue-blue500);
          }
          .buttonlg-text {
            color: rgba(255, 255, 255, 1);
            font-size: 32px;
            font-style: Bold;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }

          @media (max-width: 479px) {
            .buttonlg-buttonlg {
              position: static;
              margin-top: var(--dl-space-space-halfunit);
              align-items: center;
              margin-left: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .buttonlg-text {
              color: rgb(255, 255, 255);
              width: 100%;
              height: 100%;
              font-size: 32px;
              margin-top: 0px;
              text-align: center;
              font-family: Roboto;
              font-weight: 700;
              line-height: normal;
              margin-bottom: 0px;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

Buttonlg.defaultProps = {
  text: 'buttontext',
  rootClassName: '',
  buttonType: 'button',
}

Buttonlg.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Buttonlg
