import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Page404 from './pages/404';


const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
