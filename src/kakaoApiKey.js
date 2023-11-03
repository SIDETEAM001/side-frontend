// API key

const script_element = document.querySelector("script");

script_element.setAttribute("src", `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&libraries=services`);

document.querySelector("head").appendChild(script_element);