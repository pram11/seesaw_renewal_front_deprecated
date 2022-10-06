import React from 'react'

import PropTypes from 'prop-types'

const SidebarMenu = (props) => {
  return (
    <>
      <div className={`sidebar-menu-group44 ${props.rootClassName} `}>
        <img
          alt={props.Vector_alt}
          src={props.Vector_src}
          className="sidebar-menu-vector"
        />
        <span className="sidebar-menu-text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .sidebar-menu-group44 {
            width: 100%;
            height: 57px;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: flex-start;
            box-sizing: border-box;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            padding-left: 16px;
            border-radius: 0px 0px 0px 0px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: rgba(255, 255, 255, 1);
          }
          .sidebar-menu-vector {
            top: var(--dl-space-space-unit);
            left: var(--dl-space-space-unit);
            width: 22px;
            bottom: var(--dl-space-space-unit);
            height: 25px;
            box-sizing: border-box;
          }
          .sidebar-menu-text {
            color: rgba(0, 0, 0, 1);
            width: 100%;
            height: auto;
            font-size: 24px;
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Roboto;
            font-weight: 500;
            line-height: normal;
            margin-left: var(--dl-space-space-unit);
            font-stretch: normal;
            text-decoration: none;
          }
          .sidebar-menu-root-class-name {
            top: 182px;
            left: 0.88787841796875px;
            position: static;
          }
          .sidebar-menu-root-class-name1 {
            top: 182px;
            left: 0.88787841796875px;
            position: static;
          }
          .sidebar-menu-root-class-name2 {
            top: 182px;
            left: 0.88787841796875px;
            position: static;
          }
          .sidebar-menu-root-class-name3 {
            top: 182px;
            left: 0.88787841796875px;
            position: static;
          }
          .sidebar-menu-root-class-name4 {
            top: 182px;
            left: 0.88787841796875px;
            position: static;
          }
        `}
      </style>
    </>
  )
}

SidebarMenu.defaultProps = {
  Vector_alt: 'VectorI260',
  rootClassName: '',
  text: '내 정보',
  Vector_src: '/playground_assets/vectori260-u6jk.svg',
}

SidebarMenu.propTypes = {
  Vector_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  Vector_src: PropTypes.string,
}

export default SidebarMenu
