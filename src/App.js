import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import './App.css';

import HomePage from './components/homepage/Homepage';
import BookingPage from './components/bookingPage/BookingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Use element prop */}
      <Route path="/booking" element={<BookingPage />} /> {/* Use element prop */}
    </Routes>
  );
}

export default App;
