import apartments from '../data/apartments.json';
import './ExploreCities.css';

function ExploreCities() {
  // Group apartments by city and count them — derived from real data,
  // not hardcoded, so this number is never out of sync with apartments.json.
  const cityCounts = apartments.reduce((counts, apt) => {
    counts[apt.city] = (counts[apt.city] || 0) + 1;
    return counts;
  }, {});

  // Turn { Dallas: 4, Chicago: 4 } into an array so we can .map() it below —
  // Object.entries gives us [ ["Dallas", 4], ["Chicago", 4] ] pairs.
  const cities = Object.entries(cityCounts);

  return (
    <section className="explore-cities">
      <h2 className="explore-cities-heading">Explore apartments in our cities</h2>

      <div className="city-grid">
        {cities.map(([cityName, count]) => (
          <div className="city-card" key={cityName}>
            <div className="city-name">{cityName}</div>
            <div className="city-count">
              {count} apartment{count !== 1 ? 's' : ''}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreCities;