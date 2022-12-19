import React, { useEffect } from "react";
import Head from "next/head";

import BackHeader from "../../../components/BackHeader";
import BoxInput from "../../../components/box-input";
import TrueFalseButton from "../../../components/buttons/TrueFalseButton/TrueFalseButton";
import { useRouter } from "next/router";
import { useCreateUser } from "../../../services/users";
import TermAgreementForm, { TermAgreementSelectorProps } from "../../../components/forms/TermAgreement";
import { getTermList, useCreateTermAgreement } from "../../../services/terms";
import AlertModal from "../../../components/modal/AlertModal";
import { Item } from "react-bootstrap/lib/Breadcrumb";
const SignUp2 = (props: {termList:Array<TermAgreementSelectorProps>}) => {
    const router = useRouter();
    const [showAlertModal, setShowAlertModal] = React.useState<boolean>(false);
    const [alertModalMessage, setAlertModalMessage] = React.useState<string>("");
    const [nickname, setNickname] = React.useState<string>(
        router.query.nickname === undefined
            ? ""
            : router.query.nickname.toString()
    );
    const [phonenum, setPhonenum] = React.useState<string>(
        router.query.phonenum === undefined
            ? ""
            : router.query.phonenum.toString()
    );
    
    const email = router.query.email?.toString()!;
    const password = router.query.password?.toString()!;
    const [agreementList,setAgreementList] = React.useState<Array<TermAgreementSelectorProps>>(props.termList);
    const createUser = useCreateUser(
        {
            email: email,
            password: password,
            name: "",
            phonenum: phonenum,
            nickname: nickname,
            address: "",
            address_extra: "",
            passport_number: "",
            alien_registration_number: "",
        },false
    );
    const agreeTerm = useCreateTermAgreement();
    const checkAgreement = () =>{
        let isAgreed = true;
        agreementList.forEach((agreement)=>{
            if (!agreement.checked&&agreement.required){
                isAgreed = false;
            }
        });
        return isAgreed;
    }
    const onClickNext = async () => {
        console.log("agreementList:",agreementList);
        if (!checkAgreement()){
            console.warn("failed to agree terms");
            setAlertModalMessage("약관에 동의해주세요");
            setShowAlertModal(true);
            return;
        }
        
        let terms = agreementList.map((agreement)=>{return {termID:Number(agreement.id),agree:agreement.checked}});
        let res = await createUser.mutateAsync({
            email: email,
            password: password,
            name: "",
            phonenum: phonenum,
            nickname: nickname,
            address: "",
            address_extra: "",
            passport_number: "",
            alien_registration_number: "",
            terms:terms
        });
        
        

        if (res.status === 201){            
            router.push(
                { pathname: "/signup/success", query: { email: email } },
                "/signup/success"
            );
        }else{
            console.warn("failed to create user");
            setAlertModalMessage("회원가입에 실패했습니다. 입력을 확인해주세요");
            setShowAlertModal(true);
        }
    };

    const onClickPrev = () => {
        router.push(
            {
                pathname: "/signup/1",
                query: {
                    email: email,
                    password: password,
                    nickname: nickname,
                    phonenum: phonenum,
                },
            },
            "/signup/1"
        );
    };
    const closeAlertModal = () => {
        setAlertModalMessage("");
        setShowAlertModal(false);
    };

    return (
        <>
            <div className="sign-up2-container">
                <Head>
                    <title>SignUp2 - exported project</title>
                    <meta
                        property="og:title"
                        content="SignUp2 - exported project"
                    />
                </Head>
                <BackHeader
                    headerTitle="회원가입"
                    rootClassName="back-header-root-class-name3"
                    headerRightText=" "
                ></BackHeader>
                    <BoxInput
                    inputText="Please enter your nickname"
                    inputTitle="NICKNAME"
                    rootClassName="box-input-root-class-name3"
                    value={nickname}
                    onChange={(e) => {
                        setNickname(e.target.value);
                    }}
                ></BoxInput>
                <BoxInput
                    inputText="Enter your phone number"
                    inputTitle="Phone Number"
                    rootClassName="box-input-root-class-name4"
                    value={phonenum}
                    onChange={(e) => {
                        setPhonenum(e.target.value);
                    }}
                ></BoxInput>
                <TermAgreementForm title="약관" items={props.termList} getAgreementList={(list:Array<TermAgreementSelectorProps>)=>{setAgreementList(list)}} />
                
                
                <TrueFalseButton
                    falseButtonText="Prev"
                    trueButtonText="Next"
                    rootClassName="true-false-button-root-class-name3"
                    onClickTrue={onClickNext}
                    onClickFalse={onClickPrev}
                ></TrueFalseButton>
                {showAlertModal&&<AlertModal 
                headerText="알림"
                bodyText={alertModalMessage}
                onClose={closeAlertModal}
                />}
            </div>
            <style jsx>
                {`
                    .form-wrapper {
                        flex:1;
                        flex-direction: row
                    }
                    .sign-up2-container {
                        width: 100%;
                        display: flex;
                        overflow: auto;
                        min-height: 100vh;
                        align-items: flex-start;
                        flex-direction: column;
                        justify-content: flex-start;
                    }
                    .sign-up2-group27 {
                        width: 100%;
                        height: auto;
                        position: relative;
                        flex-shrink: 0;
                        border-color: transparent;
                        margin-right: 0;
                        border-radius: 0px 0px 0px 0px;
                        margin-bottom: 0;
                        background-color: var(--dl-color-default-grey);
                    }
                    .sign-up2-group86 {
                        left: 0px;
                        height: 60px;
                        display: flex;
                        padding: var(--dl-space-space-unit);
                        position: relative;
                        align-self: auto;
                        box-sizing: border-box;
                        align-items: flex-start;
                        flex-shrink: 1;
                        border-color: transparent;
                        border-style: none;
                        border-width: 0;
                        margin-right: 0;
                        border-radius: 0px 0px 0px 0px;
                        margin-bottom: 0;
                        flex-direction: row;
                        justify-content: flex-start;
                        background-color: var(--dl-color-default-grey);
                    }
                    .sign-up2-checkbox {
                        width: 30px;
                        height: 30px;
                        margin-right: var(--dl-space-space-unit);
                    }
                    .sign-up2-text {
                        color: rgba(0, 0, 0, 1);
                        width: 100%;
                        height: auto;
                        font-size: 20px;
                        align-self: auto;
                        font-style: Bold;
                        text-align: left;
                        align-items: center;
                        font-family: Roboto;
                        font-weight: 700;
                        line-height: normal;
                        font-stretch: normal;
                        text-decoration: none;
                    }
                    .sign-up2-group28 {
                        top: 119px;
                        right: -1px;
                        width: 100%;
                        height: 60px;
                        display: flex;
                        align-self: auto;
                        box-sizing: border-box;
                        align-items: flex-start;
                        flex-shrink: 1;
                        padding-top: var(--dl-space-space-unit);
                        border-color: transparent;
                        border-style: none;
                        border-width: 0;
                        padding-left: var(--dl-space-space-unit);
                        border-radius: 0px 0px 0px 0px;
                        flex-direction: row;
                        padding-bottom: var(--dl-space-space-unit);
                        justify-content: flex-start;
                        background-color: var(--dl-color-gray-white);
                    }
                    .sign-up2-checkbox1 {
                        width: 30px;
                        height: 30px;
                        margin-right: var(--dl-space-space-unit);
                    }
                    .sign-up2-text1 {
                        color: var(--dl-color-black-black500);
                        width: 100%;
                        height: auto;
                        font-size: 20px;
                        align-self: auto;
                        font-style: Bold;
                        text-align: left;
                        font-family: Roboto;
                        font-weight: 700;
                        line-height: normal;
                        font-stretch: normal;
                        text-decoration: none;
                    }
                    .sign-up2-group281 {
                        top: 119px;
                        right: -1px;
                        width: 100%;
                        height: 60px;
                        display: flex;
                        align-self: auto;
                        box-sizing: border-box;
                        align-items: flex-start;
                        flex-shrink: 1;
                        padding-top: var(--dl-space-space-unit);
                        border-color: transparent;
                        border-style: none;
                        border-width: 0;
                        padding-left: var(--dl-space-space-unit);
                        border-radius: 0px 0px 0px 0px;
                        flex-direction: row;
                        padding-bottom: var(--dl-space-space-unit);
                        justify-content: flex-start;
                        background-color: var(--dl-color-gray-white);
                    }
                    .sign-up2-checkbox2 {
                        width: 30px;
                        height: 30px;
                        margin-right: var(--dl-space-space-unit);
                    }
                    .sign-up2-text2 {
                        color: var(--dl-color-black-black500);
                        width: 100%;
                        height: auto;
                        font-size: 20px;
                        align-self: auto;
                        font-style: Bold;
                        text-align: left;
                        font-family: Roboto;
                        font-weight: 700;
                        line-height: normal;
                        font-stretch: normal;
                        text-decoration: none;
                    }
                `}
            </style>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const res = await (await getTermList({typeCode:"SIGN_UP"})).json();
    console.log(res)
    return {props:{
        termList: res
        }
    }
}


export default SignUp2;
