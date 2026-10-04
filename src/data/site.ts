// Lightning Siuu Academy — Centralized Data File
// All content here is fully editable by academy management.

export const club = {
  name: "LIGHTNING SIUU",
  fullName: "Lightning Siuu Academy",
  tagline: "Strike Fast. Play Bold. Rise Like Lightning.",
  established: "Academy",
  accent: "#d6ff3b",
  h1Title: "Premium Football Academy in Pimpri-Chinchwad, Pune",
  heroSubtitle:
    "Lightning Siuu Academy provides structured football coaching for boys and girls, helping young players build technical ability, tactical understanding, confidence and competitive experience.",
  location: {
    facility: "Orchid International School, Chinchwad",
    address:
      "Orchid International School, Chinchwad, Next to Luxury Living, Near Yashopuram Housing Society, Pimpri-Chinchwad, Pune, Maharashtra.",
    city: "Pimpri-Chinchwad, Pune",
    state: "Maharashtra",
    pincode: "411019",
    googleMapsUrl:
      "https://maps.google.com/?q=Orchid+International+School+Chinchwad+Pune",
  },
  contact: {
    // Editable contact placeholders — provide real details when ready
    whatsappNumber: "919000000000", // Update with official WhatsApp number
    whatsappMessage: encodeURIComponent(
      "Hello Lightning Siuu Academy! I would like to book a football trial session."
    ),
    phonePlaceholder: "+91 [Contact Number]",
    emailPlaceholder: "info@lightningsiuuacademy.com",
  },
};

