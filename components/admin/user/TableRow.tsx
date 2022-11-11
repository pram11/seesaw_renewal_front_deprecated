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
        <td className="admin-table-row-select">
          <div className="admin-table-row-checbox">
            <input type="checkbox" onChange={(evt)=>props.getSelected(evt.target.checked)} />
          </div>
        </td>
        <td className="admin-table-row-id" onClick={props.onClick}>
          <span className="admin-table-row-text">{props.item_id}</span>
        </td>
        <td className="admin-table-row-name" onClick={props.onClick} >{props.name}</td>
        <td className="admin-table-row-passport-id" onClick={props.onClick}>{props.passport_id}</td>
        <td className="admin-table-row-alien-regenum" onClick={props.onClick}>{props.alien_regenum}</td>
        <td className="admin-table-row-phonenum" onClick={props.onClick}>{props.phonenum}</td>
        <td className="admin-table-row-email" onClick={props.onClick}>{props.email}</td>
        <td className="admin-table-row-create-date" onClick={props.onClick}>{props.create_date}</td>
      </tr>
      <style jsx>
        {`
          .admin-table-row-group2 {
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
          .admin-table-row-group2:hover {
            background-color: rgba(230, 230, 230, 1);
            cursor:pointer;
          }

          .admin-table-row-select{
            width:36px;
            padding:7px;
            align-items:center;
          }
          
          .admin-table-row-id {
            width:36px;
            padding:auto;
            text-align:center;
          }
          
          .admin-table-row-name {
            width:auto;
            text-align:center;
            text-overflow: ellipsis;
            white-space: nowrap; 
          }
          .admin-table-row-passport-id{
            text-align:center;
            text-overflow: ellipsis;
            white-space: nowrap; 
          }
          .admin-table-row-alien-regenum{
            text-align:center;
            text-overflow: ellipsis;
            white-space: nowrap; 
          }
          .admin-table-row-phonenum{
            text-align:center;
            text-overflow: ellipsis;
            white-space: nowrap; 
          }
          .admin-table-row-email{
            text-align:center;
            text-overflow: ellipsis;
            white-space: nowrap; 
          }
          .admin-table-row-create-date{
            width:120px;
            text-align:center;
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
