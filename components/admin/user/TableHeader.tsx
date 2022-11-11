import React from 'react'

const AdminTableHeader = (props) => {
  return (
    <>
      <tr className="admin-table-header-table-row">
        <th className="admin-table-header-select">
          <span>선택</span>
        </th>
        <th className="admin-table-header-id">
          <span>번호</span>
        </th>
        <th className="admin-table-header-name">
          <span>이름</span>
        </th>
        <th className="admin-table-header-passport-num">
          <span>여권번호</span>
        </th>
        <th className="admin-table-header-alien-regenum">
          <span>외국인등록번호</span>
        </th>
        <th className="admin-table-header-phonenum">
          <span>전화번호</span>
        </th>
        <th className="admin-table-header-email">
          <span>이메일</span>
        </th>
        <th className="admin-table-header-create-date">
          <span>가입일시</span>
        </th>
      </tr>
      <style jsx>
        {`
          .admin-table-header-table-row {
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
          .admin-table-header-select {
            width:36px;
            padding:auto;
            align-items:center;
          }
          .admin-table-header-id{
            width:36px;
            padding:auto;
          }
          .admin-table-header-create-date{
            width:120px;
          }  
        `}
      </style>
    </>
  )
}

export default AdminTableHeader
