import React, { useState, useRef, useEffect } from "react";
import runChat from "../components/runChat";
import TextInput from "../components/TextInput";
import { styled } from "styled-components";

const ResponseDiv = styled.div`
  padding: 5px 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  max-width: 80%;
  background-color: #80c793;
  text-align: left;
  align-self: flex-start;
`;

const AskDiv = styled(ResponseDiv)`
  background-color: #d9d9d9;
  align-self: flex-end;
  text-align: right;
`;

export default function Chat() {
  const scrollRef = useRef();
  const [history, setHistory] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChatSubmit = async () => {
    const user = text;
    setText("");
    setLoading(true);
    setHistory([...history, { id: "user", value: user }]);
    const response = await runChat(user);
    setLoading(false);
    setHistory((prev) => {
      return [...prev, { id: "ai", value: response }];
    });
  };

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  return (
    <div
      style={{
        boxSizing: "border-box",
        height: "100vh",
        paddingTop: "5%",
        paddingBottom: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          overflowY: "scroll",
          paddingRight: "20px",
        }}
        ref={scrollRef}
      >
        {history.map((dialogue) => {
          return dialogue?.id === "user" ? (
            <AskDiv>
              <p>{dialogue.value}</p>
            </AskDiv>
          ) : (
            <ResponseDiv>
              <p>{dialogue.value}</p>
            </ResponseDiv>
          );
        })}
        {loading && (
          <ResponseDiv>
            <p>...</p>
          </ResponseDiv>
        )}
      </div>
      <div
        style={{
          marginTop: "auto",
          width: "400px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          value={text}
          setValue={(value) => {
            setText(value);
          }}
          style={{ border: "1px solid black" }}
          placeholder="Ai에게 식단 조언을 받아 보세요"
        ></TextInput>
        <button
          style={{
            width: "100px",
            marginTop: "20px",
            border: "none",
            borderRadius: 10,
            backgroundColor: "#80c793",
          }}
          onClick={handleChatSubmit}
          disabled={text === "" || loading}
        >
          대화하기
        </button>
      </div>
    </div>
  );
}
