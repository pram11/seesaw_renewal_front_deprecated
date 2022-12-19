import React,{useState,useEffect} from 'react';

const PasswordUpdateInput = (props) => {
    const [password,setPassword] = useState("");
    const [isPasswordUpdateActivated,setIsPasswordUpdateActivated] = useState(false);
    const [isPasswordUpdateValidated,setIsPasswordUpdateValidated] = useState(false);

    const validatePassword = (password:string) => {
        const regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
        return regExp.test(password);
    }

    const passwordInputHandler = (evt:React.ChangeEvent<HTMLInputElement>) => {
        console.log("onChangePassword",evt.target.value);
        setPassword(evt.target.value);
        console.log("password",password);
        console.log("isPasswordUpdateValidated",isPasswordUpdateValidated);
    }
    useEffect(()=>{
        const isValid = validatePassword(password);
        console.log("isValid",isValid);
        console.log("password",password);
        console.log("isPasswordUpdateValidated",isPasswordUpdateValidated);
        setIsPasswordUpdateValidated(isValid);
    },[password])


    if (isPasswordUpdateActivated) {
        return (
            <>
                <h3 className='password-update-label'>비밀번호 변경</h3>
                <p className='password-update-description'>비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리로 입력해주세요.</p>
                {isPasswordUpdateValidated?
                    <input className='password-input' type="password" value={password} onChange={passwordInputHandler} />
                    :
                    <input className='password-input-invalid' type="password" value={password} onChange={passwordInputHandler} />
                }
                <div className='password-btn-group'>
                    <button className='password-update' onClick={()=>{console.log("비밀번호 변경 요청")}}>변경된 비밀번호 등록</button>
                    <button className='password-update-cancel' onClick={()=>{setIsPasswordUpdateActivated(false);setPassword("")}}>취소</button>
                </div>

                <style jsx>{`
                    .password-update-label {
                        font-size: 1.2rem;
                        margin-block-end: 0.5rem;

                    }
                    .password-input {
                        width: 100%;
                        padding: 0.5rem;
                        border: 1px solid #ccc;
                        border-radius: 0.3rem;
                    }
                    .password-input:focus {
                        outline: none;
                        border-color: #007bff;
                    }

            
                    .password-input-invalid {
                        width: 100%;
                        padding: 0.5rem;
                        border: 1px solid #dc3545;
                        border-radius: 0.3rem;
                    }
                    .password-input-invalid:focus {
                        outline: none;
                        border-color: #dc3545;
                    }


                    .password-btn-group {
                        display: flex;
                        margin-top: 0.5rem;
                    }

                    .password-update {
                        width: auto;
                        padding: 0.5rem;
                        background-color: #4CAF50;
                        color: white;
                        border: none;
                        border-radius: 0.3rem;
                        font-size: 1rem;
                    }
                    .password-update-cancel {
                        width: auto;
                        margin-left: 0.5rem;
                        padding: 0.5rem;
                        background-color: #f44336;
                        color: white;
                        border: none;
                        border-radius: 0.3rem;
                        font-size: 1rem;
                    }
                `}
                </style>

                    
            </>
        )
    } else {
        return (
            <>
                <h3 className='password-update-label'>비밀번호 변경</h3>
                <button className='password-update-activate' onClick={()=>setIsPasswordUpdateActivated(true)}>비밀번호 변경</button>
                <style jsx>{`
                    .password-update-label {
                        font-size: 1.2rem;
                        margin-block-end: 0.5rem;
                    }

                    .password-update-activate {

                        width: auto;
                        padding: 0.5rem;
                        background-color: #4CAF50;
                        color: white;
                        border: none;
                        border-radius: 0.3rem;
                        font-size: 1rem;
                    }
                `}
                </style>
            </>
        )
    }
}

export default PasswordUpdateInput;