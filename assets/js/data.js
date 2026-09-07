/* ==========================================================================
   Chapter data — Omega Chapter, Pi Delta Psi Fraternity, Inc.
   --------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT WHEN THE CHAPTER CHANGES.
   Add a pledge class, update the e-board, add a committee — it all flows
   through to the pages automatically.
   ========================================================================== */

/* --------------------------------------------------------------------------
   PLEDGE CLASSES
   Each brother is [lineNumber, "Full Name", "Line Name"]
   To add a new class, copy the last block and change the values.
   -------------------------------------------------------------------------- */
const PLEDGE_CLASSES = [
  {
    name: "Alpha", greek: "Α", term: "Spring 2008",
    educator: 'Keith Tsang "A.W.P."', assistant: 'Mick Chen "Hydra"',
    brothers: [
      [1, "Andrew Tan", "Acolyte"],
      [2, "Terry Tian", "Cookie Monster"],
      [3, "David Zheng", "Mach One"],
      [4, "Shiwei Yan", "Sinister"],
      [5, "Jin Lee", "Strife"],
      [6, "James Li", "Hotshot"],
      [7, "Thomas Wang", "SoCo"],
      [8, "Colin Li", "Prototype"],
      [9, "Jeff Zhang", "Militia"],
      [10, "Clinton Lo-Lau", "Rockstar"],
      [11, "Arthur Aina", "Bartman"],
      [12, "Ronald Liu", "Avalanche"]
    ]
  },
  {
    name: "Beta", greek: "Β", term: "Fall 2008",
    educator: 'Jin Lee "Strife"', assistant: 'Terry Tian "Cookie Monster"',
    brothers: [
      [13, "Connor O'Brien", "Stallion"],
      [14, "Justin Huang", "Cornell"],
      [15, "Chia Chen", "Dionysus"],
      [16, "Brian Yu", "F.I.R.E. Man"],
      [17, "Kevin Jung", "Buzz Lightyear"]
    ]
  },
  {
    name: "Gamma", greek: "Γ", term: "Spring 2009",
    educator: 'David Zheng "Mach One"', assistant: 'Andrew Tan "Acolyte"',
    brothers: [
      [18, "Sereibot Yem", "Silver Bullet"]
    ]
  },
  {
    name: "Delta", greek: "Δ", term: "Fall 2009",
    educator: 'Clinton Lo-Lau "Rockstar"', assistant: 'Thomas Wang "SoCo"',
    brothers: [
      [20, "Victor Zhu", "Mos Def"],
      [21, "Shahril Ghazali", "Gengar"],
      [22, "Tenzin Kunkyab", "Maximus"],
      [23, "Tony Vilaysane", "G-Dub"],
      [24, "Nishang Gupta", "Pokerface"],
      [25, "Junichi Robert Sakaki", "Makaveli"],
      [26, "Dan Cheung", "Trick"],
      [27, "Jaycen Crisafulli", "Tazmanian Devil"],
      [28, "Tom Chen", "Midas"],
      [29, "Andrew Kam", "Phalanx"],
      [30, "Tommy Pham", "Majin Buu"]
    ]
  },
  {
    name: "Epsilon", greek: "Ε", term: "Spring 2010",
    educator: "", assistant: 'Shiwei Yan "Sinister"',
    brothers: [
      [31, "Jan Mico Ruiz", "Stinger"],
      [32, "Chime Tsewang", "Radar"],
      [33, "Patrick Lour", "Magnitude"]
    ]
  },
  {
    name: "Zeta", greek: "Ζ", term: "Fall 2010",
    educator: 'Colin Li "Prototype"', assistant: 'Sereibot Yem "Silver Bullet"',
    brothers: [
      [34, "David Kuon", ".COM"],
      [35, "Tim Yoon", "Miracle"],
      [36, "Christopher Hoang", "Matrix"],
      [37, "Nicholas Lau", "Apex"]
    ]
  },
  {
    name: "Eta", greek: "Η", term: "Spring 2011",
    educator: 'Ronald Liu "Avalanche"', assistant: 'Colin Li "Prototype"',
    brothers: [
      [38, "Don Hoang", "Spirit Bomb"],
      [39, "John Nguyen", "Microbe"],
      [40, "Joshua Anunciado", "C.U.P.I.D."]
    ]
  },
  {
    name: "Theta", greek: "Θ", term: "Fall 2011",
    educator: 'Victor Zhu "Mos Def"', assistant: 'Andrew Kam "Phalanx"',
    brothers: [
      [42, "Daryl Phin", "Astroboy"],
      [43, "Kevin Fan", "ICE IX"]
    ]
  },
  {
    name: "Iota", greek: "Ι", term: "Spring 2012",
    educator: 'Tommy Pham "Majin Buu"', assistant: 'Patrick Lour "Magnitude"',
    brothers: [
      [44, "Jerlon Chiu", "Tuvok"],
      [46, "Prima Mote", "Method Man"],
      [47, "Muhamad Chowdhury", "Tik Tok"],
      [48, "Douglas Stephan", "Airbender"],
      [49, "Richard Kim", "Max Payne"]
    ]
  },
  {
    name: "Lambda", greek: "Λ", term: "Spring 2013",
    educator: 'Tony Vilaysane "G-Dub"', assistant: 'Richard Kim "Max Payne"',
    brothers: [
      [50, "Carl Tang", "Zuko"],
      [51, "Austin Funes", "C.O.G."]
    ]
  },
  {
    name: "Mu", greek: "Μ", term: "Fall 2013",
    educator: 'Douglas Stephan "Airbender"', assistant: "",
    brothers: [
      [52, "Brandon Ngai", "MAC-10"],
      [53, "Eric Wu", "A1PHA STRIKE"],
      [55, "David Tang", "Susano'o"],
      [56, "Sherman Lau", "Firebreather"]
    ]
  },
  {
    name: "Nu", greek: "Ν", term: "Spring 2015",
    educator: 'Kevin Fan "ICE IX"', assistant: 'Steven Lean "F-18"',
    brothers: [
      [58, "Andre Jang", "Blackbird"],
      [59, "Marco Wong", "i, Robot"],
      [60, "Ky Tran", "Malware"],
      [61, "Tenzing Ravzam", "Maybach"],
      [62, "Tony Chow", "Sudowoodo"]
    ]
  },
  {
    name: "Xi", greek: "Ξ", term: "Fall 2015",
    educator: 'Austin Funes "C.O.G."', assistant: "",
    brothers: [
      [63, "Michael Nguyen Jr.", "Helghast"],
      [65, "Will Wang", "Bolin"]
    ]
  },
  {
    name: "Omicron", greek: "Ο", term: "Spring 2016",
    educator: 'Brandon Ngai "MAC-10"', assistant: 'Marco Wong "i, Robot"',
    brothers: [
      [66, "David Ng", "GNAR"],
      [67, "Ken Phung", "FANG"],
      [68, "Denny Kim", "Moon Knight"],
      [69, "Prathik Rao Jakkaraju", "Raiden"],
      [70, "Wesley Zhang", "Alistar"],
      [71, "Justin Hong", "Martyrdom"]
    ]
  },
  {
    name: "Pi", greek: "Π", term: "Fall 2016",
    educator: 'Tony Chow "Sudowoodo"', assistant: 'Michael Nguyen Jr. "Helghast"',
    brothers: [
      [72, "Michael Pham", "TACTICAL"],
      [73, "Yan Xin Zhao", "MUNITION"]
    ]
  },
  {
    name: "Rho", greek: "Ρ", term: "Spring 2017",
    educator: 'Eric Wu "A1PHA STRIKE"', assistant: 'Will Wang "Bolin"',
    brothers: [
      [74, "Herman Ng", "PREMIER"],
      [75, "Patrick Ryan Relator", "AIZEN"]
    ]
  },
  {
    name: "Sigma", greek: "Σ", term: "Fall 2017",
    educator: 'Marco Wong "i, Robot"', assistant: 'David Ng "GNAR"',
    brothers: [
      [76, "Patrick Nguyen", "MINATO"],
      [77, "Tommy Phung", "Mystogan"]
    ]
  },
  {
    name: "Tau", greek: "Τ", term: "Spring 2018",
    educator: 'Will Wang "Bolin"', assistant: 'Ken Phung "FANG"',
    brothers: [
      [79, "Kevin Nguyen", "Meliodas"],
      [80, "Joey Phan", "Avocado"],
      [81, "Ravinder Singh", "OATHKEEPER"],
      [82, "Kevin Li", "COSMONAUT"],
      [83, "Tommy Duong", "BioShock"]
    ]
  },
  {
    name: "Upsilon", greek: "Υ", term: "Fall 2018",
    educator: 'Wesley Zhang "Alistar"', assistant: 'Patrick Nguyen "MINATO"',
    brothers: [
      [84, "Harvey Zhang", "Bel-Air"],
      [86, "Matt Cheng", "A.Y.C.E."]
    ]
  },
  {
    name: "Phi", greek: "Φ", term: "Spring 2019",
    educator: 'Herman Ng "PREMIER"', assistant: 'Tommy Phung "Mystogan"',
    brothers: [
      [87, "Justin Catalina", "Ichimaru"],
      [88, "Allen Deng", "MOIST"],
      [89, "Bobby Zhang", "Slowking"]
    ]
  },
  {
    name: "Chi", greek: "Χ", term: "Fall 2019",
    educator: 'Patrick Relator "AIZEN"', assistant: 'Kevin Nguyen "Meliodas"',
    brothers: [
      [90, "Jason Chen", "Space X"],
      [91, "Lorenzo Legaspi", "MIDORIYA"],
      [92, "Kevin Kim", "MADARA"]
    ]
  },
  {
    name: "Omega", greek: "Ω", term: "Fall 2021",
    educator: 'Matt Cheng "A.Y.C.E."', assistant: 'Lorenzo Legaspi "MIDORIYA"',
    brothers: [
      [93, "Brian Nguyen", "Front Man"],
      [94, "Jasper Cheng", "Arctas"],
      [95, "Dennis Nguyen", "KAYO"],
      [96, "Joshua Rabara", "OVO"]
    ]
  },
  {
    name: "Alpha Alpha", greek: "ΑΑ", term: "Spring 2022",
    educator: 'Jason Chen "Space X"', assistant: 'Kevin Kim "MADARA"',
    brothers: [
      [97, "Samuel Han", "SOJU BOY"]
    ]
  },
  {
    name: "Alpha Beta", greek: "ΑΒ", term: "Fall 2022",
    educator: 'Joshua Rabara "OVO"', assistant: 'Jasper Cheng "Arctas"',
    brothers: [
      [98, "Rodge Rebeca", "DMX"],
      [99, "Eric Chen", "MUNCHIES"],
      [100, "Jobe Goetz", ".50 CAL"],
      [101, "Darryl Chanthinith", "MILLY ROCK"],
      [102, "Andrew Nam", "MASERATI"],
      [103, "Nick Chang", "MCLAREN"],
      [104, "Josh Lanzuela", "MYSTIK"],
      [105, "Kiefer Ting", "MONCLER"]
    ]
  },
  {
    name: "Alpha Gamma", greek: "ΑΓ", term: "Spring 2023",
    educator: 'Samuel Han "SOJU BOY"', assistant: 'Allen Deng "MOIST"',
    brothers: [
      [106, "Tran Huynh Dai Man", "MOLLY"],
      [107, "Kyle Nguyen", "DABI"],
      [108, "Steven Tran", "pH-1"],
      [109, "Jaden Chen", "MSG"],
      [110, "Daniel Zhu", "SOUL"],
      [111, "Edwin Cao", "H1GHR"]
    ]
  },
  {
    name: "Alpha Delta", greek: "ΑΔ", term: "Fall 2023",
    educator: 'Samuel Han "SOJU BOY"', assistant: 'Dennis Nguyen "KAYO"',
    brothers: [
      [112, "Yousung Jun", "MR PANDA"],
      [113, "Jonathan Jean", "DPR"]
    ]
  },
  {
    name: "Alpha Epsilon", greek: "ΑΕ", term: "Spring 2024",
    educator: 'Andrew Nam "MASERATI"', assistant: 'Edwin Cao "H1GHR"',
    brothers: [
      [114, "George Ji", "Kaizen"],
      [115, "Adam Chao", "A.R.L.O.N.G"],
      [116, "Justin Nguyen", "PAIN"]
    ]
  },
  {
    name: "Alpha Zeta", greek: "ΑΖ", term: "Fall 2024",
    educator: 'Kyle Nguyen "DABI"', assistant: 'Tran Huynh Dai Man "MOLLY"',
    brothers: [
      [117, "Geoffrey Tabora", "MICHELIN"],
      [118, "Sean Stajuana", "MOJAVE"],
      [119, "Riley Li", "Singularity"],
      [120, "Jonathan Kwon", "ye"]
    ]
  },
  {
    name: "Alpha Eta", greek: "ΑΗ", term: "Spring 2025",
    educator: 'Rodge Rebeca "DMX"', assistant: 'Eric Chen "MUNCHIES"',
    brothers: [
      [121, "Shaswot Pokharel", "Aladdin"],
      [122, "Timmy Tran", "MIA"],
      [123, "Jonathan Jung", "MADDEN"],
      [124, "Tom Lin", "MMA"]
    ]
  },
  {
    name: "Annexed", greek: "ΞΑΑ", term: "Fall 2011",
    educator: "", assistant: "", note: "Xi Alpha Alpha",
    brothers: [
      [111, "Steven Lean", "F-18"]
    ]
  }
];

