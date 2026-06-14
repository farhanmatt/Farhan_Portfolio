/* =========================================================
   All portfolio content - single source of truth
   ========================================================= */

export const personalInfo = {
  name: "Mohamed Farhan M R",
  displayName: "Mohamed Farhan",
  shortName: "Farhan",
  role: "Software Developer",
  location: "Nagercoil, Tamil Nadu, India",
  phone: "+91 75503 26669",
  email: "mohamedfarhan8821@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamed-farhan-8aa177354/",
  github: "https://github.com/farhanmatt",
};

export const aboutData = {
  paragraph1:
    "Full-stack developer with 7+ months of production experience building scalable web applications from the ground up. Specialized in React.js, Next.js, and PostgreSQL - comfortable across the entire stack from clean UI to solid backend logic. Shipped two live platforms including a matrimony portal with payment integration and a project management system with role-based access control.",
  paragraph2: "",
};

export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Next.js", "Node.js", "REST APIs"],
  },
  {
    label: "Database",
    skills: ["PostgreSQL", "Prisma ORM"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Linux CLI"],
  },
  {
    label: "Soft Skills",
    skills: [
      "Problem Solving",
      "Cross-functional Collaboration",
      "Analytical Thinking",
    ],
  },
];

export const allSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma ORM",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "JavaScript",
  "HTML5 / CSS3",
  "Postman",
];

export interface TechItem {
  name: string;
  category: string;
  short: string;
  accent: "orange" | "blue" | "cyan" | "yellow" | "indigo" | "emerald" | "violet" | "rose";
}

export const techShowcase: TechItem[] = [
  { name: "HTML5", category: "Core Web", short: "H5", accent: "orange" },
  { name: "CSS3", category: "Core Web", short: "C3", accent: "blue" },
  { name: "JavaScript", category: "Language", short: "JS", accent: "yellow" },
  { name: "TypeScript", category: "Language", short: "TS", accent: "blue" },
  { name: "React", category: "Frontend", short: "R", accent: "cyan" },
  { name: "Next.js", category: "Framework", short: "N", accent: "violet" },
  { name: "Tailwind CSS", category: "Styling", short: "TW", accent: "cyan" },
  { name: "REST APIs", category: "Backend", short: "API", accent: "orange" },
  { name: "Prisma ORM", category: "Database", short: "DB", accent: "indigo" },
  { name: "PostgreSQL", category: "Database", short: "PG", accent: "emerald" },
  { name: "Git", category: "Versioning", short: "GIT", accent: "orange" },
  { name: "GitHub", category: "Collaboration", short: "GH", accent: "violet" },
  { name: "VS Code", category: "Editor", short: "VS", accent: "blue" },
  { name: "Postman", category: "Testing", short: "PM", accent: "orange" },
  { name: "Vercel", category: "Deployment", short: "VC", accent: "violet" },
  { name: "Node.js", category: "Backend", short: "NODE", accent: "emerald" },
];

export interface ExperienceItem {
  period: string;
  periodShort: string;
  role: string;
  company: string;
  location: string;
  type: string;
  highlights: string[];
  techStack: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "Jan 2025 - Present",
    periodShort: "2025 ->",
    role: "Software Developer",
    company: "Matt Engineering Solutions",
    location: "Nagercoil, TN",
    type: "Full-time",
    highlights: [
      "Worked on two full-stack production projects: FMLP Matrimony Platform and a Project Management System deployed in live environments.",
      "Built secure login, role-based access control, profile management, matching workflows, real-time notifications, and employee management modules.",
      "Participated in the complete SDLC - requirement analysis, development, testing, debugging, and production deployment.",
      "Collaborated via Git version control, resolving bugs and managing feature branches across team sprints.",
    ],
    techStack: [
      "Next.js", "React", "TypeScript", "PostgreSQL",
      "Prisma ORM", "Tailwind CSS", "NextAuth", "Razorpay", "Git",
    ],
  },
];

export interface TechBadge {
  label: string;
}

export interface Project {
  id: string;
  number: string;
  featured: boolean;
  name: string;
  description: string;
  longDescription: string;
  liveUrl: string;
  stack: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "fmlp",
    number: "01",
    featured: true,
    name: "FMLP Matrimony Platform",
    description:
      "A full-featured matrimonial web application built for real users - with secure auth, profile verification, smart matching, Razorpay payments, and an end-to-end admin dashboard.",
    longDescription:
      "Built from the ground up with a focus on security, scalability, and UX. The platform handles everything from detailed profile creation (personal, family, education, career, lifestyle, horoscope) to a full payment-gated match-unlock flow, in-app chat, and a comprehensive admin panel.",
    liveUrl: "https://matrimony-eight-sage.vercel.app/",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "NextAuth",
      "Razorpay",
      "Cloudinary",
      "Zustand",
      "Zod",
      "Nodemailer",
    ],
    highlights: [
      "Secure authentication with profile verification workflow",
      "Detailed 7-section profile creation system",
      "Browse, filter, and suggest matches with mutual-like system",
      "Profile unlock via Razorpay payment gateway",
      "Secure in-app chat and real-time notifications",
      "Full admin dashboard: users, profiles, matches, payments and pricing",
    ],
  },
  {
    id: "pms",
    number: "02",
    featured: true,
    name: "Project Management System",
    description:
      "An enterprise-grade project management tool used company-wide with granular RBAC, a full CRM pipeline, milestone-driven project tracking, and time reports.",
    longDescription:
      "Designed for internal use at Matt Engineering Solutions, this system enforces role-based access at module, action, record, and field levels. It covers everything from client acquisition (CRM) to project delivery (tasks, milestones, sprints) with built-in time tracking and dashboards.",
    liveUrl: "https://project-management-eta-brown.vercel.app/login",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Tailwind CSS",
      "Radix UI",
      "Recharts",
      "Zod",
      "bcryptjs",
      "Sonner",
    ],
    highlights: [
      "Role-based system: ADMIN, BA, TEAMLEADER, EMPLOYEE with field-level permissions",
      "Full CRM flow: Client -> Lead -> Quotation -> Invoice -> Payment",
      "Project and task management with milestones, sprints, and progress tracking",
      "Time tracking with dashboards and detailed reports",
      "Admin setup: employees, departments, teams, positions, clients",
    ],
  },
];

export interface Education {
  degree: string;
  college: string;
  period: string;
  cgpa: string;
  status: string;
  coursework: string[];
}

export const education: Education = {
  degree: "B.E. Computer Science and Engineering",
  college: "St. Xavier's Catholic College of Engineering",
  period: "2021 - 2025",
  cgpa: "7.9 / 10",
  status: "Completed",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Object-Oriented Programming",
    "Computer Networks",
    "Software Engineering",
  ],
};

export const ticker = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

export const typingTexts = [
  "Full Stack Developer",
  "Next.js Developer",
  "React.js Developer",
  "Building production apps.",
];
