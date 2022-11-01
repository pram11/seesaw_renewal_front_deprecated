import React from 'react'

import PropTypes from 'prop-types'
type AdminTableRowProps = {
  item_id:string;
  name:string;
  passport_id:string;
  alien_regenum:string;
  phonenum:string;
  email:string;
  create_date:string;
  getSelected:Function;
  onClick:React.MouseEventHandler;
}
const AdminTableRow = (props:AdminTableRowProps) => {
  console.log("item loaded:",props)
  return (
    <>
      <tr className="admin-table-row-group2" >
        <td className="admin-table-row-frame112">
          <div className="admin-table-row-checbox">
            <input type="checkbox" onChange={(evt)=>props.getSelected(evt.target.checked)} />
          </div>
        </td>
        <td className="admin-table-row-frame1121" onClick={props.onClick}>
          <span className="admin-table-row-text">{props.item_id}</span>
        </td>
        <td className="admin-table-row-text1" onClick={props.onClick} >{props.name}</td>
        <td className="admin-table-row-text2" onClick={props.onClick}>{props.passport_id}</td>
        <td className="admin-table-row-text3" onClick={props.onClick}>{props.alien_regenum}</td>
        <td className="admin-table-row-text4" onClick={props.onClick}>{props.phonenum}</td>
        <td className="admin-table-row-text5" onClick={props.onClick}>{props.email}</td>
        <td className="admin-table-row-text6" onClick={props.onClick}>{props.create_date}</td>
      </tr>
      <style jsx>
        {`
          .admin-table-row-group2 {
            display: flex;
            padding: 9px 16px;
            position: relative;
            align-self: stretch;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 10px;
            background-color: rgba(244, 244, 244, 1);
          }
          .admin-table-row-frame112 {
            display: flex;
            padding: 0 12px;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 8px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            justify-content: center;
          }
          .admin-table-row-checbox {
            width: 16px;
            height: 16px;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
          }
          .admin-table-row-checbox1 {
            top: 0px;
            left: 0px;
            width: 16px;
            height: 16px;
            position: absolute;
            box-sizing: border-box;
            border-color: rgba(171, 181, 190, 1);
            border-style: solid;
            border-width: 1px;
            margin-right: 0;
            border-radius: 2px;
            margin-bottom: 0;
          }
          .admin-table-row-frame1121 {
            display: flex;
            padding: 0 12px;
            position: relative;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 8px;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            justify-content: center;
          }
          .admin-table-row-text {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 16px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .admin-table-row-text1 {
            color: rgb(0, 0, 0);
            height: auto;
            min-width: 120px;
            flex-grow: 1;
            font-size: 16px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 8px;
            margin-bottom: 0;
            text-decoration: none;
          }
          .admin-table-row-text2 {
            color: rgba(0, 0, 0, 1);
            width: 180px;
            height: auto;
            font-size: 16px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 8px;
            margin-bottom: 0;
            text-decoration: none;
          }
          .admin-table-row-text3 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 8px;
            margin-bottom: 0;
            text-decoration: none;
          }
          .admin-table-row-text4 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 8px;
            margin-bottom: 0;
            text-decoration: none;
          }
          .admin-table-row-text5 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 8px;
            margin-bottom: 0;
            text-decoration: none;
          }
          .admin-table-row-text6 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            align-self: auto;
            font-style: Bold;
            text-align: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

AdminTableRow.defaultProps = {
  passport_id: '입력되지않음',
  email: '',
  name: '입력되지않음',
  item_id: '',
  phonenum: '입력되지않음',
  alien_regenum: '입력되지않음',
  onClick: () => {},
}

AdminTableRow.propTypes = {
  passport_id: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  create_date: PropTypes.string,
  item_id: PropTypes.string,
  phonenum: PropTypes.string,
  alien_regenum: PropTypes.string,
  onClick: PropTypes.func,
}

export default AdminTableRow
