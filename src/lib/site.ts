export const site = {
  name: "AI Vanguard",
  tagline: "Student voice on AI in education",
  description:
    "AI Vanguard is a student-led nonprofit shaping how AI is used in education through research, advocacy, and collaboration with schools across Southern California.",
  applyUrl: "https://forms.gle/RZivFEcA685Majyy5",
  email: "info@aivanguard.org",
  social: {
    instagram: "https://www.instagram.com/aivanguardorg/",
    linkedin: "https://www.linkedin.com/company/ai-vanguard-org/",
  },
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Policy Brief", href: "/policy-brief" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export const metrics = [
  { value: "18,000+", label: "Students represented", hint: "Across partner campuses" },
  { value: "8", label: "Schools", hint: "Active rep presence" },
  { value: "5", label: "Districts", hint: "Southern California" },
  { value: "20+", label: "Student leaders", hint: "Cabinet & reps" },
];

export const pillars = [
  {
    slug: "research",
    number: "01",
    title: "Student voice research",
    subtitle: "Listening first, on every campus.",
    blurb:
      "Surveys, interviews, and focus groups that turn student experience with AI into usable evidence for schools and districts.",
    bullets: [
      "Campus-led surveys on AI use and perception",
      "Structured focus groups with students and teachers",
      "Findings synthesized into school-ready briefs",
    ],
    image: "/img/pillars/research.jpg",
    imageAlt:
      "Laptop and notebook with data charts on a desk — research workspace.",
  },
  {
    slug: "advocacy",
    number: "02",
    title: "Policy advocacy",
    subtitle: "Bringing evidence into the rooms where policy is written.",
    blurb:
      "Working with schools, districts, and local policymakers so student perspectives shape how AI enters the classroom — not the other way around.",
    bullets: [
      "School and district partnerships",
      "Local and regional policy events",
      "Recommendations grounded in student voice",
    ],
    image: "/img/pillars/advocacy.jpg",
    imageAlt: "A hand raising a megaphone at an outdoor rally.",
  },
  {
    slug: "community",
    number: "03",
    title: "Community building",
    subtitle: "A network that doesn't dissolve after one event.",
    blurb:
      "Connecting students, educators, and policymakers into a network where the people most affected by AI in education are actually in the room.",
    bullets: [
      "Cross-school representative network",
      "Student-policymaker forums",
      "Ongoing cohorts of student leaders",
    ],
    image: "/img/pillars/community.jpg",
    imageAlt:
      "University building with an open courtyard — a place for gathering.",
  },
];

export const objectives = [
  {
    n: "01",
    title: "Champion equity",
    body: "Advocating for fair access to AI tools across every student background, so AI becomes a tool for opportunity, not inequality.",
  },
  {
    n: "02",
    title: "Promote ethical use",
    body: "Developing policy recommendations grounded in transparency, accountability, and academic integrity.",
  },
  {
    n: "03",
    title: "Amplify student voices",
    body: "Making sure young people are included in decisions about the technology shaping their learning — and their futures.",
  },
];

export const leadership = [
  { name: "Avery Updike", role: "Founder & President", image: "/img/team/avery.png" },
  { name: "Timothy Yang", role: "Vice President", image: "/img/team/timothy.jpg" },
  { name: "Rachel Hawara", role: "Secretary", image: "/img/team/rachel.jpg" },
  { name: "Arya Bhakta", role: "Chief Financial Officer", image: "/img/team/arya.jpg" },
  { name: "Connor Lee", role: "VP of Marketing", image: "/img/team/connor.jpg" },
  { name: "Jayden Rios", role: "VP of Marketing", image: "/img/team/jayden.jpg" },
  { name: "Hayven Yang", role: "VP of Research & Opportunities", image: "/img/team/hayven.jpg" },
  { name: "Parisa Mabrooka", role: "VP of Outreach", image: null },
  { name: "Aadhitya Sankaranarayanan", role: "Director of Administration", image: null },
];

export const schools = [
  "Cypress",
  "Troy",
  "Downey",
  "Gretchen Whitney",
  "Oxford Academy",
  "Gahr",
  "Cerritos",
  "Beckman",
];

// Student representatives — bridge between campuses and AI Vanguard.
// Emails deliberately omitted here per the site's privacy policy; reps are
// contacted through info@aivanguard.org.
export const representatives = [
  { name: "Aadhitya Narayanan", school: "Cypress High School" },
  { name: "Parisa Mabrooka", school: "Cypress High School" },
  { name: "Rayn Solangi", school: "Troy High School" },
  { name: "Derek Shusterman", school: "Troy High School" },
  { name: "Saiya Bhakta", school: "Downey High School" },
  { name: "Vibha Arsid", school: "Gretchen Whitney High School" },
  { name: "Gabriel San Agustin", school: "Gretchen Whitney High School" },
  { name: "Sathvik Akula", school: "Oxford Academy" },
  { name: "Neel Parande", school: "Oxford Academy" },
  { name: "Louie Reveles", school: "Gahr High School" },
  { name: "Srivatsan Srinivasan", school: "Gahr High School" },
  { name: "Miranda Martinez", school: "Cerritos High School" },
  { name: "Sofia del Castillo", school: "Cerritos High School" },
  { name: "Asha Trikannad", school: "Beckman High School" },
];

export const milestones = [
  {
    year: "2024",
    title: "AI Vanguard is founded",
    body: "A cohort of students across Southern California form the organization to give students a direct voice in how AI enters the classroom.",
  },
  {
    year: "2024",
    title: "First student-voice research cycle",
    body: "Surveys and focus groups launched across founding campuses; early findings shared with school leadership.",
  },
  {
    year: "2025",
    title: "Representative network grows",
    body: "Student representatives onboarded across 8 schools and 5 districts, broadening the reach of student voice on AI in education.",
  },
  {
    year: "2026",
    title: "Building the next cohort",
    body: "Applications open for a new class of student representatives, with a focus on more schools and deeper policy work.",
    current: true,
  },
];

export const pullQuote = {
  text: "AI is already changing how young people learn — and the decisions being made right now will shape the next decade of education. Those decisions are being made without us. We exist to change that.",
  attribution: "AI Vanguard · Mission statement",
};
