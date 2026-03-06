import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div className="feature-card glass-card">
      <div className="feature-icon">
        <Icon size={26} strokeWidth={2.2} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}