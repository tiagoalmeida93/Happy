import React from 'react';

import './styles/pages/landing.css'

import logoImg from './images/logo.svg'

function App() {
  return (
    <div id="page-landing">
      <div className="content">
        <img src={logoImg} alt="Happy"/>
      </div>
    </div>
  );
}

export default App;
