export const site = {
  name: "AI Vanguard",
  tagline: "Student voice on AI in education",
  description:
    "AI Vanguard is a student-led nonprofit advancing student participation in AI education policy through research, district collaboration, and a national network of student leaders.",
  applyUrl: "https://docs.google.com/forms/d/1E1pd88uwjVkYcleIY26gL4_LdkUd2fVZuawffTH-QPU/viewform",
  email: "info@aivanguard.org",
  social: {
    instagram: "https://www.instagram.com/aivanguardorg/",
    linkedin: "https://www.linkedin.com/company/ai-vanguard-org/",
  },
};

// Organizational footprint. Every reach figure on the site should read
// from here so the numbers can't drift between pages.
export const reach = {
  founded: "Southern California",
  states: ["California", "Minnesota", "Tennessee", "Connecticut", "New Jersey", "Michigan"],
  statesWord: "six",
  // Reported as "approximately 10" in September 2026.
  districts: 10,
  // Avery's estimate, Sept 2026: the 8 rep-roster campuses plus one school
  // per State Director (6). Assumes every director attends a school outside
  // those 8; Riley Puder is in ABC Unified, which already holds three of
  // them, so this is 13 if Riley is at Cerritos, Gahr, or Whitney.
  schools: 14,
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/our-work" },
  { label: "Research", href: "/research" },
  { label: "Impact", href: "/impact" },
  { label: "News", href: "/highlights" },
  { label: "Vanguard Open", href: "/competition" },
  { label: "Get Involved", href: "/get-involved" },
];

// Headline numbers. Each one is specific and sourced on the site: no
// "students represented" style reach claims that are hard to defend.
export const metrics = [
  { value: "447", label: "Students surveyed", hint: "First AI policy study, 2025" },
  { value: "8", label: "Campuses with representatives", hint: "Southern California" },
  { value: `${reach.states.length}`, label: "States with student leadership", hint: reach.states.map((s) => s.slice(0, 2).toUpperCase()).join(" · ") },
  { value: "12", label: "Largest U.S. districts under study", hint: "Preregistered · led by our founder" },
];

export const pillars = [
  {
    slug: "research",
    tone: "research",
    number: "01",
    title: "Student voice research",
    subtitle: "Find out what students actually think.",
    blurb:
      "Surveys, focus groups, and a preregistered public-records study that turn student experience with AI into evidence districts can act on.",
    bullets: [
      "2025 policy survey: 447 students across six campuses",
      "A companion teacher pilot and rep-led field studies",
      "A preregistered study of student influence in the twelve largest U.S. districts",
    ],
    image: "/img/pillars/research.jpg",
    imageAlt:
      "Close-up of the AI Vanguard Policy Survey response spreadsheet, rows of student answers on AI use.",
  },
  {
    slug: "governance",
    tone: "governance",
    number: "02",
    title: "AI governance",
    subtitle: "Bring that evidence into institutional decision-making.",
    blurb:
      "Working inside district processes rather than outside them: roundtables, proposals, and standing student input on how AI tools and guidance get decided.",
    bullets: [
      "District AI roundtables and educator presentations in ABC Unified",
      "The Student AI Pulse pilot proposal to Los Angeles County districts",
      "A proposed standing student AI body, under district review",
    ],
    image: "/img/pillars/advocacy.jpg",
    imageAlt:
      "Students holding yes and no signs during an AI Vanguard policy session in a school library.",
  },
  {
    slug: "leadership",
    tone: "community",
    number: "03",
    title: "Student leadership",
    subtitle: "Create structures that keep students involved over time.",
    blurb:
      "A network of campus representatives and State Directors, so student participation outlasts any single meeting, semester, or student.",
    bullets: [
      "Fourteen representatives across eight campuses",
      "State Directors in six states",
      "The Vanguard Open, a national student competition",
    ],
    image: "/img/pillars/community.jpg",
    imageAlt:
      "Students gathered beneath the Student Senate on AI Policy final-vote board showing 83 to 15.",
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
  { name: "Aadhitya Narayanan", role: "Vice President", image: "/img/team/aadhitya.jpg" },
  { name: "Timothy Yang", role: "Chief Financial Officer & Treasurer", image: "/img/team/timothy.jpg" },
  { name: "Parisa Mabrooka", role: "Chief of Staff", image: "/img/team/parisa.jpg" },
  { name: "Makaela Wei", role: "Secretary", image: "/img/team/makaela.jpg" },
  { name: "Nolan Ream", role: "Director of Research", image: "/img/team/nolan.jpg" },
  { name: "Yuming “Eunice” Zhang", role: "Director of Marketing", image: "/img/team/eunice.jpg" },
  { name: "Suhana Gharib", role: "Director of Event Planning", image: "/img/team/suhana.jpg" },
  { name: "Emily Liu", role: "Research & Evaluation Director", image: "/img/team/emily.jpg" },
  { name: "Bihmanji “Bee” Acho", role: "Director of Outreach · Minnesota State Director", image: "/img/team/bee.jpg" },
  { name: "Tristan Tjetjep", role: "Director of National Expansion · Tennessee State Director", image: "/img/team/tristan.jpg" },
  { name: "Anthony Darbilli", role: "Connecticut State Director", image: "/img/team/anthony.jpg" },
  { name: "Benjamin Zhou", role: "New Jersey State Director", image: "/img/team/benjamin.jpg" },
  { name: "Riley Puder", role: "California State Director", image: "/img/team/riley.jpg" },
  { name: "LaMarea Taya Tooson", role: "Michigan State Director", image: "/img/team/lamarea.jpg" },
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
    year: "2025",
    title: "Incorporated in California",
    body: "AI Vanguard becomes a California nonprofit public benefit corporation in July 2025, with a student board and a formal structure behind the work.",
  },
  {
    year: "2025",
    title: "First research cycle",
    body: "The AI Vanguard Policy Survey gathers 447 student responses across six campuses between August and December, the evidence base for the 2026 policy brief.",
  },
  {
    year: "2025",
    title: "Representative network grows",
    body: "Student representatives onboarded across 8 schools and 5 districts, broadening the reach of student voice on AI in education.",
  },
  {
    year: "2026",
    title: "Going national",
    body: "State Directors take AI Vanguard to six states, several of them student senators who met at America's Youth AI Festival in Boston, and national leadership applications open for the next cohort.",
  },
  {
    year: "2026",
    title: "From surveys to governance",
    body: "A preregistered study of the twelve largest U.S. districts, district-level proposals in ABC Unified and Los Angeles County, a conversation with Project Tomorrow's Speak Up, and the first Vanguard Open.",
    current: true,
  },
];

