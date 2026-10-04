// CMS-ready data structures. All content here can be replaced/extended by administrators later.

export const club = {
  name: "VOLTA FC",
  fullName: "Volta Football Club & Academy",
  tagline: "Elite Football Academy",
  established: "Est. 2014",
  accent: "#d6ff3b",
};

export const nav = [
  { label: "Academy", href: "#programs" },
  { label: "Methodology", href: "#methodology" },
  { label: "Coaches", href: "#coaches" },
  { label: "Pathway", href: "#pathway" },
  { label: "News", href: "#news" },
  { label: "Trials", href: "#trials" },
];

export const programs = [
  {
    code: "01",
    age: "U9 – U10",
    title: "FOUNDATION",
    objective: "Build football fundamentals and a love for the game.",
    technical: "Ball mastery, first touch, basic passing and dribbling.",
    tactical: "Spatial awareness and simple decision-making.",
    physical: "Coordination, balance and movement literacy.",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80",
  },
  {
    code: "02",
    age: "U11 – U12",
    title: "DEVELOPMENT",
    objective: "Introduce structured possession and team concepts.",
    technical: "Receiving under pressure, combination play, finishing range.",
    tactical: "Shape, roles and basic formations (4v4 → 9v9).",
    physical: "Speed foundations, agility and body strength.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
  },
  {
    code: "03",
    age: "U13 – U14",
    title: "ADVANCED DEVELOPMENT",
    objective: "Bridge between development and competitive football.",
    technical: "Two-footed play, aerial duels, set-piece execution.",
    tactical: "Phases of play, pressing triggers and transitions.",
    physical: "Periodised strength, sprint work and conditioning.",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&q=80",
  },
  {
    code: "04",
    age: "U15 – U16",
    title: "PERFORMANCE",
    objective: "High-intensity competitive football with professional habits.",
    technical: "Position-specific skills, advanced finishing patterns.",
    tactical: "Game model, opponent analysis, set-play design.",
    physical: "Power development, repeat-sprint capacity, recovery.",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80",
  },
  {
    code: "05",
    age: "U17 – U18",
    title: "ELITE PATHWAY",
    objective: "Final-stage development for senior and professional football.",
    technical: "High-level execution under fatigue and pressure.",
    tactical: "Full game model, leadership and team management.",
    physical: "Senior load management, injury prevention protocols.",
    image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1200&q=80",
  },
  {
    code: "PRO",
    age: "Senior",
    title: "PROFESSIONAL DEVELOPMENT",
    objective: "Advanced pathway for professional-level players.",
    technical: "Elite individual technical refinement.",
    tactical: "Position-specific tactical intelligence and analysis.",
    physical: "Professional S&C, nutrition and recovery planning.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=80",
  },
];

export const methodology = [
  {
    code: "01",
    title: "TECHNICAL",
    desc: "Ball mastery, passing, first touch, dribbling, finishing.",
    points: ["First touch", "Passing range", "1v1 dribbling", "Finishing", "Ball mastery"],
  },
  {
    code: "02",
    title: "TACTICAL",
    desc: "Game intelligence, positioning, decision-making and formations.",
    points: ["Game reading", "Positioning", "Decision making", "Phases of play", "Formations"],
  },
  {
    code: "03",
    title: "PHYSICAL",
    desc: "Speed, agility, strength, endurance and injury prevention.",
    points: ["Speed", "Agility", "Strength", "Endurance", "Injury prevention"],
  },
  {
    code: "04",
    title: "MENTAL",
    desc: "Confidence, discipline, leadership and competitive mindset.",
    points: ["Confidence", "Discipline", "Leadership", "Resilience", "Focus"],
  },
  {
    code: "05",
    title: "PERFORMANCE",
    desc: "Match analysis, individual development plans and tracking.",
    points: ["Match analysis", "IDP", "Performance tracking", "Video review", "Reports"],
  },
];

export const coaches = [
  {
    name: "Head Coach — U18",
    role: "Academy Director",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&q=80",
    experience: "12+ Years",
    badges: ["B Licence", "AFC C", "State Level", "National Level"],
  },
  {
    name: "Senior Coach — U15/U16",
    role: "Performance Phase Lead",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=900&q=80",
    experience: "9+ Years",
    badges: ["B Licence", "State Level"],
  },
  {
    name: "Coach — U13/U14",
    role: "Development Phase",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80",
    experience: "7+ Years",
    badges: ["B Licence", "State Level"],
  },
  {
    name: "Coach — U11/U12",
    role: "Foundation Phase",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
    experience: "6+ Years",
    badges: ["B Licence", "National Level"],
  },
  {
    name: "Coach — U9/U10",
    role: "Grassroots Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80",
    experience: "5+ Years",
    badges: ["B Licence", "State Level"],
  },
  {
    name: "Goalkeeping Coach",
    role: "Specialist — GK Unit",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&q=80",
    experience: "10+ Years",
    badges: ["GK Licence", "National Level"],
  },
  {
    name: "Performance Coach",
    role: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=900&q=80",
    experience: "8+ Years",
    badges: ["S&C Cert.", "National Level"],
  },
  {
    name: "Girls Academy Lead",
    role: "Girls Pathway Coach",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80",
    experience: "7+ Years",
    badges: ["B Licence", "State Level", "National Level"],
  },
];

export const pathway = [
  { stage: "Grassroots", note: "First introduction to football" },
  { stage: "Foundation", note: "Technical fundamentals" },
  { stage: "Development", note: "Structured possession & shape" },
  { stage: "Competitive", note: "League and tournament football" },
  { stage: "Elite", note: "High-performance environment" },
  { stage: "Professional Pathway", note: "Senior & professional opportunities" },
];

