import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useQuery } from "react-query";
import DisplayModal from "../modal/DisplayModal";
import UpdateUserForm from "./UpdateUserForm";

const UpdateUserModal = (props) => {
    // 사용자 data load
    
    //render
    return (
        <DisplayModal
            headerText="사용자 정보 조회 / 수정"
            bodyComponent={
                <UpdateUserForm />
            }
            footerText="닫기"
            onClose={() => {
                props.onClose();
            }}
        />
    );
}

export default UpdateUserModal;