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
  return (
    <Wrapper>
      <ColorDiv />
      <HeaderDiv>
        <Logo>
          <LogoP>로고</LogoP>
        </Logo>
        <DevelopDiv>
          <Develop>자기계발 모임</Develop>
        </DevelopDiv>
        <HobbyDiv>
          <HobbyP>취미 모임</HobbyP>
        </HobbyDiv>
        <PlaceDiv>
          <PlaceP>플레이스</PlaceP>
        </PlaceDiv>
        <QNADiv>
          <QNAP>Q&A</QNAP>
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
