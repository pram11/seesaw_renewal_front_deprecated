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

export {getTermList}