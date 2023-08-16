import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import './App.css';

import HomePage from './pages/homepage/Homepage';
import BookingPage from './pages/bookingPage/BookingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Use element prop */}
      <Route path="/booking" element={<BookingPage />} /> {/* Use element prop */}
    </Routes>
  );
}

export default App;
