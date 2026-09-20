// Student highlights — an ongoing series spotlighting individual students
// doing the work: representing AI Vanguard at events, leading campus
// conversations, and carrying student voice into new rooms.
//
// Photos live in /public/img/highlights/. To swap a placeholder for a real
// photo, overwrite the file at the same path — no code change needed.

export type HighlightPhoto = {
  src: string;
  alt: string;
  /** Tailwind aspect class for the frame, e.g. "aspect-[4/3]" */
  aspect: string;
};

export type StudentHighlight = {
  slug: string;
  student: string;
  role: string;
  event: string;
  headline: string;
  body: string[];
  photos: HighlightPhoto[];
  /** Where to send readers for more. Falls back to Instagram when unset. */
  link?: { href: string; label: string };
};

export const highlights: StudentHighlight[] = [
  {
    slug: "avery-students-first-act",
    student: "Avery Updike",
    role: "Founder & President · California Student Senator",
    event: "El Estoque · Students First Act",
    headline: "Making the case for student-written AI policy, on the record.",
    body: [
      "In July 2026, more than ninety student senators from all fifty states gathered in Boston for America's Youth AI Festival and drafted the Students First Act, a student-created framework for how AI should be used in K-12 schools. It passed the mock Senate 82 to 16.",
      "Avery Updike, AI Vanguard's founder and one of California's two student senators, served on the committee responsible for the act's student provisions, helped develop and pass several measures, and presented one on the Senate floor. El Estoque, the student news magazine at Monta Vista High School, covered the act on September 2 and interviewed Avery on why students belong in the room: \"A lot of this comes with the intention of ensuring that students are still able to be creative and write their own material and really learn within classrooms.\"",
      "It is the argument AI Vanguard makes to districts every week, carried into a national student policy process and reported by other students.",
    ],
    link: {
      href: "https://elestoque.org/2026/09/02/news/students-advocate-for-changes-in-educational-ai-policies-through-the-students-first-act/",
      label: "Read the El Estoque story →",
    },
    photos: [
      {
        src: "/img/pillars/community.jpg",
        alt: "Student senators gathered beneath the final vote board after the Students First Act passed at America's Youth AI Festival in Boston.",
        aspect: "aspect-[4/3]",
      },
      {
        src: "/img/feature/chamber.jpg",
        alt: "Student senators seated at desks in the Senate-style chamber during the mock session in Boston.",
        aspect: "aspect-[3/4]",
      },
    ],
  },
  {
    slug: "tristan-day-of-ai",
    student: "Tristan Tjetjep",
    role: "Director of National Expansion · Tennessee State Director",
    event: "Day of AI",
    headline: "Carrying student voice to Day of AI.",
    body: [
      "Day of AI is a global AI-literacy initiative developed at MIT that brings free, teacher-friendly AI curriculum into classrooms — and puts the question of how young people should learn about AI in front of students, educators, and communities around the world.",
      "Tristan Tjetjep, our Director of National Expansion and Tennessee State Director, represented AI Vanguard at the Day of AI festival as a student speaker — taking the mic to connect the work our representatives do on their own campuses to a much bigger conversation about AI literacy, and showing what it looks like when students aren't just the subject of that conversation, but a voice in it.",
      "It's exactly the kind of room AI Vanguard exists to get students into: where decisions about AI in education are being shaped, with the people most affected present and speaking for themselves.",
    ],
    photos: [
      {
        src: "/img/highlights/day-of-ai-01.jpg",
        alt: "Tristan Tjetjep holding the microphone as a student speaker at the Day of AI festival, surrounded by fellow students.",
        aspect: "aspect-[556/433]",
      },
      {
        src: "/img/highlights/day-of-ai-02.jpg",
        alt: "Tristan Tjetjep speaking into a microphone at the Day of AI festival.",
        aspect: "aspect-[4/5]",
      },
    ],
  },
];

// Short, dated organizational updates shown beneath the highlight series.
// Newest first. Keep each to one or two sentences and link out where a
// fuller record exists.
export type Update = {
  date: string;
  title: string;
  body: string;
  href?: string;
  external?: boolean;
};

export const updates: Update[] = [
  {
    date: "September 2, 2026",
    title: "El Estoque covers the Students First Act",
    body: "Monta Vista High School's student news magazine reports on the student-drafted AI framework, with AI Vanguard founder Avery Updike interviewed as a California student senator.",
    href: "https://elestoque.org/2026/09/02/news/students-advocate-for-changes-in-educational-ai-policies-through-the-students-first-act/",
    external: true,
  },
  {
    date: "July 17 – 19, 2026",
    title: "America's Youth AI Festival, Boston",
    body: "AI Vanguard's founder serves as a California student senator in the national mock Senate that drafts and passes the Students First Act, and Tristan Tjetjep takes the Day of AI stage as a student speaker.",
    href: "#tristan-day-of-ai",
  },
  {
    date: "July 2026",
    title: "The Vanguard Open 2026 launches",
    body: "AI Vanguard's national student competition opens for registration. Entries are due September 25, 2026, with results on October 3.",
    href: "/competition",
  },
];

