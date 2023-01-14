import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Cta from './Cta';
import Logo from '../assets/img/footer-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
  render() {
    return (
      <>
        <Cta />
        <footer className="footer">
          <Container>
            <Row>
              <Col lg="5">
                <a href="/" className="site-logo">
                  <img src={Logo} alt="" />
                </a>
                <p>XSTRATEGY is a Singapore-based web3 management consulting firm specializing in blockchain and cryptocurrency compliance, fintech, digital finance, and payments</p>
              </Col>
              <Col lg="7">
                <Row>
                  <Col md='3'>
                    <div className="footer-item">
                      <h5>Company</h5>
                      <ul>
                        <li><a href="/">About us</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Careers</a></li>
                      </ul>
                    </div>
                  </Col>
                  <Col md='6'>
                    <div className="footer-item ps-md-4 ps-lg-5">
                      <h5>Products</h5>
                      <ul>
                        <li><a href="/">Transaction Gateway</a></li>
                        <li><a href="/">Blockchain Wallet</a></li>
                        <li><a href="/">Crypto Point-of-Sale Device</a></li>
                      </ul>
                    </div>
                  </Col>
                  <Col md='3'>
                    <div className="footer-item">
                      <h5>Services</h5>
                      <ul>
                        <li><a href="/">C-Suite Advisory</a></li>
                        <li><a href="/">Blockchain Banking</a></li>
                        <li><a href="/">Legal Advisory</a></li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="footer-copyright mt-4 pt-4">
                  <Row>
                    <Col md="6">
                      <p>&copy; 2023 XSTRATEGY. All Rights Reserved</p>
                    </Col>
                    <Col md="6">
                      <ul className="social-media d-flex align-items-center justify-content-end">
                        <li>
                          <a href="/" className='social-link'><FontAwesomeIcon icon={faGithub} /></a>
                        </li>
                        <li>
                          <a href="/" className='social-link'><FontAwesomeIcon icon={faTwitter} /></a>
                        </li>
                        <li>
                          <a href="/" className='social-link'><FontAwesomeIcon icon={faFacebookF} /></a>
                        </li>
                        <li>
                          <a href="/" className='social-link'><FontAwesomeIcon icon={faYoutube} /></a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    )
  }
}