export const performance = [
  { label: "Technical", value: 82 },
  { label: "Tactical", value: 76 },
  { label: "Physical", value: 88 },
  { label: "Decision Making", value: 81 },
  { label: "Match Performance", value: 85 },
];

export const trainingExperiences = [
  { title: "Passing Exercises", img: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=900&q=80" },
  { title: "Shooting Drills", img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=900&q=80" },
  { title: "Small-Sided Games", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=900&q=80" },
  { title: "Tactical Sessions", img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=900&q=80" },
  { title: "Fitness Training", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=900&q=80" },
  { title: "Goalkeeper Training", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=900&q=80" },
  { title: "Match Preparation", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80" },
];

export const schedule = [
  { day: "MONDAY", focus: "Technical Development", note: "Ball mastery, passing & first touch." },
  { day: "TUESDAY", focus: "Tactical Training", note: "Game model, shape & decision-making." },
  { day: "WEDNESDAY", focus: "Physical Performance", note: "Speed, agility, strength & conditioning." },
  { day: "THURSDAY", focus: "Technical + Tactical", note: "Position-specific & phase play." },
  { day: "FRIDAY", focus: "Match Preparation", note: "Set-pieces, game plan & intensity." },
  { day: "SATURDAY", focus: "Competitive Match / Assessment", note: "Fixtures, trials & assessment games." },
];

export const facilities = [
  { title: "Football Ground", img: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80" },
  { title: "Training Pitch", img: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=1200&q=80" },
  { title: "Goalkeeper Area", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=1200&q=80" },
  { title: "Strength & Conditioning", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80" },
  { title: "Recovery Area", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80" },
  { title: "Analysis Room", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" },
  { title: "Changing Rooms", img: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=1200&q=80" },
];

export const achievements = [
  { label: "Championships", value: 0, suffix: "" },
  { label: "Tournaments", value: 0, suffix: "" },
  { label: "Player Development", value: 0, suffix: "+" },
  { label: "State Competitions", value: 0, suffix: "" },
  { label: "National Competitions", value: 0, suffix: "" },
];

export const parentPoints = [
  { title: "Structured Training", desc: "Planned sessions aligned to the academy game model." },
  { title: "Qualified Coaching", desc: "B Licence coaches with state & national experience." },
  { title: "Player Tracking", desc: "Individual development plans & progress reports." },
  { title: "Regular Assessments", desc: "Periodic reviews and parent feedback sessions." },
  { title: "Match Exposure", desc: "Competitive fixtures and showcase opportunities." },
  { title: "Safe Environment", desc: "Safeguarding-led culture and structured supervision." },
  { title: "Coach Communication", desc: "Direct channels with coaching staff." },
  { title: "Long-Term Pathway", desc: "A clear route from grassroots to professional." },
];

export const news = [
  {
    cat: "Trials",
    title: "Open Trials 2026 — Boys & Girls U9–U18",
    date: "Jan 18, 2026",
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80",
    excerpt: "Registration is now open for the 2026 intake across all age groups.",
  },
  {
    cat: "Tournament",
    title: "Academy U16 reach State Cup Final",
    date: "Jan 12, 2026",
    img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&q=80",
    excerpt: "A composed 2–1 semi-final victory books our place in the State Cup final.",
  },
  {
    cat: "Academy",
    title: "New Performance Lab opens for 2026 season",
    date: "Jan 06, 2026",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    excerpt: "GPS tracking, force-plate testing and integrated IDPs go live this month.",
  },
  {
    cat: "Players",
    title: "Three academy players selected for National Trials",
    date: "Dec 22, 2025",
    img: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1200&q=80",
    excerpt: "Continued progression through the elite pathway recognised nationally.",
  },
  {
    cat: "Camps",
    title: "Elite Performance Camp — February intake",
    date: "Dec 14, 2025",
    img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80",
    excerpt: "Five-day intensive for U13–U18 players looking to accelerate development.",
  },
  {
    cat: "Club",
    title: "Girls Academy announces expanded 2026 schedule",
    date: "Dec 02, 2025",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
    excerpt: "Additional fixtures and a dedicated performance pathway for female players.",
  },
];

export const matches = {
  upcoming: {
    home: "VOLTA FC U18",
    away: "Opponent TBD",
    competition: "State League",
    date: "Sat, 25 Jan 2026",
    time: "16:00",
    venue: "Volta Training Ground",
  },
  results: [
    { home: "VOLTA FC", away: "Opponent", score: "3 – 1", result: "W", date: "Jan 18" },
    { home: "Opponent", away: "VOLTA FC", score: "1 – 1", result: "D", date: "Jan 11" },
    { home: "VOLTA FC", away: "Opponent", score: "0 – 2", result: "L", date: "Jan 04" },
    { home: "Opponent", away: "VOLTA FC", score: "2 – 3", result: "W", date: "Dec 21" },
  ],
};

export const gallery = [
  { src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80", title: "Senior Training Session", date: "Jan 18, 2026" },
  { src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&q=80", title: "U16 Tactical Session", date: "Jan 14, 2026" },
  { src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=80", title: "Strength & Conditioning", date: "Jan 10, 2026" },
  { src: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1200&q=80", title: "Match Preparation", date: "Jan 06, 2026" },
  { src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80", title: "Set-Piece Training", date: "Dec 28, 2025" },
  { src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80", title: "Girls Academy Session", date: "Dec 22, 2025" },
  { src: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=1200&q=80", title: "Goalkeeper Unit", date: "Dec 15, 2025" },
  { src: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=1200&q=80", title: "Training Pitch Aerial", date: "Dec 09, 2025" },
  { src: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80", title: "Match Day Atmosphere", date: "Dec 02, 2025" },
];