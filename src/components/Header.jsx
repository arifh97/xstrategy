import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.png'

export default class Header extends Component {
  render() {
    return (
      <header className='heading'>
        <Container>
          <Row>
            <Col md="3">
              <a href="/" className="site-logo">
                <img src={Logo} alt="" />
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}
