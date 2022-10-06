import React from 'react'

import PropTypes from 'prop-types'

import SidebarMenu from './sidebar-menu'

const Sidebar = (props) => {
  return (
    <>
      <div className={`sidebar-sidebar ${props.rootClassName} `}>
        <div className="sidebar-group48">
          <div className="sidebar-container">
            <img
              alt={props.IMAGE1_alt}
              src={props.IMAGE1_src}
              className="sidebar-i-m-a-g-e1"
            />
            <span className="sidebar-text">{props.text}</span>
          </div>
          <SidebarMenu rootClassName="sidebar-menu-root-class-name"></SidebarMenu>
          <SidebarMenu
            text="기업사용자 인증"
            Vector_src="/playground_assets/vectori260-p14k.svg"
            rootClassName="sidebar-menu-root-class-name3"
          ></SidebarMenu>
          <SidebarMenu
            text="나의 이력서"
            Vector_src="/playground_assets/vectori260-bdo.svg"
            rootClassName="sidebar-menu-root-class-name2"
          ></SidebarMenu>
          <SidebarMenu
            text="채팅"
            Vector_src="/playground_assets/vectori260-2zl.svg"
            rootClassName="sidebar-menu-root-class-name1"
          ></SidebarMenu>
          <SidebarMenu
            text="로그아웃"
            Vector_src="/playground_assets/vectori260-7yke.svg"
            rootClassName="sidebar-menu-root-class-name4"
          ></SidebarMenu>
        </div>
      </div>
      <style jsx>
        {`
          .sidebar-sidebar {
            width: 285px;
            height: 926px;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            border-radius: 0px 0px 0px 0px;
          }
          .sidebar-group48 {
            width: 285.0000305175781px;
            height: 926px;
            display: flex;
            padding: 0;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            border-radius: 0px 0px 0px 0px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .sidebar-container {
            width: 100%;
            height: 182px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
            background-color: var(--dl-color-black-black100);
          }
          .sidebar-i-m-a-g-e1 {
            width: 64px;
            height: 64px;
            display: block;
            box-sizing: border-box;
            border-color: transparent;
            border-radius: 32px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .sidebar-text {
            color: rgba(0, 0, 0, 1);
            width: 100%;
            height: auto;
            display: block;
            font-size: 24px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .sidebar-root-class-name {
            top: 0px;
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

Sidebar.defaultProps = {
  text: '닉네임',
  rootClassName: '',
  IMAGE1_alt: 'IMAGE1I260',
  IMAGE1_src: '/playground_assets/image1i260-8ip8-200h.png',
}

Sidebar.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  IMAGE1_alt: PropTypes.string,
  IMAGE1_src: PropTypes.string,
}

export default Sidebar
