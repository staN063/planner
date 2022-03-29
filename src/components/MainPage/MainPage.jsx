import React from 'react';
import Calendar from '../Calendar/Calendar';
import Lists from '../Lists/Lists';
import Sports from '../Sports/Sports';
import Report from '../Report/Report';

import { Button } from 'react-bootstrap'; 
import './MainPage.scss';


const MainPage = () => {
  return (
    <>
    <Button className="App" >Hey i'm Bootstrap</Button>
      <Calendar />
      <Lists />
      <Sports />
      <Report />
      <h3>Hello World!!</h3>
    </>
  );
};

export default MainPage;