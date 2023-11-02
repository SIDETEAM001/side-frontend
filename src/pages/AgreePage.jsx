import { useEffect, useState } from "react";
import {
  Wrapper,
  TitleDiv,
  Title,
  Title2,
  Title3,
  TitleDiv2,
  AgreeDiv,
  FirstLabel,
  LabelDiv,
  AllAgree,
  AllAgreeSpan,
  Hr,
  AgreeDiv2,
  Label,
  CheckInfo,
  Look,
  SignUpDiv2,
  SignUpDiv,
} from "../style/AgreePageStyle";

export default function AgreePage() {
  const [allAgree, setAllAgree] = useState(false);
  const [age, setAge] = useState(false);
  const [use, setUse] = useState(false);
  const [person, setPerson] = useState(false);
  const [weak, setWeak] = useState(false);
  const [market, setMarket] = useState(false);

  const OnChangeHandler = (e) => {
    setAllAgree(e.target.checked);
    if (!allAgree) {
      setAge(true);
      setUse(true);
      setPerson(true);
      setWeak(true);
      setMarket(true);
    } else {
      setAge(false);
      setUse(false);
      setPerson(false);
      setWeak(false);
      setMarket(false);
    }
  };

  useEffect(() => {
    if (age && use && person && weak && market) {
      setAllAgree(true);
    } else {
      setAllAgree(false);
    }
  }, [age, use, person, weak, market]);

  return (
    <Wrapper>
      <TitleDiv>
        <Title>약관동의</Title>
        <TitleDiv2>
          <Title2>약관에 동의해주세요</Title2>
          <Title3>여러분의 개인정보와 서비스 이용 권리 잘 지켜드릴게요.</Title3>
        </TitleDiv2>
      </TitleDiv>
      <AgreeDiv>
        <FirstLabel>
          <LabelDiv>
            <input
              onChange={OnChangeHandler}
              type="checkbox"
              checked={allAgree}
            />
            <AllAgree>
              <AllAgreeSpan>모두 동의</AllAgreeSpan>
            </AllAgree>
          </LabelDiv>
          <Title3>서비스 이용을 위해 아래 약관에 모두 동의합니다.</Title3>
        </FirstLabel>
      </AgreeDiv>
      <Hr />
      <AgreeDiv2>
        <Label>
          <div>
            <input
              onChange={(e) => setAge(e.target.checked)}
              checked={age}
              type="checkbox"
            />
            <CheckInfo>(필수) 만 14세 이상입니다.</CheckInfo>
          </div>
        </Label>
        <Look>보기</Look>
      </AgreeDiv2>
      <AgreeDiv2>
        <Label>
          <div>
            <input
              onChange={(e) => setUse(e.target.checked)}
              type="checkbox"
              checked={use}
            />
            <CheckInfo>(필수) 서비스 이용약관 동의</CheckInfo>
          </div>
        </Label>
        <Look>보기</Look>
      </AgreeDiv2>
      <AgreeDiv2>
        <Label>
          <div>
            <input
              onChange={(e) => setPerson(e.target.checked)}
              type="checkbox"
              checked={person}
            />
            <CheckInfo>(필수) 개인정보 처리방침 동의</CheckInfo>
          </div>
        </Label>
        <Look>보기</Look>
      </AgreeDiv2>
      <AgreeDiv2>
        <Label>
          <div>
            <input
              onChange={(e) => setWeak(e.target.checked)}
              type="checkbox"
              checked={weak}
            />
            <CheckInfo>(필수) 민감정보 수집 및 이용 동의</CheckInfo>
          </div>
        </Label>
        <Look>보기</Look>
      </AgreeDiv2>
      <AgreeDiv2>
        <Label>
          <div>
            <input
              onChange={(e) => setMarket(e.target.checked)}
              type="checkbox"
              checked={market}
            />
            <CheckInfo>(선택) 마케팅 수신 동의</CheckInfo>
          </div>
        </Label>
        <Look>보기</Look>
      </AgreeDiv2>
      {use && weak && person && age ? (
        <SignUpDiv2>가입하기</SignUpDiv2>
      ) : (
        <SignUpDiv>가입하기</SignUpDiv>
      )}
    </Wrapper>
  );
}
