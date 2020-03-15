import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Collapse = styled.div.attrs({
  className: "collapse navbar-collapse"
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto"
})``;

const Logout = styled.div.attrs({
  className: "navbar-nav ml-auto"
})`type`;

const Item = styled.div.attrs({
  className: "collapse navbar-collapse"
})``;

class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="navbar-brand">
          My Website
        </Link>
        <Collapse>
          <List>
            <Item>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </Item>
            <Item>
              <Link to="/info" className="nav-link">
                Information
              </Link>
            </Item>
            <Item>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </Item>
          </List>
          <Logout>
            <Item>
              <Link to="/login" className="nav-link">
                Log Out
              </Link>
            </Item>
          </Logout>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Links;
