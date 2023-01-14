import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../assets/img/brands/1.png'
import img2 from '../assets/img/brands/2.png'
import img3 from '../assets/img/brands/3.png'
import img4 from '../assets/img/brands/4.png'
import img5 from '../assets/img/brands/5.png'
import badge from '../assets/img/bade-img.svg'

export default class Brands extends Component {
  render() {
    return (
      <section className='brands position-relative'>
        <div className="bg-white brands-inner">
          <Container className='position-relative'>
            <Row className='align-items-center'>
              <Col lg="2">
                <div className="brands-text">
                  <p>Trusted by innovative market leading Web 2.0 and Web 3.0 companies</p>
                </div>
              </Col>
              <Col lg="9">
                <div className="brands-badge position-absolute"><img src={badge} alt="" /></div>
                <div className="brands-imgs d-flex flex-wrap align-items-center">
                  <div className="brands-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="brands-img">
                    <img src={img2} alt="" />
                  </div>
                  <div className="brands-img">
                    <img src={img3} alt="" />
                  </div>
                  <div className="brands-img">
                    <img src={img4} alt="" />
                  </div>
                  <div className="brands-img">
                    <img src={img5} alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    )
  }
}
