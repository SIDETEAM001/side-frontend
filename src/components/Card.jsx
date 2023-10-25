// 카드 컴포넌트

import styled from "styled-components";


const Wrapper = styled.div`
  width: 320px;
  height: 350px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid gray;
  `;
const CardImg = styled.img`
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: #b3b3b3;
`;
const CardTitle = styled.h3``;
const CardLocation = styled.div``;
const CardHashTag = styled.div``;




export default function Card(props){
  return(
    <>
      <Wrapper>
        <CardImg />
        <CardTitle>타이틀</CardTitle>
        <CardLocation>위치</CardLocation>
        <CardHashTag>해시태그</CardHashTag>
      </Wrapper>
    </>
  )
}