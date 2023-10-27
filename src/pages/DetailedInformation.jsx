import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ImgDiv = styled.div`
  width: 1441px;
  height: 315px;
  flex-shrink: 0;
  background: var(--9gray, #d9d9d9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 138px;
  margin-top: 25px;
`;

const ListP = styled.p`
  text-align: center;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-right: 342px;
`;

const ListLastP = styled(ListP)`
  margin-right: 0px;
`;

const IntroP = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 45px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const SelectParticipate = styled.div`
  display: flex;
  margin-top: 100px;
`;

const ListPSpan = styled.span`
  cursor: pointer;
`;

const Participate = styled.div`
  width: 1060px;
  height: 121px;
  border-radius: 22px;
  background: var(--9gray, #d9d9d9);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const Select = styled.div`
  width: 293px;
  height: 126px;
  border-radius: 22px;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 119px;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const SelectP = styled.p`
  cursor: pointer;
`;

export const TitleDiv = styled.div`
  margin-bottom: 100px;
`;

export default function DetailedInformation() {
  const params = useParams().id;
  const [info, setInfo] = useState({});
  useEffect(() => {
    async function myFunction() {
      const data = await axios.get("/dummy/dummy.json"); // id로 받아오기
      setInfo(data.data);
    }
    myFunction();
  }, []);

  return (
    <Wrapper>
      <ImgDiv>
        <p>대표이미지</p>
      </ImgDiv>
      <List>
        <ListP>
          <ListPSpan>소개</ListPSpan>
        </ListP>
        <ListP>
          <ListPSpan>일정</ListPSpan>
        </ListP>
        <ListLastP>
          <ListPSpan>멤버({info.member && info.member.length})</ListPSpan>
        </ListLastP>
      </List>
      <TitleDiv>
        <IntroP>{info.title}</IntroP>
      </TitleDiv>
      <div>
        <p>{info.content}</p>
      </div>
      <SelectParticipate>
        <Select>
          <SelectP>찜하기</SelectP>
        </Select>
        <Participate>
          <p>참여하기</p>
        </Participate>
      </SelectParticipate>
      {/* <div>
        <p>{info.calendar && info.calendar[0].date}</p>
      </div>
  */}
    </Wrapper>
  );
}
