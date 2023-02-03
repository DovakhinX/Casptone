import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import Confirmation from './Pages/Confirmation/Confirmation';
import { BrowserRouter, Routes, Route } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path='/confirm' element={<Confirmation/>}/>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
