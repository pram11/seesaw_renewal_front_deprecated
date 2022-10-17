export function parseToken(tokenData:string){
    const [encodedHeader,encodedPayload,] =tokenData.split(".")
    return {
        "header":JSON.parse(Buffer.from(encodedHeader,"base64").toString("utf8")),
        "payload":JSON.parse(Buffer.from(encodedPayload,"base64").toString("utf8"))
    }
}

export function getToken(){
    console.log(document.cookie)
}
export function storeToken(document:Document,tokenData:string){
    console.log(
        document.cookie
    )
    document.cookie = `SEESAW_ACCESS_TOKEN=${tokenData};`
    console.log(document.cookie)
}
export function removeToken(document:Document){
    document.cookie = `SEESAW_ACCESS_TOKEN=;`
}

