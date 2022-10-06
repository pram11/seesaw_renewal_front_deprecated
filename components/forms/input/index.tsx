import React,{  useState } from "react"

type LoginIDInputProps = {
    handleValueChange:(value:string)=>void;
    value:string
}
const LoginIDInput=({handleValueChange,value}:LoginIDInputProps)=>{
    return(
        <div>
            <div>
                <label>로그인 ID</label>
            </div>
            <input value={value} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>handleValueChange(event.target.value)}></input>
        </div>
    )

}

type LoginPasswordInputProps = {
    handleValueChange:(value:string)=>void;
    value:string;

}

const LoginPasswordInput=({handleValueChange,value}:LoginPasswordInputProps)=>{
    
    return(
        <div>
            <div>            
                <label>패스워드</label>
            </div>
            <input type={"password"} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>handleValueChange(event.target.value)} value={value} ></input>
        </div>
    )

}

export {LoginIDInput, LoginPasswordInput}