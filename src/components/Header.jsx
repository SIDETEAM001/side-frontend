import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ColorDiv,
  HeaderDiv,
  Logo,
  LogoP,
  Develop,
  DevelopDiv,
  HobbyDiv,
  HobbyP,
  QNADiv,
  QNAP,
  AlarmImg,
  PersonImg,
  MessageImg,
  AlarmDiv,
  PlaceDiv,
  PlaceP,
  PersonDiv,
  MessageDiv,
  InputDiv,
  Input,
  Magnify,
  Wrapper,
} from "../style/HeaderStyle";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    const pageLocation = location.pathname;
    if (pageLocation === "/develop") {
      setSelected(1);
    } else if (pageLocation === "/hobby") {
      setSelected(2);
    }
    //  else if (pageLocation === "/") {
    //   setSelected(3);
    // } else if (pageLocation === "/") {
    //   setSelected(4);
    // }
  }, [location]);

  const developOnClick = () => {
    setSelected(1);
    navigate("/develop");
  };

  const hobbyOnClick = () => {
    setSelected(2);
    navigate("/hobby");
  };

  const placeOnClick = () => {
    setSelected(3);
    navigate("/detail");
  };

  const qnaOnClick = () => {
    setSelected(4);
    navigate("/detail");
  };

  return (
    <Wrapper>
      <HeaderDiv>
        <Logo>
          <LogoP>로고</LogoP>
        </Logo>
        <DevelopDiv>
          <Develop $on={selected === 1} onClick={developOnClick}>
            자기계발 모임
          </Develop>
        </DevelopDiv>
        <HobbyDiv>
          <HobbyP $on={selected === 2} onClick={hobbyOnClick}>
            취미 모임
          </HobbyP>
        </HobbyDiv>
        <PlaceDiv>
          <PlaceP $on={selected === 3} onClick={placeOnClick}>
            플레이스
          </PlaceP>
        </PlaceDiv>
        <QNADiv>
          <QNAP $on={selected === 4} onClick={qnaOnClick}>
            Q&A
          </QNAP>
        </QNADiv>
        <InputDiv>
          <Input />
          <Magnify src="/images/magnify.svg" alt="magnify" />
        </InputDiv>
        <MessageDiv>
          <MessageImg src="/images/message.svg" alt="msg" />
        </MessageDiv>
        <AlarmDiv>
          <AlarmImg src="/images/alarm.svg" alt="alarm" />
        </AlarmDiv>
        <PersonDiv>
          <PersonImg src="/images/person.svg" alt="person" />
        </PersonDiv>
      </HeaderDiv>
    </Wrapper>
  );
}
