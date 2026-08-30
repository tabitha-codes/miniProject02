import { useState } from 'react';
import apartments from '../data/apartments.json';
import './Hero.css';

function Hero() {
  // Controlled input value — drives the live filter below on every keystroke.
  const [query, setQuery] = useState('');

  // Derived, not stored in its own state — recalculated from `query` on
  // every render instead of being copied into a separate piece of state.
  // This means it can never drift out of sync with what's actually typed.
  const filteredApartments = apartments.filter((apt) => {
    const search = query.toLowerCase();
    return (
      apt.city.toLowerCase().includes(search) ||
      apt.neighborhood.toLowerCase().includes(search) ||
      apt.name.toLowerCase().includes(search)
    );
    // NOTE: assumes every apartment record has city/neighborhood/name as
    // strings — confirmed true for the current apartments.json, but a
    // future record missing one of these would throw here at render time.
  });

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-headline">Find apartments. Narrow your list. Never tour blind.</h1>
        <p className="hero-subtext">
          Search apartments in your area, then use Lease Lens to take notes, snap
          photos, and see what other renters found when they toured the same places.
        </p>

        {/* preventDefault stops the browser's native form submission —
            without it, submitting reloads the page and wipes React state
            (this was a real bug in an earlier version of this component) */}
        <form className="hero-search" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter your city or neighborhood"
            aria-label="Search by city or neighborhood" // accessible name, since placeholder text isn't reliably read by screen readers
            value={query}
            onChange={(e) => setQuery(e.target.value)} // updates query on every keystroke — this is what makes the search "live"
          />
          <button type="submit">Search</button>
        </form>

        {/* Decorative step-by-step icons — bi-* classes are Bootstrap Icons */}
        <div className="hero-steps">
          <div className="hero-step">
            <i className="bi bi-search"></i>
            <span>1. Search your area</span>
          </div>
          <div className="hero-step">
            <i className="bi bi-list-check"></i>
            <span>2. Shortlist to tour</span>
          </div>
          <div className="hero-step">
            <i className="bi bi-camera"></i>
            <span>3. Track your tours</span>
          </div>
        </div>
      </div>

      {/* Results only render once the user has typed something — no
          empty results box sitting on the page by default */}
      {query && (
        <div className="hero-results">
          {filteredApartments.length > 0 ? (
            filteredApartments.map((apt) => (
              // key={apt.id} — using the real unique ID from the data,
              // not an index, since apartments.json already has a stable id
              <div key={apt.id} className="hero-result-card">
                <div className="result-name">{apt.name}</div>
                <div className="result-location">{apt.neighborhood}, {apt.city}</div>
                <div className="result-price">${apt.price}/mo</div>
              </div>
            ))
          ) : (
            <p className="hero-no-results">No apartments match "{query}"</p>
          )}
        </div>
      )}
    </section>
  );
}

export default Hero;