import React from 'react'

import PropTypes from 'prop-types'

const TrueFalseButton = (props) => {
  return (
    <>
      <div
        className={`true-false-button-true-false-button ${props.rootClassName} `}
      >
        <button className="true-false-button-button button" onClick={()=>props.onClickFalse()}>
          <span className="true-false-button-text">{props.text}</span>
        </button>
        <button className="true-false-button-button1 button" onClick={()=>props.onClickTrue()}>
          <span className="true-false-button-text1">{props.text1}</span>
        </button>
      </div>
      <style jsx>
        {`
          .true-false-button-true-false-button {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .true-false-button-button {
            flex: 1;
            height: 90px;
            display: flex;
            max-width: calc((479px / 2) - 32px);
            align-self: center;
            text-align: center;
            border-width: 0px;
          }
          .true-false-button-text {
            width: 100%;
            font-size: 32px;
            align-self: center;
          }
          .true-false-button-button1 {
            flex: 1;
            color: var(--dl-color-gray-white);
            height: 90px;
            display: flex;
            max-width: calc((479px / 2) - 32px);
            align-self: center;
            background: blue600 (blue);
            text-align: center;
            align-items: center;
            border-width: 0px;
            background-color: var(--dl-color-blue-blue600);
          }
          .true-false-button-text1 {
            width: 100%;
            font-size: 32px;
            align-self: center;
          }

          .true-false-button-root-class-name3 {
            top: 420px;
            left: 0px;
            position: static;
            align-self: center;
          }
          @media (max-width: 479px) {
            .true-false-button-true-false-button {
              height: 90px;
              position: relative;
            }
            .true-false-button-button {
              height: 90px;
              display: flex;
              max-width: calc(479px / 2);
              padding-top: var(--dl-space-space-halfunit);
              border-width: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .true-false-button-text {
              width: 100%;
              font-size: 32px;
              align-self: center;
              text-align: center;
            }
            .true-false-button-button1 {
              color: var(--dl-color-gray-white);
              height: 90px;
              display: flex;
              font-size: 32px;
              max-width: calc(479px / 2);
              text-align: center;
              padding-top: var(--dl-space-space-halfunit);
              border-width: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-halfunit);
              background-color: var(--dl-color-blue-blue600);
            }
            .true-false-button-text1 {
              color: var(--dl-color-gray-white);
              width: 100%;
              align-self: center;
            }
            .true-false-button-root-class-name {
              top: 484px;
              right: -20px;
              position: static;
            }
            .true-false-button-root-class-name1 {
              left: 0px;
              bottom: 0px;
              position: absolute;
            }
            .true-false-button-root-class-name3 {
              left: 0px;
              bottom: 0px;
              position: absolute;
            }
          }
        `}
      </style>
    </>
  )
}

TrueFalseButton.defaultProps = {
  rootClassName: '',
  text1: 'Button',
  text: 'Button',
}

TrueFalseButton.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  onClickTrue: PropTypes.func.isRequired,
  onClickFalse: PropTypes.func.isRequired,
}

export default TrueFalseButton
