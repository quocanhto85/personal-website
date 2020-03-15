import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Card,
  CardBody,
  CardGroup,
  Col,
  Row,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  ButtonToggle
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fade: 1 };
  }

  getFaded = () => {
    this.setState({
      fade: 0.8
    });
  };

  getBold = () => {
    this.setState({
      fade: 1
    });
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container style={{ opacity: this.state.fade }}>
          <Card
            className="p-5"
            onMouseEnter={this.getFaded}
            onMouseLeave={this.getBold}
          >
            <CardBody>
              <h1 style={{ textAlign: "center" }}>Sign In</h1>
              <p className="text-muted" style={{ textAlign: "center" }}>
                Sign in to your account
              </p>
              <form name="form">
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-user" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="username"></Input>
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-lock" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="password"></Input>
                </InputGroup>
                <div className="text-center">
                  <ButtonToggle>Log In</ButtonToggle>
                </div>
              </form>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

const background = {
  opacity: "1"
};

export default Login;
