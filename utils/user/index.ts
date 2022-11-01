import { useCookies } from "react-cookie"
function sliceBearerToken(token:string){
    return token.slice(7)
}
export function parseToken(tokenData:string){
    const [encodedHeader,encodedPayload,] =tokenData.split(".")
    console.log("encodedHeader",encodedHeader);
    console.log("encodedPayload",encodedPayload);
    console.log("decodedHeader",Buffer.from(encodedHeader,"base64").toString("utf-8"));
    return {
        "header":JSON.parse(Buffer.from(encodedHeader,"base64").toString("utf8")),
        "payload":JSON.parse(Buffer.from(encodedPayload,"base64").toString("utf8"))
    }
}

export function isLogin(){
    const [cookie, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN']);
    if (cookie.SEESAW_ACCESS_TOKEN===undefined){
        return false
    }
    return true
}

export function useUserRoles(){
    const [cookie, setCookie, removeCookie] = useCookies(['SEESAW_ACCESS_TOKEN']);

    async function getUserList(){
        if (await cookie.SEESAW_ACCESS_TOKEN===undefined){
            return []
        }
        return await parseToken(sliceBearerToken(cookie.SEESAW_ACCESS_TOKEN)).payload.roles
    }
    return getUserList

}
export function getUserRoles(token:string){
    if (token===undefined){
        return []
    }
    return parseToken(sliceBearerToken(token)).payload.roles


}