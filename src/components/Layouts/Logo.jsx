import React, { Component } from "react";
import logo from "./image/batman.svg";
import styled from "styled-components";

const Wrap = styled.a.attrs({
  className: "navbar-brand",
  href: ""
})``;

class Logo extends Component {
  render() {
    return (
      <Wrap>
        <img src={logo} width="50" height="50" alt=""></img>
      </Wrap>
    );
  }
}

export default Logo;
