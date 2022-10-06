import { useQuery } from "@tanstack/react-query";
import React,{  useState } from "react"
import { signIn } from "../../services/users";
import { Button } from "../buttons";
import {LoginIDInput, LoginPasswordInput} from "./input"


type LoginFormProps = {
    getEmailFromComponent:(value:string)=>void,
    getPasswordFromComponent:(value:string)=>void
}
const LoginForm=({getEmailFromComponent,getPasswordFromComponent}:LoginFormProps)=>{
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    const signInRequest = useQuery(["signIn"],()=>signIn(email,password),{
        enabled:false
    })
    function onEmailChange(value:string){
        setEmail(value);
        getEmailFromComponent(value)
    }

    function onPasswordChange(value:string){
        setPassword(value);
        getPasswordFromComponent(password);

    }
    

    return(
        <div>
            <LoginIDInput value = {email} handleValueChange={(value)=>onEmailChange(value)}/>
            <LoginPasswordInput value={password} handleValueChange={(value)=>onPasswordChange(value)} />
            <Button innertext={"로그인"} onClick={()=>{signInRequest.refetch()}}/>
        </div>
    )

}

export {LoginForm}