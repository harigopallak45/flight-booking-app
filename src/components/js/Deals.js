import React from 'react';
import "../css/deals.css";

// Add the path to your image
import LogoImage from '../../assets/summer.png';
import LastMinuteDealsImage from '../../assets/lastmin.png';
import PackageDealsImage from '../../assets/flight.jpg';

function GreatDeals() {
  const deals = [
    {
      title: 'Summer Sale',
      description: 'Up to 50% off on flights',
      image: LogoImage,
    },
    {
      title: 'Last Minute Deals',
      description: 'Book now and save big',
      image: LastMinuteDealsImage,
    },
    {
      title: 'Package Deals',
      description: 'Flights + Hotels from $500',
      image: PackageDealsImage,
    },
  ];

  return (
    <section className="great-deals">
      <h2>Great Deals</h2>
      <div className="deals">
        {deals.map((deal, index) => (
          <div key={index} className="deal">
            <img src={deal.image} alt={deal.title} />
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GreatDeals;