// Press coverage of AI Vanguard students. Each item links to the piece
// and says only what the piece says. Most of this coverage is about the
// students' work as Day of AI student senators rather than about AI
// Vanguard by name; the notes are written to be honest about that.
export type PressItem = {
  outlet: string;
  date: string;
  title: string;
  href: string;
  who: string;
  role: string;
  image: string;
  note: string;
};

export const press: PressItem[] = [
  {
    outlet: "El Estoque",
    date: "September 2, 2026",
    title: "Students advocate for changes in educational AI policies through the Students First Act",
    href: "https://elestoque.org/2026/09/02/news/students-advocate-for-changes-in-educational-ai-policies-through-the-students-first-act/",
    who: "Avery Updike",
    role: "Founder & President",
    image: "/img/team/avery.png",
    note: "Interviewed as one of California's two student senators, on the committee that wrote the act's student provisions.",
  },
  {
    outlet: "MPR News · Minnesota Now",
    date: "August 13, 2026",
    title: "\u2018We have a voice\u2019: Minnesota students help craft national AI policy",
    href: "https://www.mprnews.org/episode/2026/08/13/minnesota-students-help-craft-national-ai-policy",
    who: "Bihmanji \u201cBee\u201d Acho",
    role: "Minnesota State Director",
    image: "/img/team/bee.jpg",
    note: "On the provision she drafted requiring a second look when AI is used to allege academic dishonesty, and why students at a school where most families live near the poverty line need a say.",
  },
  {
    outlet: "NPR",
    date: "July 30, 2026",
    title: "Adults have struggled to set rules for AI in school. These teens figured it out",
    href: "https://www.npr.org/2026/07/30/nx-s1-5853571/students-set-ai-policy",
    who: "Tristan Tjetjep",
    role: "Tennessee State Director",
    image: "/img/team/tristan.jpg",
    note: "Quoted on whether under-resourced schools could afford the AI literacy instruction the Students First Act calls for.",
  },
  {
    outlet: "WDIV Local 4 Detroit",
    date: "June 22, 2026",
    title: "Students weigh in on AI in schools",
    href: "https://www.clickondetroit.com/video/news/2026/06/22/students-weigh-in-on-ai-in-schools/",
    who: "LaMarea Taya Tooson",
    role: "Michigan State Director",
    image: "/img/team/lamarea.jpg",
    note: "Interviewed alongside the superintendent of Ypsilanti Community Schools on how students see AI in the classroom.",
  },
  {
    outlet: "KNSI Radio",
    date: "May 26, 2026",
    title: "Tech High School Students Headed to National AI Festival in Boston",
    href: "https://knsiradio.com/2026/05/26/tech-high-school-students-headed-to-national-ai-festival-in-boston/",
    who: "Bihmanji \u201cBee\u201d Acho",
    role: "Minnesota State Director",
    image: "/img/team/bee.jpg",
    note: "Selected from St. Cloud Tech High School to represent Minnesota at America's Youth AI Festival.",
  },
  {
    outlet: "Patch · Stratford, CT",
    date: "May 15, 2026",
    title: "Stratford Students Selected To Help Shape National K-12 AI Policy",
    href: "https://patch.com/connecticut/stratford/stratford-students-selected-help-shape-national-k-12-ai-policy",
    who: "Anthony Darbilli",
    role: "Connecticut State Director",
    image: "/img/team/anthony.jpg",
    note: "Selected to represent Connecticut at the 2026 Day of AI & AASA Leadership Fellowship and America's Youth AI Festival.",
  },
];

// Developments: organizational work worth following that is not a single
// student's story. Each carries its real stage in the tag.
export const developments = [
  {
    tag: "Partnership · In development",
    title: "Project Tomorrow \u00d7 AI Vanguard",
    body: "In active conversation with Project Tomorrow's research team about adding a student-led qualitative dimension to Speak Up, its national survey of students, educators, and parents. A proposal is with their leadership; a student focus group on the survey questions is the next step under discussion.",
    href: "/our-work#project-tomorrow",
  },
  {
    tag: "Research · Underway",
    title: "When Does Student Voice Change AI Policy?",
    body: "A preregistered study of the twelve largest U.S. school districts, tracing whether student recommendations on generative AI received a documented response. Public-records requests are out to twenty large systems; coding is underway.",
    href: "/research#study",
  },
  {
    tag: "Governance · Proposed",
    title: "A standing student AI body in ABC Unified",
    body: "Working with district instructional-technology leaders on a proposal for a durable student AI leadership structure with mentorship and year-to-year continuity. Under review, with the district's January 2027 AI-Ignite event as the first proving ground if approved.",
    href: "/our-work#abcusd",
  },
];
