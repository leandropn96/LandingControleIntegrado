export interface NavLink {
  label: string;
  href: string;
}

export interface ProblemItem {
  icon: string;
  title: string;
  description: string;
}

export interface SolutionStep {
  title: string;
  description: string;
}

export interface FeatureCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface DifferentialItem {
  icon: string;
  title: string;
  description: string;
}

export interface SegmentItem {
  icon: string;
  title: string;
  description: string;
}

export interface ScreenItem {
  title: string;
  caption: string;
  accent: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PlanItem {
  id: string;
  name: string;
  description: string;
  highlight: boolean;
  features: PlanFeature[];
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
