import { useState } from "react";
import {
  Search, ShoppingCart, Star, Check, Palette, Code2, Cpu,
  Briefcase, Megaphone, Camera, Menu, X, Plus,
} from "lucide-react";

import SiteLogo from '../assets/site-logo.png'
import TextLogo from '../assets/text-logo.png'

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */
const NAV = ["Home", "Courses", "Pages"];

const LOGOS = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

const CATEGORIES = [
  "Featured", "Excel", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "Self Development", "Personal Branding", "Digital Animation",
  "Web Design", "Data", "Business & Entrepreneurship", "Creative Design",
  "Photography", "Productivity", "Cooking", "Teaching", "Best Development",
  "Architecture", "Painting",
];

const COURSES = [
  { title: "Learn Figma from Scratch", rating: "4.8", price: "$49", tags: ["12 Lessons", "4h 30m", "Beginner"], thumb: "notes", author: "Pixel Lab" },
  { title: "Build Your Portfolio", rating: "4.9", price: "$39", tags: ["18 Lessons", "6h 10m", "All Levels"], thumb: "dots", author: "Studio North" },
  { title: "Pro Photo Editing Skills", rating: "4.7", price: "$59", tags: ["20 Lessons", "8h 00m", "Advanced"], thumb: "dash", author: "Lens Works" },
  { title: "Master Productivity Strategies", rating: "4.6", price: "$29", tags: ["10 Lessons", "3h 20m", "Beginner"], thumb: "desk", author: "Daily Focus" },
  { title: "Effective Marketing Strategies", rating: "4.8", price: "$45", tags: ["16 Lessons", "5h 45m", "Intermediate"], thumb: "board", author: "Growth Guild" },
  { title: "Cinematic Video Editing", rating: "4.9", price: "$69", tags: ["24 Lessons", "9h 15m", "Advanced"], thumb: "video", author: "Frame Co." },
];

const PATHS = [
  { label: "Design", Icon: Palette },
  { label: "Development", Icon: Code2 },
  { label: "IT & Software", Icon: Cpu },
  { label: "Business", Icon: Briefcase },
  { label: "Marketing", Icon: Megaphone },
  { label: "Photography", Icon: Camera },
];

const CHECKS = [
  "Intuitive course builder",
  "Detailed learner analytics",
  "Flexible pricing options",
  "Easy content updates",
];

const TESTIMONIALS = [
  { name: "Sarah M.", role: "Software Developer", skin: "#c58c6b", hair: "#2b1a12", bg: "#f5b731", text: "ByteSpace has completely changed the way I learn. The lessons are practical, easy to follow, and I landed my first freelance project within weeks of finishing the course." },
  { name: "Antonio S.", role: "UI/UX Designer", skin: "#e2b391", hair: "#1c1c1c", bg: "#2a2a2a", text: "The courses are well structured and the instructors really care about student progress. I especially love the community feedback and the hands-on projects that build a real portfolio." },
  { name: "Aman R.", role: "Product Manager", skin: "#8d5a3b", hair: "#111", bg: "#dfe6f7", text: "I've tried several learning platforms, but ByteSpace stands out. The content is fresh, the interface is clean, and learning at my own pace made it easy to balance with my job." },
];

const FOOTER_COLS = [
  ["Categories", "Web Development", "Data Science", "UI/UX Design", "Marketing", "Photography"],
  ["Resources", "Blog", "Help Center", "Instructors", "Pricing", "Careers"],
  ["Company", "About Us", "Contact", "Terms", "Privacy", "FAQ"],
];

