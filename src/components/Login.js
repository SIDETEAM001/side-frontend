// 로그인 페이지

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";


export default function LogIn(){
    const navigate = useNavigate();

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
    };


    return(
        <section>
            <div className="signInButton" onClick={handleOpenModal}>로그인</div>
            <Modal 
                isOpen={modalShowState}
                onRequestClose={handleCloseModal}
                style={customModalStyles}
                ariaHideApp={false}
                shouldCloseOnOverlayClick={true}
            >
                <button 
                className="icon material-symbols-rounded" 
                onClick={handleCloseModal}
                style={{ float : "right", margin : "10px" }}>close</button>
                <LogInForm method="POST" action="/">
                    <div className="계정입력섹션">
                        <input
                            type="text"
                            placeholder="아이디"/>
                        <input 
                            type="password"
                            placeholder="비밀번호"/>
                    </div>
                    <Button className="signUpButton">로그인</Button>
                    <div className="우리서비스섹션">
                        <SmallButton onClick={(e)=>{ 
                            e.preventDefault();
                            navigate('/member'); }}>회원가입</SmallButton>
                        <SmallButton onClick={(e)=>{
                            e.preventDefault();
                            window.open("", "", "popup");
                        }}>아이디/비밀번호 찾기</SmallButton>
                    </div>

                    <div className="소셜로그인섹션">
                        <span>또는</span>
                        <img className="socialSignUpButton" src={require("../assets/image/kakao_login_medium_wide.png")} alt="카카오 소셜 로그인하기" />
                        <div className="socialSignUpButton">애플 버튼</div>
                    </div>
                </LogInForm>
            </Modal>
        </section>
    )
}

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


const LogInForm = styled.form`
    clear: both;

    div.계정입력섹션{
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    div.우리서비스섹션{
        margin: 10px 0;
        display: flex;
        gap: 10px;
    }
    div.소셜로그인섹션{
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
    .socialSignUpButton{
        border: 1px solid var(--color-9gray);
    }
`;

const Button = styled.button`
    width: 100%;
    height: 45px;
    background-color: var(--color-mainPink);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;
const SmallButton = styled(Button)`
    background-color: var(--color-mainGreen);
`;



