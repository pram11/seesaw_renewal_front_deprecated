import React from 'react'
import { rowItem } from './Table'
const AdminTableHeader = (props) => {
  
  return (
    <>
      <tr className="admin-table-header-table-row" style={props.headerStyle}>
        {props.items.map((item:rowItem)=>{return (
          <th className="admin-table-header-table-row-item" style={Object.assign({},item.style)}>
            {item.title}
          </th>
        )})}
      </tr>
      
    </>
  )
}

export default AdminTableHeader
