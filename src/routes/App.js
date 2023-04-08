import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import AboutUs from '../components/AboutUs';
import Brands from '../components/Brands';
import '../assets/styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
  // <HashRouter>
  //   <Routes>
  //     <Route exact path = '/' element={<Home />} />
  //   </Routes>
  // </HashRouter>
  }

export default App