/* --------------------------------------------------------------------------
   EXECUTIVE BOARD
   -------------------------------------------------------------------------- */
const EXEC_BOARD = [
  { role: "President",              name: "Man Tran",     line: "MOLLY" },
  { role: "External Vice President", name: "George Ji",    line: "Kaizen" },
  { role: "Internal Vice President", name: "Rodge Rebeca", line: "DMX" },
  { role: "Secretary",              name: "Justin Nguyen", line: "PAIN" },
  { role: "Treasurer",              name: "Riley Li",     line: "Singularity" },
  { role: "Warden",                 name: "Jon Kwon",     line: "ye" }
];

/* --------------------------------------------------------------------------
   MINOR BOARD / COMMITTEES
   -------------------------------------------------------------------------- */
const COMMITTEES = [
  { name: "Rush",              members: [["Andrew Nam", "MASERATI"], ["Man Tran", "MOLLY"], ["Jonathan Kwon", "ye"]] },
  { name: "Fundraising",       members: [["Riley Li", "Singularity"], ["Shaswot Pokharel", "Aladdin"], ["Timmy Tran", "MIA"]] },
  { name: "Cultural",          members: [["Shaswot Pokharel", "Aladdin"], ["Timmy Tran", "MIA"]] },
  { name: "Performance",       members: [["Man Tran", "MOLLY"], ["Josh Lanzuela", "MYSTIK"]] },
  { name: "Historian",         members: [["Shaswot Pokharel", "Aladdin"], ["Tom Lin", "MMA"]] },
  { name: "Alumni",            members: [["Andrew Nam", "MASERATI"], ["Eric Chen", "MUNCHIES"]] },
  { name: "Risk Management",   members: [["Man Tran", "MOLLY"], ["Jaden Chen", "MSG"]] },
  { name: "Community Service", members: [["Eric Chen", "MUNCHIES"], ["George Ji", "Kaizen"]] },
  { name: "Philanthropy",      members: [["Man Tran", "MOLLY"], ["Kyle Nguyen", "DABI"], ["Sean Stajuana", "MOJAVE"]] },
  { name: "Brother Unity",     members: [["Man Tran", "MOLLY"], ["Nick Chang", "MCLAREN"], ["Jonathan Kwon", "ye"]] },
  { name: "Public Relations",  members: [["Josh Lanzuela", "MYSTIK"], ["Kyle Nguyen", "DABI"], ["George Ji", "Kaizen"]] },
  { name: "Academic",          members: [["Justin Nguyen", "PAIN"], ["Jonathan Jung", "MADDEN"]] },
  { name: "Council Rep",       members: [["Jonathan Jung", "MADDEN"], ["Tom Lin", "MMA"]] },
  { name: "Social",            members: [["Geoffrey Tabora", "MICHELIN"], ["Sean Stajuana", "MOJAVE"]] },
  { name: "Webmaster",         members: [["Kyle Nguyen", "DABI"]] }
];

