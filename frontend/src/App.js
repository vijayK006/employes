import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import View from './Pages/View';
import Edit from './Pages/Edit';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/View" element={<View/>}/>
          <Route path="/Edit/:id" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
