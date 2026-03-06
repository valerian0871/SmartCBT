import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, TimerReset, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg-glow"></div>
      <div className="hero-grid-overlay"></div>

      <div className="container hero-grid">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="badge">
            <Sparkles size={16} />
            Modern CBT Practice Experience
          </span>

          <h1>
            Prepare for exams with a platform that feels
            <span className="highlight"> serious, fast, and smart</span>
          </h1>

          <p>
            Build confidence with realistic practice sessions, timed mock exams,
            instant scoring, detailed review, and performance insights designed
            to help learners improve deliberately.
          </p>

         <div className="hero-actions">
  <Link to="/exam" className="primary-btn">
    Start Free Practice
  </Link>
  <a href="#features" className="secondary-btn">
    Explore Platform
  </a>
</div>

          <div className="hero-trust">
            <div className="trust-chip">
              <TimerReset size={16} />
              Timed CBT Simulation
            </div>
            <div className="trust-chip">
              <ShieldCheck size={16} />
              Instant Results
            </div>
            <div className="trust-chip">
              <TrendingUp size={16} />
              Performance Tracking
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <div className="hero-main-card glass-card">
            <div className="hero-card-top">
              <span>Live Mock Interface</span>
              <strong>Time Left: 18:24</strong>
            </div>

            <div className="hero-question-card">
              <p className="mock-label">Question 12 of 40</p>
              <h3>
                Which of the following is commonly used for building user
                interfaces in web applications?
              </h3>

              <div className="mock-options">
                <div className="mock-option">A. NumPy</div>
                <div className="mock-option active">B. React</div>
                <div className="mock-option">C. PostgreSQL</div>
                <div className="mock-option">D. Django ORM</div>
              </div>
            </div>

            <div className="hero-card-bottom">
              <button className="mini-btn">Previous</button>
              <button className="mini-btn primary-mini">Next Question</button>
            </div>
          </div>

          <motion.div
            className="floating-card floating-one glass-card-dark"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Practice Score</span>
            <strong>82%</strong>
          </motion.div>

          <motion.div
            className="floating-card floating-two glass-card-dark"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Questions Solved</span>
            <strong>1,240+</strong>
          </motion.div>

          <motion.div
            className="floating-card floating-three glass-card-dark"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Readiness</span>
            <strong>High</strong>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}