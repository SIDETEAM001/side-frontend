import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  &::placeholder {
    color: var(--text-text-disabled, var(--gray-gr-30, #b5b5b5));
    /* Body/Body-02 */
    font-family: "Pretendard";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.048px;
  }
`;

export const LoginBox = styled.div`
  cursor: pointer;
  padding: 12px 40px;
  height: 60px;
  width: 465px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.333px;
  border-radius: 16px;
  background: var(--light-green, #68be12);
  color: var(--white, var(--default-neutral-white, #fff));
  text-align: center;
  /* Heading/H-01 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
  letter-spacing: -0.06px;
`;

export const LoginBox2 = styled(LoginBox)`
  margin-bottom: 40px;
  margin-top: 16px;
  border-radius: 16px;
  background: var(--light-green, #68be12);
  color: var(--white, var(--default-neutral-white, #fff));
  text-align: center;

  /* Heading/H-01 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
  letter-spacing: -0.06px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputSpan = styled.span`
  color: var(--text-text-02, var(--gray-gr-80, #404040));
  /* Body/Caption */
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  margin-bottom: 4px;
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

export const Title = styled.p`
  color: var(--text-text-01, var(--gray-gr-100, #111));
  text-align: center;
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  letter-spacing: -0.06px;
`;

export const Title2 = styled.p`
  color: var(--text-text-01, var(--gray-gr-100, #111));
  text-align: center;
  margin-bottom: 16px;

  /* Heading/H-05 */
  font-family: "Pretendard";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 52px */
  letter-spacing: -0.12px;
`;

export const Title3 = styled.p`
  color: var(--text-text-03, var(--text-03, #6f6f6f));
  text-align: center;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.048px;
`;

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputAndSpanDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  padding: 8px 16px;
  width: 465px;
  border: 1px solid #cecece;
  border-radius: 16px;
  margin-bottom: 24px;
`;

export const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid var(--gray-gr-100, #111);
  margin-right: 8px;
`;

export const SaveSpan = styled.span`
  color: var(--text-text-01, var(--gray-gr-100, #111));
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.048px;
`;

export const SaveDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const SmallSpan = styled.span`
  color: var(--text-text-03, var(--text-03, #6f6f6f));
  cursor: pointer;
  /* Body/Body-02 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.048px;
`;

export const DivideSpan = styled.span`
  margin-left: 24px;
  margin-right: 24px;
`;

export const TitleDiv = styled.div`
  margin-bottom: 40px;
`;

export const Hr = styled.hr`
  width: 204px;
  height: 1px;
`;

export const OrDiv = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 42px;
`;

export const OrSpan = styled.span`
  margin-left: 16px;
  margin-right: 16px;
  color: var(--text-text-03, var(--text-03, #6f6f6f));
  text-align: center;

  /* Body/Body-01 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.042px;
`;

export const ImgDiv = styled.div`
  position: relative;
  height: 52px;
  width: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const KakaoDiv = styled.img`
  top: 0px;
  left: 0px;
  z-index: 0;
  position: absolute;
`;

export const Kakao = styled.img`
  top: 15px;
  left: 15px;
  width: 24px;
  height: 24px;
  z-index: 5;
  position: absolute;
`;

export const KakaoLoginSpan = styled.span`
  color: var(--text-text-02, var(--gray-gr-80, #404040));
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.042px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImgAndSpanDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 48px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;
