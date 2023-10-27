import styled from "styled-components";
import DetailsComponents from "../components/DetailsComponent";

const dummyData = [
  { title: "토익 스터디", count: "6/7", place: "중구", tags: "#스터디 #어학" },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
    id: 0,
  },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
    id: 1,
  },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
    id: 2,
  },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
    id: 3,
  },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
    id: 4,
  },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
    id: 5,
  },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
    id: 6,
  },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
    id: 7,
  },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
    id: 8,
  },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
    id: 9,
  },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
    id: 10,
  },
];

export const DetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MakeDiv = styled.div`
  cursor: pointer;
  width: 169px;
  height: 73px;
  border-radius: 74px;
  background: #a9a9a9;
  position: fixed;
  bottom: 127px;
  right: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export default function DetailDevelop() {
  return (
    <div>
      <div>
        <img src="/images/example.svg" alt="example" />
        <img src="/images/example3.svg" alt="example3" />
      </div>
      <DetailWrapper>
        {dummyData.map((el, idx) => {
          return (
            <div key={idx}>
              <DetailsComponents
                tags={el.tags}
                title={el.title}
                count={el.count}
                place={el.place}
                id={el.id}
              />
            </div>
          );
        })}
      </DetailWrapper>
      <MakeDiv>
        <p>모임 개설하기</p>
      </MakeDiv>
    </div>
  );
}
