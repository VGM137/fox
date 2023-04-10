import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import Legals from '../containers/Legals';
import '../assets/styles/App.css';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Home />}/>
        <Route exact path = '/politicas' element={<Legals />}/>
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