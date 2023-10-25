import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [develop, setDevelop] = useState(false);
  const [hobby, setHobby] = useState(false);
  const [place, setPlace] = useState(false);
  const [qna, setQna] = useState(false);

  const developOnClick = () => {
    setDevelop(true);
    setHobby(false);
    setPlace(false);
    setQna(false);
    navigate("/develop");
  };

  const hobbyOnClick = () => {
    setHobby(true);
    setDevelop(false);
    setPlace(false);
    setQna(false);
    navigate("/hobby");
  };

  const placeOnClick = () => {
    setPlace(true);
    setHobby(false);
    setDevelop(false);
    setQna(false);
    navigate("/detail");
  };

  const qnaOnClick = () => {
    setQna(true);
    setHobby(false);
    setPlace(false);
    setDevelop(false);
    navigate("/detail");
  };

  return (
    <Wrapper>
      <ColorDiv />
      <HeaderDiv>
        <Logo>
          <LogoP>로고</LogoP>
        </Logo>
        <DevelopDiv>
          <Develop $on={develop} onClick={developOnClick}>
            자기계발 모임
          </Develop>
        </DevelopDiv>
        <HobbyDiv>
          <HobbyP $on={hobby} onClick={hobbyOnClick}>
            취미 모임
          </HobbyP>
        </HobbyDiv>
        <PlaceDiv>
          <PlaceP $on={place} onClick={placeOnClick}>
            플레이스
          </PlaceP>
        </PlaceDiv>
        <QNADiv>
          <QNAP $on={qna} onClick={qnaOnClick}>
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
