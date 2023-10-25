// 카드 컴포넌트
import styled from "styled-components";

const Wrapper = styled.div`
  width: 340px;
  height: 300px;
  padding: 10px;
  display: inline-block;
  border: 1px solid black;
  border-radius: 10px;
  `;
const CardImg = styled.img`
  width: 300px;
  height: 200px;
  background-color: #f8f8f8;
`;
const CardTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 20px;
`;
const CardLocation = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 16px;
`;
const CardTag = styled.span`
  font-size: 16px;
`;

export default function Card(props){
  const tags = props.data.tags;



  return(
    <>
      <Wrapper>
        <CardImg />
        <CardTitle>{props.data.title}</CardTitle>
        <CardLocation>{props.data.location}</CardLocation>
        <CardTag>
          {
            tags == undefined ? "" : tags.map((tag)=>tag)
          }
        </CardTag>
      </Wrapper>
    </>
  )
}

