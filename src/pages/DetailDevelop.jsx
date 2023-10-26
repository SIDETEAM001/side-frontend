import styled from "styled-components";
import DetailsComponents from "../components/DetailsComponent";

const dummyData = [
  { title: "토익 스터디", count: "6/7", place: "중구", tags: "#스터디 #어학" },
  {
    title: "[백엔드] 사이트 플젝하실 백엔드 모집",
    place: "전국",
    count: "0/1",
    tags: "#사이드프로젝트 #IT",
  },
];

export const DetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function DetailDevelop() {
  return (
    <div>
      <div>
        <img src="/images/example.svg" alt="example" />
        <img src="/images/example3.svg" alt="example3" />
      </div>
      <DetailWrapper>
        {dummyData.map((el) => {
          return (
            <DetailsComponents
              tags={el.tags}
              title={el.title}
              count={el.count}
              place={el.place}
            />
          );
        })}
      </DetailWrapper>
    </div>
  );
}
