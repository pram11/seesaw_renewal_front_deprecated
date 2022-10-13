import React, { MouseEventHandler } from 'react'

import PropTypes from 'prop-types'

const AdminSidebarItem = (props:{
  id:string,
  text:string,
  onClick:MouseEventHandler,

}) => {
  return (
    <>
      <div className="admin-sidebar-item-selector" onClick={props.onClick}>
        <span className="admin-sidebar-item-text">{props.text}</span>
        <img
          alt={'/assets/admin/vectori611-dyq.svg'}
          src={'/assets/admin/vectori611-dyq.svg'}
          className="admin-sidebar-item-vector"
        />
      </div>
      <style jsx>
        {`
          .admin-sidebar-item-selector {
            height: 60px;
            display: flex;
            padding: 16px;
            position: relative;
            align-self: stretch;
            box-sizing: content-box;
            align-items: center;
            padding-top: 0;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 1px;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 2px;
            padding-bottom: 0;
            background-color: #f4f4f4;
          }
          .admin-sidebar-item-text {
            flex: 1;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .admin-sidebar-item-vector {
            width: 14px;
            height: 20px;
            box-sizing: border-box;
            margin-right: 0;
            margin-bottom: 0;
          }
        `}
      </style>
    </>
  )
}

AdminSidebarItem.defaultProps = {
  Vector_src: '/assets/admin/vectori611-dyq.svg',
  text: 'Text',
  Vector_alt: 'VectorI611',
}


export default AdminSidebarItem
