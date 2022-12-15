import React from "react";


const TermAgreementTitle = (props:{title:string}) => {
    return (
        <div className="sign-up2-group86">
            <input
                type="checkbox"
                checked="true"
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
};

const TermAgreementSelectorList = (props:TermAgreementSelectorListProps) => {
    return (
        <div>
        {props.items.map((item:TermAgreementSelectorProps) => {
        return (
            <TermAgreementSelectorItem
                id={item.id}
                title={item.title}
                content={item.content}
                checked={item.checked}
            />
        );
    })}
    </div>)
};


type TermAgreementSelectorProps = {
    id: string;
    title: string;
    content: string;
    checked: boolean;
};
const TermAgreementSelectorItem = (props: TermAgreementSelectorProps) => {
    return (
        <div className="sign-up2-group281">
            <input
                type="checkbox"
                checked={props.checked}
                className="sign-up2-checkbox2"
            />
            <span className="sign-up2-text2">
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
    typeCode: string,
    title: string
};
const TermAgreementForm = (props:TermAgreementFormProps) => {
    const tempItems = [
        {
            id: "1",
            title: "Guide for private information collection and use",
            content: "Guide for private information collection and use",
            checked: true
        },
        {
            id: "2",
            title: "Guide for private information collection and use",
            content: "Guide for private information collection and use",
            checked: true
        },
    ];
    return (
        <div className="sign-up2-group27">
            <TermAgreementTitle title={props.title} />
            <TermAgreementSelectorList items = {tempItems} />
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
