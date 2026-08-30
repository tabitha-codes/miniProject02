import './NeighborNotes.css';

// Builds a 5-star display: filled stars up to `rating`, outlined after.
// key={i} is fine here — this is a fixed-length, non-reorderable list
// generated fresh each call, unlike a dynamic data-driven list.
function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i key={i} className={i <= rating ? 'bi bi-star-fill' : 'bi bi-star'}></i>
    );
  }
  return stars;
}

// Renders one community review/reality-check post.
// NOTE: no PropTypes on `post` yet — every field below is accessed
// without runtime validation, so a malformed record would fail silently
// or crash without a clear dev-time warning pointing at the cause.
function RealityCheckCard({ post }) {
  return (
    <div className="card mb-3 user-card">
      {/* Placeholder — literal "Hero photo" text, not an actual image yet */}
      <div className="card-photo">Hero photo</div>
      <div className="card-body">

        <div className="user-row">
          <div className="avatar"></div> {/* empty placeholder — no image/initials yet */}
          <div className="user-name">{post.author}</div>
          <div className="post-time">{post.postedAgo}</div>
        </div>

        <div className="property-info">
          <span className="property-name">{post.propertyName}</span>
          <span className="property-location">{post.propertyLocation}</span>
        </div>

        <div className="rating-row">
          <span className="stars">{renderStars(post.rating)}</span>
          <span className="sign-badge">Would I sign? {post.wouldSign}</span>
        </div>

        {/* Pros and cons rendered as separate tag rows — index used as key
            since these are short arrays tied to one post, not reordered */}
        <div className="tags-row">
          {post.pros.map((item, i) => (
            <span key={i} className="tag tag-pro">
              <i className="bi bi-hand-thumbs-up-fill"></i> {item}
            </span>
          ))}
        </div>
        <div className="tags-row">
          {post.cons.map((item, i) => (
            <span key={i} className="tag tag-con">
              <i className="bi bi-hand-thumbs-down-fill"></i> {item}
            </span>
          ))}
        </div>

        <div className="engagement-bar"></div>

        {/* Like/comment/share icons display counts but have no onClick —
            not wired up to actually like/comment/share yet */}
        <div className="actions-row">
          <span className="action"><i className="bi bi-heart"></i> {post.likes}</span>
          <span className="action"><i className="bi bi-chat"></i> {post.comments}</span>
          <span className="action"><i className="bi bi-share"></i></span>
        </div>

      </div>
    </div>
  );
}

export default RealityCheckCard;