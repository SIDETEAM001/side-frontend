// 지도화면
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import KakaoMap from "../components/KakaoMap";


const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  border: 1px dashed gray;
`;

const CurrentLocationBox = styled.div``;

const Screen = styled.div`
  width: 100%;
  height: 85vh;
  border: 1px dashed red;
`;

const OpenHobbyListBox = styled.button`
  width: 100px;
  height: 40px;
  position: fixed;
  bottom: 10%;
  left: 50%;
  z-index: 10; 
  transform: translateX(-50%);
  background-color: #d3d3d3;
  border-radius: 10px;
  border: none;
`;


export default function MapScreen(){
  const navigate = useNavigate();

  
  useEffect(()=>{

  }, []);
  




  return(
    <>
      <div id="mapwrap">
        <KakaoMap />
      </div>
      <Wrapper style={{border: "none"}}>
        <OpenHobbyListBox onClick={()=>navigate('/hobby')}>목록열기</OpenHobbyListBox>
      </Wrapper>
    </>
  )
}