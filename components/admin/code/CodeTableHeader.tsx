import React from 'react'

const CodeTableHeader = (props) => {
  return (
    <>
      <tr className="admin-table-header-table-row">
        <th className="admin-table-header-text">
          <span>선택</span>
        </th>
        <th className="admin-table-header-text02">
          <span>번호</span>
        </th>
        <th className="admin-table-header-text04">
          <span>부모 코드</span>
        </th>
        <th className="admin-table-header-text06">
          <span>코드 내용</span>
        </th>
        <th className="admin-table-header-text08">
          <span>자식 코드</span>
        </th>
        <th className="admin-table-header-text10">
          <span>코드 내용</span>
        </th>
        <th className="admin-table-header-text12">
          <span>커멘트</span>
        </th>
        <th className="admin-table-header-text14">
          <span>생성일시</span>
        </th>
      </tr>
      <style jsx>
        {`
          .admin-table-header-table-row {
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
          .admin-table-header-text {
            color: rgba(0, 0, 0, 1);
            width: 40px;
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
          .admin-table-header-text02 {
            color: rgba(0, 0, 0, 1);
            width: 40px;
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
          .admin-table-header-text04 {
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
          .admin-table-header-text06 {
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
          .admin-table-header-text08 {
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
          .admin-table-header-text10 {
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
          .admin-table-header-text12 {
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
          .admin-table-header-text14 {
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
            width:120px;

          }
        `}
      </style>
    </>
  )
}

export default CodeTableHeader
