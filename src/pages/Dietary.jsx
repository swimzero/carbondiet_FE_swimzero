import styled from "styled-components";
import UseCalendar from "../components/UseCalander";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Subheader = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 10px;
  text-align: center;
`;

export default function Dietary() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header>Welcome to Your Dietary Page</Header>
        <UseCalendar />
        <Subheader>Stay Healthy with Proper Diet!</Subheader>
      </ContentWrapper>
    </Wrapper>
  );
}
