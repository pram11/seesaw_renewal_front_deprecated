import React from 'react'

import PropTypes from 'prop-types'

const AdminButton = (props) => {
  return (
    <>
      <div className={`admin-button-container ${props.rootClassName} `}>
        <div className="admin-button-component2">
          <span className="admin-button-text">{props.text}</span>
        </div>
      </div>
      <style jsx>
        {`
          .admin-button-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .admin-button-component2 {
            width: 140px;
            height: 60px;
            display: flex;
            position: relative;
            align-self: center;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 0px 0px 0px 0px;
            justify-content: center;
            background-color: #2e64cb;
          }
          .admin-button-text {
            color: var(--dl-color-default-white);
            width: 100%;
            font-size: 24px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
        `}
      </style>
    </>
  )
}

AdminButton.defaultProps = {
  rootClassName: '',
  text: 'Text',
}

AdminButton.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default AdminButton
