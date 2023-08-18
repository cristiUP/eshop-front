import { MoonLoader } from "react-spinners";
import styled from "styled-components";

const Wrapper = styled.div`
  ${(props) =>
    props.$fullWidth
      ? `
    display:block;
    display:flex;
    justify-content:center;
  `
      : `
    border: 5xp solid blue;
  `}
`;

export default function Spinner({ fullWidth }) {
  return (
    <Wrapper $fullWidth={fullWidth}>
      <MoonLoader speedMultiplier={0.7} color={"#1E3A8A"} />
    </Wrapper>
  );
}
