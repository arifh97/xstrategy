import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import weimg from '../assets/img/what-we-do.png'
import SectionTitle from './SectionTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


export default class WhatWeDo extends Component {
  render() {
    return (
      <section className='section-padding whatWeDo bg-white'>
        <Container>
          <SectionTitle
            darkClass="light"
            meta="Our Mission"
            title="What We Do"
            description="The XSTRATEGY team provides trusted guidance and advice to Web3 Founders and C-Suite Executives working in the gaming and metaverse industries." 
          />
          <Row className='align-items-center'>
            <Col lg="6" className='text-center'>
              <div className="whatWeDo-img">
                <img src={weimg} alt="" />
              </div>
            </Col>
            <Col>
              <div className="whatWeDo-content">
                <h3 className='mb-4'>Enabling Next-Generation Crypto Payments</h3>
                <p className='mb-3'>We are subject matter experts in delivering compliant payments software and solutions that power the global web3 gaming and metaverse digital economies.</p>
                <p>Provisioning of seamless fiat and crypto on-off ramps, digital asset payment, and fraud prevention for the Blockchain.</p>
                <Button variant="outline-primary" className='mt-4 mt-lg-5'>
                  Learn More <FontAwesomeIcon icon={faAngleDoubleRight} />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
