import styled from "styled-components";

export const Wrapper = styled.header`
  max-width: 1920px;
  margin: 0 auto;

  /* border: 1px solid red; */
  `;

export const HeaderDiv = styled.div`
  max-width: 1920px;
  height: 80px;
  padding: 16px 240px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  
  /* border: 1px solid black; */
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  /* border: 1px dashed blue; */
`;
export const AccountContainer = styled.div`
  display: flex;
  gap: 24px;

  /* border: 1px dashed blue; */
`;

export const ColorDiv = styled.div``;

export const Logo = styled.div`
  border-radius: 12px;
  background-color: #d9d9d9;
  width: 132px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const LogoP = styled.p`
  font-weight: bold;
  font-size: 18px;
  `;

export const DevelopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `;
export const Develop = styled.p`
  font-weight: bold;
  font-size: 18px;
  /* line-height: 140%; */
  /* letter-spacing: -0.3%; */
  color: ${(props) => (props.$on ? "#51A300" : "#111111")};
  cursor: pointer;

  /* border: 1px solid red; */
`;

export const HobbyDiv = styled(DevelopDiv)``;
export const HobbyP = styled(Develop)``;

export const PlaceDiv = styled(DevelopDiv)``;
export const PlaceP = styled(Develop)``;

export const QNADiv = styled(DevelopDiv)``;
export const QNAP = styled(Develop)``;



export const InputDiv = styled.div`
  position: relative;
`;
export const Input = styled.input`
  width: 335px;
  height: 48px;
  padding: 8px 16px 8px 16px;
  background-color: #fff;
  border-radius: 16px;
  border: 1px solid #e4e4e4;
  ::placeholder{
    font-size: 12px;
    line-height: 140%;
  }
`;
export const Magnify = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const MembershipDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const MessageDiv = styled(DevelopDiv)``;
export const MessageImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const AlarmDiv = styled(DevelopDiv)``;
export const AlarmImg = styled(MessageImg)``;

export const PersonDiv = styled(DevelopDiv)``;
export const PersonImg = styled(MessageImg)``;
