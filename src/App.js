// App.js
import React from 'react';
import Header from './components/js/header';
import Searchform from './components/js/SearchBar';
import PopularDestinations from './components/js/PopularDestinations';
import GreatDeals from './components/js/Deals';
import FlightResults from './components/js/FlightResults';
import Newsletter from './components/js/Newsletter';
import Footer from './components/js/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Searchform />
        <PopularDestinations />
        <GreatDeals />
        <Newsletter />
        <FlightResults />
      </main>
      <Footer />
    </div>
  );
}

export default App;