import React, { MouseEventHandler, useEffect } from "react";
import AlertModal from "../../modal/AlertModal";
import TermModal from "../../modal/TermModal";


const TermAgreementTitle = (props:{title:string,onClick:MouseEventHandler,checked:boolean}) => {
    return (
        <div className="sign-up2-group86" onClick={props.onClick}>
            <input
                type="checkbox"
                checked={props.checked}
                className="sign-up2-checkbox"
            />
            <span className="sign-up2-text">{props.title}</span>
            <style jsx>{`
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
            `}</style>
        </div>
    );
};

type TermAgreementSelectorListProps = {
    items: Array<TermAgreementSelectorProps>,
    onCheckChanged: Function,
    onClickShowModal: Function,
};

const TermAgreementSelectorList = (props:TermAgreementSelectorListProps) => {
    const onItemCheckChanged = (id:string,checked:boolean) => {
        props.onCheckChanged(id,checked);
    }
    return (
        <div>
        {props.items.map((item:TermAgreementSelectorProps) => {
        return (
            <TermAgreementSelectorItem
                id={item.id}
                title={item.title}
                content={item.content}
                checked={item.checked}
                onCheckChanged={onItemCheckChanged}
                onClickShowModal={()=>props.onClickShowModal(item.id)}
            />
        );
    })}
    </div>)
};


export type TermAgreementSelectorProps = {
    id: string;
    title: string;
    content: string;
    checked: boolean;
    required: boolean;
    onCheckChanged: (id: string, checked: boolean) => void;
    onClickShowModal: (id: string) => void;
};
const TermAgreementSelectorItem = (props: TermAgreementSelectorProps) => {
    return (
        <div className="sign-up2-group281">
            <input
                onClick={()=>props.onCheckChanged(props.id, !props.checked)}
                type="checkbox"
                checked={props.checked}
                className="sign-up2-checkbox2"
            />
            <span className="sign-up2-text2" onClick={()=>props.onClickShowModal(props.id)}>
                {props.title}
            </span>
            <style jsx>{`
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
        </div>
    );
};

type TermAgreementFormProps = {
    title: string,
    items: Array<TermAgreementSelectorProps>,
    getAgreementList: Function,
};
const TermAgreementForm = (props:TermAgreementFormProps) => {
    const [titleIsChecked, setTitleIsChecked] = React.useState(false);
    const [agrementList, setAgreementList] = React.useState(props.items.map((item)=>{item.checked=false;return item}));
    const [showTermModal, setShowTermModal] = React.useState(false);
    const [termModalContents,setTermModalContents] = React.useState({id:"",title:"",content:""});

    const onClickShowTermModal = (id:string) => {
        setTermModalContents({
            id:id,
            content:agrementList.find((item)=>item.id===id)!.content,
            title:agrementList.find((item)=>item.id===id)!.title
        });
        setShowTermModal(true);
    };
    const onClickCloseTermModal = () => {
        setShowTermModal(false);
        setTermModalContents({id:"",title:"",content:""});
    }
        
    const onClickConfirmTermModal = () => {
        setShowTermModal(false);
        updateItemChanged(termModalContents.id,true);
        setTermModalContents({id:"",title:"",content:""});
    }
        

    const onClickTermTitle= () => {
        setAllAgreementChecked(!titleIsChecked);
        setTitleIsChecked(!titleIsChecked);
    };
    const setAllAgreementChecked = (checked:boolean) => {
        const newList = agrementList.map((item) => {
            return {
                ...item,
                checked: checked,
            };
        });
        setAgreementList(newList);
        props.getAgreementList(newList);
        console.log(newList)
    };
    const updateItemChanged = (id:string,checked:boolean) => {
        console.log("onChangeItem:"+id+":"+checked+"")
        const newList = agrementList.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    checked: checked,
                };
            }
            return item;
        });
        setAgreementList(newList);
        props.getAgreementList(newList);
    };
    
    
    return (
        <div className="sign-up2-group27">
            <TermAgreementTitle title={props.title} onClick={onClickTermTitle} checked={titleIsChecked}  />
            <TermAgreementSelectorList 
            items = {agrementList} 
            onCheckChanged={(id:string,checked:boolean)=>updateItemChanged(id,checked)}   
            onClickShowModal={(id:string)=>onClickShowTermModal(id)}
            />
            {showTermModal&&
            <TermModal headerText={termModalContents.title}

                bodyText={termModalContents.content}
                onClose={()=>onClickCloseTermModal()}
                onConfirm={()=>onClickConfirmTermModal()}
                footerText="Agree"
                 />
        }
            <style jsx>{`
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
            `}</style>
        </div>
    );
};


export default TermAgreementForm;
