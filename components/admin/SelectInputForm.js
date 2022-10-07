import React from 'react'

import PropTypes from 'prop-types'

const AdminSelectInputForm = (props) => {
  return (
    <>
      <div className={`admin-select-input-form-group9 ${props.rootClassName} `}>
        <div className="admin-select-input-form-frame112">
          <span className="admin-select-input-form-text">{props.label}</span>
        </div>
        <div className="admin-select-input-form-frame1121">
          <select className="admin-select-input-form-select">
            <option value="Option 1" selected>
              Option 1
            </option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <img
            alt={props.Vector_alt}
            src={props.Vector_src}
            className="admin-select-input-form-vector"
          />
        </div>
      </div>
      <style jsx>
        {`
          .admin-select-input-form-group9 {
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
          .admin-select-input-form-frame112 {
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
          .admin-select-input-form-text {
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
          .admin-select-input-form-frame1121 {
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
            background-color: var(--dl-color-gray-white);
          }
          .admin-select-input-form-select {
            flex: 1;
            height: var(--dl-size-size-small);
            display: flex;
          }
          .admin-select-input-form-vector {
            width: 16px;
            height: 10px;
            position: relative;
            box-sizing: border-box;
            margin-right: 0;
            margin-bottom: 0;
          }
        `}
      </style>
    </>
  )
}

AdminSelectInputForm.defaultProps = {
  label: 'Label',
  Vector_src: '/assets/admin/vectori613-ee5.svg',
  Vector_alt: 'VectorI613',
  rootClassName: '',
}

AdminSelectInputForm.propTypes = {
  label: PropTypes.string,
  Vector_src: PropTypes.string,
  Vector_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AdminSelectInputForm
