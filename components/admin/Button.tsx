import React from 'react'

import PropTypes from 'prop-types'

type ButtonTypeEnum = 'primary'|'green'|'yellow'|'red'|'light'|'dark'|'blue'
const AdminButton = (props:{
  rootClassName: string
  text: string,
  type: ButtonTypeEnum,
  onClick: React.MouseEventHandler
}) => {
  return (
    <>
        <button onClick = {props.onClick} className={["admin-button-component",
        props.type==="primary"?"button-background-blue":"",
        props.type==="green"?"button-background-green":"",
        props.type==="yellow"?"button-background-yellow":"",
        props.type==="red"?"button-background-red":"",
        props.type==="light"?"button-background-light":"",
        props.type==="dark"?"button-background-dark":"",
        ].join(" ")}>
          <span className="admin-button-text">{props.text}</span>
        </button>
      
      <style jsx>
        {`
          .admin-button-component{
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
          .button-background-blue{
            background-color: #2e64cb;
          }
          .button-background-red{
            background-color: #E34033;
          }
          .button-background-green{
            background-color: #369B78;
          }
        `}
      </style>
    </>
  )
}

AdminButton.defaultProps = {
  rootClassName: '',
  text: 'Text',
  type:'primary',
  onClick: () => {}
}


export default AdminButton
