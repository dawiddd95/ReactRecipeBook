import React from 'react'

import './HomePage.scss';

import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';

const HomePage = () => (
   <div className='homePage'>
      <Navbar />
      <Main />
   </div>
);

export default HomePage;