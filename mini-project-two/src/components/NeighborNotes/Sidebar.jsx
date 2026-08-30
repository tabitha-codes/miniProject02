// NOTE: this file doesn't import NeighborNotes.css itself — it relies on
// NeighborNotes.jsx having already imported it. Works today since Sidebar
// is only ever rendered as NeighborNotes' child, but would silently lose
// all styling if rendered anywhere else. Safer to import it here directly.

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Filter list — "All posts" hardcoded as active, same pattern as
          the secondnav buttons in NeighborNotes.jsx. These are plain <li>
          elements with no tabIndex/onClick/onKeyDown — not keyboard
          accessible and don't currently filter anything. */}
      <div className="sidebar-section">
        <div className="sidebar-title">Filter by</div>
        <ul className="filter-list">
          <li className="active">All posts</li>
          <li>Near me</li>
          <li>Most liked</li>
          <li>Red flags only</li>
          <li>Signed leases</li>
          <li>This week</li>
        </ul>
      </div>

      {/* Static trending-neighborhoods data — hardcoded directly in JSX,
          not pulled from realityChecks.json or any other data source */}
      <div className="sidebar-section">
        <div className="sidebar-title">Trending neighborhoods</div>
        <ul className="trending-list">
          <li><span>Wicker Park</span><span className="count">34 check-ins</span></li>
          <li><span>Logan Square</span><span className="count">28 check-ins</span></li>
          <li><span>Lakeview</span><span className="count">22 check-ins</span></li>
          <li><span>Pilsen</span><span className="count">19 check-ins</span></li>
          <li><span>River North</span><span className="count">15 check-ins</span></li>
        </ul>
      </div>

      {/* Static recent-activity feed — same as above, hardcoded rather
          than data-driven */}
      <div className="sidebar-section">
        <div className="sidebar-title">Recent activity</div>
        <ul className="activity-list">
          <li>
            <div className="avatar-sm"></div>
            <div className="activity-info">
              <div className="activity-text"><strong>Jordan L.</strong> liked your post</div>
              <div className="activity-time">2m ago</div>
            </div>
          </li>
          <li>
            <div className="avatar-sm"></div>
            <div className="activity-info">
              <div className="activity-text"><strong>Soo-Yeon P.</strong> commented</div>
              <div className="activity-time">14m ago</div>
            </div>
          </li>
          <li>
            <div className="avatar-sm"></div>
            <div className="activity-info">
              <div className="activity-text"><strong>Marcus B.</strong> shared your check</div>
              <div className="activity-time">1h ago</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Static user stats — also hardcoded, not computed from any real data */}
      <div className="sidebar-section">
        <div className="sidebar-title">Your stats</div>
        <div className="stats-grid">
          <div className="stat-tile"><div className="stat-value">8</div><div className="stat-label">Posts</div></div>
          <div className="stat-tile"><div className="stat-value">214</div><div className="stat-label">Likes received</div></div>
          <div className="stat-tile"><div className="stat-value">31</div><div className="stat-label">Saved</div></div>
          <div className="stat-tile"><div className="stat-value">97%</div><div className="stat-label">Helpful votes</div></div>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;