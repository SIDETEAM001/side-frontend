import { useNavigate } from "react-router-dom";
import {
  OuterWrapper,
  Wrapper,
  TitleDiv,
  Title2,
  Title,
  Title3,
  InputBox,
  InputAndSpanDiv,
  InputSpan,
  Input,
  SaveDiv,
  CheckBox,
  SaveSpan,
  LoginBox2,
  LoginBox,
  SmallSpan,
  DivideSpan,
  OrDiv,
  Hr,
  OrSpan,
  ImgDiv,
  Kakao,
  KakaoDiv,
  KakaoLoginSpan,
  ImgWrapper,
  ImgAndSpanDiv,
  Label,
} from "../style/LoginStyle";

export default function Login() {
  const navigate = useNavigate();
  return (
    <OuterWrapper>
      <Wrapper>
        <TitleDiv>
          <Title>퇴근하고 뭐하지?</Title>
          <Title2>직장인 갓생</Title2>
          <Title3>가치있는 정보가 모이는 직갓생에서</Title3>
          <Title3>당신의 직장인 커뮤니티를 시작해보세요</Title3>
        </TitleDiv>
        <InputBox>
          <InputAndSpanDiv>
            <InputSpan>이메일</InputSpan>
            <Input placeholder="이메일을 입력해 주세요" />
          </InputAndSpanDiv>
          <InputAndSpanDiv>
            <InputSpan>비밀번호</InputSpan>
            <Input type="password" placeholder="비밀번호를 입력해 주세요." />
          </InputAndSpanDiv>
          <SaveDiv>
            <Label>
              <CheckBox type="checkbox" />
              <SaveSpan>아이디 저장</SaveSpan>
            </Label>
          </SaveDiv>
          <LoginBox>로그인</LoginBox>
          <LoginBox2>가입하기</LoginBox2>
          <div>
            <SmallSpan>이메일/비밀번호 찾기</SmallSpan>
            <DivideSpan>|</DivideSpan>
            <SmallSpan onClick={() => navigate("/agree")}>
              이메일로 회원가입
            </SmallSpan>
          </div>
          <OrDiv>
            <Hr />
            <OrSpan>또는</OrSpan>
            <Hr />
          </OrDiv>
          <ImgWrapper>
            <ImgAndSpanDiv>
              <ImgDiv>
                <KakaoDiv src="/images/kakaoDiv.svg" alt="yellow" />
                <Kakao src="/images/kakao.svg" alt="yellow" />
              </ImgDiv>
              <KakaoLoginSpan>카카오톡 로그인</KakaoLoginSpan>
            </ImgAndSpanDiv>
            <ImgAndSpanDiv>
              <ImgDiv>
                <KakaoDiv src="/images/appleDiv.svg" alt="yellow" />
                <Kakao src="/images/apple.svg" alt="yellow" />
              </ImgDiv>
              <KakaoLoginSpan>애플 로그인</KakaoLoginSpan>
            </ImgAndSpanDiv>
          </ImgWrapper>
        </InputBox>
      </Wrapper>
    </OuterWrapper>
  );
}
