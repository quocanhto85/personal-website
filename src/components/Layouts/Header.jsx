import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Links from "./Links";

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-sm navbar-dark bg-dark"
})``;

class Header extends Component {
  render() {
    return (
      <Nav>
        <Logo />
        <Links />
      </Nav>
    );
  }
}

export default Header;
