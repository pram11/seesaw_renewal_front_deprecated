import { useQuery, useQueryClient } from "@tanstack/react-query"
import {getAPIServerAddress} from "../../utils/config";
import {getToken} from "../../utils/user"
const apiAddr = getAPIServerAddress();
const token = getToken
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
async function useUserData(){
    
}   

const useUserList = (Q:{
    name:string,
    id:string,
    passport_num:string,
    phonenum:string,
    email:string
})=>{

    const { data: result, isSuccess: isSuccess } = useQuery([Q.id],()=>{
        fetch(`${apiAddr}/user`,{
            method:"GET",
            mode:"cors",
            credentials:"same-origin",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "HttpAuthorization":token
            },
            body:JSON.stringify(Q)
        }).then(res =>
            res.json()
        )
    })
    console.log("data:",result)
    return { result, isSuccess };

}



export {signIn,useUserList}