/* --------------------------------------------------------------------------
   ACTIVE HOUSE — line numbers of brothers currently active on campus
   -------------------------------------------------------------------------- */
const ACTIVE_HOUSE = [99, 102, 103, 104, 105, 106, 107, 109, 113, 114, 116, 117, 118, 119, 120, 121, 122, 123, 124];

/* --------------------------------------------------------------------------
   PAST PRESIDENTS
   -------------------------------------------------------------------------- */
const PAST_PRESIDENTS = [
  { name: "Andrew Tan",      line: "Acolyte",   term: "Spring 2008 – Fall 2008", class: "Alpha Class" },
  { name: "Jin Lee",         line: "Strife",    term: "Spring 2009 – Fall 2009", class: "Alpha Class" },
  { name: "Arthur Aina",     line: "Bartman",   term: "Spring 2010 – Fall 2010", class: "Alpha Class" },
  { name: "Jan Ruiz",        line: "Stinger",   term: "Spring 2011 – Fall 2011", class: "Epsilon Class" },
  { name: "Junichi Sakaki",  line: "Makaveli",  term: "Spring 2012 – Fall 2012", class: "Delta Class" },
  { name: "Nicholas Lau",    line: "Apex",      term: "Spring 2013 – Fall 2013", class: "Zeta Class" },
  { name: "Steven Lean",     line: "F-18",      term: "Spring 2014",             class: "Annexed Class" },
  { name: "Jerlon Chiu",     line: "Tuvok",     term: "Fall 2014 – Spring 2015", class: "Iota Class" },
  { name: "Marco Wong",      line: "i, Robot",  term: "Fall 2016",               class: "Nu Class" },
  { name: "Wesley Zhang",    line: "Alistar",   term: "Spring 2017 – Fall 2017", class: "Omicron Class" },
  { name: "Yan Xin Zhao",    line: "MUNITION",  term: "Spring 2018 – Fall 2018", class: "Pi Class" },
  { name: "Tommy Phung",     line: "Mystogan",  term: "Spring 2019 – Fall 2019", class: "Sigma Class" },
  { name: "Allen Deng",      line: "MOIST",     term: "Spring 2020 – Fall 2020", class: "Phi Class" },
  { name: "Jason Chen",      line: "Space X",   term: "Spring 2021 – Fall 2021", class: "Chi Class" },
  { name: "Lorenzo Legaspi", line: "Midoriya",  term: "Spring 2022 – Fall 2022", class: "Chi Class" },
  { name: "Samuel Han",      line: "SOJU BOY",  term: "Spring 2023 – Fall 2023", class: "Alpha Alpha Class" },
  { name: "Josh Lanzuela",   line: "MYSTIK",    term: "Spring 2024 – Fall 2024", class: "Alpha Beta Class" },
  { name: "Man Tran",        line: "MOLLY",     term: "Spring 2025 – present",   class: "Alpha Gamma Class" }
];

