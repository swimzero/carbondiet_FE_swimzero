import { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import axios from "axios";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding-top: 10vh;
`;

const LoginDiv = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 550px;
  height: 550px;
  padding-top: 120px;
  padding-bottom: 100px;
  margin: 50px auto;
  border-radius: 100%;
  background-color: #d9d9d9;
`;

const SubmitBtn = styled.button`
  border: none;
  display: flex;
  align-items: center;
  margin: 50px auto;
  width: 220px;
  height: 55px;
  border-radius: 20px;
  background-color: white;

  :hover {
    cursor: pointer;
  }
`;

export default function Login() {
  const [loginForm, setLoginForm] = useState({ id: "", pw: "" });

  const handleSubmit = () => {
    axios
      .post("/login", { userid: loginForm.id, password: loginForm.pw })
      .catch((res) => {
        alert("로그인에 실패했습니다.");
      })
      .then((res) => {});
  };

  return (
    <Wrapper>
      <span style={{ margin: "20px" }}>함께 지구를 지키세요!</span>
      <LoginDiv>
        <span>LOGIN</span>
        <div
          style={{
            marginTop: "20px",
          }}
        >
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
            title="Password"
            type="password"
            value={loginForm.pw}
            setValue={(value) => {
              setLoginForm((prev) => {
                return { ...prev, pw: value };
              });
            }}
          />
          <SubmitBtn onClick={handleSubmit}>
            <span
              style={{
                margin: "auto",
                fontSize: "18px",
                width: "100%",
                lineHeight: "100%",
              }}
            >
              Login
            </span>
          </SubmitBtn>
        </div>
      </LoginDiv>
      <div>
        <span>회원가입</span>
      </div>
    </Wrapper>
  );
}
