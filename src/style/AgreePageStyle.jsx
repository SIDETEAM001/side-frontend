import styled from "styled-components";

export const Title = styled.span`
  margin-top: 120px;
  color: var(--text-text-01, var(--gray-gr-100, #111));
  text-align: center;
  margin-bottom: 40px;

  /* Heading/H-04 */
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
  letter-spacing: -0.096px;
  width: 100%;
`;

export const Title2 = styled.span`
  width: 345px;
  color: var(--text-text-01, var(--gray-gr-100, #111));
  text-align: left;
  /* Heading/H-01 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
  letter-spacing: -0.06px;
  width: 100%;
`;

export const Title3 = styled.span`
  width: 100%;
  margin-top: 8px;
  color: var(--text-text-03, var(--text-03, #6f6f6f));

  /* Body/Body-02 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.048px;
`;

export const CheckInfo = styled.span`
  color: var(--text-text-01, var(--gray-gr-100, #111));

  /* Body/Body-02 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.048px;
`;

export const Look = styled.span`
  cursor: pointer;
  color: var(--text-text-03, var(--text-03, #6f6f6f));
  text-align: right;

  /* Body/Body-02 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.048px;
  text-decoration: underline;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleDiv = styled.div`
  text-align: left;
  width: 465px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  text-align: left;
`;

export const AgreeDiv = styled.div`
  width: 465px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AgreeDiv2 = styled.div`
  width: 465px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const FirstLabel = styled.label`
  width: 465px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AllAgreeSpan = styled.span`
  cursor: pointer;
`;

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AllAgree = styled.span`
  color: var(--text-text-01, var(--gray-gr-100, #111));
  width: 100%;
  text-align: left;
  /* Heading/SH-03 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
  letter-spacing: -0.054px;
`;

export const Hr = styled.hr`
  width: 465px;
  margin-bottom: 24px;
  margin-top: 24px;
  height: 1px;
`;

export const TitleDiv2 = styled(TitleDiv)`
  display: flex;
  margin-bottom: 0px;
`;

export const LabelDiv = styled.div`
  width: 100%;
`;

export const SignUpDiv = styled.div`
  color: var(--text-text-disabled, var(--gray-gr-30, #b5b5b5));
  text-align: center;

  /* Heading/H-01 */
  width: 465px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
  letter-spacing: -0.06px;
  display: flex;
  height: 60px;
  min-width: 200px;
  min-height: 60px;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  border: 1px solid var(--gray-gr-10, #e4e4e4);
  background: var(--background-bg-gray, #f5f5f5);
  margin-top: 16px;
`;

export const SignUpDiv2 = styled(SignUpDiv)`
  cursor: pointer;
  color: var(--white, var(--default-neutral-white, #fff));
  border-radius: 16px;
  background: var(--light-green, #68be12);
`;
