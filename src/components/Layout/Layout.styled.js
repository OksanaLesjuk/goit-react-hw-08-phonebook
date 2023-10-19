
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom:none;
  box-shadow: 0 2px 0 0 darkgray;
  /* > nav {
    display: flex;
  } */
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 24px;

  &.active {
    
    background-color: gray;
  }
`;
export const NavLinkSign = styled(NavLink)`
padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 24px;
  background-color: gray;
`