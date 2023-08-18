import { Helmet } from "react-helmet-async";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function MainWrapper({ children }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <StyledDiv>{children}</StyledDiv>
    </>
  );
}