/* --------------------------------------------------------------------------
   FOUNDING FATHERS — national, February 20, 1994
   -------------------------------------------------------------------------- */
const FOUNDING_FATHERS = [
  "Mr. David Lee", "Mr. Sammy Wong", "Mr. Ronny Chow", "Mr. Thuan Luong",
  "Mr. Christopher Murata", "Mr. Michael Son", "Mr. Philip Hunt",
  "Mr. Spencer Seto", "Mr. Damien Lee", "Mr. Chester Huang", "Mr. Tracy B. Tabije"
];

/* --------------------------------------------------------------------------
   CHAPTERS NATIONWIDE
   -------------------------------------------------------------------------- */
const ACTIVE_CHAPTERS = [
  ["Alpha", "SUNY Binghamton"],
  ["Beta", "SUNY Buffalo"],
  ["Gamma", "Hofstra University"],
  ["Delta", "SUNY Stony Brook"],
  ["Zeta", "New York University"],
  ["Eta", "SUNY Albany"],
  ["Theta", "Rensselaer Polytechnic Institute"],
  ["Iota", "University of Rochester"],
  ["Kappa", "Cornell University"],
  ["Lambda", "Rutgers University"],
  ["Mu", "The Ohio State University"],
  ["Nu", "Carnegie Mellon University"],
  ["Omicron", "George Washington University"],
  ["Pi", "University of Maryland, College Park"],
  ["Rho", "University of California, Riverside"],
  ["Sigma", "University of Florida"],
  ["Tau", "Pennsylvania State University"],
  ["Upsilon", "Rochester Institute of Technology"],
  ["Phi", "University of Central Florida"],
  ["Chi", "University of South Florida"],
  ["Psi", "Saint John's University"],
  ["Omega", "University of Connecticut"],
  ["Alpha Alpha", "Northeastern University"],
  ["Alpha Beta", "Columbia University"],
  ["Alpha Gamma", "George Mason University"],
  ["Alpha Delta", "University of Minnesota"]
];

