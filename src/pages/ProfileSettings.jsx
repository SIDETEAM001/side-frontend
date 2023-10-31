// 프로필 설정 페이지
import styled from "styled-components";
import { ReactComponent as JobIcon } from "../assets/jobIcon.svg";


const Wrapper = styled.section`
  width: 485px;
  margin: 5vh auto;
  color: #111111;

  &>form{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
// 타이틀
const StyledTitle = styled.h4`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #111111;

  margin: 0;
  padding: 0;
  line-height: 130%;
`;

// 라벨 공통 디자인
const StyledLabel = styled.label`
  user-select: none;
  
  &:hover{
    cursor: pointer;
  }
`;
// 필드셋 공통 디자인
const StyledField = styled.fieldset`
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  
  &>legend{
    margin-bottom: 12px;
    font-size: 1rem;
    font-weight: bold;
  }
`;
// 인풋 공통 디자인 : 라디오
const StyledInput_Radio = styled.input.attrs(()=>({type: 'radio'}))`
  margin: 0;
  padding: 0;

  &:hover{
    cursor: pointer;
  }
`;
// 인풋 공통 디자인 : 텍스트
const StyledInput_Text = styled.input.attrs(()=>({type: 'text'}))`
  width: 100%;
  height: 56px;
  margin: 0;
  padding: 8px 16px;
  border: 1px solid #E4E4E4;
  border-radius: 16px;

  &::placeholder{
    font-size: 1rem;
    color: #B5B5B5;
  }
`;



// 닉네임 필드셋
const NickNameField = styled(StyledField)``;
// 닉네임 인풋
const NickNameInput = styled(StyledInput_Text)``;
// 닉네임 라벨
const NickNameLabel = styled(StyledLabel)`
  font-weight: bold;
  font-size: 0%.87rem;
  line-height: 140%;
  letter-spacing: -0.3%;
`;


// 생년월일 필드셋
const BirthField = styled(StyledField)``;
// 생년월일 인풋
const BirthInput = styled(StyledInput_Text)``;
// 생년월일 라벨
const BirthLabel = styled(StyledLabel)`
  font-weight: bold;
  font-size: 0%.87rem;
  line-height: 140%;
  letter-spacing: -0.3%;
`;


// 성별 필드셋
const GenderField = styled(StyledField)`
  display: flex;
  gap: 24px;
`;
// 성별 라벨
const GenderLabel = styled(StyledLabel)`
  display: flex;
  align-items: center;
  gap: 5px;
`;
// 성별 라디오 버튼
const GenderRadioButton = styled(StyledInput_Radio)`
  appearance: none;
  vertical-align: text-bottom;
  position: relative;

  width: 20px;
  height: 20px;
  border: 1px solid #111111;
  border-radius: 50%;

  /* 체크될 때 */
  &:checked{
    border: 1px solid #68be12;
  }
  &:checked::after{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 60%;
    height: 60%;
    background-color: #68be12;
    border-radius: 50%;
  }
`;


// 구분선
const DividingLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E4E4E4;
`;


// 직업 필드셋
const JobField = styled(StyledField)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px 10px;
`;
// 직업 라벨
const JobLabel = styled(StyledLabel)`
  height: 40px;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  gap: 8px;
  
  border: 1px solid #E4E4E4;
  border-radius: 20px;

  
  font-size: 14px;
  color: #111111;
`;
// 직업 라디오 버튼 : visually-hidden
const JobRadioButton = styled(StyledInput_Radio)` 
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
`;


// 등록 버튼
const ProfileSubmitButton = styled.button`
  width: 100%;
  padding: 12px 40px;
  background-color: #68be12;
  border: none;
  border-radius: 16px;
  font-size: 1.125rem;
  color: #FFFFFF;
`;

export default function ProfileSettings(){
  return(
    <>
    <Wrapper>
      <form>
        <StyledTitle>프로필 설정</StyledTitle>
        <NickNameField>
          <NickNameLabel htmlFor="nickName">닉네임</NickNameLabel>
          <NickNameInput type="text" id="nickName" name="nickName" placeholder="닉네임을 입력해 주세요." />
        </NickNameField>
        <BirthField>
          <BirthLabel htmlFor="birth">생년월일</BirthLabel>
          <BirthInput type="text" id="birth" name="birth" placeholder="생년월일 여섯자리를 입력해 주세요." />
        </BirthField>
        {/* ---------- 성별 ---------- */}
        <GenderField>
          <legend>성별</legend>
          <GenderLabel htmlFor="man">
            <GenderRadioButton type="radio" name="gender" id="man" value="man" />
            남자
          </GenderLabel>
          <GenderLabel htmlFor="woman">
            <GenderRadioButton type="radio" name="gender" id="woman" value="woman" />
            여자
          </GenderLabel>
        </GenderField>
        {/* ---------- 구분선 ---------- */}
        <DividingLine></DividingLine>
        {/* ---------- 직무선택 ---------- */}
        <JobField>
          <legend>직무선택</legend>
          <JobLabel htmlFor="job01">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job01" value="job01" />
            기획, 전략, 경영
          </JobLabel>
          <JobLabel htmlFor="job02">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job02" value="job02" />
            개발
          </JobLabel>
          <JobLabel htmlFor="job03">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job03" value="job03" />
            데이터, AI, ML
          </JobLabel>
          <JobLabel htmlFor="job04">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job04" value="job04" />
            마케팅, 광고홍보
          </JobLabel>
          <JobLabel htmlFor="job05">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job05" value="job05" />
            디자인
          </JobLabel>
          <JobLabel htmlFor="job06">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job06" value="job06" />
            미디어, 전시, 예술
          </JobLabel>
          <JobLabel htmlFor="job07">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job07" value="" />
            유통, 물류
          </JobLabel>
          <JobLabel htmlFor="job08">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job08" value="" />
            금융
          </JobLabel>
          <JobLabel htmlFor="job09">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job09" value="" />
            재무, 회계, 세무
          </JobLabel>
          <JobLabel htmlFor="job10">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job10" value="" />
            인사, 노무
          </JobLabel>
          <JobLabel htmlFor="job11">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job11" value="" />
            영업, 고객
          </JobLabel>
          <JobLabel htmlFor="job12">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job12" value="" />
            의료, 바이오, 제약
          </JobLabel>
          <JobLabel htmlFor="job13">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job13" value="" />
            연구, RND
          </JobLabel>
          <JobLabel htmlFor="job14">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job14" value="" />
            엔지니어링, 설계
          </JobLabel>
          <JobLabel htmlFor="job15">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job15" value="" />
            품질, 생산
          </JobLabel>
          <JobLabel htmlFor="job16">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job16" value="" />
            교육
          </JobLabel>
          <JobLabel htmlFor="job17">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job17" value="" />
            체육, 스포츠직
          </JobLabel>
          <JobLabel htmlFor="job18">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job18" value="" />
            법률, 법무직
          </JobLabel>
          <JobLabel htmlFor="job19">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job19" value="" />
            공공, 복지
          </JobLabel>
          <JobLabel htmlFor="job20">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job20" value="" />
            서비스직
          </JobLabel>
          <JobLabel htmlFor="job21">
            <JobIcon />
            <JobRadioButton type="raido" name="job" id="job21" value="" />
            기타
          </JobLabel>
        </JobField>
        <ProfileSubmitButton type="submit">등록하기</ProfileSubmitButton>
      </form>
    </Wrapper>
    </>
  )
}