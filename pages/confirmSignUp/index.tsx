import { Router, useRouter } from "next/router"
import React,{ useEffect } from "react";
import { useConfirmEmail } from "../../services/users";

const ConfirmSignUp = () => {
    const router = useRouter()
    const {code} = router.query;
    const confirmEmail = useConfirmEmail();
    const [confirmEmailResult, setConfirmEmailResult] = React.useState<number|null>(null);
    
    const onConfirmEmail = async () => {
        if (code===undefined) return;
        let res = await confirmEmail.mutateAsync(code?.toString());
        console.log(res)
        setConfirmEmailResult(res.status);
        switch(res.status) {
            case 200:
                return (
                    <div>
                        <h1>Confirm Email</h1>
                        <p>Success</p>
                        <button onClick={() => router.push("/login")}>Login</button>
                    </div>
                )
            case 400:
                return (
                    <div>
                        <h1>Confirm Email</h1>
                        <p>Bad Request</p>
                        <button onClick={() => router.push("/login")}>Login</button>
                    </div>
                )
            case 404:
                return (
                    <div>
                        <h1>Confirm Email</h1>
                        <p>Not Found</p>
                        <button onClick={() => router.push("/login")}>Login</button>
                    </div>
                )
            default:
                return (
                    <div>
                        <h1>Confirm Email</h1>
                        <p>Something went wrong</p>
                        <button onClick={() => router.push("/login")}>Login</button>
                    </div>
                )
            
        }
    }
    useEffect(() => {
        console.log("useEffect  ")
        let result = onConfirmEmail();
    },[])

    if (code===undefined){
        return <div>잘못된 접근입니다. </div>
    }
                

    return (
        <div>
            로딩중...
        </div>
    )


}
    
export default ConfirmSignUp
    