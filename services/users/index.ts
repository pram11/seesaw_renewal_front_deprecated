import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {getAPIServerAddress} from "../../utils/config";
import { useUserRoles } from "../../utils/user";
const apiAddr = getAPIServerAddress();

const useSignIn=(email:string,password:string)=>{
    const [tokenCookies, setTokenCookie, removeTokenCookie] = useCookies(['SEESAW_ACCESS_TOKEN','SEESAW_REFRESH_TOKEN']);
    return useQuery(["signIn"],async ()=>{
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
        if (!response.ok){
            console.warn("Network response Not Succeed")
            throw new Error("Network response not succeed");
        }
        console.log(response.headers.get("Authorization"))
        return {accessToken:response.headers.get("Authorization"),refreshToken:response.headers.get("RefreshToken"),response:await response.text()}
    },{enabled:false,retry:false})
}


const useUserList = (Q:{
    queryType:string,
    queryValue:string
})=> {
    console.log("useUserList Requested",Q);
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    return useQuery(["getUserList"],async ()=>{
    if (Q.queryType!==""&&Q.queryValue!=="") {
        var path = `${apiAddr}/user?${Q.queryType}=${Q.queryValue}`;
    } else {
        var path = `${apiAddr}/user`;
    }
    const response = await fetch(path,{
        method:"GET",
        mode:"cors",
        credentials:"same-origin",
        headers:{
            "Content-Type":"application/json",
            "Authorization":cookies.SEESAW_ACCESS_TOKEN
        },
    })
    if (!response.ok){
        console.warn("Network response Not Succeed")
        throw new Error("Network response not succeed");
    }

    return await response.json()
},{retry:3,enabled:true})}

const useCreateUser=(userData:{
    email:string,
    password:string,
    name:string,
    role:Array<string>,
    phonenum:string,
    nickname:string,
    address:string,
    address_extra:string,
    passport_number:string,
    alien_registration_number:string
},isCreatedByAdmin:Boolean=false) =>{
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    if (isCreatedByAdmin){
        const userRoles = useUserRoles();
        if(!userRoles().includes("admin")){
            return {data:undefined,isSuccess:false,isError:true,isLoading:false,error:Error("Permission Denied"),refetch:()=>{}}
        }
        return useQuery(["createUser"],async ()=>{
            const response = await fetch(`${apiAddr}/user`,{
                method:"POST",
                mode:"cors",
                credentials:"same-origin",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":cookies.SEESAW_ACCESS_TOKEN
                },
                body:JSON.stringify(userData)
            })
            if (!response.ok){
                console.warn("Network response Not Succeed")
                throw new Error("Network response not succeed");
            }
            return await response.text()
        },{retry:0,enabled:false})
    }
    return useQuery(["createUser"],async ()=>{
        const response = await fetch(`${apiAddr}/user`,{
            method:"POST",
            mode:"cors",
            credentials:"same-origin",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(userData)
        })
        if (!response.ok){
            console.warn("Network response Not Succeed")
            throw new Error("Network response not succeed");
        }
        return await response.text()
    },{retry:0,enabled:false});
}




export {useSignIn,useUserList,useCreateUser}