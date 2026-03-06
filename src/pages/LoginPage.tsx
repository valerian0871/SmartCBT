import { Link, useNavigate } from "react-router-dom";
import { LockKeyhole, Mail, ArrowLeft } from "lucide-react";
import "../styles/auth.css";

export default function LoginPage() {
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    navigate("/admin");
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
            <span className="auth-badge">Welcome Back</span>
            <h1>Login to SmartPrep</h1>
            <p>
              Access your practice dashboard, continue exams, and monitor your
              progress from one place.
            </p>

            <div className="auth-feature-list">
              <div className="auth-feature-item">Track exam performance</div>
              <div className="auth-feature-item">Resume practice sessions</div>
              <div className="auth-feature-item">Review results instantly</div>
            </div>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-card-header">
            <h2>Login</h2>
            <p>Enter your details to continue</p>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
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
                <input type="password" placeholder="Enter password" required />
              </div>
            </label>

            <button type="submit" className="auth-submit-btn">
              Login
            </button>
          </form>

          <p className="auth-switch-text">
            Don’t have an account? <Link to="/signup">Create one</Link>
          </p>
        </div>
      </div>
    </main>
  );
}