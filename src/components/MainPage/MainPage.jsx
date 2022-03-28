import React from 'react';
import Calendar from '../Calendar/Calendar';
import Lists from '../Lists/Lists';
import Sports from '../Sports/Sports';
import Report from '../Report/Report';

const MainPage = () => {
  return (
    <>
      <Calendar />
      <Lists />
      <Sports />
      <Report />
      <h3>Hello World!!</h3>
    </>
  );
};

export default MainPage;