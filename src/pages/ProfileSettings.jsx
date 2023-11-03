// 프로필 설정 페이지
import { ReactComponent as JobIcon } from "../assets/jobIcon.svg";
import {
  Wrapper,
  StyledTitle,
  NickNameField,
  NickNameInput,
  NickNameLabel,
  BirthField,
  BirthInput,
  BirthLabel,
  GenderField,
  GenderLabel,
  GenderRadioButton,
  DividingLine,
  JobField,
  JobRadioButton,
  JobLabel,
  ProfileSubmitButton,
} from "../style/ProfileSettingsStyle";
const jobList = [
  "기획, 전략, 경영",
  "개발",
  "데이터, AI, ML",
  "마케팅, 광고홍보",
  "디자인",
  "미디어, 전시, 예술",
  "유통, 물류",
  "금융",
  "재무, 회계, 세무",
  "인사, 노무",
  "영업, 고객",
  "의료, 바이오, 제약",
  "연구, RND",
  "엔지니어링, 설계",
  "품질, 생산",
  "교육",
  "체육, 스포츠직",
  "법률, 법무직",
  "공공, 복지",
  "서비스직",
  "기타",
];

export default function ProfileSettings() {
  return (
    <>
      <Wrapper>
        <form>
          <StyledTitle>프로필 설정</StyledTitle>
          <NickNameField>
            <NickNameLabel htmlFor="nickName">닉네임</NickNameLabel>
            <NickNameInput
              type="text"
              id="nickName"
              name="nickName"
              placeholder="닉네임을 입력해 주세요."
            />
          </NickNameField>
          <BirthField>
            <BirthLabel htmlFor="birth">생년월일</BirthLabel>
            <BirthInput
              type="text"
              id="birth"
              name="birth"
              placeholder="생년월일 여섯자리를 입력해 주세요."
            />
          </BirthField>
          {/* ---------- 성별 ---------- */}
          <GenderField>
            <legend>성별</legend>
            <GenderLabel htmlFor="man">
              <GenderRadioButton
                type="radio"
                name="gender"
                id="man"
                value="man"
              />
              남자
            </GenderLabel>
            <GenderLabel htmlFor="woman">
              <GenderRadioButton
                type="radio"
                name="gender"
                id="woman"
                value="woman"
              />
              여자
            </GenderLabel>
          </GenderField>
          {/* ---------- 구분선 ---------- */}
          <DividingLine></DividingLine>
          {/* ---------- 직무선택 ---------- */}
          <JobField>
            <legend>직무선택</legend>
            {jobList.map((val, idx) => {
              return (
                <div key={idx}>
                  <JobRadioButton
                    type="raido"
                    name="job"
                    id={val}
                    value={val}
                  />
                  <JobLabel htmlFor={val}>
                    <JobIcon />
                    {val}
                  </JobLabel>
                </div>
              );
            })}
          </JobField>
          <ProfileSubmitButton type="submit">등록하기</ProfileSubmitButton>
        </form>
      </Wrapper>
    </>
  );
}
