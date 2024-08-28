import React from 'react';
import "..//css/destination.css"

// Add the path to your image
import ParisImage from '../../assets/Paris.jpg';
import RomeImage from '../../assets/Rome.jpg';
import BangkokImage from '../../assets/Bangkok.jpg';
import tokyoimg  from '../../assets/tokyo.jpg';
import bengaluru from '../../assets/Bengaluru.jpeg'
import chennai from '../../assets/chennai.jpg'
import hyderabad from '../../assets/Hyderabad.jpg'
import salem from '../../assets/Salem.jpg'

// Add data for the destination
function PopularDestinations() {
  const destinations = [
    { name: 'Paris', image: ParisImage, description: 'The City of Light' },
    { name: 'Rome', image: RomeImage, description: 'The Eternal City' },
    { name: 'Bangkok', image: BangkokImage, description: 'The City of Angels' },
    { name: 'Bengaluru, India', image: bengaluru, description: 'A vibrant city known for its tech industry, pleasant climate, and diverse culture.' },
    { name: 'Chennai, India', image: chennai, description: 'A bustling metropolis with rich cultural heritage, beautiful beaches, and a thriving arts scene.' },
    { name: 'Hyderabad, India', image: hyderabad, description: 'Famous for its historic sites, including the Charminar and its rich culinary traditions.' },
    { name: 'Salem, India', image: salem, description: 'Known for its textile industry, picturesque landscapes, and cultural festivals.' },
    { name: 'Tokyo, Japan', image: tokyoimg, description: 'A bustling metropolis blending traditional temples with futuristic technology and vibrant street life.' },
  ];
  

  return (
    <section className="popular-destinations">
      <h2>Popular Destinations</h2>
      <div className="destinations">
        {destinations.map((destination, index) => (
          <div key={index} className="destination">
          <img 
            src={destination.image} alt={destination.name} className="destination-image"  // Use a CSS class for styling
          />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;
