// 이메일로 계속하기 - 로그인

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function EmailLogInModal(props){
    const navigate = useNavigate();

    return(
        <>
            <div className="iconContainer">
                <button 
                className="icon material-symbols-rounded" 
                style={{ float : "right", margin : "10px" }}
                onClick={props.handleCloseModal}>close</button>
            </div>
            <EmailLogInForm method="POST" action="/">
                <div className="inputContainer">
                    <input
                        type="text"
                        placeholder="아이디"/>
                    <input 
                        type="password"
                        placeholder="비밀번호"/>
                </div>
                <ButtonContainer>
                    <button>로그인</button>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        window.open("", "", "popup");
                    }}>아이디/비밀번호 찾기</button>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        navigate('/member');
                        props.handleCloseModal();
                    }}>회원가입</button>
                </ButtonContainer>
            </EmailLogInForm>
        </>
    )
}


const EmailLogInForm = styled.form`
    clear: both;
    .inputContainer{
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    `;
const ButtonContainer = styled.div`
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;

    button{
        padding: 10px;
        background-color: var(--color-9gray);
        border-radius: 8px;
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