import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormInput = styled.input`
  width: 361px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 8px;
  border: ${(props) =>
    props.$isvalid
      ? "1px solid lightgreen"
      : "1px solid var(--lightPink, #ffd4d4);"};
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;
  display: flex;
  padding-top: 9.38px;
  padding-bottom: 9.38px;
  padding-left: 16.13px;
  padding-right: 16.13px;
  outline: none;
  margin-top: 64px;
`;

export const FormInput2 = styled(FormInput)`
  border: ${(props) =>
    props.$isvalid
      ? "1px solid lightgreen"
      : "1px solid var(--lightPink, #ffd4d4);"};
`;

export const FormInput3 = styled(FormInput)`
  border: ${(props) =>
    props.$isvalid
      ? "1px solid lightgreen"
      : "1px solid var(--lightPink, #ffd4d4);"};
`;

export const FormInput4 = styled(FormInput)`
  border: ${(props) =>
    props.$isvalid
      ? "1px solid lightgreen"
      : "1px solid var(--lightPink, #ffd4d4);"};
`;

export const FormInput5 = styled(FormInput)`
  border: ${(props) =>
    props.$isvalid
      ? "1px solid lightgreen"
      : "1px solid var(--lightPink, #ffd4d4);"};
`;

export const BottomForm = styled(FormInput)`
  margin-top: 8px;
`;

export const EmailNotify = styled.div`
  margin-top: 5px;
  display: flex;
  width: 357px;
  height: 19px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--gray6, #6c6c6c);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;
`;

export const ConditionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 361px;
`;

export const ShowCondition = styled.div`
  display: flex;
  width: 29px;
  height: 20px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;
  border-radius: 8px;
  background: ${(props) => (props.$isvalid ? "#8bc29b" : "#D9D9D9")};
  margin-right: 8px;
`;

export const ShowSix = styled.div`
  width: 62px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;
  background: ${(props) => (props.$isvalid ? "#8bc29b" : "#D9D9D9")};
  margin-right: 8px;
`;

export const ShowSpecial = styled(ShowSix)`
  margin-right: 8px;
  width: 45px;
  height: 20px;
  background: ${(props) => (props.$isvalid ? "#8bc29b" : "#D9D9D9")};
`;

export const PasswordWarning = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  margin-top: 8px;
  line-height: 50px; /* 500% */
  width: 150px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--mainPink, #ec8f8f);
`;

export const PhoneNumber = styled.div`
  margin-top: 8px;
  display: flex;
  width: 357px;
  height: 19px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--gray6, #6c6c6c);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px; /* 500% */
`;

export const DetailAddress = styled.div`
  display: flex;
  width: 357px;
  height: 19px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--gray6, #6c6c6c);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px; /* 500% */
`;

export const SignUp = styled.div`
  width: 361px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) => (props.$isvalid ? "#8bc29b" : "#D9D9D9")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: ${(props) => (props.$isvalid ? "white" : "#6c6c6c")};
  cursor: ${(props) => (props.$isvalid ? "pointer" : "default")};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 312.5% */
  margin-top: 60px;
`;

export const PasswordWarningWrapper = styled.div`
  width: 361px;
  display: flex;
  justify-content: flex-start;
`;

export const FindAddress = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  background-color: var(--mainPink, #ec8f8f);
  display: flex;
  width: 71px;
  height: 19.2px;
  flex-direction: column;
  border-radius: 8px;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 500% */
  position: absolute;
  right: 8px;
  bottom: 12.4px;
`;

export const AddressWrapper = styled.div`
  position: relative;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 0;
`;
