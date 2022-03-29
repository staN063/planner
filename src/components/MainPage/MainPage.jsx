import React from 'react';
import Calendar from '../Calendar/Calendar';
import Lists from '../Lists/Lists';
import Sports from '../Sports/Sports';
import Report from '../Report/Report';

import { Button,Container,Row,Col } from 'react-bootstrap'; 
import './MainPage.scss';


const MainPage = () => {
  return (
    <>
    <Container>
  <Row className='Row-Height '>
    <Col md={{   offset: 3,span: 6 }} className='Border'><Calendar /></Col>
    
  </Row>
  <Row>
    <Col className='Border'><Lists /></Col>
    <Col className='Border'> <Sports /></Col>
    <Col className='Border'><Report /></Col>
  </Row>
</Container>
 
    </>
  );
};

export default MainPage;