export const nav = [
  { label: "Academy", href: "#academy" },
  { label: "Programs", href: "#programs" },
  { label: "Boys & Girls", href: "#boys-girls" },
  { label: "Methodology", href: "#methodology" },
  { label: "Coach", href: "#coach" },
  { label: "Pathway", href: "#pathway" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export interface HeroSlide {
  id: number;
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  subheading: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  image: string;
  altText: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "PIMPRI-CHINCHWAD, PUNE",
    headlineLine1: "BUILD YOUR GAME.",
    headlineLine2: "BUILD YOUR FUTURE.",
    subheading:
      "Premium football coaching and player development in Pimpri-Chinchwad, Pune.",
    primaryCta: { text: "BOOK A TRIAL", href: "#trials" },
    secondaryCta: { text: "EXPLORE PROGRAMS", href: "#programs" },
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=2400&q=85",
    altText:
      "Young football players training at Lightning Siuu Academy in Pimpri-Chinchwad",
  },
  {
    id: 2,
    eyebrow: "LIGHTNING SIUU ACADEMY",
    headlineLine1: "STRIKE FAST. PLAY BOLD.",
    headlineLine2: "RISE LIKE LIGHTNING.",
    subheading:
      "Structured football training for boys and girls, from grassroots development to competitive performance.",
    primaryCta: { text: "JOIN LIGHTNING SIUU", href: "#trials" },
    secondaryCta: { text: "OUR METHODOLOGY", href: "#methodology" },
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=2400&q=85",
    altText:
      "Youth football player dribbling with ball during structured coaching session in Pune",
  },
  {
    id: 3,
    eyebrow: "STRUCTURED FOOTBALL COACHING",
    headlineLine1: "YOUR FOOTBALL",
    headlineLine2: "JOURNEY STARTS HERE.",
    subheading:
      "Technical training. Tactical intelligence. Match experience. Player development.",
    primaryCta: { text: "BOOK A TRIAL", href: "#trials" },
    secondaryCta: { text: "MEET THE COACH", href: "#coach" },
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=2400&q=85",
    altText:
      "Football coaching session for boys and girls at Orchid International School ground in Chinchwad",
  },
  {
    id: 4,
    eyebrow: "DEVELOPMENT & PERFORMANCE",
    headlineLine1: "TRAIN WITH PURPOSE.",
    headlineLine2: "PLAY WITH CONFIDENCE.",
    subheading:
      "Football coaching for young players across Chinchwad, Pimpri-Chinchwad and Pune.",
    primaryCta: { text: "ENQUIRE NOW", href: "#contact" },
    secondaryCta: { text: "WHY LIGHTNING SIUU", href: "#why-us" },
    image:
      "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=2400&q=85",
    altText:
      "Young football players practicing tactical drills during academy training session",
  },
];

export const localAreas = [
  { name: "Chinchwad", dist: "Primary Location", tag: "Academy Pitch" },
  { name: "Pimpri", dist: "PCMC Core", tag: "Serving Families" },
  { name: "Wakad", dist: "Nearby PCMC", tag: "Serving Families" },
  { name: "Ravet", dist: "Nearby PCMC", tag: "Serving Families" },
  { name: "Nigdi", dist: "Nearby PCMC", tag: "Serving Families" },
  { name: "Akurdi", dist: "Nearby PCMC", tag: "Serving Families" },
  { name: "Tathawade", dist: "Nearby PCMC", tag: "Serving Families" },
  { name: "Punawale", dist: "Nearby PCMC", tag: "Serving Families" },
  { name: "Pimple Saudagar", dist: "Nearby PCMC", tag: "Serving Families" },
  { name: "Pimple Nilakh", dist: "Nearby PCMC", tag: "Serving Families" },
  { name: "Thergaon", dist: "Nearby PCMC", tag: "Serving Families" },
  { name: "Rahatani", dist: "Nearby PCMC", tag: "Serving Families" },
  { name: "Hinjewadi", dist: "Nearby PCMC", tag: "Serving Families" },
  { name: "Bhosari", dist: "Nearby PCMC", tag: "Serving Families" },
];

export const headCoach = {
  name: "Julekha Salim Bijali",
  title: "Head Coach & Technical Director",
  tagline: "Train with experience. Develop with purpose.",
  credentials: [
    "C Licence Coach",
    "All India Player",
    "National Player",
    "Maharashtra Team Coach — 2 times",
  ],
  bio: "Coach Julekha Salim Bijali brings top-level competitive playing and coaching experience to Lightning Siuu Academy. Having represented Maharashtra and played at the national level as an All India Player, she brings deep insight into technical player development, tactical understanding, and competitive player mindset.",
  coachingPhilosophy:
    "Football development is built on strong technical fundamentals, tactical decision-making, physical discipline, and self-confidence. Every young player — boy or girl — deserves structured guidance, encouraging feedback, and competitive opportunity to reach their full potential.",
  image:
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=1200&q=80", // High quality athletic portrait
  altText:
    "Head Coach Julekha Salim Bijali, C Licence Coach and former National Player, leading Lightning Siuu Academy",
};

export const programs = [
  {
    code: "01",
    age: "Ages 6–8",
    title: "FOUNDATION",
    objective:
      "Introduce football fundamentals, motor skills, and fun competition.",
    technical: "Basic ball mastery, first touch, simple passing and dribbling.",
    tactical: "Spatial awareness, simple movement into space.",
    physical: "Agility, coordination, balance, and running mechanics.",
    mental: "Building confidence, enthusiasm, and sport discipline.",
    matchExposure: "Fun small-sided games (3v3 / 4v4).",
    progression: "Prepares young players for structured grassroots training.",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80",
  },
  {
    code: "02",
    age: "Ages 8–10",
    title: "GRASSROOTS",
    objective: "Develop core technical mastery and decision-making.",
    technical:
      "Receiving, passing accuracy, 1v1 dribbling moves, shooting technique.",
    tactical: "Understanding team roles, basic pitch positions.",
    physical: "Speed, reaction time, body coordination.",
    mental: "Focus, teamwork, positive communication.",
    matchExposure: "Small-sided matches (5v5 / 7v7).",
    progression: "Transition into structured positional play.",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
  },
  {
    code: "03",
    age: "Ages 10–12",
    title: "DEVELOPMENT",
    objective: "Refine technical execution under pressure and team shape.",
    technical:
      "Passing under pressure, aerial control, two-footed ball mastery.",
    tactical: "Phases of play, pressing triggers, building from the back.",
    physical: "Core strength, agility, repeat sprint capacity.",
    mental: "Resilience, accountability, match focus.",
    matchExposure: "Competitive 7v7 & 9v9 internal and friendly fixtures.",
    progression: "Prepares players for full-pitch competitive football.",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&q=80",
  },
  {
    code: "04",
    age: "Ages 12–14",
    title: "ADVANCED DEVELOPMENT",
    objective:
      "Bridge development football with high-intensity competition.",
    technical: "Position-specific skills, advanced finishing techniques.",
    tactical: "Full 11v11 tactics, defensive line coordination, transitions.",
    physical: "Periodized conditioning, functional speed and power.",
    mental: "Leadership, competitive mindset, self-evaluation.",
    matchExposure: "Full 11v11 match play and regional tournament fixtures.",
    progression: "Transition into high-performance youth football.",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80",
  },
  {
    code: "05",
    age: "Ages 14–16",
    title: "PERFORMANCE",
    objective:
      "High-intensity competitive football with tactical discipline.",
    technical:
      "High-speed technical execution, specialized positional drills.",
    tactical: "Game model execution, opponent analysis, set-piece roles.",
    physical: "Athletic power, endurance, recovery protocols.",
    mental: "Pressure management, focus, elite work ethic.",
    matchExposure: "Competitive league and tournament exposure.",
    progression: "Entry into elite youth pathway.",
    image:
      "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1200&q=80",
  },
  {
    code: "06",
    age: "Ages 16–18",
    title: "ELITE PATHWAY",
    objective: "Final preparation for senior competitive football.",
    technical: "Precision execution under fatigue and intense pressure.",
    tactical: "Comprehensive tactical awareness and match management.",
    physical: "Senior load management and injury prevention.",
    mental: "Professional habits, leadership, performance consistency.",
    matchExposure: "High-level competition and showcase games.",
    progression: "Senior team readiness and advanced pathway options.",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=80",
  },
];

export const methodology = [
  {
    code: "01",
    title: "TECHNICAL MASTERY",
    desc: "Building effortless ball control, precision passing, first touch, and finishing.",
    points: [
      "Ball mastery",
      "First touch under pressure",
      "Passing range & accuracy",
      "1v1 offensive & defensive skills",
      "Finishing in match scenarios",
    ],
  },
  {
    code: "02",
    title: "TACTICAL INTELLIGENCE",
    desc: "Developing game understanding, spatial awareness, and quick decision-making.",
    points: [
      "Positional awareness",
      "Decision-making speed",
      "Team shape & compact defensive lines",
      "Attacking transitions",
      "Game model understanding",
    ],
  },
  {
    code: "03",
    title: "PHYSICAL PREPARATION",
    desc: "Enhancing agility, speed, strength, and movement mechanics for football.",
    points: [
      "Speed & acceleration",
      "Agility & change of direction",
      "Functional strength & core stability",
      "Cardiovascular endurance",
      "Injury prevention exercises",
    ],
  },
  {
    code: "04",
    title: "MENTAL RESILIENCE",
    desc: "Fostering confidence, discipline, sportsmanship, and leadership on and off the pitch.",
    points: [
      "Self-confidence & courage to play",
      "Discipline & punctuality",
      "Teamwork & mutual support",
      "Focus under pressure",
      "Leadership qualities",
    ],
  },
  {
    code: "05",
    title: "MATCH PERFORMANCE",
    desc: "Applying training concepts into real match situations with constructive feedback.",
    points: [
      "Structured match play",
      "Individual progress feedback",
      "Match video analysis sessions",
      "Tactical debriefs",
      "Development tracking",
    ],
  },
];

export const pathway = [
  {
    stage: "DISCOVER",
    note: "First introduction to structured football for beginners",
  },
  {
    stage: "FOUNDATION",
    note: "Core technical fundamentals, coordination & motor skills",
  },
  {
    stage: "DEVELOPMENT",
    note: "Possession, spatial awareness & small-sided match play",
  },
  {
    stage: "COMPETITIVE",
    note: "Positions, tactical understanding & competitive exposure",
  },
  {
    stage: "PERFORMANCE",
    note: "High-intensity technical-tactical execution & match play",
  },
  {
    stage: "ELITE PATHWAY",
    note: "Advanced player development for senior football readiness",
  },
];

export const whyChooseCards = [
  {
    title: "Structured Training Curriculum",
    desc: "Age-appropriate training modules designed to progress players systematically from foundation to performance.",
    icon: "LayoutGrid",
  },
  {
    title: "Qualified Coaching Leadership",
    desc: "Led by C Licence Coach and former National Player Julekha Salim Bijali, ensuring professional standards.",
    icon: "Award",
  },
  {
    title: "Technical Development Focus",
    desc: "Emphasis on first touch, ball control, passing accuracy, and 1v1 mastery.",
    icon: "Target",
  },
  {
    title: "Tactical Game Intelligence",
    desc: "Teaching players how to read the game, make smart decisions, and understand positions.",
    icon: "Brain",
  },
  {
    title: "Match Experience",
    desc: "Regular small-sided games and competitive match fixtures to test training concepts.",
    icon: "Trophy",
  },
  {
    title: "Player Progress Tracking",
    desc: "Continuous evaluation and constructive feedback to help each child improve.",
    icon: "TrendingUp",
  },
  {
    title: "Boys & Girls Development",
    desc: "Equal opportunity, supportive environment, and dedicated coaching for female and male athletes.",
    icon: "Users",
  },
  {
    title: "Competitive Mindset",
    desc: "Fostering sportsmanship, resilience, discipline, and a strong work ethic.",
    icon: "Zap",
  },
  {
    title: "Long-Term Football Pathway",
    desc: "Clear progression stages keeping players engaged and motivated as they grow.",
    icon: "Compass",
  },
];

export const weeklySchedule = [
  {
    day: "MONDAY",
    focus: "Technical Mastery & Ball Control",
    note: "First touch, passing accuracy, dribbling and 1v1 skill development.",
  },
  {
    day: "TUESDAY",
    focus: "Tactical Positioning & Shape",
    note: "Game reading, positional movement, build-up play, and team compactness.",
  },
  {
    day: "WEDNESDAY",
    focus: "Physical Agility & Movement",
    note: "Speed, footwork, coordination, core strength, and injury prevention.",
  },
  {
    day: "THURSDAY",
    focus: "Attacking & Finishing Patterns",
    note: "Combination play, crossing, shooting technique, and decision-making in the final third.",
  },
  {
    day: "FRIDAY",
    focus: "Match Preparation & Intensity",
    note: "Small-sided games, set-piece organization, and high-intensity match scenarios.",
  },
  {
    day: "SATURDAY",
    focus: "Competitive Match Exposure / Assessment",
    note: "Internal matches, friendly fixtures, assessment sessions, and progress tracking.",
  },
];

export const parentExpectations = [
  {
    title: "Structured & Planned Training",
    desc: "Every session is carefully planned with clear learning objectives for each age group.",
  },
  {
    title: "Experienced Coaching Staff",
    desc: "Coaching led by C Licence & former National player with state coaching experience.",
  },
  {
    title: "Safe & Encouraging Environment",
    desc: "Positive atmosphere where young players feel confident to try, learn, and grow.",
  },
  {
    title: "Balanced Development",
    desc: "Focus on technical skills, physical fitness, sportsmanship, and discipline.",
  },
  {
    title: "Open Coach Communication",
    desc: "Clear updates on your child's development, attendance, and progress.",
  },
  {
    title: "Equality for Boys & Girls",
    desc: "Dedicated attention and equal training opportunities for both female and male players.",
  },
];

export const faqs = [
  {
    question: "What age can my child start football training at Lightning Siuu Academy?",
    answer:
      "Children can join Lightning Siuu Academy starting from age 6 (Foundation Program) up to age 18 (Elite Pathway). We offer structured groups tailored specifically to each age and development stage.",
  },
  {
    question: "Where is Lightning Siuu Academy located?",
    answer:
      "Our main training ground is located at Orchid International School, Chinchwad, Next to Luxury Living, Near Yashopuram Housing Society, Pimpri-Chinchwad, Pune, Maharashtra.",
  },
  {
    question: "Is Lightning Siuu Academy in Pimpri-Chinchwad?",
    answer:
      "Yes, Lightning Siuu Academy is physically located in Chinchwad, Pimpri-Chinchwad (PCMC), Pune, making it conveniently accessible for families across PCMC and Pune.",
  },
  {
    question: "Do you provide football coaching for girls?",
    answer:
      "Yes! Lightning Siuu Academy provides structured football coaching for both boys and girls. We believe every player deserves equal opportunity, encouragement, and high-quality coaching to excel in football.",
  },
  {
    question: "Do beginners need previous football experience?",
    answer:
      "No previous experience is required for beginner programs (Foundation & Grassroots). Our qualified coaches teach fundamental skills from scratch, building ball confidence step-by-step.",
  },
  {
    question: "How often are football training sessions conducted?",
    answer:
      "Training sessions are conducted multiple days per week depending on the program level, ranging from 3 to 5 weekly sessions plus weekend match play/assessments.",
  },
  {
    question: "What should my child bring to football training?",
    answer:
      "Players should wear suitable sportswear, football studs/turf shoes, shin guards, and bring a personal water bottle. Official academy kit guidance is provided upon registration.",
  },
  {
    question: "How can I book a football trial session?",
    answer:
      "You can book a trial session by filling out the online Trial Booking Form on our website or contacting us directly via WhatsApp / phone enquiry.",
  },
  {
    question: "Which areas of Pune and PCMC do you serve?",
    answer:
      "We serve young players and families from Chinchwad, Pimpri, Wakad, Ravet, Nigdi, Akurdi, Tathawade, Punawale, Pimple Saudagar, Pimple Nilakh, Thergaon, Rahatani, Hinjewadi, Bhosari, and surrounding Pune regions.",
  },
  {
    question: "Do players get match exposure?",
    answer:
      "Yes! Match play is an integral part of our curriculum. Players participate in regular internal small-sided games, friendly matches, and age-appropriate competitive fixtures.",
  },
];