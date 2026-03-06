import {
  GraduationCap,
  FileText,
  School,
  Award,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import SectionReveal from "../components/SectionReveal";
import "../styles/home.css";

function CategoriesSection() {
  return (
    <section className="categories-section" id="categories">
      <div className="container">
        <SectionReveal>
          <div className="section-heading left">
            <span className="badge">Exam Categories</span>
            <h2>Prepare across multiple exam formats</h2>
            <p>
              Practice with realistic question flows for university entrance,
              aptitude tests, professional screening, and custom mock exams.
            </p>
          </div>
        </SectionReveal>

        <div className="categories-grid">
          <SectionReveal delay={0.05}>
            <div className="category-card glass-card">
              <div className="category-icon">
                <GraduationCap size={28} />
              </div>
              <h3>UTME / JAMB</h3>
              <p>Timed practice sessions with subject combinations and review mode.</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="category-card glass-card">
              <div className="category-icon">
                <School size={28} />
              </div>
              <h3>WAEC / NECO</h3>
              <p>Topic-based preparation with performance-focused mock testing.</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="category-card glass-card">
              <div className="category-icon">
                <FileText size={28} />
              </div>
              <h3>Post-UTME</h3>
              <p>School-specific CBT practice to build speed and exam confidence.</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="category-card glass-card">
              <div className="category-icon">
                <Award size={28} />
              </div>
              <h3>Scholarship Tests</h3>
              <p>Sharpen reasoning, speed, and accuracy under timed conditions.</p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function ResultsShowcase() {
  return (
    <section className="results-showcase">
      <div className="container results-grid">
        <SectionReveal>
          <div className="results-text">
            <span className="badge">Performance Insights</span>
            <h2>See progress clearly after every test</h2>
            <p>
              Your platform should not just ask questions. It should help users
              understand where they are weak, where they are improving, and how
              close they are to exam readiness.
            </p>

            <ul className="results-list">
              <li>
                <CheckCircle2 size={18} />
                Instant score breakdown by subject
              </li>
              <li>
                <CheckCircle2 size={18} />
                Question review after submission
              </li>
              <li>
                <CheckCircle2 size={18} />
                Progress trend tracking over time
              </li>
              <li>
                <CheckCircle2 size={18} />
                Weak-topic identification for focused improvement
              </li>
            </ul>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="results-card">
            <div className="score-panel glass-panel">
              <div className="score-top">
                <span>Mock Test Result</span>
                <strong>82%</strong>
              </div>

              <div className="progress-group">
                <label>Mathematics</label>
                <div className="progress-bar">
                  <div className="progress-fill w80"></div>
                </div>
              </div>

              <div className="progress-group">
                <label>English</label>
                <div className="progress-bar">
                  <div className="progress-fill w90"></div>
                </div>
              </div>

              <div className="progress-group">
                <label>Physics</label>
                <div className="progress-bar">
                  <div className="progress-fill w70"></div>
                </div>
              </div>

              <div className="progress-group">
                <label>Chemistry</label>
                <div className="progress-bar">
                  <div className="progress-fill w85"></div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <SectionReveal>
          <div className="section-heading">
            <span className="badge">Student Experience</span>
            <h2>What makes the platform feel effective</h2>
            <p>
              A strong CBT platform should feel fast, clear, focused, and
              confidence-building from the first click.
            </p>
          </div>
        </SectionReveal>

        <div className="testimonials-grid">
          <SectionReveal delay={0.05}>
            <div className="testimonial-card glass-card">
              <div className="quote-mark">“</div>
              <p>
                The interface feels close to a real exam environment, which makes
                practice more serious and useful.
              </p>
              <h4>Exam Candidate</h4>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="testimonial-card glass-card">
              <div className="quote-mark">“</div>
              <p>
                I like how the layout stays clean while still showing important
                stats and actions clearly.
              </p>
              <h4>CBT Learner</h4>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="testimonial-card glass-card">
              <div className="quote-mark">“</div>
              <p>
                The result review and feedback style makes it easier to learn
                from mistakes instead of just seeing a score.
              </p>
              <h4>Practice User</h4>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <ResultsShowcase />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}