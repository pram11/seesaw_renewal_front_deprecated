import { useQuery } from "@tanstack/react-query"
import {getAPIServerAddress} from "../../utils/config";
const apiAddr = getAPIServerAddress();
function getCommonCodeParentList(){
    return useQuery(['commoncodeparents'],async ()=>{
        const response = await fetch(`${apiAddr}/codes`,{
            method:"GET",
            mode:"no-cors",
            //authorization header 추가 필요.
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