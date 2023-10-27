// 취미 모임 페이지

import styled from "styled-components";
import Card from "../components/Card";
import { useNavigate } from "react-router";
import { useEffect } from "react";



const Container = styled.section`
  position: relative;
`;
const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  border: 1px dashed gray;
`;
const CurrentLocationBox = styled.div``;

const Section = styled(Wrapper)``;

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

const OpenMapButton = styled.button`
  width: 100px;
  height: 40px;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #d3d3d3;
  border-radius: 10px;
  border: none;
`;

export default function Hoppy(){
  // 더미데이터
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
        location: "송파구 00동",
        imgSrc: "",
        tags: ["#스터디", "#어학"],
      },
      {
        id: 2,
        title: "[백엔드]사이드 플젝하실 백엔드 모집",
        location: "동작구 11동",
        imgSrc: "",
        tags: ["#사이드프로젝트", "#IT"],
      },
      {
        id: 3,
        title: "사이드 프로젝트",
        location: "강서구 22동",
        imgSrc: "",
        tags: ["#사이드프로젝트"],
      },
      {
        id: 4,
        title: "LG 공채 스터디",
        location: "구로구 11동",
        imgSrc: "",
        tags: ["#이직준비"],
      },
    ],
    hotIssue: [
      {
        id: 1,
        title: "토익 스터디1",
        location: "송파구 00동",
        imgSrc: "",
        tags: ["#스터디", "#어학"],
      },
      {
        id: 2,
        title: "[백엔드]사이드 플젝하실 백엔드 모집2",
        location: "은평구 11동",
        imgSrc: "",
        tags: ["#사이드프로젝트", "#IT"],
      },
      {
        id: 3,
        title: "사이드 프로젝트3",
        location: "도봉구 55동",
        imgSrc: "",
        tags: ["#자기계발", "#사이드프로젝트"],
      },
      {
        id: 4,
        title: "LG 공채 스터디4",
        location: "강남구 00동",
        imgSrc: "",
        tags: ["#이직준비", "#취업"],
      },
    ]
  };
  const navigate = useNavigate();


  return(
    <Container>
      <Wrapper>
        <CurrentLocationBox>📍현재 위치 동이름</CurrentLocationBox>
      </Wrapper>
      <Wrapper>
        <div>
          필터박스
        </div>
      </Wrapper>
      <Section>
        {
          PlaceDummyData.recommendation.map((value)=>{
            return(<Card key={value.id} data={value} />)
          })
        }
        {
          PlaceDummyData.hotIssue.map((value)=>{
            return(<Card key={value.id} data={value} />)
          })
        }
      </Section>
      <OpenMeetButton>모임 개설하기</OpenMeetButton>
      <OpenMapButton onClick={()=>navigate('/map')}>지도로 보기</OpenMapButton>
    </Container>
  )
}