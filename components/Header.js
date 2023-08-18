import Link from "next/link";
import { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import Center from "./Center";
import BarsIcon from "./icons/Bars";
import CartIcon from "./icons/CartIcon";

const StyledHeader = styled.header`
  background-color: #222;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.$navActive
      ? `
display: block;
`
      : `
display: none;
`}
  gap: 15px;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const MobileNavigation = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const MobileCart = styled(Link)`
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 40px;
  gap: 3px;
  color: #aaa;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  z-index: 3;
  span {
    font-size: 0.87rem;
    font-weight: 400;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [navActive, setNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyledNav $navActive={navActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All Products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            {/* <NavLink href={"/account"}>Account</NavLink> */}
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <MobileNavigation>
            <MobileCart href={"/cart"}>
              <CartIcon /> <span>({cartProducts.length})</span>
            </MobileCart>
            <NavButton onClick={() => setNavActive((prev) => !prev)}>
              <BarsIcon />
            </NavButton>
          </MobileNavigation>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
