import React, { useState } from "react";
import runChat from "../components/runChat";
import TextInput from "../components/TextInput";

export default function Chat() {
  const [history, setHistory] = useState([]);
  const [text, setText] = useState("");

  const handleChatSubmit = async () => {
    const user = text;
    setText("");
    console.log(user);
    setHistory([...history, { id: "user", value: user }]);
    const response = await runChat(user);
    setHistory((prev) => {
      return [...prev, { id: "ai", value: response }];
    });
  };

  return (
    <div>
      <div>
        <ul>
          {history.map((dialogue) => {
            return <li>{dialogue.value}</li>;
          })}
        </ul>
      </div>
      <div
        style={{
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
        ></TextInput>
        <button
          style={{ width: "80px", marginTop: "20px" }}
          onClick={handleChatSubmit}
        >
          대화하기
        </button>
      </div>
    </div>
  );
}
