import { useState } from "react";
import users from "../data/users.json";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Bail out of rendering entirely when closed — simpler and more
  // explicit than hiding with CSS, and matches how Bootstrap's own
  // data-bs-toggle would behave, without needing its JS bundle.
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); // stop native form submit / page reload

    // Mock "auth" — find a user whose email AND password match exactly.
    // Real apps never compare plaintext passwords client-side like this;
    // this only exists to simulate a login flow for the portfolio demo.
    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      setError("");
      onLoginSuccess(matchedUser); // tell App who logged in
      setEmail("");
      setPassword("");
    } else {
      setError("Email or password is incorrect.");
    }
  };

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      {/* stopPropagation so clicking inside the form doesn't also
          trigger the backdrop's onClose */}
      <div className="modal-dialog-custom" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-custom">
          <h5>Log in</h5>
          <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">Email</label>
            <input
              type="text"
              id="loginEmail"
              className="form-control"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <input
              type="password"
              id="loginPassword"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="btn btn-dark w-100">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;