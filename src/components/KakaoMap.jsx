// 카카오 지도 컴포넌트

import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";



export default function KakaoMap() {
  // kakao 바로 접근하기
  const { kakao } = window;

  // 마커 이미지의 src
  const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  const markerImageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png";

  // 마커 이미지 사이즈
  const imageSize = { width : 24, height : 35 };
  const spriteSize = { width: 36, height: 98 };

  // 카페 마커가 표시될 좌표 배열
  const coffeePositions = [
    { lat: 37.499590490909185, lng: 127.0263723554437 },
    { lat: 37.499427948430814, lng: 127.02794423197847 },
    { lat: 37.498553760499505, lng: 127.02882598822454 },
    { lat: 37.497625593121384, lng: 127.02935713582038 },
    { lat: 37.49646391248451, lng: 127.02675574250912 },
    { lat: 37.49629291770947, lng: 127.02587362608637 },
    { lat: 37.49754540521486, lng: 127.02546694890695 },
  ];
  const coffeeOrigin = { x: 10, y: 0 };
  // 편의점 마커가 표시될 좌표 배열
  const storePositions = [
    { lat: 37.497535461505684, lng: 127.02948149502778 },
    { lat: 37.49671536281186, lng: 127.03020491448352 },
    { lat: 37.496201943633714, lng: 127.02959405469642 },
    { lat: 37.49640072567703, lng: 127.02726459882308 },
    { lat: 37.49640098874988, lng: 127.02609983175294 },
    { lat: 37.49932849491523, lng: 127.02935780247945 },
    { lat: 37.49996818951873, lng: 127.02943721562295 },
  ];
  const storeOrigin = { x: 10, y: 36 };

  // 주차장 마커가 표시될 좌표 배열
  const carparkPositions = [
    { lat: 37.49966168796031, lng: 127.03007039430118 },
    { lat: 37.499463762912974, lng: 127.0288828824399 },
    { lat: 37.49896834100913, lng: 127.02833986892401 },
    { lat: 37.49893267508434, lng: 127.02673400572665 },
    { lat: 37.49872543597439, lng: 127.02676785815386 },
    { lat: 37.49813096097184, lng: 127.02591949495914 },
    { lat: 37.497680616783086, lng: 127.02518427952202 },
  ];
  const carparkOrigin = { x: 10, y: 72 };

  // 마커 카테고리 선택
  const [selectedCategory, setSelectedCategory] = useState("coffee");



  // 현재 위치 저장 : 초기값은 카카오 본사
  const [currentLocation, setCurrentLocation] = useState({
    // center : { lat: 33.450701, lng: 126.570667 },
    center : { lat: 37.498004414546934, lng: 127.02770621963765 }, // 강남역
    address : null,
    message : null,
  });


  // 지도 생성 + 현재 위치 불러오기
  useEffect(()=>{
    // GeoLocation 이용해서 접속 위치 획득 -> 성공시 successHandler, 실패시 errorHandler 함수가 실행되게 함
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }

    // 카테고리 변경에 따른 마커 표시
    const coffeeMenu = document.getElementById("coffeeMenu");
    const storeMenu = document.getElementById("storeMenu");
    const carparkMenu = document.getElementById("carparkMenu");

    // 카페 카테고리를 선택할 경우
    if (selectedCategory === "coffee") {
      // 카페 카테고리 모양을 선택된 스타일로 변경하고
      coffeeMenu.className = "menu_selected";

      // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꾸기
      storeMenu.className = "";
      carparkMenu.className = "";
    }
    // 편의점 카테고리가 클릭됐을 때
    else if (selectedCategory === "store") {
      // 편의점 카테고리를 선택된 스타일로 변경하기
      coffeeMenu.className = ""
      storeMenu.className = "menu_selected"
      carparkMenu.className = ""
    }
    // 주차장 카테고리가 클릭됐을 때
    else if (selectedCategory === "carpark") {
      // 주차장 카테고리를 선택된 스타일로 변경하기
      coffeeMenu.className = ""
      storeMenu.className = ""
      carparkMenu.className = "menu_selected"
    }

  }, [selectedCategory]);

  // 현재 위치 불러오기 성공시
  const handleSuccess = (res)=>{
    // 위치 저장하기
    setCurrentLocation((prev)=>({
      ...prev,
      center : { lat : res.coords.latitude, lng : res.coords.longitude },
    }));
    
    // 주소 저장하기
    // 📢 주소 타입이 법정동(B)와 행정동(H)이 있음. 어떤 것을 보여줘야하나?
    // 👉 카카오 문서에는 center는 행정동을 보여주고 지도 클릭시에는 법정동을 보여줌
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2RegionCode(res.coords.longitude, res.coords.latitude, function(result, status){
      console.log("콜백 상태 : ", status);
      if(status === kakao.maps.services.Status.OK){
        console.log("성공해서 콜백", result[1].address_name);
        setCurrentLocation((prev)=>({
          ...prev,
          address : result[1].address_name,
        }));
      }
    });
  };
  // 현재 위치 불러오기 실패시
  const handleError = (error) => {
    // 변경 내용 저장하기 : 에러 메시지 저장
    setCurrentLocation((prev)=>({
      ...prev,
      message : error.message,
      isLoading : false,
    }));
	};


  return (
    <>
        {/* 현재 위치 표시 */}
        {!currentLocation.isLoading && (
          <div>현재 위치 : { currentLocation.address === null ? currentLocation.message : currentLocation.address }</div>
        )}
      <Map // 지도를 표시할 Container
        id="map"
        // 지도의 중심좌표
        center={currentLocation.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "800px",
        }}
        level={3} // 지도의 확대 레벨
      >
        {/* 지도 위 마커 */}
        {selectedCategory === "coffee" &&
        coffeePositions.map((position) => (
          <MapMarker
            key={`coffee-${position.lat},${position.lng}`}
            // 지도 상 마커를 표시할 위치
            position={position}
            // 마커 이미지
            image={{
              // 이미지 src
              src: markerImageSrc,
              // 이미지 사이즈
              size: imageSize,
              // 스프라이트 이미지일 경우 옵션으로 위치 조정
              options: {
                // 스프라이트 이미지의 사이즈
                spriteSize: spriteSize,
                // 스프라이트 이미지의 좌표값
                spriteOrigin: coffeeOrigin,
              },
            }}
          />
        ))}
        {selectedCategory === "store" &&
        storePositions.map((position) => (
          <MapMarker
            key={`store-${position.lat},${position.lng}`}
            position={position}
            image={{
              src: markerImageSrc,
              size: imageSize,
              options: {
                spriteSize: spriteSize,
                spriteOrigin: storeOrigin,
              },
            }}
          />
        ))}
        {selectedCategory === "carpark" &&
        carparkPositions.map((position) => (
          <MapMarker
            key={`carpark-${position.lat},${position.lng}`}
            position={position}
            image={{
              src: markerImageSrc,
              size: imageSize,
              options: {
                spriteSize: spriteSize,
                spriteOrigin: carparkOrigin,
              },
            }}
          />
        ))}
      </Map>
      {/* 지도 위에 표시될 마커 카테고리 */}
      <div className="category">
        <ul>
          <li id="coffeeMenu" onClick={() => setSelectedCategory("coffee")}>
            <span className="ico_comm ico_coffee"></span>
            커피숍
          </li>
          <li id="storeMenu" onClick={() => setSelectedCategory("store")}>
            <span className="ico_comm ico_store"></span>
            편의점
          </li>
          <li id="carparkMenu" onClick={() => setSelectedCategory("carpark")}>
            <span className="ico_comm ico_carpark"></span>
            주차장
          </li>
        </ul>
      </div>
    </>
  )
}