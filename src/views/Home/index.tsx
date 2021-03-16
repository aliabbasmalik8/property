import React from 'react';
import Sidebar from './sidebar'

import './styles.scss';

function Home() {
  return (
    <div className="home-banner">
      <Sidebar />
      <div className="registration-banner"></div>
    </div>
  )
}

export default Home;
