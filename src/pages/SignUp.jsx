import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import {
  Wrapper,
  FormInput,
  EmailNotify,
  BottomForm,
  ConditionWrapper,
  ShowCondition,
  ShowSix,
  ShowSpecial,
  PasswordWarning,
  PhoneNumber,
  DetailAddress,
  SignUp,
  PasswordWarningWrapper,
  FindAddress,
  AddressWrapper,
  ModalWrapper,
  FormInput2,
  FormInput3,
  FormInput4,
  FormInput5,
} from "../style/SignUp";

const containsLowerCase = (str) => {
  var re = /[a-z]/;
  return re.test(str);
};

const containsNumber = (str) => {
  var re = /[0-9]/;
  return re.test(str);
};

const validateEmail = (email) => {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const containsSpecialChar = (str) => {
  var re = /[!@#$%^&*(),.?":{}|<>]/;
  return re.test(str);
};

const isRightPhoneNumber = (str) => {
  var re = /^01[016789]-\d{3,4}-\d{4}$/;
  return re.test(str);
};

export default function SingUp() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValidAlpha, setPasswordValidAlpha] = useState(false);
  const [passwordValidNum, setPasswordValidNum] = useState(false);
  const [passwordValidSpecial, setPasswordValidSpecial] = useState(false);
  const [passwordValidLong, setPasswordValidLong] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);
  const [address, setAddress] = useState("");
  //const [zipCode, setZipCode] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [modalState, setModalState] = useState(false);

  const postCodeStyle = {
    width: "400px",
    height: "400px",
    display: modalState ? "block" : "none",
    position: "absolute",
    top: "30%",
    right: "40%",
    zIndex: "15",
  };

  const onCompletePost = (data) => {
    setModalState(false);
    setAddress(data.address);
    //setZipCode(data.zonecode);
  };

  const emailOnChange = (e) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
    if (containsLowerCase(e.target.value)) {
      setPasswordValidAlpha(true);
    } else {
      setPasswordValidAlpha(false);
    }
    if (containsNumber(e.target.value)) {
      setPasswordValidNum(true);
    } else {
      setPasswordValidNum(false);
    }
    if (containsSpecialChar(e.target.value)) {
      setPasswordValidSpecial(true);
    } else {
      setPasswordValidSpecial(false);
    }
    if (e.target.value.length >= 6) {
      setPasswordValidLong(true);
    } else {
      setPasswordValidLong(false);
    }
  };

  const passwordConfirmOnChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const phoneNumberOnChange = (e) => {
    setPhoneNumber(e.target.value);
    if (isRightPhoneNumber(e.target.value)) {
      setPhoneNumberValid(true);
    } else {
      setPhoneNumberValid(false);
    }
  };

  const detailAddressOnChange = (e) => {
    setDetailAddress(e.target.value);
  };

  const findAddressOnClick = (e) => {
    setModalState(true);
  };

  const addressOnChange = (e) => {
    setAddress(e.target.value);
  };

  const modalOnClick = (e) => {
    e.stopPropagation();
    setModalState(false);
  };

  const isFormValid = () => {
    return (
      emailValid &&
      passwordValidAlpha &&
      passwordValidLong &&
      passwordValidNum &&
      passwordValidSpecial &&
      phoneNumberValid &&
      passwordConfirm === password &&
      address.length > 0
    );
  };

  return (
    <>
      <Wrapper>
        <FormInput
          onChange={emailOnChange}
          value={email}
          placeholder="abcd@gmail.com"
          $isvalid={emailValid}
        />
        {!emailValid && (
          <EmailNotify>*아이디는 이메일 형식으로 작성해주세요</EmailNotify>
        )}
        <form>
          <FormInput2
            autoComplete="off"
            onChange={passwordOnChange}
            value={password}
            placeholder="비밀번호를 입력해주세요"
            type="password"
            $isvalid={
              passwordValidAlpha &&
              passwordValidLong &&
              passwordValidNum &&
              passwordValidSpecial
            }
          />
        </form>
        <EmailNotify>
          *비밀번호는 영어, 숫자, 특수문자를 포함한 6자리 이상으로 설정해주세요
        </EmailNotify>
        <ConditionWrapper>
          <ShowCondition $isvalid={passwordValidAlpha}>영어</ShowCondition>
          <ShowCondition $isvalid={passwordValidNum}>숫자</ShowCondition>
          <ShowSpecial $isvalid={passwordValidSpecial}>특수문자</ShowSpecial>
          <ShowSix $isvalid={passwordValidLong}>6자리 이상</ShowSix>
        </ConditionWrapper>
        <form>
          <FormInput3
            $isvalid={
              passwordValidAlpha &&
              passwordValidLong &&
              passwordValidNum &&
              passwordValidSpecial &&
              passwordConfirm === password
            }
            autoComplete="off"
            onChange={passwordConfirmOnChange}
            value={passwordConfirm}
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
        </form>
        <PasswordWarningWrapper>
          {passwordConfirm !== password && (
            <PasswordWarning>비밀번호가 일치하지 않습니다</PasswordWarning>
          )}
        </PasswordWarningWrapper>
        <FormInput4
          $isvalid={phoneNumberValid}
          onChange={phoneNumberOnChange}
          value={phoneNumber}
          placeholder="010-0000-0000"
        />
        {!phoneNumberValid && (
          <PhoneNumber>*전화번호를 입력해주세요</PhoneNumber>
        )}
        <AddressWrapper>
          <FormInput5
            $isvalid={address.length > 0}
            value={address}
            placeholder="도로명/지명"
            onChange={addressOnChange}
          />
          <FindAddress onClick={findAddressOnClick}>주소찾기</FindAddress>
        </AddressWrapper>
        <BottomForm
          onChange={detailAddressOnChange}
          value={detailAddress}
          placeholder="상세 주소"
        />
        <DetailAddress>(선택)지역 주소를 입력해주세요</DetailAddress>
        <SignUp $isvalid={isFormValid()}>가입하기</SignUp>
        {modalState && (
          <ModalWrapper onClick={modalOnClick}>
            <DaumPostcode
              style={postCodeStyle}
              onComplete={onCompletePost}
            ></DaumPostcode>
          </ModalWrapper>
        )}
      </Wrapper>
    </>
  );
}
