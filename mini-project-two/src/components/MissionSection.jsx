import './MissionSection.css';

// Static content section — no props, no state. Purely presentational,
// which is why it's simpler than Navbar/ListGroup: nothing here changes
// after the initial render.
function MissionSection() {
  return (
    <section className="mission">
      <div className="mission-content">
        {/* Small label above the headline — sets context before the
            reader hits the bigger claim in the h2 */}
        <p className="mission-eyebrow">Why Lease Lens</p>

        {/* Main claim of the section — the "hook" */}
        <h2 className="mission-headline">
          The leasing tour is a sales pitch. It shouldn't be your only source of truth.
        </h2>

        {/* Problem statement — explains what's wrong with the status quo
            before mission-after explains how this product fixes it */}
        <p className="mission-body">
          Leasing offices show you the model unit, not the one you'll actually
          live in. Staff are trained to highlight the pool and skip the thin
          walls, the slow maintenance, the parking that's never quite available.
          Renters walk into leases blind, armed with nothing but a polished pitch.
        </p>

        {/* Resolution — pivots from problem to what Lease Lens offers.
            Styled differently in CSS (bold, brighter color) to read as
            the section's payoff line */}
        <p className="mission-after">
          Lease Lens gives you the other side of the story — real notes, photos,
          and verdicts from renters who toured before you. Find your next home,
          together.
        </p>
      </div>
    </section>
  );
}

export default MissionSection;