// 로그인 페이지

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";
import EmailLogInModal from "./EmailLogInModal";


export default function AccountModal(){
    const navigate = useNavigate();
    // 이메일로그인 화면 상태 - true : 열림 / false : 닫힘
    const [emailShowState, setEmailShowState] = useState(false);

    // 모달창 상태 - true : 열림 / false : 닫힘
    const [modalShowState, setModalShowState] = useState(false);

    const handleOpenModal = ()=>{
        console.log("모달창 열어");
        // 모달창 상태 열림으로 만들기
        setModalShowState(true);
    };
    const handleCloseModal = ()=>{
        console.log("모달창 닫아");
        // 모달창 상태 닫힘으로 만들기
        setModalShowState(false);

        // 이메일 화면 닫힘으로 만들기
        setEmailShowState(false);
    };

    const handleEmailScreen = ()=>{
        console.log("이메일 화면");
        setEmailShowState(true);

    }


    return(
        <>
        <div className="signInButton" onClick={handleOpenModal}>로그인/회원가입</div>
            <Modal 
                isOpen={modalShowState}
                onRequestClose={handleCloseModal}
                style={customModalStyles}
                ariaHideApp={false}
                shouldCloseOnOverlayClick={true}
                >
                {
                    emailShowState ? <EmailLogInModal handleCloseModal={handleCloseModal} /> :
                    <AccountSection>
                        <div className="iconContainer">
                            <button 
                            className="icon material-symbols-rounded" 
                            onClick={handleCloseModal}
                            style={{ float : "right", margin : "10px" }}>close</button>
                        </div>

                        <InfoContainer>
                            <h2 className="title">ㅇㅇ앱으로 퇴근 후에도 갓생살기!</h2>
                            <h4 className="desc">다양한 자기계발, 취미 징보를 확인하세요.</h4>
                        </InfoContainer>

                        <SignUpContainer>
                            <div className="signUpButton">카카오톡으로 계속하기</div>
                            <div className="signUpButton">네이버로 계속하기</div>
                            <div className="signUpButton">구글로 계속하기</div>
                            <div className="signUpButton" onClick={handleEmailScreen}>이메일로 계속하기</div>
                        </SignUpContainer>
                    </AccountSection>
                }
            </Modal>
        </>
    )
}


const AccountSection = styled.section`
    display: flex;
    flex-direction: column;
`;
const InfoContainer = styled.div`
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    .title{
        font-size: 22px;
        font-weight: bold;
    }
    .desc{
        font-size: 18px;
        font-weight: bold;
    }
`;
const SignUpContainer = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    .signUpButton:not(:last-child){
        padding: 10px;
        background-color: var(--color-9gray);
    }
`;

const customModalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100%",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
    },
    content: {
        width: "30%",
        height: "auto",
        zIndex: "150",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        justifyContent: "center",
        overflow: "auto",
    },
};






