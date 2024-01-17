import { styled } from "styled-components";
import Center from "./Center";

const StyledFooter = styled.footer`
  background-color: #222;
  margin: 20px 0 0 0;
`;
const Text = styled.p`
  color: #aaa;
  text-align: center;
  font-size: 0.8rem;
  padding: 10px 0 10px;
`;
export default function Footer() {
  return (
    <StyledFooter>
      <Center>
        <Text>Ecommerce website built with Next.js</Text>
      </Center>
    </StyledFooter>
  );
}
