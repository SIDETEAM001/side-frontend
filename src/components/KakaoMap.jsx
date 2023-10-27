// 카카오 지도 컴포넌트

import { Map } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

export default function KakaoMap() {
  const { kakao } = window;

  // 현재 위치 저장 : 초기값은 카카오 본사
  const [currentLocation, setCurrentLocation] = useState({
    center : { lat: 33.450701, lng: 126.570667 },
    address : null,
    message : null,
    isLoading : true,
  });

  
  // 현재 위치 불러오기
  useEffect(()=>{
    // GeoLocation 이용해서 접속 위치 획득 -> 성공시 successHandler, 실패시 errorHandler 함수가 실행되게 함
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }

  }, []);

  // 현재 위치 불러오기 성공시
  const handleSuccess = (res)=>{
    // 위치 저장하기
    setCurrentLocation((prev)=>({
      ...prev,
      center : { lat : res.coords.latitude, lng : res.coords.longitude },
      isLoading : false,
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
        {!currentLocation.isLoading && (
          <div>현재 위치 : { currentLocation.address === null ? currentLocation.message : currentLocation.address }</div>
        )}
      </Map>
    </>
  )
}