/* ------------------------------------------------------------------ */
/*  DECORATIVE SHAPES                                                  */
/* ------------------------------------------------------------------ */
const Squiggle = ({ color = "#c9f31d", className = "", w = 110 }) => (
  <svg viewBox="0 0 100 80" width={w} className={`pointer-events-none z-[1] ${className}`} aria-hidden="true">
    <polyline points="14,14 84,8 16,38 86,32 18,64 82,58" fill="none" stroke={color}
      strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Spring = ({ className = "", w = 70, color = "#fff" }) => (
  <svg viewBox="0 0 80 100" width={w} className={`pointer-events-none z-[1] ${className}`} aria-hidden="true">
    <defs>
      <filter id="sp-sh" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity=".25" />
      </filter>
    </defs>
    <path d="M14 14 Q60 6 62 22 Q64 36 16 38 Q66 40 64 58 Q62 74 14 72 Q58 76 60 90"
      fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" filter="url(#sp-sh)" />
  </svg>
);

const Ring = ({ className = "", size = 110 }) => (
  <div
    className={`pointer-events-none z-[1] rounded-full -rotate-[24deg] ${className}`}
    aria-hidden="true"
    style={{
      width: size,
      height: size * 0.85,
      border: `${size * 0.2}px solid #fff`,
      boxShadow: "inset 0 -8px 14px rgba(0,0,0,.12), 0 10px 18px rgba(0,0,0,.2)",
    }}
  />
);

const Triangle = ({ className = "", color = "#fff", w = 64 }) => (
  <svg viewBox="0 0 100 100" width={w} className={`pointer-events-none z-[1] ${className}`} aria-hidden="true">
    <defs>
      <linearGradient id={`tri-${color}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={color} />
        <stop offset="1" stopColor={color === "#fff" ? "#dfe3ee" : "#a8cf00"} />
      </linearGradient>
    </defs>
    <path d="M14 82 L50 12 L90 70 Q92 86 74 86 L24 88 Q10 90 14 82Z" fill={`url(#tri-${color})`}
      stroke={`url(#tri-${color})`} strokeWidth="6" strokeLinejoin="round" />
  </svg>
);

const Cylinder = ({ className = "", color = "#fff", w = 90 }) => (
  <div
    className={`pointer-events-none z-[1] -rotate-[14deg] shadow-[0_14px_24px_rgba(0,0,0,.22)] ${className}`}
    aria-hidden="true"
    style={{
      width: w,
      height: w * 1.15,
      borderRadius: "34% 34% 30% 30% / 22% 22% 18% 18%",
      background: color === "#fff" ? "linear-gradient(160deg,#fff,#dde1ec)" : "linear-gradient(160deg,#dcff4a,#b5da00)",
    }}
  />
);

const GridBg = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    aria-hidden="true"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)",
      backgroundSize: "64px 64px",
    }}
  />
);

/* ------------------------------------------------------------------ */
/*  ILLUSTRATIONS (stand-ins for photos)                               */
/* ------------------------------------------------------------------ */
const Person = ({ skin = "#d9a07c", hair = "#3a2418", jacket = "#5f83b6", shirt = "#f0a8b8",
  headphones = true, laptop = false, tablet = false, longHair = false, className = "" }) => (
  <svg viewBox="0 0 220 260" className={className} aria-hidden="true">
    {longHair && <path d="M56 84 Q52 30 110 28 Q168 30 164 84 L172 200 L48 200Z" fill={hair} />}
    <path d="M18 260 Q22 168 82 156 L138 156 Q198 168 202 260Z" fill={jacket} />
    <path d="M88 156 L110 214 L132 156Z" fill={shirt} />
    <rect x="97" y="126" width="26" height="34" rx="10" fill={skin} />
    <ellipse cx="110" cy="92" rx="38" ry="44" fill={skin} />
    {!longHair && <path d="M70 84 Q66 40 110 40 Q156 40 150 86 Q140 62 110 62 Q84 62 70 84Z" fill={hair} />}
    {longHair && <path d="M72 82 Q90 50 110 52 Q134 50 148 82 Q130 66 110 68 Q92 66 72 82Z" fill={hair} />}
    <circle cx="96" cy="96" r="3.4" fill="#2a1a12" /><circle cx="124" cy="96" r="3.4" fill="#2a1a12" />
    <path d="M94 112 Q110 128 126 112 Q110 120 94 112Z" fill="#fff" stroke="#8a4b3a" strokeWidth="1.5" />
    {headphones && (
      <g>
        <path d="M68 92 Q66 44 110 42 Q154 44 152 92" fill="none" stroke="#1c2340" strokeWidth="7" />
        <rect x="58" y="84" width="16" height="30" rx="8" fill="#1c2340" />
        <rect x="146" y="84" width="16" height="30" rx="8" fill="#1c2340" />
      </g>
    )}
    {laptop && (
      <g>
        <path d="M112 214 L214 196 L214 240 L118 256Z" fill="#4b5563" />
        <path d="M112 214 L214 196 L214 202 L112 220Z" fill="#6b7280" />
      </g>
    )}
    {tablet && <rect x="30" y="200" width="76" height="52" rx="6" transform="rotate(-8 68 226)" fill="#15181f" />}
  </svg>
);

