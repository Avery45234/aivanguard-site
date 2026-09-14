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
