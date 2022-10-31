import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { getAPIServerAddress } from "../../utils/config";

const apiAddr = getAPIServerAddress();
const useMenuList = (Q:{
    parent:string|null,
    level:number|null
})=> {
    console.log("useUserList Requested",Q);
    const [cookies, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN'])
    return useQuery(["getMenuList"],async ()=>{
    var path = `${apiAddr}/code/menu`;
    if (Q.parent!==null||Q.level!==null) {
        path = `${path}?`
    }    
    if (Q.parent!==null) {
        path=`${path}parent=${Q.parent}`
        if (Q.level!==null) {
            path=`${path}&`
        }
    }
    if (Q.level!==null) {
        path=`${path}level=${Q.level}`
    }
    console.log("path:",path)
    const response = await fetch(path,{
        method:"GET",
        mode:"cors",
        credentials:"same-origin",
        headers:{
            "Content-Type":"application/json",
            "Authorization":cookies.SEESAW_ACCESS_TOKEN
        },
    })
    return response.json()
},{enabled:false,retry:3})}

export {useMenuList}