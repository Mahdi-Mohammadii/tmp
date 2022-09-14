import styled from "styled-components";

export const Ul = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 575px) {
    display: none;
  }
`;

export const Li = styled.li`
  height: min-content;
`;

export const A = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

export const Nav = styled.nav`
  padding: 16px 8%;
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`;
export const Header = styled.header`
  width: 100%;
  background-color: #1f2e35;
`;

export const Button = styled.button`
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const StatusButton = styled(Button)`
  background-color: #0086d6;
  padding: 10px 20px;
  @media screen and (max-width: 575px) {
    display: none;
  }
`;
