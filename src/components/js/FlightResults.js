import React from 'react';
import "../css/results.css";

// Add flight data
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
    {
      airline: 'Vistara',
      departure: '13:00',
      arrival: '15:00',
      price: '₹5,500',
    },
    {
      airline: 'GoAir',
      departure: '14:00',
      arrival: '16:00',
      price: '₹4,800',
    },
    {
      airline: 'AirAsia',
      departure: '15:00',
      arrival: '17:00',
      price: '₹4,700',
    },
    {
      airline: 'Jet Airways',
      departure: '16:00',
      arrival: '18:00',
      price: '₹5,300',
    },
    {
      airline: 'Air India',
      departure: '17:00',
      arrival: '19:00',
      price: '₹5,100',
    },
    {
      airline: 'IndiGo',
      departure: '18:00',
      arrival: '20:00',
      price: '₹4,600',
    },
  ];

  return (
    <section className="flight-results">
      <h2>Flight Results</h2>
      {/* Flight data set */}
      <div className="flights">
        {flights.length > 0 ? (
          flights.map((flight, index) => (
            <div key={index} className="flight">
              <h3>{flight.airline}</h3>
              <p>Departure: {flight.departure}</p>
              <p>Arrival: {flight.arrival}</p>
              <p>Price: {flight.price}</p>
              <button>Book Now</button>
            </div>
          ))
        ) : (
          <p>No flights found</p>
        )}
      </div>
    </section>
  );
}

export default FlightResults;
