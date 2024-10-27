import { styled } from "styled-components";

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function MainWrapper({ children }) {
  return (
    <>
      <StyledDiv>{children}</StyledDiv>
    </>
  );
}
