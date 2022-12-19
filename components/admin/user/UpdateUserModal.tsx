import React, { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useQuery } from "react-query";
import { useUser } from "../../../services/users";
import DisplayModal from "../modal/DisplayModal";
import UpdateUserForm,{formProps,formItems,inputItems} from "./UpdateUserForm";



const UpdateUserModal = (props) => {
    const [inputValues, setInputValues] = React.useState({
        id:props.userID,
        email: null,
        password: null,
        name: null,
        phonenum: null,
        nickname: null,
        address: null,
        address_extra: null,
        passport_number: null,
        alien_registration_number: null
        
    });
    const [isDataLoaded,setDataLoaded] = React.useState(false);
    // 사용자 data load
    const userData = useUser(props.userID)
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    
    useEffect(()=>{
        console.log("userData",userData.data)
        if (userData.status==="success"){
            console.log("userData",userData.data)
            console.log("userFormItems",userFormItems)
            const newInputValues = {
                id:userData.data.id,
                email: userData.data.email,
                phonenum:userData.data.phonenum,
                nickname:userData.data.nickname,
                passport_number:userData.data.passportID,
                sex:userData.data.sex,
                sido:userData.data.sido,
                sigungu:userData.data.sigungu,
                address:userData.data.address,
                address_extra:userData.data.addressExtra,
                alien_registration_number:userData.data.alienRegeNum
            } 
            setInputValues(Object.assign(inputValues,newInputValues));
            updateValues();
            setDataLoaded(true);
            console.log("inputValues",inputValues)
        }
    },[userData])
    console.log(inputValues)
    const initUserFormContent:formProps = {
        title:"사용자 정보 수정",
        description:"사용자 정보를 수정합니다.",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log("submit",event) 
            //데이터 발송
            
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
                {
                    id:"addressDetail",
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
        buttonText:"수정"
    }
    
    const [userFormItems,setUserFormItems] = React.useState<null|formItems>(initUserFormContent.formItems);
    
    const onChangeInputValue = (id:string,value:string) => {
        console.log("onChangeInputValue id:",id,"value:",value)
        
        setInputValues(Object.assign(inputValues,{[id]:value}));
        console.log("inputValues:",inputValues)

    }
    const updateValues = () => {
        const dataEntries = Object.entries(userData.data)
        if (userData.status==="success") {
            const newInputValues = userFormItems;
            newInputValues.map((item)=>{
                item.items.map((item)=>{
                    dataEntries.forEach((entry)=>{
                        console.log("entry:",entry)
                        if(item.id === entry[0]) {
                            item.value = entry[1];
                        }else{
                            return item
                        }
                        
                    })

                })
                console.log(item.items)
            }
            )
            console.log(newInputValues)
            setUserFormItems(newInputValues);
            // forceUpdate()
            console.log("userFormItems:",userFormItems)
        }
    }

    const onSubmit = () => {
        console.log("onSubmit")
        console.log("inputValues:",inputValues)
        const data = inputValues;
    }

    //render
    return (
        <DisplayModal
            headerText="사용자 정보 조회 / 수정"
            bodyComponent={
                !isDataLoaded?<div>로딩중</div>: 
                <UpdateUserForm 
                    formItems={userFormItems}
                    onChange={onChangeInputValue}
                    onSubmit={initUserFormContent.onSubmit}

                 />
            }
            footerComponent={
                <>
                    <button onClick={()=>{onSubmit()}} className="alert-modal-footer-button">{initUserFormContent.buttonText}</button>
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
                setInputValues({});
                props.onClose();
            }}
        />
    );
}

export default UpdateUserModal;