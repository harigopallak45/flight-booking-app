import React from 'react';
import "../css/results.css"

function FlightResults() {
  const flights = [
    {
      airline: 'Air India',
      departure: '10:00',
      arrival: '12:00',
      price: '₹5,000',
    },
    {
      airline: 'IndiGo',
      departure: '11:00',
      arrival: '13:00',
      price: '₹4,500',
    },
    {
      airline: 'SpiceJet',
      departure: '12:00',
      arrival: '14:00',
      price: '₹5,200',
    },
  ];

  return (
    <section className="flight-results">
      <h2>Flight Results</h2>
      <div className="flights">
        {flights.map((flight, index) => (
          <div key={index} className="flight">
            <h3>{flight.airline}</h3>
            <p>Departure: {flight.departure}</p>
            <p>Arrival: {flight.arrival}</p>
            <p>Price: {flight.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlightResults;