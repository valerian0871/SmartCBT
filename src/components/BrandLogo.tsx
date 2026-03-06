import { motion } from "framer-motion";

type BrandLogoProps = {
  compact?: boolean;
};

export default function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <motion.a
      href="/"
      className="brand-link"
      aria-label="SmartPrep home"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`brand-shell ${compact ? "compact" : ""}`}>
        <motion.div
          className="brand-mark"
          whileHover={{ scale: 1.06, rotate: -3 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
        >
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="brand-svg"
          >
            <defs>
              <linearGradient id="smartprepBrandGradient" x1="6" y1="6" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563EB" />
                <stop offset="0.55" stopColor="#4F46E5" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient id="smartprepInnerGlow" x1="16" y1="14" x2="41" y2="39" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#DBEAFE" />
              </linearGradient>
            </defs>

            <rect x="2" y="2" width="50" height="50" rx="18" fill="url(#smartprepBrandGradient)" />

            <path
              d="M18 17.5C18 14.4624 20.4624 12 23.5 12H31.5C37.299 12 42 16.701 42 22.5C42 28.299 37.299 33 31.5 33H24V42H18V17.5Z"
              fill="url(#smartprepInnerGlow)"
            />

            <path
              d="M24 18H31C33.4853 18 35.5 20.0147 35.5 22.5C35.5 24.9853 33.4853 27 31 27H24V18Z"
              fill="#BFDBFE"
            />

            <path
              d="M28 28L38.5 38.5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.9"
            />

            <path
              d="M35.5 38.5H38.5V35.5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
          </svg>
        </motion.div>

        <div className="brand-text-wrap">
          <motion.span
            className="brand-name"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            SmartPrep
          </motion.span>

          <motion.span
            className="brand-tag"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            CBT PLATFORM
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
}