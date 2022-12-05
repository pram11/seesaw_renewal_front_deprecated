import { Router, useRouter } from "next/router"
import { GetServerSideProps } from "next/types";
import React,{ useEffect } from "react";
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
    console.log(res)
    let resData = await res.json();
    return {
        props:{
            confirmStatus: res.status,
            message: resData.message
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
                <div>
                    <Header headerRightText={null} text={"이메일 검증"} />
                <div>Success
                    <p>{props.message}</p>
                    <button onClick={()=>{
                        router.push("/login")
                    }
                    }>Login</button>
                </div>
            </div>
            )
        case 400:
            return (
            <div >
                <Header headerRightText={null} text={"이메일 검증"} />
                <div>Bad Request
                    <p>{props.message}</p>
                    <button onClick={()=>{
                        router.push("/login")
                    }
                    }>Login</button>
                </div>
            </div>
            )
        case 401:
            return (
                <div>
                    <Header headerRightText={null} text={"이메일 검증"} />
                    <div>Unauthorized
                        <p>{props.message}</p>
                        <button onClick={()=>{
                            router.push("/login")
                        }
                        }>Login</button>

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
                <div>Not Found
                    <p>{props.message}</p>
                    <button onClick={()=>{
                        router.push("/login")
                    }
                    }>Login</button>
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
    