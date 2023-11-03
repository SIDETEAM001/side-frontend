import styled from "styled-components";
const Wrapper = styled.section`
  width: 485px;
  margin: 5vh auto;
  color: #111111;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
// 타이틀
export const StyledTitle = styled.h4`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #111111;

  margin: 0;
  padding: 0;
  line-height: 130%;
`;

// 라벨 공통 디자인
export const StyledLabel = styled.label`
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;
// 필드셋 공통 디자인
export const StyledField = styled.fieldset`
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;

  & > legend {
    margin-bottom: 12px;
    font-size: 1rem;
    font-weight: bold;
  }
`;
// 인풋 공통 디자인 : 라디오
export const StyledInput_Radio = styled.input.attrs(() => ({ type: "radio" }))`
  margin: 0;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;
// 인풋 공통 디자인 : 텍스트
export const StyledInput_Text = styled.input.attrs(() => ({ type: "text" }))`
  width: 100%;
  height: 56px;
  margin: 0;
  padding: 8px 16px;
  border: 1px solid #e4e4e4;
  border-radius: 16px;

  &::placeholder {
    font-size: 1rem;
    color: #b5b5b5;
  }
`;

// 닉네임 필드셋
export const NickNameField = styled(StyledField)``;
// 닉네임 인풋
export const NickNameInput = styled(StyledInput_Text)``;
// 닉네임 라벨
export const NickNameLabel = styled(StyledLabel)`
  font-weight: bold;
  font-size: 0%.87rem;
  line-height: 140%;
  letter-spacing: -0.3%;
`;

// 생년월일 필드셋
export const BirthField = styled(StyledField)``;
// 생년월일 인풋
export const BirthInput = styled(StyledInput_Text)``;
// 생년월일 라벨
export const BirthLabel = styled(StyledLabel)`
  font-weight: bold;
  font-size: 0%.87rem;
  line-height: 140%;
  letter-spacing: -0.3%;
`;

// 성별 필드셋
export const GenderField = styled(StyledField)`
  display: flex;
  gap: 24px;
`;
// 성별 라벨
export const GenderLabel = styled(StyledLabel)`
  display: flex;
  align-items: center;
  gap: 5px;
`;
// 성별 라디오 버튼
export const GenderRadioButton = styled(StyledInput_Radio)`
  appearance: none;
  vertical-align: text-bottom;
  position: relative;

  width: 20px;
  height: 20px;
  border: 1px solid #111111;
  border-radius: 50%;

  /* 체크될 때 */
  &:checked {
    border: 1px solid #68be12;
  }
  &:checked::after {
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
export const DividingLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
`;

// 직업 필드셋
export const JobField = styled(StyledField)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px 10px;
`;
// 직업 라벨
export const JobLabel = styled(StyledLabel)`
  height: 40px;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  gap: 8px;

  border: 1px solid #e4e4e4;
  border-radius: 20px;

  font-size: 14px;
  font-weight: bold;
  color: #111111;
`;
// 직업 라디오 버튼 : visually-hidden
export const JobRadioButton = styled(StyledInput_Radio)`
  width: 1px;
  height: 1px;
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;

  &:checked + label {
    border: 1px solid #68be12;
    /* svg 요소의 stroke에 'currentColor'을 넣으면 color 색상으로 변경됨 */
    color: #68be12;
  }
`;

// 등록 버튼
export const ProfileSubmitButton = styled.button`
  width: 100%;
  padding: 12px 40px;
  background-color: #68be12;
  border: none;
  border-radius: 16px;
  font-size: 1.125rem;
  color: #ffffff;
`;
