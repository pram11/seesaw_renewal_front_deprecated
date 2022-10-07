import React from 'react'

import PropTypes from 'prop-types'

import AdminSidebarItem from './SidebarItem'

const AdminSidebar = (props) => {
  return (
    <>
      <div className={`admin-sidebar-frame79 ${props.rootClassName} `}>
        <AdminSidebarItem text="사용자 관리"></AdminSidebarItem>
        <AdminSidebarItem text="코드 관리"></AdminSidebarItem>
        <AdminSidebarItem text="파일 관리"></AdminSidebarItem>
        <AdminSidebarItem text="권한 관리"></AdminSidebarItem>
      </div>
      <style jsx>
        {`
          .admin-sidebar-frame79 {
            flex: 2;
            height: inherit;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

AdminSidebar.defaultProps = {
  rootClassName: '',
}

AdminSidebar.propTypes = {
  rootClassName: PropTypes.string,
}

export default AdminSidebar
