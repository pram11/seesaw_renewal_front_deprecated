import { useQuery } from "@tanstack/react-query"
import { useCookies } from "react-cookie";
import {getAPIServerAddress} from "../../utils/config";
const apiAddr = getAPIServerAddress();
function getCommonCodeParentList(){
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    return useQuery(['commoncodeparents'],async ()=>{
        const response = await fetch(`${apiAddr}/codes`,{
            method:"GET",
            mode:"no-cors",
            headers:{
                "Content-Type":"application/json",
                "Authorization":cookies.SEESAW_ACCESS_TOKEN
            }
        })
        if (!response.ok){
            console.warn("Network response Not Succeed")
            throw new Error("Network response not succeed");
        }
        console.log(response.text)
        return response.json()
    })
} 
function getCommonCodeChildList(Q:{parentCode:string}){
    return useQuery(['commoncodechildren'],async ()=>{
        const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
        const response = await fetch(`${apiAddr}/code/${Q.parentCode}`,{
            method:"GET",
            mode:"no-cors",
            headers:{
                "Content-Type":"application/json",
                "Authorization":cookies.SEESAW_ACCESS_TOKEN,
            }
        })
        if (!response.ok){
            console.warn("Network response Not Succeed")
            throw new Error("Network response not succeed");
        }
        console.log(response.text)
        return response.json()
    })
}


export {getCommonCodeParentList}