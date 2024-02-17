import { styled } from "styled-components";

const InputDiv = styled.div`
  position: relative;
  width: 390px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  color: #000;
  font-size: 18px;
  text-align: center;
`;

export default function TextInput({ title, value, setValue, style, type }) {
  return (
    <InputDiv>
      {!!title && <Text>{title}</Text>}
      <input
        type={!!type ? type : "text"}
        style={{
          width: "280px",
          height: "55px",
          border: "none",
          fontSize: "18px",
          paddingLeft: "10px",
          ...style,
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputDiv>
  );
}
