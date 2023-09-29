import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Input = styled.input`
  width: 403px;
  height: 45px;
  border: 1px solid #cecece;
  margin: 16px;
  padding-left: 16px;
  padding-top: 14px;
  padding-bottom: 13px;
  padding-right: 16px;
  border-radius: 8px;
  outline: none;
`;

export const LoginBox = styled.div`
  width: 403px;
  height: 45px;
  margin-top: 16px;
  border-radius: 8px;
  background: var(--mainPink, #ec8f8f);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.333px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignAndFindBox = styled.div`
  width: 196px;
  height: 45px;
  border-radius: 8px;
  background: var(--mainGreen, #a4e3b6);
  margin-right: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.333px;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  padding-left: 7px;
`;

export default function Login() {
  return (
    <>
      <Wrapper>
        <InputBox>
          <Input placeholder="아이디" />
          <Input type="password" placeholder="비밀번호" />
          <LoginBox>로그인</LoginBox>
          <SignUpWrapper>
            <SignAndFindBox>회원가입</SignAndFindBox>
            <SignAndFindBox>아이디/비밀번호 찾기</SignAndFindBox>
          </SignUpWrapper>
        </InputBox>
      </Wrapper>
    </>
  );
}
