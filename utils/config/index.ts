function isDev(){
    const env = process.env.NODE_ENV
    // console.log(`NODE_ENV:${process.env.NODE_ENV}`)
    return env==="development"
}

export function getAPIServerAddress():String{
    if (isDev()){
        console.log("is Dev!")
        console.log("process.env:",process.env.NEXT_PUBLIC_DEV_API_SERVER)
        return process.env.NEXT_PUBLIC_DEV_API_SERVER!;
    }else{
        return process.env.NEXT_PUBLIC_API_SERVER!;
    }
}