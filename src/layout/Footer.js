import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <Container
      fluid
      tag='footer'
      className='text-center bg-info text-white text-uppercase fixed-bottom p-3'
    >
      &copy; 2020 | App by Koushith
    </Container>
  );
};

export default Footer;
