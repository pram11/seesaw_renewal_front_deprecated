import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {getAPIServerAddress} from "../../utils/config";
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
        setTokenCookie("SEESAW_ACCESS_TOKEN",response.headers.get("Authorization"),{path:"/"});
        setTokenCookie("SEESAW_REFRESH_TOKEN",response.headers.get("RefreshToken"),{path:"/"});
        return response.text()
    },{enabled:false})
}


const useUserList = (Q:{
    name:string,
    id:string,
    passport_num:string,
    phonenum:string,
    email:string
})=> {
    console.log("useUserList Requested",Q);
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_TOKEN']);
    // let query:string = Object.keys(Q)
	// .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(query[k])) 
	// .join('&'); 
    // console.log("query",query);
    return useQuery(["getUserList"],async ()=>{
    
    const response = await fetch(`${apiAddr}/user`,{
        method:"GET",
        mode:"cors",
        credentials:"same-origin",
        headers:{
            "Content-Type":"application/json",
            "Authorization":cookies.SEESAW_TOKEN
        },
    })
    return response.json()
})}





export {useSignIn,useUserList}