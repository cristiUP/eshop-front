import { styled } from "styled-components";

const StyledDiv = styled.div`
  max-width: 800px;
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 0 20px;
  flex: 1;
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
