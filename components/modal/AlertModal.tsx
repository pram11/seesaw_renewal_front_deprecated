import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

type AlertModalProps = {
    headerText:string,
    bodyText:string,
    footerText:string,
    onClose:React.MouseEventHandler
}

const AlertModal = (props:AlertModalProps) => {
    useEffect(()=>{
        console.log("AlertModal");
    },[])
    return (
        <div className = "alert-modal-wrapper">
            <div className="alert-modal-container">
                <div className="alert-modal-header">
                    <div className="alert-modal-header-text">
                        {props.headerText}
                    </div>
                    <div className="alert-modal-header-close">
                        <FontAwesomeIcon icon={faTimes} size="2x" onClick={props.onClose} color="#FFF" />
                    </div>
                </div>
                <div className="alert-modal-body">
                    {props.bodyText}
                </div>
                <div className="alert-modal-footer">
                    <button className="alert-modal-footer-button" onClick={props.onClose}>
                        {props.footerText}
                    </button>
                </div>
            </div>
            <style jsx>
                {`
                    .alert-modal-wrapper{
                        position:absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        // background-color:rgba(0,0,0,0.5);
                        justify-content:center;
                        align-items:center;
                        display:flex;
                    }
                    .alert-modal-container{
                        width:80%;
                        max-width:400px;
                        background-color:#fff;
                        box-shadow: 2px 2px 5px black;

                    }
                    .alert-modal-header{
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        padding:16px;
                        background-color:var(--dl-color-blue-blue600);
                    }
                    .alert-modal-header-text{
                        font-size:24px;
                        font-weight:600;
                        color:#fff;
                    }
                    .alert-modal-header-close{
                        cursor:pointer;
                    }
                    .alert-modal-close-img{
                        filter: invert(98%) sepia(2%) saturate(6%) hue-rotate(57deg) brightness(101%) contrast(102%);
                    }
                    .alert-modal-body{
                        padding:16px;
                    }
                    .alert-modal-footer{
                        display:flex;
                        justify-content:flex-end;
                        padding:16px
                    }
                    .alert-modal-footer-button{
                        width:100%;
                        height:40px;
                        font-size:24px;
                        padding:8px 16px;
                        background-color:var(--dl-color-blue-blue600);
                        color:#fff;
                        border:none;
                    }
                `}
            </style>
        </div>
    )

}
AlertModal.defaultProps = {
    headerText: "Alert",
    bodyText: "Alert",
    footerText: "OK",
    onClose: ()=>{}
}


export default AlertModal
;

