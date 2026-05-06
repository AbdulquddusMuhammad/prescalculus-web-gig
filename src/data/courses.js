export const COURSES = [
  {
    id: 1,
    title: "Introduction to Mathematics",
    instructor: "Dr. Amara Okafor",
    category: "Mathematics",
    progress: 68,
    color: "#9b72f0",
    emoji: "📐",
    thumb: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=400&q=75&auto=format&fit=crop",
    lessons: [
      {
        id: 1, title: "Numbers & Number Systems", duration: "12:30", done: true,
        desc: "Explore natural numbers, integers, rationals, and irrationals with real-world examples.",
        materials: [
          { type: "pdf",      label: "Chapter 1 — Number Systems Notes", pages: 12 },
          { type: "slide",    label: "Number Systems Slide Deck",         pages: 24 },
          { type: "exercise", label: "Problem Set 1",                     items: 20 },
        ],
        quiz: [{ q: "Which of the following is an irrational number?", opts: ["1/3","√2","0.75","4/2"], ans: 1 }],
      },
      {
        id: 2, title: "Algebra Fundamentals", duration: "18:45", done: true,
        desc: "Variables, expressions, equations and inequalities — the language of algebra.",
        materials: [
          { type: "pdf",      label: "Algebra Cheat Sheet",          pages: 4  },
          { type: "exercise", label: "Algebra Drills — 30 Problems", items: 30 },
          { type: "video",    label: "Bonus: Factoring Tips"                    },
        ],
        quiz: [{ q: "Solve for x: 2x + 4 = 12", opts: ["x = 2","x = 4","x = 8","x = 6"], ans: 1 }],
      },
      {
        id: 3, title: "Geometry Basics", duration: "22:10", done: false,
        desc: "Shapes, angles, area, volume and the elegance of spatial reasoning.",
        materials: [
          { type: "pdf",   label: "Geometry Notes",         pages: 18 },
          { type: "slide", label: "3D Shapes Visual Guide", pages: 10 },
        ],
        quiz: [{ q: "Sum of angles in a triangle?", opts: ["90°","180°","270°","360°"], ans: 1 }],
      },
      {
        id: 4, title: "Statistics & Probability", duration: "25:00", done: false,
        desc: "Mean, median, mode, probability trees and data interpretation.",
        materials: [
          { type: "exercise", label: "Data Sets Practice",        items: 15 },
          { type: "pdf",      label: "Statistics Formula Sheet",  pages: 3  },
        ],
        quiz: [{ q: "Probability of an impossible event?", opts: ["1","0.5","0","−1"], ans: 2 }],
      },
    ],
  },
  {
    id: 2,
    title: "English Language Arts",
    instructor: "Ms. Chioma Adeleke",
    category: "English",
    progress: 40,
    color: "#2ec4b6",
    emoji: "📝",
    thumb: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=75&auto=format&fit=crop",
    lessons: [
      {
        id: 1, title: "Grammar & Syntax", duration: "14:00", done: true,
        desc: "Parts of speech, sentence structure, and rules that make language work.",
        materials: [
          { type: "pdf",      label: "Grammar Reference Guide",       pages: 22 },
          { type: "exercise", label: "Grammar Exercises — 40 Items",  items: 40 },
        ],
        quiz: [{ q: "Which of these is a conjunction?", opts: ["Quickly","But","Table","Running"], ans: 1 }],
      },
      {
        id: 2, title: "Essay Writing", duration: "20:00", done: false,
        desc: "Thesis statements, paragraph structure, argumentation and academic voice.",
        materials: [
          { type: "slide", label: "Essay Structure Slide Deck",    pages: 16 },
          { type: "pdf",   label: "Sample Essays — Annotated",     pages: 8  },
        ],
        quiz: [{ q: "The main argument of an essay is the?", opts: ["Topic","Thesis","Abstract","Preface"], ans: 1 }],
      },
      {
        id: 3, title: "Literature Analysis", duration: "17:30", done: false,
        desc: "Reading critically — themes, symbolism, and authorial intent in literary texts.",
        materials: [
          { type: "pdf",      label: "Analysis Framework Guide",  pages: 10 },
          { type: "exercise", label: "Close Reading Practice",    items: 12 },
        ],
        quiz: [{ q: "Repetition of initial consonant sounds is?", opts: ["Assonance","Alliteration","Metaphor","Simile"], ans: 1 }],
      },
    ],
  },
  {
    id: 3,
    title: "Introduction to Physics",
    instructor: "Mr. Emeka Nwosu",
    category: "Science",
    progress: 22,
    color: "#f4a261",
    emoji: "⚡",
    thumb: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&q=75&auto=format&fit=crop",
    lessons: [
      {
        id: 1, title: "Motion & Forces", duration: "30:00", done: true,
        desc: "Newton's laws, velocity, acceleration and free-body diagrams explained clearly.",
        materials: [
          { type: "pdf",      label: "Physics Notes Ch.1", pages: 25 },
          { type: "exercise", label: "Force Problems",     items: 18 },
        ],
        quiz: [{ q: "Newton's 1st Law is the law of?", opts: ["Gravity","Inertia","Momentum","Friction"], ans: 1 }],
      },
      {
        id: 2, title: "Energy & Work", duration: "26:30", done: false,
        desc: "Kinetic and potential energy, the work-energy theorem, and conservation laws.",
        materials: [
          { type: "pdf",   label: "Energy Chapter Notes", pages: 20 },
          { type: "slide", label: "Energy Diagrams",      pages: 8  },
        ],
        quiz: [{ q: "The SI unit of energy is the?", opts: ["Newton","Watt","Joule","Pascal"], ans: 2 }],
      },
      {
        id: 3, title: "Waves & Sound", duration: "24:00", done: false,
        desc: "Longitudinal and transverse waves, frequency, amplitude and the physics of sound.",
        materials: [
          { type: "pdf",      label: "Waves Reference Sheet", pages: 6  },
          { type: "exercise", label: "Wave Calculations",     items: 14 },
        ],
        quiz: [{ q: "Number of wave cycles per second is?", opts: ["Amplitude","Wavelength","Frequency","Period"], ans: 2 }],
      },
    ],
  },
  {
    id: 4,
    title: "Computer Science Basics",
    instructor: "Mrs. Funke Balogun",
    category: "Technology",
    progress: 10,
    color: "#e9c46a",
    emoji: "💻",
    thumb: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=75&auto=format&fit=crop",
    lessons: [
      {
        id: 1, title: "What is a Computer?", duration: "10:00", done: true,
        desc: "Hardware, software, input/output devices and how they all work together.",
        materials: [
          { type: "slide",    label: "Computer Components Deck", pages: 18 },
          { type: "exercise", label: "Label the Parts Quiz",     items: 10 },
        ],
        quiz: [{ q: "Which part of the computer processes data?", opts: ["RAM","Hard Drive","CPU","Monitor"], ans: 2 }],
      },
      {
        id: 2, title: "Introduction to Programming", duration: "35:00", done: false,
        desc: "Variables, loops, conditions and your first lines of code in Python.",
        materials: [
          { type: "pdf",      label: "Python Beginner Guide", pages: 30 },
          { type: "exercise", label: "Coding Challenges",     items: 10 },
        ],
        quiz: [{ q: "Which symbol starts a comment in Python?", opts: ["//","/*","#","--"], ans: 2 }],
      },
    ],
  },
];

export const FILE_ICONS  = { pdf: "📄", slide: "📊", exercise: "✏️", video: "🎬" };
export const FILE_BG     = {
  pdf:      "rgba(42,85,128,0.25)",
  slide:    "rgba(42,100,70,0.25)",
  exercise: "rgba(100,60,160,0.25)",
  video:    "rgba(160,100,42,0.25)",
};
export const FILE_BORDER = {
  pdf:      "rgba(80,160,220,0.3)",
  slide:    "rgba(80,200,140,0.3)",
  exercise: "rgba(150,100,220,0.3)",
  video:    "rgba(220,160,80,0.3)",
};
