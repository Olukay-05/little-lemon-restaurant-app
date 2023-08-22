
import React, { useReducer, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import BookingForm from '../../components/form/BookingForm';



function BookingPage() {

  const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = (s * a) % m) / m;
  };

  const fetchAPI = date => {
    // ... your fetchAPI implementation here ...
    
  
    let result = [];
    let random = seededRandom(date.getDate());
  
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
  
    return result;
  };

 
  const submitAPI = function(formData) {
    return true;
};

const initialState = {availableTimes:  fetchAPI(new Date())}
const [state, dispatch] = useReducer(updateTimes, initialState);

function updateTimes(state, date) {
    return {availableTimes: fetchAPI(new Date(date))}
}

const navigate = useNavigate();

function submitForm (formData) {
  const savedFormData = localStorage.getItem('formData');

    if (submitAPI(formData) && savedFormData) {
        navigate("/confirmation");
    }
}

useEffect(() => {
  localStorage.setItem('formData', JSON.stringify(state.formData));
}, [state.formData]);

  return (
    <div>
      <BookingForm availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>
    </div>
  );
}

export default BookingPage;