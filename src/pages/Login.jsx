import { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10vh;
`;

const LoginDiv = styled.div`
  width: 400px;
  padding: 40px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const SubmitBtn = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #00a66b; /* 캘린더의 초록 계열 색상 */
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: #007a52; /* 캘린더의 더 진한 초록 계열 색상 */
  }
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SignupButton = styled.span`
  color: #00a66b; /* 캘린더의 초록 계열 색상 */
  cursor: pointer;

  :hover {
    text-decoration: underline;
    color: #007a52; /* 캘린더의 더 진한 초록 계열 색상 */
  }
`;

export default function Login() {
  const [loginForm, setLoginForm] = useState({ id: "", pw: "" });

  const handleSubmit = () => {
    console.log(loginForm.id);
    console.log(loginForm.pw);
  };

  return (
    <Wrapper>
      <LoginDiv>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>로그인</h2>
        <div>
          <TextInput
            title="ID"
            value={loginForm.id}
            setValue={(value) => {
              setLoginForm((prev) => {
                return { ...prev, id: value };
              });
            }}
          />
          <TextInput
            title="비밀번호"
            type="password"
            value={loginForm.pw}
            setValue={(value) => {
              setLoginForm((prev) => {
                return { ...prev, pw: value };
              });
            }}
          />
          <SubmitBtn onClick={handleSubmit}>로그인</SubmitBtn>
        </div>
        <SignupLink>
          아직 계정이 없으신가요? <SignupButton>회원가입</SignupButton>
        </SignupLink>
      </LoginDiv>
    </Wrapper>
  );
}
