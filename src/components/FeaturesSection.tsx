import FeatureCard from "./FeatureCard";
import SectionReveal from "./SectionReveal";
import {
  Clock3,
  Trophy,
  BarChart3,
  Laptop2,
  BookOpenCheck,
  ClipboardCheck,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="container">
        <SectionReveal>
          <div className="section-heading">
            <span className="badge">Why Learners Use It</span>
            <h2>Everything you need for effective CBT preparation</h2>
            <p>
              Train like it is the real exam, track your progress, and improve
              with a clean and focused study experience.
            </p>
          </div>
        </SectionReveal>

        <div className="feature-grid">
          <SectionReveal delay={0.05}>
            <FeatureCard
              icon={Clock3}
              title="Timed Exam Practice"
              description="Simulate real CBT conditions with countdown timers and realistic question flow."
            />
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <FeatureCard
              icon={Trophy}
              title="Instant Scoring"
              description="Get immediate results after each test attempt and understand your performance quickly."
            />
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <FeatureCard
              icon={BarChart3}
              title="Performance Tracking"
              description="Monitor strengths, weaknesses, and overall improvement over time."
            />
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <FeatureCard
              icon={Laptop2}
              title="Clean User Experience"
              description="Stay focused with an interface designed to reduce distractions and confusion."
            />
          </SectionReveal>

          <SectionReveal delay={0.25}>
            <FeatureCard
              icon={BookOpenCheck}
              title="Subject-Based Practice"
              description="Organize practice by subjects, topics, or exam type for better preparation."
            />
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <FeatureCard
              icon={ClipboardCheck}
              title="Detailed Review"
              description="Go back through completed tests to review correct answers and learn from mistakes."
            />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}