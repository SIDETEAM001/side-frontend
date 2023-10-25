// 플레이스 페이지
import styled from "styled-components";
import PlaceBanner from "../components/PlaceBanner";
import Card from "../components/Card";
import dummy from '../db/data.json';

const Wrapper = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    width: 1400px;
    height: 100vh;
    margin: 0 auto;
    border: 1px dashed gray;
`;

const CurrentLocation = styled.div`
    display: flex;
`;

const CardList = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export default function Place(){
    const dummyData = [
        {
            "theme": "surroundings",
            "subject": "내 주변에 있는 클래스들 확인하러 가기 >",
            "imgSrc": "",
            "title": "ㅇㅇ 헬스",
            "location": "",
            "hashTag": ""
        },
        {
            "theme": "recommendation",
            "subject": "이런 취미생활은 어때요? >",
            "imgSrc": "",
            "title": "ㅁㅁ 기타학원",
            "location": "",
            "hashTag": ""
        },
        {
            "theme": "hotIssue",
            "subject": "HOT! 사람들과 함께 관련 모임에도 참여해보세요! >",
            "imgSrc": "",
            "title": "ㅊㅊ공방",
            "location": "",
            "hashTag": ""
        },
        {
            "theme": "hotIssue",
            "subject": "HOT! 사람들과 함께 관련 모임에도 참여해보세요! >",
            "imgSrc": "",
            "title": "ㅊㅊ공방",
            "location": "",
            "hashTag": ""
        }
    ];



    return(
        <>
            <Wrapper>
                <CurrentLocation>
                    <span className="material-symbols-rounded">location_on</span>
                    <span>현재 위치한 동이름</span>
                </CurrentLocation>
                <PlaceBanner />
                <CardList>
                {
                    dummyData.map(function(val, idx){
                        console.log(idx);
                        return (
                            <Card key={idx} />
                        )
                    })
                }
                </CardList>
            </Wrapper>
        </>
    )
}