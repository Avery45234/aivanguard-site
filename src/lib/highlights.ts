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
};

export const highlights: StudentHighlight[] = [
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
