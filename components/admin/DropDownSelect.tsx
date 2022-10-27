import React, { MouseEventHandler, ReactEventHandler } from 'react'

type DropDownItem = {
  id:string,
  value:string
}
const DropDownSelect = (props:{
  options:Array<DropDownItem>,
  defaultValue:string|undefined,//id
  onSelect:ReactEventHandler<HTMLSelectElement>
}) => {
  return (
    <div style={{display:"flex",
    backgroundColor:"white",
    paddingLeft:"8px",
    paddingRight:"8px"
  }}>
      <select className="drop-down-select-select-type" defaultValue={props.defaultValue} onChange={props.onSelect}>
        {
          props.options.length===0?<option></option>:
          props.options.map((item)=>{
            return (
              <option className="drop-down-select-select" id={item.id} >
                {item.value}
              </option>
            )
          })
        }
        
      </select>
      <div className='drop-down-vector-wrapper'>
        <img
            alt={'/assets/admin/vector6082-1t6k.svg'}
            src={'/assets/admin/vector6082-1t6k.svg'}
            className="drop-down-select-vector"
          />
      </div>
      
      <style jsx>
        {`
          .drop-down-select-select-type {
            width: 145px;
            height: 48px;
            display: flex;
            padding: 0;
            position: relative;
            align-self: auto;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: row;
            justify-content: center;
            background-color: transparent;
            -webkit-appearance: none;
            -moz-appearance: none;
            color: rgba(27, 29, 29, 1);
            font-size: 24px; 
            font-weight: 700;
            text-decoration:none;
          }
          .drop-down-select-select {
            flex:1,
            height: 48px;
            display: flex;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            background-color: var(--dl-color-gray-white);
          }
          
          .drop-down-select-vector {
            width: 16px;
            height: 10px;
            box-sizing: border-box;          
          }
          .drop-down-vector-wrapper{
            display:flex;
            virtical-align:middle;
            height:100%;
            align-items:center;
            justify-content:center;

          }
          @media (max-width: 1200px) {
            .drop-down-select-select {
              background-color: #ffffff;
            }
          }

        `}
      </style>
    </div>
  )
}
DropDownSelect.defaultProps = {
  options:[],
  defaultValue:undefined
}

export default DropDownSelect
