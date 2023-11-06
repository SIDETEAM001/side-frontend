import styled from "styled-components";

export const Wrapper = styled.header`
  min-width: 1980px;
  overflow-x: hidden;
  border-bottom: 1px solid var(--gray-gr-10, #e4e4e4);
  background: #fff;
  display: flex;
  align-items: center;
  padding-left: 12px;
`;

export const HeaderDiv = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  margin-left: 175px;
  border-radius: 0px;
  min-width: 1980px;
`;
export const ColorDiv = styled.div`
  min-width: 1980px;
  background-color: #d9d9d9;
  height: 50px;
  border-bottom: 5px solid gray;
`;

export const Logo = styled.div`
  border-radius: 12px;
  background-color: #d9d9d9;
  width: 149px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 23px;
`;

export const LogoP = styled.p`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const DevelopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 34px;
`;

export const Develop = styled(LogoP)`
  font-size: 25px;
  cursor: pointer;
  color: ${(props) => (props.$on ? "#51A300" : "black")};
  font-family: Inter;
`;

export const HobbyP = styled.p`
  cursor: pointer;
  color: #a6a6a6;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.24px;
  color: ${(props) => (props.$on ? "#51A300" : "black")};
`;

export const PlaceP = styled(HobbyP)`
  color: ${(props) => (props.$on ? "#51A300" : "black")};
`;
export const PlaceDiv = styled(DevelopDiv)``;
export const HobbyDiv = styled(DevelopDiv)``;
export const QNADiv = styled(DevelopDiv)``;

export const QNAP = styled.p`
  color: #a6a6a6;
  text-align: center;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
  cursor: pointer;
  color: ${(props) => (props.$on ? "#51A300" : "black")};
`;

export const InputDiv = styled.div`
  width: 649px;
  height: 56px;
  position: relative;
  margin-right: 119px;
`;
export const Magnify = styled.img`
  width: 38.549px;
  height: 38.936px;
  top: 5px;
  right: 12px;
  position: absolute;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
  width: 649px;
  height: 56px;
  border-radius: 15px;
  background-color: #ececec;
`;

export const MessageDiv = styled(DevelopDiv)`
  margin-right: 34px;
`;
export const MessageImg = styled.img`
  width: 32px;
  height: 33px;
  cursor: pointer;
`;

export const AlarmDiv = styled(DevelopDiv)`
  margin-right: 34px;
`;
export const AlarmImg = styled(MessageImg)``;
export const PersonDiv = styled(DevelopDiv)``;
export const PersonImg = styled.img`
  width: 30px;
  height: 33px;
  cursor: pointer;
`;
