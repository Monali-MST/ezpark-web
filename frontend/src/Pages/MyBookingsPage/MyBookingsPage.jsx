import React, { useState } from 'react';
import './MyBookingPage.css';

// import axios from 'axios';

const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/booking-history')
//       .then((response) => {
//         setBookingHistory(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

  return (
    <div className="booking-history">
      <h1>Booking History</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Duration</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {bookingHistory.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.date}</td>
              <td>{booking.timeIn}</td>
              <td>{booking.timeOut}</td>
              <td>{booking.duration}</td>
              <td>{booking.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
