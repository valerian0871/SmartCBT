import { Link, useNavigate } from "react-router-dom";
import { User, Mail, LockKeyhole, ArrowLeft } from "lucide-react";
import "../styles/auth.css";

export default function SignupPage() {
  const navigate = useNavigate();

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <main className="auth-page">
      <div className="auth-shell">
        <div className="auth-left">
          <Link to="/" className="auth-back-link">
            <ArrowLeft size={18} />
            Back Home
          </Link>

          <div className="auth-brand-box">
            <span className="auth-badge">Get Started</span>
            <h1>Create your SmartPrep account</h1>
            <p>
              Join the platform and start practicing with a modern CBT
              experience built for confidence and speed.
            </p>

            <div className="auth-feature-list">
              <div className="auth-feature-item">Practice timed exams</div>
              <div className="auth-feature-item">Get instant feedback</div>
              <div className="auth-feature-item">Track your progress</div>
            </div>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-card-header">
            <h2>Sign Up</h2>
            <p>Create an account in a few seconds</p>
          </div>

          <form className="auth-form" onSubmit={handleSignup}>
            <label className="auth-label">
              Full Name
              <div className="input-wrap">
                <User size={18} />
                <input type="text" placeholder="Your full name" required />
              </div>
            </label>

            <label className="auth-label">
              Email Address
              <div className="input-wrap">
                <Mail size={18} />
                <input type="email" placeholder="you@example.com" required />
              </div>
            </label>

            <label className="auth-label">
              Password
              <div className="input-wrap">
                <LockKeyhole size={18} />
                <input type="password" placeholder="Create password" required />
              </div>
            </label>

            <button type="submit" className="auth-submit-btn">
              Create Account
            </button>
          </form>

          <p className="auth-switch-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </main>
  );
}