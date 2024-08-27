import React from 'react';

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated on latest travel deals and offers</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;