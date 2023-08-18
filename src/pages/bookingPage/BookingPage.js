import React, { useState, useReducer } from 'react'

import BookingForm from '../../components/form/BookingForm'

function BookingPage() {

  const [availableTimes, dispatch] = useReducer(updateTimesReducer, initializeTimes());

  // Create a function to update available times based on the selected date
  function updateTimesReducer(state, action) {
    if (action.type === 'UPDATE_TIMES') {
      // Here you can implement logic to update available times based on the selected date
      // For now, we'll return the same available times
      return initializeTimes();
    }
    return state;
  }

  // Create a function to initialize the available times
  function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  )
}

export default BookingPage