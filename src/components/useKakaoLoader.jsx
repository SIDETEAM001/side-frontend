import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    // appkey: `63ff7642db339f2b172fd95927fdad26`,
    libraries: ["clusterer", "drawing", "services"],
  })
}