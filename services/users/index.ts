import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {getAPIServerAddress} from "../../utils/config";
import { getUserRoles, useUserRoles } from "../../utils/user";
const apiAddr = getAPIServerAddress();

const useSignIn=()=>{
    return useMutation({mutationFn:async requestParam=>{
        console.log("useSignIn Requested",requestParam);
            const signInForm = {email:requestParam.email,password:requestParam.password}
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
            console.log("response:",response.text)
            return {accessToken:response.headers.get("Authorization"),refreshToken:response.headers.get("RefreshToken"),response:await response.text(),status:response.status}
        }
    })
}


const useUserList = (Q:{
    queryType:string,
    queryValue:string,
    page:number|undefined,
    size:number|undefined
},filter)=> {
    console.log("useUserList Requested",Q);
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    return useQuery(["getUserList",filter],async ()=>{
    if (Q.queryType!==""&&Q.queryValue!=="") {
        var path = `${apiAddr}/user?${Q.queryType}=${Q.queryValue}`;
    } else {
        var path = `${apiAddr}/user`;
        if (Q.page!==undefined&&Q.size!==undefined) {
            path = `${path}?page=${Q.page-1}&size=${Q.size}`;
        }
        if (Q.page!==undefined&&Q.size===undefined) {
            path = `${path}?page=${Q.page-1}`;
        }
    }
    
    console.log("path:",path);
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
    phonenum:string,
    nickname:string,
    address:string,
    address_extra:string,
    passport_number:string,
    alien_registration_number:string
},isCreatedByAdmin:Boolean=false) =>{
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    console.log("useCreateUser Requested",userData);
    if (isCreatedByAdmin){
        const userRoles = getUserRoles(cookies.SEESAW_ACCESS_TOKEN);
        console.log("userRoles:",userRoles)
        if(!userRoles.includes("ADMIN")){
            console.log("User is not admin")
            return {data:undefined,isSuccess:false,isError:true,isLoading:false,error:Error("Permission Denied"),refetch:()=>{}}
        }
        console.log(`Admin Created User, ${cookies.SEESAW_ACCESS_TOKEN}`)
    
        return useMutation(["createUser"],async ()=>{
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
            return await response
        },{retry:0})
    }
    return useMutation(["createUser"],async ()=>{
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
    },{retry:0});
}

const useUser=(userId:string)=>{
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    console.log("useUser Requested",userId);
    return useQuery(["getUser",userId],async ()=>{
        const response = await fetch(`${apiAddr}/user/${userId}`,{
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
    },{retry:3,enabled:true})
}


const useUpdateUser=(userId:string,userData:{
    email:string,
    password:string,
    name:string,
    phonenum:string,
    nickname:string,
    address:string,
    address_extra:string,
    passport_number:string,
    alien_registration_number:string
})=>{
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    console.log("useUpdateUser Requested",userId,userData);
    return useMutation(["updateUser",userId],async ()=>{
        const response = await fetch(`${apiAddr}/user/${userId}`,{
            method:"PUT",
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
    },{retry:0})
}

export {useSignIn,useUserList,useCreateUser,useUser}