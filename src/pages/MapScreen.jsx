// 지도화면
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
// kakao 객체 가져오기 : 스크립트로 API 가져오면 함수형 컴포넌트에서 인식 어려운 문제 위함
const { kakao } = window;

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

  // 커피숍 마커가 표시될 좌표 배열
  const coffeePositions = [ 
    new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
    new kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
    new kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
    new kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
    new kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
    new kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
    new kakao.maps.LatLng(37.49754540521486, 127.02546694890695)                
  ];

  // 편의점 마커가 표시될 좌표 배열입니다
const storePositions = [
  new kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
  new kakao.maps.LatLng(37.49671536281186, 127.03020491448352),
  new kakao.maps.LatLng(37.496201943633714, 127.02959405469642),
  new kakao.maps.LatLng(37.49640072567703, 127.02726459882308),
  new kakao.maps.LatLng(37.49640098874988, 127.02609983175294),
  new kakao.maps.LatLng(37.49932849491523, 127.02935780247945),
  new kakao.maps.LatLng(37.49996818951873, 127.02943721562295)
];

// 주차장 마커가 표시될 좌표 배열입니다
const carparkPositions = [
  new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
  new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
  new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
  new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
  new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
  new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
  new kakao.maps.LatLng(37.497680616783086, 127.02518427952202)                       
]; 


/*
  문제ㅠㅠ
  1.상단 왼쪽 마커를 처음 클릭할 때엔 잘 나옴 -> 그다음 다른 걸 클릭하면 바뀌지 않음
  2.커피 마커 개수가 총 7개인데, 콘솔에 14개라고 찍힘...?
*/

