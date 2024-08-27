import React from 'react';
import "..//css/destination.css"

function PopularDestinations() {
  const destinations = [
    { name: 'Paris', image: 'paris.jpg', description: 'The City of Light' },
    { name: 'Rome', image: 'rome.jpg', description: 'The Eternal City' },
    { name: 'Bangkok', image: 'bangkok.jpg', description: 'The City of Angels' },
  ];

  return (
    <section className="popular-destinations">
      <h2>Popular Destinations</h2>
      <div className="destinations">
        {destinations.map((destination, index) => (
          <div key={index} className="destination">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;