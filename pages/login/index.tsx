import {useRouter} from "next/router"
import React, { useEffect } from "react";

const Login = (props) => {
    const router = useRouter()
    useEffect(()=>{
        router.push("/signin")},[]
    )
    return (
        <div>
            </div>
    );
}

export default Login