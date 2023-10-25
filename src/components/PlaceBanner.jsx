// 플레이스 - 배너
import styled from "styled-components";

const Banner = styled.div`
  width: 1400px;
  height: 300px;
  background-color: #919191;
`;

const TitleBox = styled.div`
  font-size: 40px;
  text-align: center;
`;
const DescBox = styled.div`
  float: right;
`;

export default function PlaceBanner(){
  return(
    <>
      <Banner>
        <TitleBox >내 주변 핫플레이스를 한눈에 확인하세요!</TitleBox>
        <DescBox>지도로 보기 {">"}</DescBox>
      </Banner>
      <div>내 주변에 있는 클래스들 확인하러 가기 {">"}</div>
      
    </>
  )
}