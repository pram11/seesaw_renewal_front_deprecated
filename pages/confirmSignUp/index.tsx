import { Router, useRouter } from "next/router"
import { GetServerSideProps } from "next/types";
import React,{ useEffect } from "react";
import AdminButton from "../../components/admin/Button";
import Header from "../../components/header";
import { useConfirmEmail,confirmEmail } from "../../services/users";


export const getServerSideProps: GetServerSideProps = async (context) => {
    
    let code = context.query.code;
    if (code===undefined) {
        return {
            props:{
                confirmStatus: 404,
                message: "No code provided"
            }
        }
    }
    let res = await confirmEmail(code.toString());
    console.log("response:",res)
    return {
        props:{
            confirmStatus: res.status,
            message: await res.text()
        }
    }
}

    
const ConfirmSignUp = (props:{
    confirmStatus:number
    ,message:string|null
}) => {
    const router = useRouter()
    
    switch(props.confirmStatus){
        case 200:
            return (
                <div >
                    <Header headerRightText={null} text={"이메일 검증"} />
                <div style={{padding:"0 16px"}}>
                    <h2>이메일 확인</h2>
                    <p>이메일이 확인되었습니다.로그인하여 시소의 서비스를 이용해주세요.</p>
                    <AdminButton text={"로그인"} onClick={()=>{
                        router.push("/login")
                    }}></AdminButton>
                </div>
            </div>
            )
        case 400:
            return (
            <div >
                <Header headerRightText={null} text={"이메일 검증"} />
                <div style={{padding:"0 16px"}}>
                    <h2>잘못된 요청</h2>
                    <p>잘못된 요청입니다.</p>
                    <AdminButton text={"로그인"} onClick={()=>{
                        router.push("/login")
                    }}></AdminButton>
                </div>
            </div>
            )
        case 401:
            return (
                <div>
                    <Header headerRightText={null} text={"이메일 검증"} />
                    <div style={{padding:"0 16px"}}>
                    <h2>잘못된 요청</h2>
                    <p>인증되지 않았습니다.</p>
                    <AdminButton text={"로그인"} onClick={()=>{
                        router.push("/login")
                    }}></AdminButton>
                </div>
                </div>
            )
        case 403:
            return (
                <div>
                    <Header headerRightText={null} text={"이메일 검증"} />
                    <div>Forbidden
                        <p>{props.message}</p>
                        <button onClick={()=>{
                            router.push("/login")
                        }
                        }>Login</button>
                    </div>
                </div>
            )
        case 404:
            return (
            <div>
                <Header headerRightText={null} text={"이메일 검증"} />
                <div style={{padding:"0 16px"}}>
                    <h2>인증이 존재하지 않음</h2>
                    <p>인증이 존재하지 않습니다. 다시한번 시도해 주세요. 만약 이메일이 오지 않았다면, 다시 한번 전송해 주세요. </p>
                    <AdminButton text={"로그인"} onClick={()=>{
                        router.push("/login")
                    }}></AdminButton>
                </div>
            </div>)
        case 409:
            return (
            <div>
                <Header headerRightText={null} text={"이메일 검증"} />
                <div style={{padding:"0 16px"}}>
                    <h2>이미 인증됨</h2>
                    <p>이미 인증된 계정입니다.로그인 해 주세요. </p>
                    <AdminButton text={"로그인"} onClick={()=>{
                        router.push("/login")
                    }}></AdminButton>
                </div>
            </div>)   
        case 410:
            return (
            <div>
                <Header headerRightText={null} text={"이메일 검증"} />
                <div style={{padding:"0 16px"}}>
                    <h2>인증이 만료됨</h2>
                    <p>인증이 만료되었습니다. 다시한번 시도해 주세요. 만약 이메일이 오지 않았다면, 다시 한번 전송해 주세요. </p>
                    <AdminButton text={"로그인"} onClick={()=>{
                        router.push("/login")
                    }}></AdminButton>
                </div>
            </div>)
            
        case 500:
            return (
            <div>
                <Header headerRightText={null} text={"이메일 검증"} />
                <div>Internal Server Error
                    <p>{props.message}</p>
                    <button onClick={()=>{
                        router.push("/login")
                    }
                    }>Login</button>
                </div>
            </div>
            )
        default:
            return (
            <div>
                <Header headerRightText={null} text={"이메일 검증"} />
                <div>Unknown Error
                    <p>{props.message}</p>
                    <button onClick={()=>{
                        router.push("/login")
                    }
                    }>Login</button>
                </div>
            </div>
            )
    }

}
    
export default ConfirmSignUp
    