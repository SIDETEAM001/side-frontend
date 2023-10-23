// 회원가입 페이지

import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";


export default function Member(){
    // 입력요소 관리
    // 1.아이디 변수
    const [userId, setUserId] = useState("");
    // 2.비밀번호 변수
    const [password, setPassword] = useState("");
    // 3.비밀번호 확인 변수
    const [checkedPassword, setCheckedPassword] = useState("");
    // 4.전화번호 변수
    const [phoneNumber, setPhoneNumber] = useState("");
    
    // 에러 상태값 관리 : 초기값은 에러가 아닌 상태 (false)
    // 1.아이디 에러 변수
    const [userIdError, setUserIdError] = useState(false);
    // 2.비밀번호 에러 변수
    const [passwordError, setPasswordError] = useState(false);
    // 3.비밀번호 확인 에러 변수
    const [checkedPasswordError, setCheckedPasswordError] = useState(false);
    // 4.전화번호 에러 변수
    const [phoneNumberError, setPhoneNumberError] = useState(false);


    // 입력 박스 보더 색상 변경
    const [changeColor, setChangeColor] = useState(["","","","",""]);

    // 유효성 체크 박스 색상 변경
    const [changeBgc, setChangeBgc] = useState(["", "", "", "", "var(--color-mainPink)"]);

    // 가입하기 버튼 색상 변경
    const [isOk, setIsOk] = useState("");

    // 추가 정보 입력 화면 상태 - true : 보여주기 / false : 숨기기
    const [showAddInfoScreen, setShowAddInfoScreen] = useState(false);




    // 색상 변경 함수
    const changeHandler = (type, idx, data)=>{
        let temp;

        if(type === "border"){
            temp = [...changeColor];
            temp[idx] = data;
            setChangeColor(temp);
        }
        else if(type === "bgc"){
            temp = [...changeBgc];
            temp[idx] = data;
            setChangeBgc(temp);
        }
    };


    useEffect(()=>{
        // 전체 유효성 검사 통과한다면 '가입하기'버튼 색상 바뀌기
        totalValid();
    }, [userIdError, passwordError, checkedPasswordError, phoneNumberError]);




    // 유효성 검사
    // 1.아이디 유효성 검사
    const validateUserId = event => {
        // 유효성 검사식
        const userIdFormula = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        // 입력값 확인
        // console.log("아이디 입력값 : ", event.target.value);
        
        // 에러 상태 확인 : 유효성 검사 결과가 true인가? (true면 에러상태값이 false여야함)
        if(userIdFormula.test(event.target.value)) {
            // 아이디 데이터 체크 함수 호출 : DB에 데이터 있는지 초기에 체크하는 함수
            

            // 아이디 형식에 맞지만 사용중인 아이디인지 검사하기
            

            // 에러상태 아니라고 하기
            setUserIdError(false);
            // 보더 색상 변경
            changeHandler("border", 0, "var(--color-lightGreen)");
        }
        else {
            // 에러상태 맞다고 하기
            setUserIdError(true);
            // 보더 색상 변경
            changeHandler("border", 0, "var(--color-mainPink)");
        };

        // 입력값 반영하기
        setUserId(event.target.value);
    };



    // 2.비밀번호 유효성 검사
    const validatePassword = event => {
        // 유효성 검사식
        const val = event.target.value.replaceAll(" ", "");
        const regExpPassword = /^(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$ %^&*-]).{6,}$/;
        const english = val.search(/[a-z]/ig);  // 대소문자 구분 없음, 모든 검색결과반환
        const number = val.search(/[0-9]/g);
        const specialCharacters = val.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        
        // 유효성 체크 박스 색상 변경하기
        if(val.length < 6) {
            // console.log("6자리 미만이야", val.length);
            
            if(english != -1 && number == -1 && specialCharacters == -1){
                setChangeBgc([`var(--color-lightGreen)`, ``, ``, ``, `var(--color-mainPink)`]);
                // changeHandler("bgc", 0, "var(--color-lightGreen)");
            }
            else if(english != -1 && number != -1 && specialCharacters == -1){
                setChangeBgc([`var(--color-lightGreen)`, `var(--color-lightGreen)`, ``, ``, `var(--color-mainPink)`]);
                // changeHandler("bgc", 0, "var(--color-lightGreen)");
                // changeHandler("bgc", 1, "var(--color-lightGreen)");
            }
            else if(english != -1 && number != -1 && specialCharacters != -1){
                setChangeBgc([`var(--color-lightGreen)`, `var(--color-lightGreen)`, `var(--color-lightGreen)`, ``, `var(--color-mainPink)`]);
                // changeHandler("bgc", 0, "var(--color-lightGreen)");
                // changeHandler("bgc", 1, "var(--color-lightPink)");
                // changeHandler("bgc", 2, "var(--color-lightGreen)");
            }
            else if(english != -1 && number == -1 && specialCharacters != -1){
                setChangeBgc([`var(--color-lightGreen)`, ``, `var(--color-lightGreen)`, ``, `var(--color-mainPink)`]);
                // changeHandler("bgc", 0, "var(--color-lightGreen)");
                // changeHandler("bgc", 2, "var(--color-lightGreen)");
            }
            else if(english == -1 && number != -1 && specialCharacters == -1){
                setChangeBgc([``, `var(--color-lightGreen)`, ``, ``, `var(--color-mainPink)`]);
                // changeHandler("bgc", 1, "var(--color-lightGreen)");
            }
            else if(english == -1 && number != -1 && specialCharacters != -1){
                setChangeBgc([``, `var(--color-lightGreen)`, `var(--color-lightGreen)`, ``, `var(--color-mainPink)`]);
                // changeHandler("bgc", 1, "var(--color-lightGreen)");
                // changeHandler("bgc", 2, "var(--color-lightGreen)");
            }
            else if(english == -1 && number == -1 && specialCharacters != -1){
                setChangeBgc([``, ``, `var(--color-lightGreen)`, ``, `var(--color-mainPink)`]);
                // changeHandler("bgc", 2, "var(--color-lightGreen)");
            }
            else if(english == -1 && number == -1 && specialCharacters == -1){
                setChangeBgc([``, ``, ``, ``, `var(--color-mainPink)`]);
            }
        }
        else if(val.length  >= 6) {
            // console.log("6자리 이상이야", val.length);

            if(english != -1 && number == -1 && specialCharacters == -1){
                setChangeBgc([`var(--color-lightGreen)`, ``, ``, `var(--color-lightGreen)`, `var(--color-mainPink)`]);
            }
            else if(english != -1 && number != -1 && specialCharacters == -1){
                setChangeBgc([`var(--color-lightGreen)`, `var(--color-lightGreen)`, ``, `var(--color-lightGreen)`, `var(--color-mainPink)`]);
            }
            else if(english != -1 && number != -1 && specialCharacters != -1){
                setChangeBgc([`var(--color-lightGreen)`, `var(--color-lightGreen)`, `var(--color-lightGreen)`, `var(--color-lightGreen)`, `var(--color-mainPink)`]);
            }
            else if(english != -1 && number == -1 && specialCharacters != -1){
                setChangeBgc([`var(--color-lightGreen)`, ``, `var(--color-lightGreen)`, `var(--color-lightGreen)`, `var(--color-mainPink)`]);
            }
            else if(english == -1 && number != -1 && specialCharacters == -1){
                setChangeBgc([``, `var(--color-lightGreen)`, ``, `var(--color-lightGreen)`, `var(--color-mainPink)`]);
            }
            else if(english == -1 && number != -1 && specialCharacters != -1){
                setChangeBgc([``, `var(--color-lightGreen)`, `var(--color-lightGreen)`, `var(--color-lightGreen)`, `var(--color-mainPink)`]);
            }
            else if(english == -1 && number == -1 && specialCharacters != -1){
                setChangeBgc([``, ``, `var(--color-lightGreen)`, `var(--color-lightGreen)`, `var(--color-mainPink)`]);
            }
            else if(english == -1 && number == -1 && specialCharacters == -1){
                setChangeBgc([``, ``, ``, `var(--color-lightGreen)`, `var(--color-mainPink)`]);
            }
        }
        // 🔥🔥다른 방법 찾아보기ㅠㅠ🔥🔥


        // 유효성 검사 정규식이 맞는지 확인하기
        if(regExpPassword.test(val)) {
            // 에러 아니라고 보내기
            setPasswordError(false);

            // 보더 색상 변경
            changeHandler("border", 1, "var(--color-lightGreen)");
        }
        else {
            // 에러 맞다고 보내기
            setPasswordError(true);

            // 보더 색상 변경
            changeHandler("border", 1, "var(--color-lightPink)");
        }
        
        
        // console.log("비번 에러임?", passwordError);
        // console.log("영어", english, "숫자", number, "특문", specialCharacters);
        // console.log("기존", changeBgc);
        // console.log("변동", changeBgc);
        
        // 입력값 반영하기
        setPassword(val);
    };
    
    



    // 3.비밀번호 확인 유효성 검사
    const validateCheckedPassword = event => {
        // console.log("비번확인 입력값", event.target.value);
        const val = event.target.value.replaceAll(" ", "");

        // 위에 입력한 비밀번호와 일치하는지 확인
        if(password === val) {
            // 에러가 아니라고 보내기
            setCheckedPasswordError(false);

            // 보더 색상 변경
            changeHandler("border", 2, "var(--color-lightGreen)");
            // 박스 색상 변경
            changeHandler("bgc", 4, "var(--color-lightGreen)");
        }
        else {
            // 에러라고 보내기
            setCheckedPasswordError(true);

            // 보더 색상 변경
            changeHandler("border", 2, "var(--color-lightPink)");
            // 박스 색상 변경
            changeHandler("bgc", 4, "var(--color-mainPink)");
        }

        // console.log("비번확인 에러임?", checkedPasswordError);
        
        // 입력값 반영하기
        setCheckedPassword(val);
    };





    // 4.전화번호 유효성 검사
    const validatePhoneNumber = event => {
        const regExpPhoneNumber = /^010-\d{3,4}-\d{4}$/;

        
        event.target.value = event.target.value
        // 숫자 제외 모든 문자 제거하기
        .replace(/[^0-9]/g, '')
        // 자동으로 하이픈 넣기
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, "");

        // 유효성 검사하기
        if(regExpPhoneNumber.test(event.target.value)){
            // console.log("폰번 형식 맞아");

            // 에러가 아니라고 보내기
            setPhoneNumberError(false);
            // 보더 색상 변경
            changeHandler("border", 3, "var(--color-lightGreen)");
        }
        else{
            // 에러라고 보내기
            setPhoneNumberError(true);
            // 보더 색상 변경
            changeHandler("border", 3, "var(--color-lightPink)");
        }

        // 입력값 반영하기
        setPhoneNumber(event.target.value);

        // console.log("전화번호", event.target.value);
    };




    // 5.전체 유효성 검사
    const totalValid = () => {
        // 모든 input 검사하기 : 빈 값일 경우 모든 에러 state변수에 전달하기
        if(!userId) setUserIdError(true);
        if(!password) setPasswordError(true);
        if(!checkedPassword) setCheckedPasswordError(true);
        if(!phoneNumber) setPhoneNumberError(true);
        console.log("검...사...중....");
        /* 
        통과조건 : 
        1.빈 값이 아님
        2.에러 상태 변수가 모두 false여야함
        => 위의 두가지 조건 모두 만족시 true 리턴
        */
        if(userId && password && checkedPassword && phoneNumber &&
            !userIdError && !passwordError && !checkedPasswordError && !phoneNumberError) {
                console.log("지금 통과");
                setIsOk("var(--color-mainPink)");
                return true;
        }
        else{
            setIsOk("");
            return false;
        }
    };



    // 6.submit 기능 함수
    const onSubmit = (event) => {
        // 기본 서브밋 기능 막기
        event.preventDefault();
        
        console.log("제출!");

        // 전체 유효성 검사 통과시
        if(totalValid()) {
            console.log("전체 유효성 검사 통과함!");
            
        }
        else{
            console.log("전체 유효성 검사 불통과!");
        }
    };

    // 클릭시 추가 정보 입력란 열기
    const handleOpenAddInfo = ()=>{
        console.log("추가정보 기입란 열기");

        setShowAddInfoScreen(true);
    };




    return(
        <>
        <MembershipSection>
            <form method="POST" action="/">
                {
                    // 필수 정보 입력란
                    !showAddInfoScreen ? 
                    <RequiredInfo>
                        {/* 아이디 */}
                        <li>
                            <Input 
                                autoFocus
                                type="text" 
                                placeholder="abcd@gmail.com" 
                                value={userId}
                                onChange={validateUserId}
                                $border_color={changeColor[0]} />
                            <span>*아이디는 이메일 형식으로 작성해주세요</span>
                        </li>
                        {/* 비밀번호 */}
                        <li>
                            <Input 
                                type="text" 
                                placeholder="비밀번호를 입력해주세요" 
                                value={password}
                                onChange={validatePassword}
                                $border_color={changeColor[1]} />
                            <span>*비밀번호는 영어, 숫자, 특수문자를 포함한 6자리 이상으로 설정해주세요</span>
                            <div className="validationCheckBoxContainer">
                                <ValidationCheckBox $background_color={changeBgc[0]}>영어</ValidationCheckBox>
                                <ValidationCheckBox $background_color={changeBgc[1]}>숫자</ValidationCheckBox>
                                <ValidationCheckBox $background_color={changeBgc[2]}>특수문자</ValidationCheckBox>
                                <ValidationCheckBox $background_color={changeBgc[3]}>6자리 이상</ValidationCheckBox>
                            </div>
                        </li>
                        {/* 비밀번호 확인 */}
                        <li>
                            <Input 
                                type="password" 
                                placeholder="비밀번호를 한번 더 입력해주세요" 
                                value={checkedPassword} 
                                onChange={validateCheckedPassword}
                                $border_color={changeColor[2]} />
                            <div className="validationCheckBoxContainer">
                            <ValidationCheckBox className="validationChkPwBox" $background_color={changeBgc[4]}>비밀번호가 일치하지 않습니다.</ValidationCheckBox>
                            </div>
                        </li>
                        {/* 전화번호 */}
                        <li>
                            <Input 
                            type="text" 
                            maxLength={13}
                            placeholder="010-0000-0000" 
                            value={phoneNumber}
                            onChange={validatePhoneNumber}
                            $border_color={changeColor[3]} />
                            <span>*전화번호를 입력해주세요</span>
                        </li>
                        {/* 다음페이지 이동 버튼 */}
                        <SignUpButton 
                            onClick={handleOpenAddInfo} 
                            >다음</SignUpButton>
                    </RequiredInfo> :
                    // 추가 정보 입력란
                    <AdditionalInfoSection>
                        {/* 닉네임 */}
                        <li>
                            <span>닉네임을 입력해주세요</span>
                            <input />
                        </li>
                        {/* 생년월일 */}
                        <li>
                            <span>생년월일</span>
                            <input />
                        </li>
                        {/* 성별 */}
                        <li>
                            <span>성별</span>
                            <input />
                        </li>
                        {/* 직무 */}
                        <li>
                            <span>직무</span>
                            <input />
                        </li>
                        {/* 회원가입 버튼 */}
                        <SignUpButton 
                            onClick={onSubmit} 
                            $is_ok={isOk}
                            >가입하기</SignUpButton>
                    </AdditionalInfoSection>
                }
            </form>
        </MembershipSection>
        </>
    )
}




const MembershipSection = styled.section`
    width: 500px;
    height: 700px;
    margin: 80px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-9gray);

    span{
        display: block;
        font-size: 10px;
        color: var(--tpGray);
        /* line-height: 50px; */
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    li{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    li:last-of-type{
        position: relative;
    }

    & .validationCheckBoxContainer{
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;

const RequiredInfo = styled.ul`

`;

const Input = styled.input`
    width: 361px;
    height: 74px;
    box-sizing: border-box;
    padding: 0 15px;
    border: 1px solid ${ (props)=> props.border_color || `var(--color-lightPink)`};
    border-radius: 8px;

    &::placeholder{
        color: var(--color-lightPink);
        font-size: 16px;
    }
`;

const ValidationCheckBox = styled.div`
    padding: 5px;
    border-radius: 8px;
    background-color: 
        ${ (props) => props.background_color || `var(--color-9gray)` };
`;


const SignUpButton = styled.button`
    background-color: ${ (props) => props.is_ok || "var(--color-9gray)"};
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    font-size: 16px;
    font-weight: bold;
    color: var(--tpGray);

    cursor: pointer;
`;


const AdditionalInfoSection = styled.ul`

`;