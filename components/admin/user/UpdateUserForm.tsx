import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import PasswordUpdateInput from './PasswordUpdateInput';

export type formProps = {
    title: string,
    description: string,
    onSubmit: Function,
    onChange: (id:string,value:string) => void,
    formItems:Array<formItem>,
    buttonText:string
}  
export type formItem= {
    title:string,
    description:string|null,
    items:Array<inputItem>
}
export type inputItem={
    id:string,
    label:string,
    type:string,
    value:string,            
    placeholder: string,
    options:[{}],
    required:boolean,
    onChange: (id:string,value:string) => void,
}

const UserFormInput = ({id,label,type,value,onChange,required}:inputItem) => {
    const [inputValue, setInputValue] = useState(value);
    // const changePhoneNumber = (id:string,value:string) => {
    //     const newValue = phoneNumDashInsert(value);
    //     setInputValue(newValue);
    //     onChange(id,newValue);

    // }
    const onChangeValue = (id:string,evt:React.ChangeEvent<HTMLInputElement>) => {
        console.log("type:",type,"evt.target.value:",evt.target.value)
        // if (type === "phonenum") {  
        //     console.log("onPhonenum ChangeValue id:",id,"value:",evt.target.value)
        //     changePhoneNumber(id,evt.target.value);
        // } else {

        setInputValue(evt.target.value);
        onChange(id,evt.target.value)
        // }
        
    }


    return (
        <>
            <div>
            <h3 className='form-item-label'>{label}</h3>
                <input 
                    className='form-item-input'
                    id={id}
                    type={type} 
                    value={inputValue} 
                    onChange={(evt)=>onChangeValue(id,evt)} 
                    required={required} 
                />
                
            </div>
            <style jsx
            >{`
                .form-item-label {
                    display: block;
                    margin-block-start: 0.5em;
                    margin-block-end: 0.3em;
                }
                .form-item-input[type="text"] {
                    width: 100%;
                    padding: 0.5rem;
                    border: 1px solid #ccc;
                    border-radius: 0.3rem;
                    font-size: 1rem;
                }
                .form-item-input[type="text"]:focus {
                    outline: none;
                    border-color: #007bff;
                }
                .form-item-input[type="text"]:invalid {
                    border-color: #dc3545;
                }
                .form-item-input[type="phonenum"] {
                    width: 100%;
                    padding: 0.5rem;
                    border: 1px solid #ccc;
                    border-radius: 0.3rem;
                    font-size: 1rem;
                }
                .form-item-input[type="phonenum"]:focus {
                    outline: none;
                    border-color: #007bff;
                }
                .form-item-input[type="phonenum"]:invalid {
                    border-color: #dc3545;
                }
                .form-item-input[type="email"] {
                    width: 100%;
                    padding: 0.5rem;
                    border: 1px solid #ccc;
                    border-radius: 0.3rem;
                    font-size: 1rem;
                }
                .form-item-input[type="email"]:focus {
                    outline: none;
                    border-color: #007bff;
                }
                .form-item-input[type="email"]:invalid {
                    border-color: #dc3545;
                }
                `
            }
            </style>
        </>
        
    )
}

const UpdateUserForm = ({title,description,onSubmit,onChange,formItems,buttonText}:formProps) => {
    const phoneNumValidator = (value:string) => {
        const regExp = /^\d{3}-\d{3,4}-\d{4}$/;
        return regExp.test(value);
    }
    useEffect(() => {   
        console.log("UpdateUserForm useEffect,",formItems)
    })
    console.log("formItems:",formItems)

    
    return (
        <div>
            <h1 className='form-title'>{title}</h1>
            {description && <p className='form-discription'>{description}</p>}
            <form onSubmit={(event)=>onSubmit(event)}>
                {formItems.map((item)=>{
                    console.log("item:",item)
                    return (
                        <div>
                            <h2 className='form-item-title'>{item.title}</h2>
                            {item.description && <p className='form-item-description'>{item.description}</p>}
                            {item.items.map((inputitem)=>{
                                
                                return inputitem.type==="password"?
                                <PasswordUpdateInput 
                                    id={inputitem.id}

                                />
                                :
                                <UserFormInput 
                                    id={inputitem.id}
                                    label={inputitem.label}
                                    type={inputitem.type}
                                    value={inputitem.value}
                                    placeholder={inputitem.placeholder}
                                    options={inputitem.options}
                                    required={inputitem.required}
                                    onChange={onChange}
                                />
                            }
                            )}
                        </div>
                    )}
                )}
            </form>
            <style jsx>{`
                .form-title {
                    font-size: 1.7rem;
                    font-weight: 700;
                    margin-bottom: 0.2em;
                }
                .form-discription {
                    font-size: 1rem;
                    margin-top: 0.2em;
                    margin-bottom: 1rem;
                    color: #666;
                }
                .form-item-title {
                    font-size: 1.5rem;
                    font-weight: 500;
                    margin-bottom: 0.2rem;
                }
                .form-item-description {
                    font-size: 1rem;
                    margin-top: 0.2rem;
                    margin-bottom: 0.5rem;
                    color: #666;
                }

                

                .button-submit {
                    display: block;
                    width: 100%;
                    padding: 0.5rem;
                    border: none;
                    font-size: 1rem;
                    margin-top: 1rem;
                    background-color: var(--dl-color-blue-blue600);
                    color: #fff;
                    cursor: pointer;
                }


            `}</style>





        </div>
    );
}
UpdateUserForm.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    formItems: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(PropTypes.shape({})),
            required: PropTypes.bool.isRequired
        }))
    })),
    buttonText: PropTypes.string
}
UpdateUserForm.defaultProps = {
    title: "Update User",
    description: null,
    formItems: [{
        title: "User Info",
        description: null,
        items: [{
            id: "name",
            label: "Name",
            type: "text",
            value: "",
            options: [],
            required: true
        },{
            id: "email",
            label: "Email",
            type: "email",
            value: "",
            options: [],
            required: true
        }]
    }],
    buttonText: "Submit"
}





export default UpdateUserForm;