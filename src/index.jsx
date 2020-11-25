import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

import { home } from './texts/homeTexts.js';
import Header from './components/Header/header.jsx';
import HomepageMain from './pages/HomepageMain/homepage.jsx';
import Footer from './components/Footer/index.jsx';
import Navbar from './components/Navbar/navbar.jsx';

const App = () => {
  return (
    <>
      <Navbar />

      <Header />

      <HomepageMain />

      <Footer copyrightText={home.footerCopyright} links={home.footerLinks} />
    </>
  );
};

render(<App />, document.querySelector('#app'));
