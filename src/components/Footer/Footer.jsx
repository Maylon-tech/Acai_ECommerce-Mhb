import React from 'react'
import Logo from '../../assets/images/res-logo.png'
import '../../styles/Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="logo footer-logo text-start">
              <img src={Logo} alt="" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore a 
                debitis obcaecati tenetur praesentium optio neque 
                corporis aperiam dignissimos et!
              </p>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer-title'>Delivery Time</h5>
            <ListGroup className='delivery_time-list'>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00 - 11:00</p>
              </ListGroupItem>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer-title'>Contact</h5>
            <ListGroup className='delivery_time-list'>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                Location: Brasilia SP. Brazil.
              </ListGroupItem>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Phone: 1433 667 44556</span>
              </ListGroupItem>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer-title'>NewsLetter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your Email' />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright_text'>
              Copyright  -  2023, website made by Nemoto Mailon. All Rights Reserved.
            </p>
          </Col>
          <Col lg='6' md='6'>
            <div className="social_links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>Follow: </p>
              <span>
                <Link to="/">
                <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="/">
                <i className="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="/">
                <i className="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="/">
                <i className="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer 