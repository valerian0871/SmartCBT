import { Rocket } from "lucide-react";
import SectionReveal from "./SectionReveal";

export default function CTASection() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <SectionReveal>
          <div className="cta-box">
            <div>
              <span className="badge">
                <Rocket size={16} />
                Get Started
              </span>
              <h2>Take your exam preparation seriously</h2>
              <p>
                Start practicing with a smarter CBT experience built for speed,
                clarity, confidence, and consistent progress.
              </p>
            </div>

            <button className="primary-btn">Start Now</button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}