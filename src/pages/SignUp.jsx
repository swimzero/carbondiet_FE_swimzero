import { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10vh;
`;

const SignUpDiv = styled.div`
  width: 400px;
  padding: 40px;
  border-radius: 20px;
  background-color: #00a66b; /* 캘린더의 초록 계열 색상 */
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
  background-color: white;
  color: #00a66b; /* 캘린더의 초록 계열 색상 */
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: #e0e0e0;
  }
`;

export default function SignUp() {
  const [signupForm, setSignupForm] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: "",
    gender: "",
    nickname: "",
  });
  const [isIdAvailable, setIsIdAvailable] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDuplicateCheck = () => {
    // 일단 아이디가 "ㅇㅇ" 일때로 해볼게요
    if (signupForm.id === "ㅇㅇ") {
      setIsIdAvailable(false);
      setErrorMessage("이미 사용 중인 아이디입니다.");
    } else {
      setIsIdAvailable(true);
      setErrorMessage("");
    }
  };

  const handleSubmit = () => {
    if (signupForm.password !== signupForm.confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      console.log(signupForm);
      setErrorMessage("");
    }
  };

  return (
    <Wrapper>
      <SignUpDiv>
        <h2
          style={{ textAlign: "center", marginBottom: "30px", color: "white" }}
        >
          회원가입
        </h2>
        <div>
          <div style={{ display: "flex" }}>
            <TextInput
              title="ID"
              value={signupForm.id}
              setValue={(value) => {
                setSignupForm((prev) => ({ ...prev, id: value }));
                setIsIdAvailable(true);
                setErrorMessage("");
              }}
            />
            {!isIdAvailable && <span>{errorMessage}</span>}
          </div>
          <TextInput
            title="Password"
            type="password"
            value={signupForm.password}
            setValue={(value) =>
              setSignupForm((prev) => ({ ...prev, password: value }))
            }
          />
          <TextInput
            style={{ marginLeft: "10px", textAlign: "left" }}
            title="Confirm Password"
            type="password"
            value={signupForm.confirmPassword}
            setValue={(value) =>
              setSignupForm((prev) => ({ ...prev, confirmPassword: value }))
            }
          />
          <TextInput
            title="Name"
            value={signupForm.name}
            setValue={(value) =>
              setSignupForm((prev) => ({ ...prev, name: value }))
            }
          />
          <TextInput
            title="Gender"
            value={signupForm.gender}
            setValue={(value) =>
              setSignupForm((prev) => ({ ...prev, gender: value }))
            }
          />
          <TextInput
            title="Nickname"
            value={signupForm.nickname}
            setValue={(value) =>
              setSignupForm((prev) => ({ ...prev, nickname: value }))
            }
          />
          <SubmitBtn onClick={handleSubmit}>회원 가입</SubmitBtn>
        </div>
      </SignUpDiv>
    </Wrapper>
  );
}