export default function MapScreen(){
  const navigate = useNavigate();
  const mapContainer = useRef(); // 지도를 표시할 div 
  const position = new kakao.maps.LatLng(37.498004414546934, 127.02770621963765); // 지도의 중심좌표
  const mapOption = { 
    center: position,
    level: 3 // 지도의 확대 레벨
  };

  // 마커 이미지 주소(스프라이트 이미지)
  const markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';
  // 커피숍, 편의점, 주차장 마커 객체를 가지고 있을 배열
  const coffeeMarkers = [];
  const storeMarkers = [];
  const carparkMarkers = [];

  const [coffeeClass, setCoffeeClass] = useState("");
  const [storeClass, setStoreClass] = useState("");
  const [carparkClass, setCarparkClass] = useState("");
  
  // 지도 변수
  let map;
  
  useEffect(()=>{
    // 지도를 표시할 div와 지도 옵션으로 지도를 생성
    map = new kakao.maps.Map(mapContainer.current, mapOption); 
    createCoffeeMarkers(); // 커피숍 마커를 생성하고 커피숍 마커 배열에 추가합니다
    createStoreMarkers(); // 편의점 마커를 생성하고 편의점 마커 배열에 추가합니다
    createCarparkMarkers(); // 주차장 마커를 생성하고 주차장 마커 배열에 추가합니다
    console.log("커피 마커 개수 : ", coffeeMarkers);
  }, []);
  


  function initMarkers(){
    console.log("마커 초기화");
    // 커피숍 마커들만 지도에 표시하도록 설정합니다
    setCoffeeMarkers(null);
    setStoreMarkers(null);
    setCarparkMarkers(null);
  }

  // 카테고리 클릭시 type에 따라 마커 변경
  function handleMarkers(type){
    if(type === "coffee"){
      // initMarkers();
      console.log("커피 리스트 클릭");
      // 커피숍 카테고리를 선택된 스타일로 변경하고
      setCoffeeClass("menu_selected");
        
      // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꾸기
      setStoreClass("");
      setCarparkClass("");

      // 커피숍 마커들만 지도에 표시하도록 설정합니다
      setCoffeeMarkers(map);
      setStoreMarkers(null);
      setCarparkMarkers(null);
    }
    else if(type === "store"){
      setCoffeeMarkers(null);
      setStoreMarkers(null);
      setCarparkMarkers(null);
      console.log("편의점 리스트 클릭");
      setStoreClass("menu_selected");

      setCoffeeClass("");
      setCarparkClass("");

      // 편의점 마커들만 지도에 표시하도록 설정합니다
      setCoffeeMarkers(null);
      setStoreMarkers(map);
      setCarparkMarkers(null);
    }
    else if(type === "carpark"){
      setCoffeeMarkers(null);
      setStoreMarkers(null);
      setCarparkMarkers(null);
      console.log("주차장 리스트 클릭");
      setCarparkClass("menu_selected");

      setCoffeeClass("");
      setStoreClass("");

      // 주차장 마커들만 지도에 표시하도록 설정합니다
      setCoffeeMarkers(null);
      setStoreMarkers(null);
      setCarparkMarkers(map);
    }
  }; ///////////// handleMarkers() ////////////////



  // 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
  function createMarkerImage(src, size, options) {
    const markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;            
  }

  // 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
  function createMarker(position, image) {
    let marker = new kakao.maps.Marker({
      position: position,
      image: image
    });
    
    return marker;  
  }  

  // 커피숍 마커를 생성하고 커피숍 마커 배열에 추가하는 함수입니다
  function createCoffeeMarkers() {
    for (let i = 0; i < coffeePositions.length; i++) {  
      const imageSize = new kakao.maps.Size(22, 26);
      const imageOptions = {  
        spriteOrigin: new kakao.maps.Point(10, 0),    
        spriteSize: new kakao.maps.Size(36, 98)  
      };     
      
      // 마커이미지와 마커를 생성합니다
      const markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions);  
      const marker = createMarker(coffeePositions[i], markerImage);  
      
      // 생성된 마커를 커피숍 마커 배열에 추가합니다
      coffeeMarkers.push(marker);
    }     
  }

  // 커피숍 마커들의 지도 표시 여부를 설정하는 함수입니다
  function setCoffeeMarkers(map) {        
    for (let i = 0; i < coffeeMarkers.length; i++) {  
      coffeeMarkers[i].setMap(map);
    }        
  }

  // 편의점 마커를 생성하고 편의점 마커 배열에 추가하는 함수입니다
  function createStoreMarkers() {
    for (let i = 0; i < storePositions.length; i++) {
      const imageSize = new kakao.maps.Size(22, 26);
      const imageOptions = {   
        spriteOrigin: new kakao.maps.Point(10, 36),    
        spriteSize: new kakao.maps.Size(36, 98)  
      };       
  
      // 마커이미지와 마커를 생성합니다
      const markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions);
      const marker = createMarker(storePositions[i], markerImage);  

      // 생성된 마커를 편의점 마커 배열에 추가합니다
      storeMarkers.push(marker);    
    }        
  }
  // 편의점 마커들의 지도 표시 여부를 설정하는 함수입니다
  function setStoreMarkers(map) {        
    for (let i = 0; i < storeMarkers.length; i++) {  
      storeMarkers[i].setMap(map);
    }        
  }

  // 주차장 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
  function createCarparkMarkers() {
    for (let i = 0; i < carparkPositions.length; i++) {
      const imageSize = new kakao.maps.Size(22, 26);
      const imageOptions = {   
        spriteOrigin: new kakao.maps.Point(10, 72),    
        spriteSize: new kakao.maps.Size(36, 98)  
      };       
  
      // 마커이미지와 마커를 생성합니다
      const markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions);   
      const marker = createMarker(carparkPositions[i], markerImage);  

      // 생성된 마커를 주차장 마커 배열에 추가합니다
      carparkMarkers.push(marker);        
    }                
  }

  // 주차장 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
  function createCarparkMarkers() {
    for (let i = 0; i < carparkPositions.length; i++) {
      const imageSize = new kakao.maps.Size(22, 26);
      const imageOptions = {   
        spriteOrigin: new kakao.maps.Point(10, 72),    
        spriteSize: new kakao.maps.Size(36, 98)  
      };       
  
      // 마커이미지와 마커를 생성합니다
      const markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions);  
      const marker = createMarker(carparkPositions[i], markerImage);  

      // 생성된 마커를 주차장 마커 배열에 추가합니다
      carparkMarkers.push(marker);        
    }                
  }

  // 주차장 마커들의 지도 표시 여부를 설정하는 함수입니다
  function setCarparkMarkers(map) {        
    for (let i = 0; i < carparkMarkers.length; i++) {  
      carparkMarkers[i].setMap(map);
    }        
  }



  return(
    <>
      <Wrapper>
        <CurrentLocationBox>📍현재 위치 동이름</CurrentLocationBox>
        <div>필터-거리순</div>
      </Wrapper>
      <div id="mapwrap">
        <Screen id="map" ref={mapContainer}></Screen>
        <div className="category">
          <ul>
            <li id="coffeeMenu" className={coffeeClass} onClick={()=>handleMarkers('coffee')}>
              <span className="ico_comm ico_coffee"></span>
              커피숍
            </li>
            <li id="storeMenu" className={storeClass} onClick={()=>handleMarkers('store')}>
              <span className="ico_comm ico_store"></span>
              편의점
            </li>
            <li id="carparkMenu" className={carparkClass} onClick={()=>handleMarkers('carpark')}>
              <span className="ico_comm ico_carpark"></span>
              주차장
            </li>
          </ul>
        </div>
      </div>
      <Wrapper style={{border: "none"}}>
        <OpenHobbyListBox onClick={()=>navigate('/hobby')}>목록열기</OpenHobbyListBox>
      </Wrapper>
    </>
  )
}