const Thumb = ({ kind }) => {
  const common = { width: "100%", height: "100%" };
  if (kind === "notes")
    return (
      <svg viewBox="0 0 300 170" style={common} preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="170" fill="#eef0f3" />
        <rect x="90" y="20" width="150" height="110" fill="#fff" stroke="#d6d9df" />
        {[["#ffd166", 110, 40], ["#ff8fab", 150, 60], ["#7ae0c3", 190, 44], ["#8ec5ff", 120, 90], ["#ffd166", 190, 96]].map(([c, x, y], i) => (
          <rect key={i} x={x} y={y} width="26" height="24" fill={c} />
        ))}
        <circle cx="42" cy="52" r="26" fill="#3b2a22" /><rect x="10" y="70" width="70" height="100" rx="20" fill="#2f3b52" />
      </svg>
    );
  if (kind === "dots")
    return (
      <svg viewBox="0 0 300 170" style={common} preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="170" fill="#c9ccd2" />
        {Array.from({ length: 60 }).map((_, i) => (
          <circle key={i} cx={20 + (i % 10) * 28 + (Math.floor(i / 10) % 2) * 8} cy={20 + Math.floor(i / 10) * 24} r={3 + ((i * 7) % 4)} fill="#4b5563" opacity=".55" />
        ))}
      </svg>
    );
  if (kind === "dash")
    return (
      <svg viewBox="0 0 300 170" style={common} preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="170" fill="#0f2318" />
        <rect x="36" y="22" width="228" height="118" rx="8" fill="#0b0f14" />
        <path d="M60 120 Q90 40 120 116 Z" fill="#19b6e8" opacity=".85" />
        <path d="M160 120 Q200 30 240 116 Z" fill="#19b6e8" opacity=".85" />
        <rect x="6" y="30" width="18" height="100" fill="#1d4d2b" />
      </svg>
    );
  if (kind === "desk")
    return (
      <svg viewBox="0 0 300 170" style={common} preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="170" fill="#e9e2d6" />
        <rect x="30" y="30" width="150" height="96" rx="6" fill="#20242c" />
        <rect x="40" y="40" width="130" height="76" fill="#3b82f6" opacity=".7" />
        <rect x="200" y="60" width="70" height="60" rx="6" fill="#f3f0ea" />
        <circle cx="236" cy="42" r="14" fill="#7cb342" />
      </svg>
    );
  if (kind === "board")
    return (
      <svg viewBox="0 0 300 170" style={common} preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="170" fill="#f4f5f7" />
        <rect x="40" y="18" width="220" height="120" fill="#fff" stroke="#d9dce2" />
        <path d="M64 110 L110 76 L150 92 L200 50 L240 60" fill="none" stroke="#2563eb" strokeWidth="4" />
        <rect x="64" y="34" width="70" height="8" fill="#cbd0d8" /><rect x="64" y="48" width="44" height="8" fill="#e1e4ea" />
      </svg>
    );
  return (
    <svg viewBox="0 0 300 170" style={common} preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="170" fill="#1b1330" />
      <rect x="30" y="24" width="240" height="100" rx="6" fill="#0d0a18" stroke="#3d2f66" />
      <rect x="44" y="96" width="212" height="10" rx="5" fill="#3d2f66" /><rect x="44" y="96" width="120" height="10" rx="5" fill="#a78bfa" />
      <polygon points="136,50 136,80 164,65" fill="#fff" opacity=".9" />
    </svg>
  );
};

