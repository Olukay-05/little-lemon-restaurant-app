// import React, { useState } from 'react';

// function BookingForm({ availableTimes, dispatch }) {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('17:00');
//   const [guests, setGuests] = useState(1);
//   const [occasion, setOccasion] = useState('Birthday');

//   const handleDateChange = (event) => {
//     const newDate = event.target.value;
//     setDate(newDate);
//     dispatch({ type: 'SET_TIMES', date: newDate });
//   };

//   console.log(availableTimes)

//   const handleTimeChange = (event) => {
//     setTime(event.target.value);
//   }

//   const handleGuestsChange = (event) => {
//     setGuests(event.target.value);
//   }

//   const handleOccasionChange = (event) => {
//     setOccasion(event.target.value)
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Reservation Successful!");
//     // You can add further logic here for handling the form submission
//   }

//   return (
//     <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
//       <fieldset>
//         <legend>Book Now</legend>
//         <label htmlFor="res-date">Choose date</label>
//         <input type="date" id="res-date" value={date} onChange={handleDateChange} />
//         <label htmlFor="res-time">Choose time</label>
//         <select id="res-time" value={time} onChange={handleTimeChange}>
//           {availableTimes && availableTimes.map((timeOption) => (
//             <option key={timeOption}> {timeOption} </option>
//           ))}
//         </select>
//         <label htmlFor="guests">Number of guests</label>
//         <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />

//         <label htmlFor="occasion">Occasion</label>
//         <select id="occasion" value={occasion} onChange={handleOccasionChange}>
//           <option>Birthday</option>
//           <option>Anniversary</option>
//         </select>

//         <input type="submit" value="Make Your Reservation" />
//       </fieldset>
//     </form>
//   );
// }

// export default BookingForm;




import React from "react";
import { useState } from "react";



const BookingForm = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")

   const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <h2>Book Now</h2>
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
            </div>
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
