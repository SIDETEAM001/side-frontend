// 플레이스 페이지
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.section`
  position: relative;
`;
const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  border: 1px dashed gray;
`;

const CurrentLocationBox = styled.div``;

const PlaceBannerBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: aliceblue;
`;
const Section = styled(Wrapper)``;

const SubjectBox = styled.div``;

const OpenMeetButton = styled.button`
  width: 100px;
  height: 40px;
  position: fixed;
  bottom: 15%;
  right: 3%;
  background-color: #d3d3d3;
  border-radius: 10px;
  border: none;
`;

export default function Place(){
  // 더미 데이터
  const PlaceDummyData = {
    surroundings: [
      {
        id: 1,
        title: "ㅇㅇ헬스",
        location: "중구 ㅇㅇ동",
        imgSrc: "",
        tags: ["#운동/스포츠"],
      },
      {
        id: 2,
        title: "ㅁㅁ 기타학원",
        location: "중구 ㅈㅈ동",
        imgSrc: "",
        tags: ["#음악/악기"],
      },
      {
        id: 3,
        title: "ㄴㄴ공방",
        location: "중구 ㅂㅂ동",
        imgSrc: "",
        tags: ["#공예/만들기"],
      },
      {
        id: 4,
        title: "ㅎㅎ필라테스",
        location: "중구 ㄱㄱ동",
        imgSrc: "",
        tags: ["#운동/스포츠"],
      }
    ],
    recommendation: [
      {
        id: 1,
        title: "토익 스터디",
        location: "",
        imgSrc: "",
        tags: ["#스터디", "#어학"],
      },
      {
        id: 2,
        title: "[백엔드]사이드 플젝하실 백엔드 모집",
        location: "",
        imgSrc: "",
        tags: ["#사이드프로젝트", "#IT"],
      },
      {
        id: 3,
        title: "사이드 프로젝트",
        location: "",
        imgSrc: "",
        tags: ["#사이드프로젝트"],
      },
      {
        id: 4,
        title: "LG 공채 스터디",
        location: "",
        imgSrc: "",
        tags: ["#이직준비"],
      },
    ],
    hotIssue: [
      {
        id: 1,
        title: "토익 스터디1",
        location: "",
        imgSrc: "",
        tags: ["#스터디", "#어학"],
      },
      {
        id: 2,
        title: "[백엔드]사이드 플젝하실 백엔드 모집2",
        location: "",
        imgSrc: "",
        tags: ["#사이드프로젝트", "#IT"],
      },
      {
        id: 3,
        title: "사이드 프로젝트3",
        location: "",
        imgSrc: "",
        tags: ["#자기계발", "#사이드프로젝트"],
      },
      {
        id: 4,
        title: "LG 공채 스터디4",
        location: "",
        imgSrc: "",
        tags: ["#이직준비", "#취업"],
      },
    ]
  };
  


  return(
    <Container>
      <Wrapper>
        <CurrentLocationBox>
        📍현재 위치 동이름
        </CurrentLocationBox>
      </Wrapper>
      <Wrapper>
        <PlaceBannerBox>상단 배너</PlaceBannerBox>
      </Wrapper>
      <Section>
        <SubjectBox>주변 클래스 섹션</SubjectBox>
        {
          PlaceDummyData.surroundings.map((value)=>{
            return(<Card key={value.id} data={value} />)
          })
        }
      </Section>
      <Section>
        <SubjectBox>추천 섹션</SubjectBox>
        {
          PlaceDummyData.recommendation.map((value)=>{
            return(<Card key={value.id} data={value} />)
          })
        }
      </Section>
      <Section>
        <SubjectBox>핫이슈 섹션</SubjectBox>
        {
          PlaceDummyData.hotIssue.map((value)=>{
            return(<Card key={value.id} data={value} />)
          })
        }
      </Section>
      <OpenMeetButton>
        모임 개설하기
      </OpenMeetButton>
    </Container>
  )
}