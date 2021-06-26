import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='section position-relative'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className='pr-lg-5'>
              <p className='text-uppercase text-primary font-weight-medium f-14 mb-4'>
                Pontificia Universidad Católica del Ecuador
              </p>
              <h1 className='mb-4 font-weight-normal line-height-1_4'>
                Tickets {''}
                <span className='text-primary font-weight-medium'>
                  Programación Avanzada
                </span>
              </h1>
              <p className='text-muted mb-4 pb-2'>
                Tickets PA es un sistema que permite llevar un control efeciente
                de las ordenes de trabajo de una empresa. Este proyecto esta
                orientado a una empresa dedicada a dar soluciones gráficas
              </p>
              <Link href='/login'>
                <a className='btn btn-warning'>
                  Ingresar al Sistema{' '}
                  <span className='ml-2 right-icon'>&#8594;</span>
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className='mt-5 mt-lg-0'>
              <img
                src='https://i.ibb.co/mc47GQb/banner-thumb.png'
                alt=''
                className='img-fluid mx-auto d-block'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
