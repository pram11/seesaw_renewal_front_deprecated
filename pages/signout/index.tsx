import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';

const SignOut = ()=>{
    const router = useRouter();
    // 사용자 인증 데이터 삭제.
    useEffect(()=>{
        console.log("Sign Out")
        router.push("/")
    },[])
    return (<></>)

}
export default SignOut