import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class SectionTitle extends Component {
  render() {
    return (
        <>
            <Row className='text-center'>
            <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
            <div className="section-title">
                <span className={`d-inline-block text-primary mb-3 mb-lg-4 text-uppercase ${this.props.darkClass}`}>{this.props.meta}</span>
                <h2 className={`fw-fw-bolder mb-3 mb-lg-4 ${this.props.darkClass}`}>{this.props.title}</h2>
                <p className={`fw-medium ${this.props.darkClass}`}>{this.props.description}</p>
            </div>
            </Col>
        </Row>
        </>
    )
  }
}