const Avatars = () => (
  <div className="flex items-center">
    {["#f5b731", "#8d5a3b", "#e2b391", "#2a2a2a"].map((c, i) => (
      <span key={i} className="w-[22px] h-[22px] rounded-full border-2 border-white -ml-[7px] first:ml-0" style={{ background: c }} />
    ))}
    <b className="w-[22px] h-[22px] rounded-full bg-[#c9f31d] grid place-items-center -ml-1 border-2 border-white text-gray-900">
      <Plus size={12} strokeWidth={3} />
    </b>
  </div>
);

/* ------------------------------------------------------------------ */
/*  SECTIONS                                                           */
/* ------------------------------------------------------------------ */
const Logo = ({ dark }) => (
  <div href="#home" className="flex items-center">
    <span><img src={SiteLogo} style={{width:16,marginRight:2}}/></span>
    <span><img src={ TextLogo }/></span>
  </div>
);

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className=" w-full flex items-center gap-10 justify-between px-[6vw] py-[22px] text-white text-[13px]">
      <Logo />
      <nav
        className="flex justify-between gap-4"
      >
        {NAV.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`} className="opacity-85 hover:opacity-100">{n}</a>
        ))}
      </nav>
      <div className="flex items-center gap-[22px]">
        <a href="#login" className="hidden md:inline">Log in</a>
        <a href="#signup" className="hidden md:inline">Sign up</a>
        <button className="hidden md:grid place-items-center bg-transparent text-white p-0" aria-label="Cart">
          <ShoppingCart size={16} />
        </button>
        <button className="md:hidden bg-transparent text-white p-0" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-[#0a33e8] text-white min-h-[720px] overflow-hidden flex flex-col items-center" id="home">
      <GridBg />
      <Header />
      <Squiggle className="absolute left-[-14px] top-[210px]" w={120} />
      <Spring className="absolute left-[90px] top-[330px]" w={58} />
      <Cylinder color="#c9f31d" className="absolute right-[-28px] top-[190px]" w={110} />
      <Triangle className="absolute right-[150px] top-[330px]" w={70} />
      <Ring className="absolute left-10 bottom-5" size={120} />
      <Spring className="absolute right-[46px] bottom-5" w={90} />

      <div className="relative z-[4] text-center mt-[46px] px-5 max-w-[760px]">
        <h1 className="text-[clamp(30px,5vw,54px)] leading-[1.16] font-semibold tracking-[-0.01em]">
          Get Access to Hundreds<br />Courses Available
        </h1>
        <p className="mt-[22px] mx-auto max-w-[560px] text-[13.5px] leading-[1.75] opacity-85">
          Explore a wide range of expert-led courses designed to help you learn new skills, advance your career, and achieve your personal goals.
        </p>
        <div className="mt-[34px] mx-auto flex items-center gap-2 bg-white rounded-[10px] pl-4 pr-1.5 py-1.5 max-w-[430px] text-gray-400">
          <Search size={16} />
          <input placeholder="Search any course" aria-label="Search courses" className="flex-1 border-0 outline-none text-[13px] text-gray-900 min-w-0 bg-transparent" />
          <button className="bg-[#c9f31d] text-gray-900 font-semibold text-[13px] px-5 py-2.5 rounded-lg">Search</button>
        </div>
      </div>

      <div className="relative z-[2] w-[min(760px,94vw)] h-[400px] max-sm:h-[320px] mt-auto">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-160px] max-sm:bottom-[-140px] w-[640px] h-[640px] max-sm:w-[460px] max-sm:h-[460px] rounded-full bg-[#c9f31d]" />
        <Person skin="#d9a07c" hair="#4a2c1d" jacket="#5f83b6" shirt="#f0a8b8" laptop
          className="absolute left-1/2 -translate-x-1/2 bottom-0 h-full" />
        <div className="absolute left-[8%] top-[18%] w-[150px] max-sm:scale-[.85] bg-white text-gray-900 rounded-xl p-3 shadow-[0_12px_30px_rgba(10,20,60,.18)] z-[3] flex flex-col gap-[5px]">
          <small className="text-[10px] text-gray-500">Total Courses</small>
          <b className="text-[22px] font-semibold leading-none">500+</b>
        </div>
        <div className="absolute right-[7%] top-[24%] w-[130px] max-sm:scale-[.85] bg-white text-gray-900 rounded-xl p-3 shadow-[0_12px_30px_rgba(10,20,60,.18)] z-[3] flex flex-col gap-[5px]">
          <small className="text-[10px] text-gray-500">Completion Rate</small>
          <b className="text-[22px] font-semibold leading-none">55%</b>
          <span className="block h-1 rounded-full bg-gray-200 overflow-hidden">
            <i className="block h-full bg-[#c9f31d]" style={{ width: "55%" }} />
          </span>
        </div>
        <div className="absolute left-[4%] bottom-[12%] w-[170px] max-sm:scale-[.85] bg-white text-gray-900 rounded-xl p-3 shadow-[0_12px_30px_rgba(10,20,60,.18)] z-[3] flex flex-col gap-[5px]">
          <small className="text-[10px] text-gray-500">Join 10K+ Learners</small>
          <Avatars />
        </div>
      </div>
    </section>
  );
}

const LogoStrip = () => (
  <section className="bg-gray-100 flex justify-center flex-wrap gap-x-14 gap-y-4 px-[6vw] py-[30px]">
    {LOGOS.map((l, i) => (
      <span key={i} className="inline-flex items-center gap-2 text-[13px] font-medium text-gray-600">
        <i className="w-[18px] h-[18px] rounded-full bg-gray-400 inline-block" />
        {l}
      </span>
    ))}
  </section>
);

function Courses() {
  const [active, setActive] = useState("Featured");
  return (
    <section className="px-[6vw] pt-20 text-center" id="courses">
      <h2 className="text-[clamp(26px,3.4vw,36px)] leading-[1.22] font-semibold">
        Discover Your Passion,<br />Build Your Skills
      </h2>
      <p className="max-w-[600px] mx-auto mt-4 text-[13px] leading-[1.8] text-gray-500">
        Choose from a growing library of courses across design, development, business and more. Learn from experts, at your own pace, wherever you are.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-2.5 max-w-[920px] mx-auto mt-8">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-[15px] py-[7px] text-[11.5px] border ${
              c === active
                ? "bg-[#c9f31d] border-[#c9f31d] text-gray-900 font-semibold"
                : "bg-white border-[#eceef2] text-gray-600"
            }`}
          >
            {c}
          </button>
        ))}
        <a href="#more" className="text-[11.5px] text-[#0a33e8] font-medium">+ more</a>
      </div>
      <div className="max-w-[960px] mx-auto mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px] text-left">
        {COURSES.map((c) => (
          <article key={c.title} className="bg-white border border-[#eceef2] rounded-2xl p-2.5 pb-3.5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(17,24,39,.08)]">
            <div className="relative h-[150px] rounded-xl overflow-hidden">
              <Thumb kind={c.thumb} />
              <div className="absolute left-2 right-2 bottom-2 flex gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="bg-white/30 backdrop-blur-sm text-white text-[9.5px] px-2 py-1 rounded-full whitespace-nowrap">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex justify-between gap-2.5 items-start mt-3.5 mx-1">
              <h3 className="text-[14px] font-semibold leading-[1.35]">{c.title}</h3>
              <span className="inline-flex items-center gap-[3px] text-[11px] text-gray-500 whitespace-nowrap">
                <Star size={12} fill="#f5b731" stroke="#f5b731" /> {c.rating}
              </span>
            </div>
            <a className="block mt-1 mx-1 text-[11px] text-[#0a33e8]" href="#author">by {c.author}</a>
            <div className="flex items-center justify-between mt-3.5 mx-1">
              <span className="text-[12px] font-semibold border border-[#eceef2] rounded-md px-2.5 py-1 text-gray-700">{c.price}</span>
              <Avatars />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const Paths = () => (
  <section className="px-[6vw] pt-20 pb-20 text-center">
    <h2 className="text-[clamp(20px,2.4vw,26px)] leading-[1.22] font-semibold">Explore Diverse Learning Paths at ByteSpace</h2>
    <p className="max-w-[600px] mx-auto mt-4 text-[13px] leading-[1.8] text-gray-500">
      From creative fields to technical skills, find a path that matches your goals and start building the career you want.
    </p>
    <div className="max-w-[960px] mx-auto mt-8 grid grid-cols-3 md:grid-cols-6 gap-3.5">
      {PATHS.map(({ label, Icon }) => (
        <a key={label} href="#path" className="flex flex-col items-center gap-2.5 bg-white border border-[#eceef2] rounded-2xl py-4 px-2 text-[11px] font-medium text-gray-700 transition-colors hover:border-[#c9f31d] hover:shadow-[0_10px_24px_rgba(17,24,39,.06)]">
          <span className="w-[34px] h-[34px] rounded-full bg-[#c9f31d] grid place-items-center text-gray-900">
            <Icon size={16} />
          </span>
          {label}
        </a>
      ))}
    </div>
  </section>
);

function Growth() {
  return (
    <section className="relative px-[6vw] pt-20 pb-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#fafcf0,#f5f7fd 55%,#eef2fd)" }}>
      <div className="absolute w-[340px] h-[340px] rounded-full blur-[70px] pointer-events-none opacity-80 bg-[#e3fb7c] left-[8%] top-[-60px]" />
      <div className="absolute w-[360px] h-[360px] rounded-full blur-[70px] pointer-events-none opacity-80 bg-[#c9d4fb] left-[-100px] top-[38%]" />
      <div className="absolute w-[360px] h-[360px] rounded-full blur-[70px] pointer-events-none opacity-55 bg-[#d7ff5c] left-[-60px] bottom-[-40px]" />

      <div className="relative z-[2] max-w-[1000px] mx-auto mb-[90px] flex flex-col md:flex-row items-center justify-between gap-[50px]">
        <div className="flex-1 max-w-[430px] text-left">
          <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.25] font-semibold text-left">
            Your Path to Professional<br />Growth Starts Here!
          </h2>
          <p className="mt-[18px] text-[13px] leading-[1.85] text-gray-500">
            Whether you're starting out or leveling up, ByteSpace gives you the structure, mentors and community you need. Learn practical skills, build real projects and grow with confidence.
          </p>
          <div className="flex gap-[34px] mt-7">
            <div><b className="block text-[20px] font-semibold text-[#0a33e8]">10K</b><span className="text-[11px] text-gray-500">Learners</span></div>
            <div><b className="block text-[20px] font-semibold text-[#0a33e8]">70+</b><span className="text-[11px] text-gray-500">Instructors</span></div>
            <div><b className="block text-[20px] font-semibold text-[#0a33e8]">15</b><span className="text-[11px] text-gray-500">Categories</span></div>
          </div>
        </div>
        <div className="relative flex-1 flex justify-center">
          <div className="relative w-[310px] h-[300px]">
            <div className="absolute left-0 top-0 w-[190px] bg-white rounded-2xl p-2 shadow-[0_14px_34px_rgba(10,20,60,.12)] z-[1]">
              <div className="h-[90px] rounded-[9px] overflow-hidden"><Thumb kind="notes" /></div>
              <b className="block text-[11.5px] mt-2.5 mx-0.5 font-semibold">Learn Figma from Scratch</b>
              <a href="#c" className="block text-[10px] text-[#0a33e8] mx-0.5 mt-0.5 mb-1">by Pixel Lab</a>
            </div>
            <Person skin="#d9a07c" hair="#4a2c1d" jacket="#5f83b6" shirt="#f0a8b8" laptop
              className="absolute right-[-30px] bottom-[-10px] h-[250px]" />
            <div className="absolute right-[-50px] top-[110px] w-[120px] bg-white text-gray-900 rounded-xl p-3 shadow-[0_12px_30px_rgba(10,20,60,.18)] z-[3] flex flex-col gap-[5px]">
              <small className="text-[10px] text-gray-500">Progress</small>
              <b className="text-[22px] font-semibold leading-none">55%</b>
              <span className="block h-1 rounded-full bg-gray-200 overflow-hidden">
                <i className="block h-full bg-[#c9f31d]" style={{ width: "55%" }} />
              </span>
            </div>
          </div>
          <Squiggle className="absolute right-[-30px] top-[60px]" w={70} />
        </div>
      </div>

      <div className="relative z-[2] max-w-[1000px] mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-[50px]">
        <div className="relative flex-1 flex justify-center order-1">
          <div className="relative w-[280px] h-[400px]">
            <div className="absolute top-[30px] left-[-34px] bg-[#0a33e8] text-white rounded-xl px-4 py-3 w-[140px] flex flex-col gap-[5px] z-[3] shadow-[0_12px_26px_rgba(10,51,232,.3)]">
              <small className="text-[10px] opacity-75">Total Courses</small>
              <b className="text-[17px] font-semibold">128</b>
              <span className="block h-1 rounded-full bg-white/20 overflow-hidden"><i className="block h-full bg-[#c9f31d]" style={{ width: "70%" }} /></span>
            </div>
            <div className="absolute top-[110px] left-[-34px] bg-[#0a33e8] text-white rounded-xl px-4 py-3 w-[140px] flex flex-col gap-[5px] z-[3] shadow-[0_12px_26px_rgba(10,51,232,.3)]">
              <small className="text-[10px] opacity-75">Revenue</small>
              <b className="text-[17px] font-semibold">$306.35</b>
            </div>
            <Person skin="#e0a98a" hair="#5a2f1c" jacket="#5f83b6" shirt="#f7f3ef" longHair tablet
              className="absolute left-3 bottom-0 h-full" />
            <Squiggle className="absolute right-[-26px] top-[130px]" w={70} />
            <div className="absolute right-[-34px] bottom-6 w-[150px] bg-white text-gray-900 rounded-xl p-3 shadow-[0_12px_30px_rgba(10,20,60,.18)] z-[3] flex flex-col gap-[5px]">
              <small className="text-[10px] text-gray-500">Top Students</small>
              <Avatars />
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-[430px] text-left order-2">
          <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.25] font-semibold text-left">
            Create &amp; Manage<br />Courses Easily.
          </h2>
          <p className="mt-[18px] text-[13px] leading-[1.85] text-gray-500">
            <b className="text-gray-900 font-semibold">ByteSpace</b> makes it simple to build, publish and manage your courses. Track learners, update content and grow your audience from a single dashboard.
          </p>
          <ul className="list-none p-0 mt-6 flex flex-col gap-3">
            {CHECKS.map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-[12.5px] text-gray-700">
                <i className="w-4 h-4 rounded-full bg-[#0a33e8] text-white grid place-items-center flex-none">
                  <Check size={10} strokeWidth={4} />
                </i>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const CTA = () => (
  <section className="relative bg-[#0a33e8] text-white text-center px-[6vw] py-[90px] overflow-hidden">
    <GridBg />
    <Squiggle className="absolute left-5 top-[-10px]" w={110} />
    <Spring className="absolute left-[70px] top-[26px]" w={50} />
    <Triangle color="#fff" className="absolute left-[-18px] bottom-10" w={70} />
    <Ring className="absolute left-[60px] bottom-[-60px]" size={110} />
    <Triangle color="#c9f31d" className="absolute right-[210px] top-[26px]" w={64} />
    <Cylinder className="absolute right-[-30px] top-[14px]" w={110} />
    <Spring color="#c9f31d" className="absolute right-[110px] bottom-[-6px]" w={90} />
    <div className="relative z-[3] max-w-[620px] mx-auto">
      <h2 className="text-[clamp(24px,3.4vw,34px)] leading-[1.25] font-semibold">
        Unlock Your Potential as a<br />Creator with ByteSpace
      </h2>
      <p className="mt-5 text-[12.5px] leading-[1.85] opacity-85">
        Turn your knowledge into income. Share your expertise with learners around the world, build your audience and get paid for what you already know. We give you the tools, you bring the passion.
      </p>
      <a className="inline-block mt-7 bg-[#c9f31d] text-gray-900 font-semibold text-[13px] px-[26px] py-3 rounded-full transition-transform hover:-translate-y-0.5" href="#creator">
        Join as Creator
      </a>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="relative px-[6vw] py-[90px] overflow-hidden" style={{ background: "linear-gradient(180deg,#f8faf0,#f3f6fc)" }}>
    <div className="absolute w-[340px] h-[300px] rounded-full blur-[70px] pointer-events-none opacity-90 bg-[#e8fb9a] left-[38%] top-[-40px]" />
    <div className="absolute w-[340px] h-[340px] rounded-full blur-[70px] pointer-events-none opacity-70 bg-[#c9d4fb] left-[-80px] bottom-[-60px]" />
    <div className="relative z-[2] max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
      <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.25] font-semibold text-left">
        Discover What Our<br />Community Is Saying
      </h2>
      <p className="max-w-[400px] text-[12px] leading-[1.85] text-gray-500">
        Thousands of learners and creators trust ByteSpace to help them grow. Read their stories and see how learning has changed their careers and confidence.
      </p>
    </div>
    <div className="relative z-[2] max-w-[960px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-[22px] items-start">
      {TESTIMONIALS.map((t) => (
        <article key={t.name} className="bg-white rounded-2xl p-[22px] shadow-[0_8px_28px_rgba(17,24,39,.04)]">
          <div className="w-[46px] h-[46px] rounded-full overflow-hidden mb-3.5" style={{ background: t.bg }}>
            <Person skin={t.skin} hair={t.hair} jacket="#e8eaf0" shirt="#fff" headphones={false} className="w-full h-full" />
          </div>
          <h4 className="text-[13px] font-semibold">{t.name}</h4>
          <a href="#role" className="block text-[11px] text-[#0a33e8] mt-0.5">{t.role}</a>
          <p className="mt-3.5 text-[11.5px] leading-[1.8] text-gray-500">"{t.text}"</p>
        </article>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="px-[6vw] pt-[60px] pb-[26px] bg-white">
    <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-start gap-[50px]">
      <div className="max-w-[330px]">
        <Logo dark />
        <p className="mt-3 text-[11.5px] text-gray-500 leading-[1.7]">
          Learn new skills, grow your career and join a community of curious people.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2.5 mt-6">
          <input type="email" placeholder="Enter your email" aria-label="Email"
            className="flex-1 min-w-0 border border-[#eceef2] rounded-full px-4 py-2.5 text-[12px] outline-none focus:border-[#0a33e8]" />
          <button className="bg-[#c9f31d] text-gray-900 font-semibold text-[12px] px-5 rounded-full">Submit</button>
        </form>
        <small className="block mt-3 text-[10px] text-gray-400 leading-[1.6]">
          By subscribing you agree to our Privacy Policy and consent to receive updates.
        </small>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[50px] gap-y-8">
        {FOOTER_COLS.map(([title, ...links]) => (
          <div key={title}>
            <h5 className="text-[12px] font-semibold mb-3.5">{title}</h5>
            {links.map((l) => (
              <a key={l} href="#link" className="block text-[11.5px] text-gray-500 mb-[11px] hover:text-[#0a33e8]">{l}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-[960px] mx-auto mt-11 pt-5 border-t border-[#eceef2] flex flex-wrap justify-between gap-2.5 text-[10.5px] text-gray-400">
      <span>© 2026 ByteSpace. All rights reserved.</span>
      <span>
        <a href="#p" className="ml-[18px]">Privacy Policy</a>
        <a href="#t" className="ml-[18px]">Terms of Service</a>
        <a href="#c" className="ml-[18px]">Cookies</a>
      </span>
    </div>
  </footer>
);

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function ByteSpaceLanding() {
  return (
    <div className="font-['Poppins'] text-gray-900 bg-white overflow-x-hidden antialiased [&_*]:box-border [&_a]:no-underline [&_a]:text-inherit [&_button]:font-sans [&_button]:cursor-pointer">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
      <Hero />
      <LogoStrip />
      <Courses />
      <Paths />
      <Growth />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
}