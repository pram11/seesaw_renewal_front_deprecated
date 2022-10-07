import { useQuery } from "@tanstack/react-query"
import {getAPIServerAddress} from "../../utils/config";
const apiAddr = getAPIServerAddress();
async function signIn(email:string,password:string){
    console.log("signIn Requested")
    const signInForm = {email:email,password:password}
    const response = await fetch(`${apiAddr}/user/login`,{
        method:"POST",
        mode:"cors",
        credentials:"same-origin",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(signInForm)
    })
    console.log(response.statusText)
    if (!response.ok){
        console.warn("Network response Not Succeed")
        throw new Error("Network response not succeed");
    }
    return response.json()
}
async function getUserData(){
    
}   



export {signIn}