import React from "react";
import { useCreateUser } from "../../../services/users";
import DisplayModal from "../modal/DisplayModal";
import CreateUserForm,{formProps,formItem,inputItem} from "./CreateUserForm";


type userForm={
    email: string;
    password: string;
    name: string;
    phonenum: string;
    nickname: string;
    address: string;
    address_extra: string;
    passport_number: string;
    alien_registration_number: string;
}
const CreateUserModal = (props) => {
    const [inputValues, setInputValues] = React.useState<userForm>({
        email: "",
        password: "",
        name: "",
        phonenum: "",
        nickname: "",
        address: "",
        address_extra: "",
        passport_number: "",
        alien_registration_number: ""        

    });
    // 사용자 data load
    const createUser = useCreateUser({
        email: inputValues.email,
        password: inputValues.password,
        name: inputValues.name,
        phonenum: inputValues.phonenum,
        nickname: inputValues.nickname,
        address: inputValues.address,
        address_extra: inputValues.address_extra,
        passport_number: inputValues.passport_number,
        alien_registration_number: inputValues.alien_registration_number,
    },true);
    
    const initUserFormContent:formProps = {
        title:"사용자 추가",
        description:"사용자를 추가합니다.",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log("submit",event) 
            //데이터 발송
            onClickSubmit();
            
        },
        onChange: (id:string,value:string) => {
            console.log("onChange id:",id,"value:",value)
            onChangeInputValue(id,value);
        },
        formItems:[{
            title:"기본 정보",
            description:"사용자의 기본 정보를 입력합니다.",
            items:[{
            id:"name",
            label: "이름",
            type: "text",
            value: "",
            placeholder: "이름을 입력하세요",
            options: [{}],
            required: true,
            onChange: (id,val)=>onChangeInputValue(id,val)
            },
            {
            id:"email",
            label: "이메일",
            type: "email",
            value: "",
            placeholder: "이메일을 입력하세요",
            options: [{}],
            required: true,
            onChange: (id,val)=>onChangeInputValue(id,val)
            },
            {
                id:"password",
                label: "비밀번호",
                type: "password",
                value: "",
                placeholder: "비밀번호를 입력하세요",
                options: [{}],
                required: false,
                onChange: (id,val)=>onChangeInputValue(id,val)
            },
            {
            id:"phone",
            label: "전화번호",
            type: "phonenum",
            value: "",
            placeholder: "전화번호를 입력하세요",
            options: [{}],
            required: false,
            onChange: (id,val)=>onChangeInputValue(id,val)
            },
            {
            id:"nickname",
            label: "닉네임",
            type: "text",
            value: "",
            placeholder: "닉네임을 입력하세요",
            options: [{}],
            required: false,
            onChange: (id,val)=>onChangeInputValue(id,val)
            },]
        },
        {
            title:"세부 정보",
            description:"사용자의 세부 정보를 입력합니다.",
            items:[{
                id:"address",
                label: "주소",
                type: "text",
                value: "",
                placeholder: "주소를 입력하세요",
                options: [{}],
                required: false,
                onChange: (id,val)=>onChangeInputValue(id,val)
                },
                {id:"addressDetail",
                label: "상세주소",
                type: "text",
                value: "",
                placeholder: "상세주소를 입력하세요",
                options: [{}],
                required: false,
                onChange: (id,val)=>onChangeInputValue(id,val)
                },  
                {
                id:"passport_id",
                label: "여권번호",
                type: "text",
                value: "",
                placeholder: "여권번호를 입력하세요",
                options: [{}],
                required: false,
                onChange: (id,val)=>onChangeInputValue(id,val)
                },
                {
                id:"alien_registration_number",
                label: "외국인등록번호",
                type: "text",
                value: "",
                placeholder: "외국인등록번호를 입력하세요",
                options: [{}],
                required: false,
                onChange: (id,val)=>onChangeInputValue(id,val)
                },
            ]
        }],
        buttonText:"사용자 추가"
    }

    const onChangeInputValue = (id:string,value:string) => {
        console.log("onChangeInputValue id:",id,"value:",value)
        if (inputValues.hasOwnProperty(id)) {
            let newInputValues = inputValues;
            newInputValues[id] = value;
            setInputValues(newInputValues);
        } else {
            
            setInputValues(Object.assign(inputValues,{[id]:value}));
        }
        console.log("inputValues:",inputValues)

    }
    const onClickSubmit = async () => {
        console.log("onClickSubmit",inputValues)
        //데이터 발송
        const result = await createUser.mutate(inputValues);
        console.log("result:",result)

    }

    //render
    return (
        <DisplayModal
            headerText="사용자 정보 등록"
            bodyComponent={
                <CreateUserForm
                    title="Create User"
                    formItems={initUserFormContent.formItems}
                    onChange={onChangeInputValue}
                    onSubmit={initUserFormContent.onSubmit}

                 />
            }
            footerComponent={
                <>
                    <button onClick={()=>{onClickSubmit()}} className="alert-modal-footer-button">{initUserFormContent.buttonText}</button>
                    <style jsx>{`
                    .alert-modal-footer-button{
                        width:100%;
                        height:40px;
                        font-size:24px;
                        padding:8px 16px;
                        background-color:var(--dl-color-blue-blue600);
                        color:#fff;
                        border:none;
                    }
                    `}</style>
                </>
            }

            onClose={() => {
                setInputValues({
                    email: "",
                    password: "",
                    name: "",
                    phonenum: "",
                    nickname: "",
                    address: "",
                    address_extra: "",
                    passport_number: "",
                    alien_registration_number: ""        
            
                });
                props.onClose();
            }}
        />
    );
}

export default CreateUserModal;