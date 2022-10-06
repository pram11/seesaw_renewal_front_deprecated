import React from 'react'

import PropTypes from 'prop-types'

const DefaultInput = (props) => {
  return (
    <>
      <div className="default-input-email-input">
        <span className="default-input-text">{props.text}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="default-input-textinput input"
        />
      </div>
      <style jsx>
        {`
          .default-input-email-input {
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-unit);
            border-radius: 0px 0px 0px 0px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .default-input-text {
            width: 100%;
            display: block;
            font-size: 20px;
            text-align: left;
            font-stretch: normal;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .default-input-textinput {
            width: calc(479px - 32px);
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          @media (max-width: 479px) {
            .default-input-email-input {
              position: relative;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .default-input-text {
              width: 100%;
              display: block;
              font-size: 20px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .default-input-textinput {
              width: 100%;
              padding: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

DefaultInput.defaultProps = {
  text: 'Text',
  textinput_placeholder: 'placeholder',
}

DefaultInput.propTypes = {
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default DefaultInput