const ASSOCIATE_CHAPTERS = [
  "University of Colorado at Boulder",
  "Georgia State University",
  "University of North Florida"
];

/* --------------------------------------------------------------------------
   THE FOUR PILLARS
   -------------------------------------------------------------------------- */
const PILLARS = [
  {
    glyph: "Α",
    name: "Academic Achievement",
    body: "Academic achievement represents excellence in education and intellectual growth. It encompasses a commitment to pursuing knowledge, fostering critical thinking, and attaining scholastic goals. This pillar recognizes the value of learning, the pursuit of academic challenges, and the dedication required to succeed academically. It embodies qualities such as curiosity, discipline, perseverance, and a desire for personal growth through education."
  },
  {
    glyph: "Χ",
    name: "Cultural Awareness",
    body: "Cultural awareness emphasizes the importance of understanding and appreciating diverse cultures, traditions, and perspectives. It reflects an open-mindedness towards different customs, beliefs, languages, and practices. This pillar encourages individuals to develop empathy, respect, and sensitivity towards others, fostering an inclusive and harmonious society. Cultural awareness promotes cross-cultural collaboration, the celebration of diversity, and the recognition of the richness that comes from intercultural exchange."
  },
  {
    glyph: "Ρ",
    name: "Righteousness",
    body: "Righteousness embodies a strong sense of justice, fairness, and the courage to uphold one's values in the face of adversity. This pillar promotes a commitment to doing what is right, treating others with kindness and respect, and making principled decisions. Righteousness encourages individuals to act responsibly, stand up against injustice, and strive for a better world where equity and compassion prevail."
  },
  {
    glyph: "Φ",
    name: "Friendship and Loyalty",
    body: "Friendship and loyalty underscore the significance of genuine connections, trust, and mutual support. It highlights the value of nurturing meaningful relationships based on trust, understanding, and shared experiences. This pillar promotes empathy, compassion, and a commitment to being there for one another through thick and thin. Friendship and loyalty foster a sense of belonging, provide emotional support, and inspire individuals to build lasting connections that enrich their lives and the lives of those around them."
  }
];

/* --------------------------------------------------------------------------
   Derived helpers
   -------------------------------------------------------------------------- */
const ALL_BROTHERS = PLEDGE_CLASSES.flatMap(c =>
  c.brothers.map(([num, name, line]) => ({ num, name, line, className: c.name, term: c.term }))
);

const TOTAL_BROTHERS = ALL_BROTHERS.length;
