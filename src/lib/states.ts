// What State Directors have done with their own districts, outside
// California. Every line is taken from the linked source and says only
// what that source says. None of these pieces names AI Vanguard: the
// work was done as student senators and district representatives, and
// the page says so. Do not add a line here without a public source.
//
// Verified October 2026 against the source pages (titles, dates, and
// wording) and, for Connecticut, the district's own podcast feed.

export type StateItem = { text: string; source: string; href: string };

export type StateAtHome = {
  code: string;
  state: string;
  director: string;
  school: string;
  image: string;
  items: StateItem[];
};

export const statesAtHome: StateAtHome[] = [
  {
    code: "MN",
    state: "Minnesota",
    director: "Bihmanji “Bee” Acho",
    school: "St. Cloud Tech High School · District 742",
    image: "/img/team/bee.jpg",
    items: [
      {
        text: "Took part in the Minnesota Thought Leaders AI Summit, hosted by the district for more than 300 educators, students, and policymakers.",
        source: "KSTP 5 Eyewitness News · June 16, 2026",
        href: "https://kstp.com/inside-your-schools/st-cloud-educators-students-discuss-impact-of-ai-in-classrooms-at-annual-summit/",
      },
      {
        text: "Featured in KSTP's report on Minnesota schools writing their AI rules, where school leaders say they learned a lot from what students told them.",
        source: "KSTP 5 Eyewitness News · August 19, 2026",
        href: "https://kstp.com/inside-your-schools/the-ai-classroom-has-arrived-minnesota-schools-are-writing-the-rules/",
      },
      {
        text: "Represented District 742 and Minnesota in the national student Senate, as the district reported.",
        source: "St. Cloud Area School District 742 · July 22, 2026",
        href: "https://www.isd742.org/new-page/single-clone/~board/742-news-st-cloud-area-school-district-742-516/post/acho-and-jiech-represent-district-742-at-americas-youth-ai-festival",
      },
    ],
  },
  {
    code: "MI",
    state: "Michigan",
    director: "LaMarea Taya Tooson",
    school: "Ypsilanti High School · Ypsilanti Community Schools",
    image: "/img/team/lamarea.jpg",
    items: [
      {
        text: "Co-wrote a Detroit News opinion piece with the district's superintendent: students should help decide how AI is used in schools.",
        source: "The Detroit News · June 11, 2026",
        href: "https://www.detroitnews.com/story/opinion/2026/06/11/the-future-of-ai-in-schools-should-include-students-ross/90505612007/",
      },
      {
        text: "Joined the superintendent on WDIV's Local 4 Live to talk about how students see AI in the classroom.",
        source: "WDIV Local 4 Detroit · June 22, 2026",
        href: "https://www.clickondetroit.com/video/news/2026/06/22/students-weigh-in-on-ai-in-schools/",
      },
    ],
  },
  {
    code: "CT",
    state: "Connecticut",
    director: "Anthony Darbilli",
    school: "Bunnell High School · Stratford Public Schools",
    image: "/img/team/anthony.jpg",
    items: [
      {
        text: "Student representative on the district's Digital Wellness Task Force, which is revising the Acceptable Use Policy and writing a guidebook.",
        source: "Stratford Public Schools podcast · January 22, 2026",
        href: "https://fromforesttoshore.podbean.com/e/episode-9-policy-to-practice-building-digital-wellness-with-our-community/",
      },
      {
        text: "Selected to represent Connecticut in the national student Senate. The superintendent said the district is proud to see its students helping lead this conversation.",
        source: "Patch · May 15, 2026",
        href: "https://patch.com/connecticut/stratford/stratford-students-selected-help-shape-national-k-12-ai-policy",
      },
    ],
  },
];
