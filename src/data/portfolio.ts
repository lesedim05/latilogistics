export const personal = {
  name: "Molatelo Rasekgala",
  role: "Customer Service Consultant | Cashier | Administrative Support",
  tagline: "Reliable, customer-focused support with strong communication and practical problem-solving skills.",
  summary:
    "I am a customer-focused professional with over two years of experience across insurance customer care, retail cashier operations, service-driven environments, and administrative support. I bring a calm, professional approach to customer queries, policy administration, complaint resolution, cash handling, POS systems, and daily team operations.",
  location: "Johannesburg, South Africa",
  email: "lesediro503@gmail.com",
  phone: "068 147 4517",
  github: "",
  linkedin: "",
  resumeUrl: "/resume.pdf",
  avatarInitials: "MR",
};

export const stats = [
  { label: "Years of Experience", value: "2+" },
  { label: "Career Areas", value: "4" },
  { label: "Core Strengths", value: "10+" },
  { label: "AI Training", value: "1 week" },
];

export const aboutParagraphs = [
  "I am a professional with experience in insurance customer care, retail cashier operations, hospitality, and early childhood development. My work has strengthened my ability to listen carefully, understand customer needs, resolve concerns professionally, and complete daily responsibilities accurately.",
  "I am confident handling customer enquiries, policy administration, complaint resolution, cash and card payments, POS systems, data capturing, and general administrative support. I work well under pressure and value confidentiality, consistency, and respectful communication.",
  "I recently completed a one-week AI Skills Programme at CAPACITI, expanding my digital confidence and understanding of how artificial intelligence can support modern workplace productivity. I am eager to continue learning and contribute to a team where service, reliability, and growth are valued.",
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Customer Service",
    icon: "HeartHandshake",
    skills: [
      { name: "Customer Care & Support", level: 95 },
      { name: "Professional Communication", level: 93 },
      { name: "Complaint Handling & Resolution", level: 90 },
      { name: "Telephone & Face-to-Face Customer Service", level: 90 }
    ],
  },
  {
    title: "Administration",
    icon: "ClipboardList",
    skills: [
      { name: "Administrative Support", level: 88 },
      { name: "Data Capturing", level: 87 },
      { name: "Policy Administration", level: 85 },
      { name: "Confidentiality & Accuracy", level: 92 },
    ],
  },
  {
    title: "Retail & Operations",
    icon: "ShoppingBasket",
    skills: [
      { name: "Cash Handling", level: 92 },
      { name: "POS Systems", level: 90 },
      { name: "Card & Electronic Payments", level: 90 },
      { name: "Sales Support", level: 82 },
    ],
  },
  {
    title: "Workplace Strengths",
    icon: "Users",
    skills: [
      { name: "Time Management", level: 90 },
      { name: "Teamwork", level: 93 },
      { name: "Problem Solving", level: 88 },
      { name: "AI & Digital Readiness", level: 78 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  link: string;
  repo: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Insurance Customer Care",
    description:
      "Customer service experience supporting clients with insurance-related enquiries, policy administration, complaint resolution, and service follow-up.",
    tags: ["Customer Care", "Insurance", "Administration"],
    highlights: [
      "Provided professional telephone and customer support",
      "Resolved customer concerns in line with service standards",
      "Maintained confidentiality and followed company policies",
    ],
    link: "#experience",
    repo: "#experience",
    accent: "from-sky-500 to-cyan-400",
  },
  {
    title: "Retail Cashier Operations",
    description:
      "Hands-on retail experience processing cash, card, and electronic payments while assisting customers with product enquiries and sales support.",
    tags: ["Cash Handling", "POS Systems", "Retail"],
    highlights: [
      "Processed customer payments accurately",
      "Assisted customers with product enquiries",
      "Maintained a clean, organised, and customer-friendly environment",
    ],
    link: "#experience",
    repo: "#experience",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    title: "CAPACITI AI Skills Programme",
    description:
      "Completed a one-week AI Skills Programme at CAPACITI, building awareness of artificial intelligence and its role in modern workplace productivity.",
    tags: ["CAPACITI", "Artificial Intelligence", "Digital Skills"],
    highlights: [
      "Completed a focused one-week AI skills programme",
      "Developed confidence engaging with modern digital tools",
      "Strengthened readiness for technology-enabled workplaces",
    ],
    link: "#education",
    repo: "#education",
    accent: "from-amber-500 to-orange-400",
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export const education: EducationItem[] = [
  {
    degree: "Diploma in Human Movement Science",
    institution: "North West University",
    period: "2025",
    details:
      "Completed a diploma programme that developed discipline, communication, organisation, and people-focused skills.",
  },
  {
    degree: "Diploma in Education",
    institution: "Randfontein West College",
    period: "Completed in 1 year 6 months",
    details:
      "Education training that strengthened planning, communication, organisation, and collaboration with children, parents, and colleagues.",
  },
  {
    degree: "AI Skills Programme",
    institution: "CAPACITI",
    period: "One week",
    details:
      "Completed a focused AI skills programme covering practical awareness of artificial intelligence and digital tools for the workplace.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  credentialId: string;
};

export const certifications: Certification[] = [
  {
    title: "AI Skills Programme",
    issuer: "CAPACITI",
    year: "Completed",
    credentialId: "One-week programme",
  },
  {
    title: "Diploma in Human Movement Science",
    issuer: "North West University",
    year: "2025",
    credentialId: "Academic qualification",
  },
  {
    title: "Diploma in Education",
    issuer: "Randfontein West College",
    year: "Completed",
    credentialId: "Academic qualification",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Customer Service Consultant",
    company: "Clientele Life Insurance Company",
    period: "2 years",
    location: "South Africa",
    description:
      "Supported customers in a professional insurance service environment, helping with enquiries, policy administration, and complaint resolution.",
    achievements: [
      "Provided professional telephone customer support for insurance policy enquiries",
      "Resolved customer complaints in line with company service standards",
      "Updated and maintained accurate customer records",
      "Assisted clients with policy changes and general account support",
      "Maintained confidentiality and complied with company policies",
    ],
  },
  {
    role: "Cashier / Retail Assistant",
    company: "Rage Store",
    period: "1 year 6 months",
    location: "South Africa",
    description:
      "Delivered accurate, friendly service while supporting daily retail transactions, customer enquiries, and store operations.",
    achievements: [
      "Processed cash, card, and electronic payments accurately",
      "Assisted customers with product enquiries and sales support",
      "Balanced cash at the end of shifts and managed discrepancies",
      "Maintained a clean, organised, and customer-friendly store environment",
    ],
  },
  {
    role: "Waitress",
    company: "McDonald's",
    period: "8 months",
    location: "South Africa",
    description:
      "Worked in a high-pressure service environment focused on speed, friendliness, order accuracy, and teamwork.",
    achievements: [
      "Delivered fast and friendly customer service",
      "Processed customer orders and payments efficiently",
      "Worked collaboratively with team members to meet service targets",
    ],
  },
  {
    role: "Pre-School Teacher",
    company: "Early Childhood Development Environment",
    period: "2 years",
    location: "South Africa",
    description:
      "Supported young children's development while coordinating classroom activities and communicating with parents and colleagues.",
    achievements: [
      "Assisted with early childhood development activities",
      "Organised classroom activities and learning materials",
      "Communicated effectively with parents and colleagues",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Highlights", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
