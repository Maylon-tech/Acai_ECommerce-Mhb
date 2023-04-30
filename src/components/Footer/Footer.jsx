import React from 'react'
import Logo from '../../assets/images/res-logo.png'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="logo">
              <img src={Logo} alt="" />
              <h5>Tasty Treat</h5>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'></Col>

          <Col lg='3' md='4' sm='6'></Col>

          <Col lg='3' md='4' sm='6'></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer