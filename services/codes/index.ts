import { useQuery } from "@tanstack/react-query"
import { useCookies } from "react-cookie";
import {getAPIServerAddress} from "../../utils/config";
const apiAddr = getAPIServerAddress();
function useCommonCodeParentList(){
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    return useQuery(['commoncodeparents'],async ()=>{
        const response = await fetch(`${apiAddr}/codes`,{
            method:"GET",
            mode:"cors",
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
function useCommonCodeChildList(Q:{parentCode:string}){
    console.log("useCommonCodeChildList Requested",Q);
    // const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    return useQuery(['getCommonCodeChildren'],async ()=>{
        const response = await fetch(`${apiAddr}/code/${Q.parentCode}/children`,{
            method:"GET",
            mode:"cors",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
                // "Authorization":cookies.SEESAW_ACCESS_TOKEN,
            }
        })
        if (!response.ok){
            console.warn("Network response Not Succeed");
            console.warn(response);
            throw new Error("Network response not succeed")

        }
        let result = await response.json();
        return result;
    })
}


export {useCommonCodeParentList,useCommonCodeChildList}