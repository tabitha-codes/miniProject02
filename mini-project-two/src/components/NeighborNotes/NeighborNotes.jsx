import realityChecks from '../../data/realityChecks.json';
import RealityCheckCard from './RealityCheckCard';
import Sidebar from './Sidebar';
import './NeighborNotes.css';

function NeighborNotes() {
  return (
    <>
      {/* Secondary filter nav — "All" is hardcoded as active via className,
          not driven by state. The other five buttons have no onClick yet,
          so clicking them currently does nothing. */}
      <div className="secondnav">
        <button className="active">All</button>
        <button>Nearby</button>
        <button>Most Liked</button>
        <button>Recent</button>
        <button>Signed</button>
        <button>Red Flags</button>
      </div>

      <div className="page-content">
        <div className="newsfeed">
          <div className="feed-toolbar">
            {/* No onClick yet — button exists but doesn't open a post form */}
            <button className="post-button" type="button">
              <i className="bi bi-plus-lg"></i> Post a Reality Check
            </button>
          </div>

          {/* One RealityCheckCard per record in realityChecks.json.
              key={post.id} — real unique ID from the data, not an index. */}
          {realityChecks.map((post) => (
            <RealityCheckCard key={post.id} post={post} />
          ))}

          {/* No onClick yet — doesn't fetch or reveal more posts */}
          <button className="load-more-button" type="button">
            Load more Reality Checks
          </button>
        </div>

        <Sidebar />
      </div>
    </>
  );
}

export default NeighborNotes;