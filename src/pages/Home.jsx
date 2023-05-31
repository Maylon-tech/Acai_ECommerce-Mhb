import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'

import heroImg from '../assets/images/hero.png'
import banner from '../assets/acai banner.jpeg'

import { features } from '../assets/fake-data/features'

import '../styles/Hero-Content.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Helmet title="home">
      <section>
        <Container style={{ border: "1px solid orange"}}>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='hero_title mb-4'>
                  <span>HUNGRY?</span> just wait for food
                  <span>  at your door</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Ad quisquam atque tenetur nisi consequatur et omnis!
                </p>

                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                  <button className='order_btn d-flex align-items-center justify-content-between'>
                    Order Now
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className='all_foods-btn'>
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className='hero_service d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className="shipping_icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No Shipping charge
                  </p>

                  <p className='d-flex align-items-center gap-2'>
                    <span className="shipping_icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero_image">
                <img src={heroImg} alt="heor-img" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <div className="banner-container">
              <img src={banner} alt="banner Home" />
            </div>
          </Row>
        </Container>

        <Container>
          <Row>
            <h1>Novidades</h1>
            <div className="container-feature">
              {
                features.map((feature) => (
                  

                    <div className="card" key={feature.id}>
                      <div className='imageFeature'>
                        <img src={feature.img} alt="img1" />
                      </div>
                      <div>
                        <h2>{feature.title}</h2>
                        <div className="price">
                          <h3>{feature.price}</h3>
                          <span>{feature.descont}</span>
                        </div>
                      </div>
                      <button className='buttonFeature'>Saiba Mais</button>
                    </div>

              
                ))
              }
            </div>
          </Row>

          <Row>
            <h1>sabores Exclusivos</h1>
          </Row>

          <Row>
            <h1>Salgados</h1>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home