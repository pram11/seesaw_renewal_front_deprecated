
export function parseToken(tokenData:string){
    const [encodedHeader,encodedPayload,] =tokenData.split(".")
    
    return {
        "header":JSON.parse(Buffer.from(encodedHeader,"base64").toString("utf8")),
        "payload":JSON.parse(Buffer.from(encodedPayload,"base64").toString("utf8"))
    }
}
export function storeToken(tokenData:string){

}