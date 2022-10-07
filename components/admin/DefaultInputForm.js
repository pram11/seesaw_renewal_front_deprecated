import React from 'react'

import PropTypes from 'prop-types'

const AdminDefaultInputForm = (props) => {
  return (
    <>
      <div className="admin-default-input-form-group9">
        <div className="admin-default-input-form-frame112">
          <span className="admin-default-input-form-text">{props.label}</span>
        </div>
        <div className="admin-default-input-form-frame1121">
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="admin-default-input-form-textinput input"
          />
        </div>
      </div>
      <style jsx>
        {`
          .admin-default-input-form-group9 {
            display: flex;
            position: relative;
            align-self: stretch;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 8px;
            flex-direction: column;
          }
          .admin-default-input-form-frame112 {
            height: var(--dl-size-size-small);
            display: flex;
            position: relative;
            align-self: stretch;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0px;
          }
          .admin-default-input-form-text {
            color: rgb(0, 0, 0);
            height: auto;
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
          .admin-default-input-form-frame1121 {
            display: flex;
            position: relative;
            align-self: stretch;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 0;
            padding-top: 0 8px;
            border-color: var(--dl-color-black-black100);
            border-style: solid;
            border-width: 2px;
            margin-right: 0;
            padding-left: 0px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            padding-right: 0px;
            padding-bottom: 0 8px;
          }
          .admin-default-input-form-textinput {
            flex: 1;
            height: var(--dl-size-size-small);
            border-width: 0px;
            border-radius: 0px;
          }
        `}
      </style>
    </>
  )
}

AdminDefaultInputForm.defaultProps = {
  label: '이메일',
  textinput_placeholder: 'placeholder',
}

AdminDefaultInputForm.propTypes = {
  label: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default AdminDefaultInputForm
