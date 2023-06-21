import React from 'react';
import Login from './component/Login';
import Header from './component/Header';
import Embark from './component/Embark';
import Feature from './component/Feature';
import Services from './component/Services';
import Stories from './component/Stories';
import Popular from './component/Popular';
import Revo from './component/Revo';
import Footer from './component/Footer';
import './style.css';

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Embark />
        <Feature />
        <Services />
        <Stories />
        <Popular />
        <Revo />
        <Footer />
        {/* <Login /> */}
      </div>
    </div>
  );
};

export default App;
