import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { getAPIServerAddress } from "../../utils/config";

const apiAddr = getAPIServerAddress();
const getTermList = async (Q:{typeCode:string|null})=>{
    return await fetch(`${apiAddr}/term?typeCode=${Q.typeCode}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        }
    })
}

const createTermAgreement = async (accessToken:string,termId:string)=>{
    return await fetch(`${apiAddr}/term/${termId}/agree`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":accessToken
        },
    })
}
const useCreateTermAgreement = ()=>{
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    const accessToken = cookies.SEESAW_ACCESS_TOKEN
    return useMutation({mutationFn:async (termId:string)=>{
        const response = await createTermAgreement(accessToken,termId)
        return await response.json()
    }})
}

export {getTermList,useCreateTermAgreement}