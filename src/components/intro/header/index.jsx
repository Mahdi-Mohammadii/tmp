import React from "react";
import { MENU } from "../../../data/header";
import { Ul, Li, A, Header, Nav, StatusButton } from "./style";
import Bar from "./bar/index";

const Menu = () => {
  return (
    <Header>
      <Nav>
        <img src="/assets/logo.svg" alt="logo" />
        <Ul>
          {MENU.map((item) => {
            return (
              <Li key={item.id}>
                <A href={item.link}>{item.txt}</A>
              </Li>
            );
          })}
        </Ul>
        <StatusButton>Login</StatusButton>
        <Bar />
      </Nav>
    </Header>
  );
};

export default Menu;
