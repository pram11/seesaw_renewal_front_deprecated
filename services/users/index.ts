import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {getAPIServerAddress} from "../../utils/config";
import { getUserRoles, useUserRoles } from "../../utils/user";
const apiAddr = getAPIServerAddress();

const useSignIn=()=>{
    return useMutation({mutationFn:async (requestParam:{email:string,password:string})=>{
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


const getUserList=async(accessToken:string,Q:{
    queryType:string,
    queryValue:string,
    page:number|undefined,
    size:number|undefined
})=>{
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
            "Authorization":accessToken
        },
    })
    if (!response.ok){
        console.warn("Network response Not Succeed")
        // throw new Error("Network response not succeed");
    }
    return {"count":parseInt(response.headers.get("X-Total-Count")??"0"),"result":await response.json(),"status":response.status}

}

const useUserList = (Q:{
    queryType:string,
    queryValue:string,
    page:number|undefined,
    size:number|undefined
},filter)=> {
    console.log("useUserList Requested",Q);
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    return useQuery(["getUserList",filter],async ()=>getUserList(cookies.SEESAW_ACCESS_TOKEN,Q),{retry:3,enabled:true})
}


const createUser = async (accessToken:string|null,userData:{
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
    const requestHeaders:HeadersInit = {
        "Content-Type":"application/json",
    }
    if (accessToken!==null){
        requestHeaders["Authorization"] = accessToken;
    }
    const response = await fetch(`${apiAddr}/user`,{
        method:"POST",
        mode:"cors",
        credentials:"same-origin",
        headers:requestHeaders,
        body:JSON.stringify(userData)
    })
    if (!response.ok){
        console.warn("Network response Not Succeed")
        throw new Error("Network response not succeed");
    }
    return response.json()
}

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
        return useMutation(["createUser"],async ()=>createUser(cookies.SEESAW_ACCESS_TOKEN,userData),{retry:0})
    }
    return useMutation(["createUser"],async ()=>createUser(null,userData),{retry:0});
}


const getUser = async (accessToken:string,userId:string)=>{
    const response = await fetch(`${apiAddr}/user/${userId}`,{
        method:"GET",
        mode:"cors",
        credentials:"same-origin",
        headers:{
            "Content-Type":"application/json",
            "Authorization":accessToken
        },
    })
    if (!response.ok){
        console.warn("Network response Not Succeed")
        
        throw new Error("Network response not succeed");
    }
    return await response.json()
}

const useUser=(userId:string)=>{
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    console.log("useUser Requested",userId);
    return useQuery(["getUser",userId],()=>getUser(cookies.SEESAW_ACCESS_TOKEN,userId),
    {retry:3,enabled:true})
}


const updateUser=async (accessToken:string,userId:string,userData:{
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
    return await fetch(`${apiAddr}/user/${userId}`,{
        method:"PUT",
        mode:"cors",
        credentials:"same-origin",
        headers:{
            "Content-Type":"application/json",
            "Authorization":accessToken
        },
        body:JSON.stringify(userData)
    })
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
    return useMutation(["updateUser",userId],()=>updateUser(cookies.SEESAW_ACCESS_TOKEN,userId,userData),{retry:0})
}


const deleteUser = async (accessToken:string,userId:string)=>{
    const response = await fetch(`${apiAddr}/user/${userId}`,{
        method:"DELETE",
        mode:"cors",
        credentials:"same-origin",
        headers:{
            "Content-Type":"application/json",
            "Authorization":accessToken
        },
    })
    if (!response.ok){
        console.warn("Network response Not Succeed")
        throw new Error("Network response not succeed");
    }
    return await response.text()
}


const useDeleteUser=()=>{
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    return useMutation({mutationFn:async (userId:string)=>
        deleteUser(cookies.SEESAW_ACCESS_TOKEN,userId)
    })

}

const confirmEmail = async (confirmCode:string)=>{
    return fetch(
        `${apiAddr}/user/confirmEmail`,
        {
            method:"POST",
            mode:"cors",
            credentials:"same-origin",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({"confirmCode":confirmCode})
        }
    )
}

const useConfirmEmail= ()=>{
    return useMutation({mutationFn:async (confirmCode:string)=>confirmEmail(confirmCode)
    })
}
export {useSignIn,useUserList,useCreateUser,useUser,useUpdateUser,useDeleteUser,useConfirmEmail}