// The three things we are doing right now, shown at the top of the
// homepage. Each carries its real stage. Update the status before the
// copy; a stale "proposed" is better than a premature "launched".
export const initiatives = [
  {
    tag: "District governance",
    tone: "governance",
    status: "Proposed",
    title: "A standing student AI body in ABC Unified",
    body: "Working with district instructional-technology leaders on a recurring structure for student input into AI decisions, with mentorship and year-to-year continuity built in. Under review, with the district's January 2027 AI-Ignite event as the first proving ground if approved.",
    href: "/our-work#abcusd",
  },
  {
    tag: "National research",
    tone: "research",
    status: "Underway",
    title: "Tracing when student voice actually changes AI policy",
    body: "A preregistered study of the twelve largest U.S. school districts, built on public records rather than press releases. Records requests are out to twenty large systems and coding has begun.",
    href: "/research#study",
  },
  {
    tag: "National student voice",
    tone: "community",
    status: "In development",
    title: "In conversation with Project Tomorrow's Speak Up",
    body: "Exploring a student-led qualitative layer for the national research program that heard from more than 100,000 students, educators, and parents in its last cycle. A proposal is with their leadership.",
    href: "/our-work#project-tomorrow",
  },
];

// The district where the model has gone furthest. Every line below is
// backed by district correspondence; keep it that way.
export const districtWork = {
  district: "ABC Unified School District",
  where: "Cerritos, California · AI Vanguard's home district",
  intro:
    "Where the model has gone furthest: from one student giving feedback, to students helping design how feedback gets built into the institution.",
  steps: [
    {
      n: "01",
      t: "Listen",
      b: "Student voice at the district's recurring AI Community Roundtables since spring 2025, and a standing student-liaison role with the district's technology leadership.",
    },
    {
      n: "02",
      t: "Advise",
      b: "Student input as AI tools and guidance are considered, including a proposed review standard for material AI changes to products the district has already approved.",
    },
    {
      n: "03",
      t: "Present",
      b: "Student perspectives brought to more than 400 educators at the ABC IGNITE Ed Tech Symposium, and to families at the district's 2026 Parent Symposium.",
    },
    {
      n: "04",
      t: "Institutionalize",
      b: "A proposal for a standing student AI leadership body, with mentorship, a middle-school entry point, and year-to-year continuity, now under review with district leaders. If approved, the district's January 2027 AI-Ignite event is the first proving ground.",
    },
  ],
  note: "The district asked to feature this student partnership in its 2026 application for the California School Boards Association's Golden Bell Award.",
};

// Partnerships are listed at their actual stage. Nothing here is a
// partner until the other organization has said so.
export const partnerships = [
  {
    id: "project-tomorrow",
    name: "Project Tomorrow · Speak Up",
    status: "In development",
    body: "Project Tomorrow runs Speak Up, a national research program that has gathered the views of K-12 students, parents, and educators on technology and learning since 2003. AI Vanguard is in active conversation with its research team, together with the Youth Civics Think Tank, about strengthening how the program captures student perspectives on AI: a qualitative layer that gets at the why behind survey answers. A proposal is with Project Tomorrow's leadership, and a student focus group on the survey questions is the next step under discussion.",
    disclaimer: "Speak Up's reach is Project Tomorrow's, not AI Vanguard's.",
  },
];

export const pullQuote = {
  text: "AI is already changing how young people learn — and the decisions being made right now will shape the next decade of education. Those decisions are being made without us. We exist to change that.",
  attribution: "AI Vanguard · Mission statement",
};
