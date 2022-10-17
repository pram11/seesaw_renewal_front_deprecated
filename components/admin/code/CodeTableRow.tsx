import React from 'react'

import PropTypes from 'prop-types'
type AdminTableRowProps = {
  item_id:string;
  parent_code:string;
  parent_label:string;
  child_code:string;
  child_label:string;
  comment:string;
  create_date:string;
  getSelected:Function;
}
const CodeTableRow = (props:AdminTableRowProps) => {
  console.log("item loaded:",props)
  return (
    <>
      <tr className="admin-table-row-group2">
        <td className="admin-table-row-frame112">
          <div className="admin-table-row-checbox">
            <input type="checkbox" onChange={(evt)=>props.getSelected(evt.target.checked)} />
          </div>
        </td>
        <td className="admin-table-row-frame1121">
          <span className="admin-table-row-text">{props.item_id}</span>
        </td>
        <td className="admin-table-row-text1">{props.parent_code}</td>
        <td className="admin-table-row-text2">{props.parent_label}</td>
        <td className="admin-table-row-text3">{props.child_code}</td>
        <td className="admin-table-row-text4">{props.child_label}</td>
        <td className="admin-table-row-text5">{props.comment}</td>
        <td className="admin-table-row-text6">{props.create_date}</td>
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
            width:120px;
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
            width:120px;
 
          }
          .admin-table-row-text3 {
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
            margin-right: 8px;
            margin-bottom: 0;
            text-decoration: none;
            width:120px;

          }
          .admin-table-row-text4 {
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
            margin-right: 8px;
            margin-bottom: 0;
            text-decoration: none;
            width:120px;

          }
          .admin-table-row-text5 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            flex: 1;
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

CodeTableRow.defaultProps = {
  id:"1",
  parent_code:"test@gmail.com",
  parent_label:"Ronald K.Edwards",
  child_code:"A12344321",
  child_label:"123456-4321234",
  comment:"test",
  create_date: '2022/10/04 23:43:08',
}

CodeTableRow.propTypes = {
  item_id: PropTypes.string,
  parent_code: PropTypes.string,
  parent_label: PropTypes.string,
  child_code: PropTypes.string,
  child_label: PropTypes.string,
  comment: PropTypes.string,
  create_date: PropTypes.string,
}

export default CodeTableRow
