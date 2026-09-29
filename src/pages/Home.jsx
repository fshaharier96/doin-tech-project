import React from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Menu,
  Play,
  Search,
  Star,
  Users,
  X
} from 'lucide-react'

const courses = [
  {
    title: 'UI/UX Design Masterclass',
    category: 'Design',
    lessons: 42,
    rating: '4.9',
    price: '$29',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Modern JavaScript From Zero',
    category: 'Development',
    lessons: 58,
    rating: '4.8',
    price: '$35',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Digital Marketing Strategy',
    category: 'Marketing',
    lessons: 35,
    rating: '4.9',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Business Growth Blueprint',
    category: 'Business',
    lessons: 31,
    rating: '4.7',
    price: '$32',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Professional Photography',
    category: 'Photography',
    lessons: 46,
    rating: '4.9',
    price: '$27',
    image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Build Your Personal Brand',
    category: 'Career',
    lessons: 29,
    rating: '4.8',
    price: '$24',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85',
  },
]

const categories = ['All', 'Development', 'Design', 'Business', 'Marketing', 'Photography']

function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activeCategory, setActiveCategory] = React.useState('All')

  const filteredCourses = activeCategory === 'All'
    ? courses
    : courses.filter((course) => course.category === activeCategory)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-[#111827]">
      <div className="mx-auto max-w-[1440px] bg-white shadow-2xl">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <Hero />
          <TrustStrip />
          <CourseSection
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            courses={filteredCourses}
          />
          <CareerSection />
          <InstructorSection />
          <CommunitySection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#071cff] text-lg font-black text-white shadow-[4px_4px_0_#c8ff27]">P</span>
          <span className="text-xl font-black tracking-tight">Pranto<span className="text-[#071cff]">.</span></span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a href="#home" className="text-[#071cff]">Home</a>
          <a href="#courses" className="transition hover:text-[#071cff]">Courses</a>
          <a href="#about" className="transition hover:text-[#071cff]">About</a>
          <a href="#community" className="transition hover:text-[#071cff]">Community</a>
          <a href="#footer" className="transition hover:text-[#071cff]">Contact</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl p-2.5 hover:bg-slate-100" aria-label="Search"><Search size={19} /></button>
          <button className="rounded-xl px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-100">Log in</button>
          <button className="rounded-xl bg-[#071cff] px-5 py-2.5 text-sm font-bold text-white shadow-[3px_3px_0_#c8ff27] transition hover:-translate-y-0.5">Get Started</button>
        </div>

        <button className="rounded-xl p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 px-5 pb-5 pt-3 md:hidden">
          {['Home', 'Courses', 'About', 'Community', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-3 font-semibold hover:bg-slate-50">{item}</a>
          ))}
          <button className="mt-2 w-full rounded-xl bg-[#071cff] py-3 font-bold text-white">Get Started</button>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#0824e8]">
      <div className="absolute -left-20 top-16 h-52 w-52 rotate-12 rounded-[40%] bg-[#c8ff27] blur-[1px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 -rotate-12 rounded-[40%] bg-[#c8ff27]" />
      <div className="absolute right-[12%] top-12 h-20 w-20 rounded-full border-[18px] border-white/90" />
      <div className="absolute bottom-14 left-[46%] h-10 w-28 rotate-12 rounded-full bg-white/95" />
      <div className="absolute left-[10%] top-8 hidden h-16 w-16 rounded-full border-4 border-[#ff3c81] sm:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#c8ff27]" /> Learn. Build. Grow.
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[.96] tracking-[-.045em] text-white sm:text-6xl lg:text-7xl">
            Access to <span className="text-[#c8ff27]">hundreds</span> of courses.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
            Learn practical skills from experienced creators and turn your ideas into work you are proud to show.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#courses" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c8ff27] px-6 py-3.5 text-sm font-black text-slate-950 shadow-[5px_5px_0_rgba(255,255,255,.9)] transition hover:-translate-y-1">
              Explore Courses <ArrowRight size={18} />
            </a>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur hover:bg-white/15">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#071cff]"><Play size={13} fill="currentColor" /></span>
              Watch Preview
            </button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/85">
            <span className="flex items-center gap-2"><Check size={17} /> Lifetime access</span>
            <span className="flex items-center gap-2"><Check size={17} /> Learn at your pace</span>
            <span className="flex items-center gap-2"><Check size={17} /> Certificates</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[530px] lg:justify-self-end">
          <div className="absolute -left-5 top-16 z-20 rounded-xl bg-[#c8ff27] px-4 py-3 text-xs font-black shadow-[4px_4px_0_#111] sm:-left-10">
            85% complete
          </div>
          <div className="absolute -right-3 bottom-8 z-20 rounded-xl bg-[#ff55a2] px-4 py-3 text-xs font-black text-white shadow-[4px_4px_0_#111] sm:-right-7">
            Keep learning ✦
          </div>
          <div className="hero-window overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-[18px_18px_0_#c8ff27]">
            <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#ffbd2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <div className="ml-4 h-7 flex-1 rounded-lg bg-slate-50" />
            </div>
            <div className="grid min-h-[330px] grid-cols-[72px_1fr] sm:min-h-[390px] sm:grid-cols-[100px_1fr]">
              <div className="border-r border-slate-100 bg-slate-50 p-3">
                <div className="mb-8 h-9 rounded-xl bg-[#071cff]" />
                {[1,2,3,4,5].map((i) => <div key={i} className="mb-5 h-3 rounded bg-slate-200" />)}
              </div>
              <div className="p-5 sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div><div className="h-4 w-32 rounded bg-slate-900" /><div className="mt-2 h-3 w-44 rounded bg-slate-100" /></div>
                  <div className="h-9 w-9 rounded-full bg-[#c8ff27]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <DashboardCard color="blue" />
                  <DashboardCard color="pink" />
                  <DashboardCard color="lime" />
                  <DashboardCard color="orange" />
                </div>
                <div className="mt-5 rounded-2xl border border-slate-100 p-4">
                  <div className="mb-4 h-3 w-28 rounded bg-slate-900" />
                  <div className="flex h-20 items-end gap-2">
                    {[35,55,40,75,60,90,68,98,78,88].map((h, i) => <span key={i} style={{height: `${h}%`}} className="flex-1 rounded-t bg-[#071cff]/80" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardCard({ color }) {
  const bg = { blue: 'bg-[#dce2ff]', pink: 'bg-[#ffd7e9]', lime: 'bg-[#e7ffb0]', orange: 'bg-[#ffe2b8]' }[color]
  return <div className={`rounded-2xl ${bg} p-3`}><div className="h-14 rounded-xl bg-white/80" /><div className="mt-3 h-2 w-3/4 rounded bg-slate-900/20" /><div className="mt-2 h-2 w-1/2 rounded bg-slate-900/10" /></div>
}

function TrustStrip() {
  return (
    <section className="border-b border-slate-100 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-5 text-xs font-black uppercase tracking-[.16em] text-slate-300 sm:px-8">
        <span>Google</span><span>Microsoft</span><span>airbnb</span><span>spotify</span><span>HubSpot</span><span>amazon</span>
      </div>
    </section>
  )
}

function CourseSection({ activeCategory, setActiveCategory, courses }) {
  return (
    <section id="courses" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#071cff]">Explore our library</p>
            <h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">Discover your passion,<br />build your <span className="text-[#071cff]">skills.</span></h2>
          </div>
          <a href="#all-courses" className="inline-flex items-center gap-2 text-sm font-black text-[#071cff]">View all courses <ArrowRight size={17} /></a>
        </div>

        <div className="mt-9 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold transition ${activeCategory === category ? 'border-[#071cff] bg-[#071cff] text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-[#071cff] hover:text-[#071cff]'}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => <CourseCard key={course.title} course={course} />)}
        </div>
      </div>
    </section>
  )
}

function CourseCard({ course }) {
  return (
    <article className="group overflow-hidden rounded-[22px] border border-slate-100 bg-white shadow-[0_10px_35px_rgba(15,23,42,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,.12)]">
      <div className="relative aspect-[1.55] overflow-hidden bg-slate-100">
        <img src={course.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-wide shadow-sm">{course.category}</span>
      </div>
      <div className="p-5">
        <h3 className="min-h-[52px] text-lg font-black leading-6 tracking-tight">{course.title}</h3>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1"><Clock3 size={14} /> {course.lessons} lessons</span>
          <span className="flex items-center gap-1 font-bold text-slate-800"><Star size={14} fill="currentColor" className="text-[#ffb800]" /> {course.rating}</span>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-xl font-black">{course.price}</span>
          <button className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-white transition hover:bg-[#071cff]">View course</button>
        </div>
      </div>
    </article>
  )
}

function CareerSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f3f7ef] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#c8ff27]/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -left-5 top-12 z-10 rounded-xl bg-[#071cff] px-4 py-3 text-xs font-black text-white shadow-[5px_5px_0_#c8ff27]">74% growth</div>
          <div className="overflow-hidden rounded-[30px] bg-[#d9e6ff] p-6 shadow-[12px_12px_0_#111] sm:p-9">
            <div className="mb-8 flex items-center justify-between">
              <div><div className="h-4 w-28 rounded bg-slate-900" /><div className="mt-2 h-3 w-40 rounded bg-slate-900/20" /></div>
              <div className="h-11 w-11 rounded-full bg-[#c8ff27]" />
            </div>
            <div className="relative mx-auto h-72 max-w-[370px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ffcb9a] via-[#eab7d5] to-[#9bb3ff]">
              <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-t-[50%] bg-[#101827]" />
              <div className="absolute left-[38%] top-[18%] h-28 w-24 rounded-[48%] bg-[#9a5e45]" />
              <div className="absolute left-[34%] top-[9%] h-20 w-32 rounded-[55%] bg-[#101827]" />
              <div className="absolute right-4 top-4 rounded-xl bg-white/90 px-3 py-2 text-[10px] font-black">+ New Skill</div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {['Skills', 'Projects', 'Career'].map((x, i) => <div key={x} className="rounded-xl bg-white p-3"><div className="text-xs font-black">{i + 1}k+</div><div className="mt-1 text-[10px] text-slate-500">{x}</div></div>)}
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#071cff]">Your path to professional growth</p>
          <h2 className="text-4xl font-black leading-[1.02] tracking-[-.045em] sm:text-5xl">Turn your next skill into your <span className="relative inline-block">next opportunity<span className="absolute -bottom-1 left-0 h-2 w-full -rotate-2 rounded-full bg-[#c8ff27]" /></span>.</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">Short, practical lessons. Real projects. Clear outcomes. Everything you need to move from “I want to learn” to “I can build this.”</p>
          <div className="mt-8 space-y-5">
            {[
              ['Learn by doing', 'Follow guided projects that mirror the work you actually want to do.'],
              ['Build a portfolio', 'Create tangible work that demonstrates your skills to clients and teams.'],
              ['Keep your momentum', 'Track progress, save courses and return whenever you have time.'],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-4">
                <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#071cff] text-white"><Check size={16} /></div>
                <div><h3 className="font-black">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{text}</p></div>
              </div>
            ))}
          </div>
          <button className="mt-9 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-black text-white hover:bg-[#071cff]">Start learning <ArrowRight size={17} /></button>
        </div>
      </div>
    </section>
  )
}

function InstructorSection() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#071cff]">For creators</p>
          <h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">Create & manage<br /><span className="text-[#071cff]">courses</span> easily.</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">Share what you know with an audience that wants to learn. Build lessons, manage students and grow your creator profile from one simple dashboard.</p>
          <div className="mt-8 grid max-w-lg grid-cols-2 gap-3">
            {['Simple course builder', 'Student analytics', 'Secure payments', 'Creator community'].map((x) => <div key={x} className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-xs font-bold"><Check size={15} className="text-[#071cff]" /> {x}</div>)}
          </div>
          <button className="mt-8 rounded-xl bg-[#c8ff27] px-6 py-3.5 text-sm font-black shadow-[4px_4px_0_#071cff]">Become an instructor</button>
        </div>

        <div className="relative mx-auto w-full max-w-[610px]">
          <div className="absolute -right-3 top-8 z-20 rounded-xl bg-[#9c5cff] px-4 py-3 text-xs font-black text-white shadow-[4px_4px_0_#111]">Pranto Roy</div>
          <div className="rounded-[30px] bg-[#eff4ff] p-5 shadow-[12px_12px_0_#071cff] sm:p-8">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#ffcf9b] to-[#8b5e4a]" />
              <div><div className="h-4 w-32 rounded bg-slate-900" /><div className="mt-2 h-3 w-20 rounded bg-slate-300" /></div>
              <div className="ml-auto rounded-lg bg-white px-3 py-2 text-xs font-black">Creator</div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-[1.2fr_.8fr]">
              <div className="rounded-2xl bg-white p-5">
                <div className="flex items-center justify-between"><div><div className="text-xs font-bold text-slate-500">Monthly revenue</div><div className="mt-1 text-3xl font-black">$8,420</div></div><div className="rounded-lg bg-[#e9ffb7] px-2 py-1 text-[10px] font-black">+18.4%</div></div>
                <div className="mt-7 flex h-32 items-end gap-2">
                  {[28,40,34,62,50,70,58,88,74,96].map((h, i) => <span key={i} style={{height: `${h}%`}} className="flex-1 rounded-t-lg bg-[#071cff]" />)}
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl bg-[#c8ff27] p-5"><Users size={20} /><div className="mt-5 text-3xl font-black">12.8k</div><div className="mt-1 text-xs font-bold">Active students</div></div>
                <div className="rounded-2xl bg-white p-5"><Star size={20} className="text-[#ffb800]" fill="currentColor" /><div className="mt-4 text-2xl font-black">4.9 / 5</div><div className="mt-1 text-xs font-bold text-slate-500">Average rating</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CommunitySection() {
  return (
    <section id="community" className="relative overflow-hidden bg-[#0824e8] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute -left-16 bottom-0 h-48 w-48 rotate-12 rounded-[40%] bg-[#c8ff27]" />
      <div className="absolute right-10 top-12 h-16 w-16 rounded-full border-[14px] border-[#c8ff27]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#c8ff27]">Join the community</p>
          <h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">Unlock your potential.<br />Create with <span className="text-[#c8ff27]">passion.</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">Connect with learners and creators, exchange ideas and keep growing with people who are building too.</p>
          <button className="mt-8 rounded-xl bg-[#c8ff27] px-7 py-3.5 text-sm font-black text-slate-950 shadow-[5px_5px_0_white]">Join for free</button>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            ['“The projects made the difference. I finally had something real to show in interviews.”', 'Maya · Product Designer'],
            ['“I started with one course and now I teach my own. The community is incredibly useful.”', 'Arif · Creator'],
            ['“The lessons are short enough to fit around a full-time job without losing depth.”', 'Nadia · Developer'],
          ].map(([quote, author], i) => (
            <div key={author} className={`rounded-2xl p-6 text-slate-900 ${i === 1 ? 'bg-[#c8ff27]' : 'bg-white'}`}>
              <div className="flex gap-1 text-[#ffb800]">{[1,2,3,4,5].map((x) => <Star key={x} size={14} fill="currentColor" />)}</div>
              <p className="mt-5 text-sm font-bold leading-6">{quote}</p>
              <p className="mt-5 text-xs font-black uppercase tracking-wide text-slate-500">{author}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-white/10 p-5 backdrop-blur sm:p-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-xs font-black uppercase tracking-[.16em] text-[#c8ff27]">Newsletter</p><h3 className="mt-1 text-xl font-black">One useful idea every week.</h3></div>
            <div className="flex w-full max-w-md rounded-xl bg-white p-1.5"><input type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400" /><button className="rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-black text-white">Subscribe</button></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div><div className="flex items-center gap-2.5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#c8ff27] font-black text-slate-950">P</span><span className="text-xl font-black">Pranto.</span></div><p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">A practical learning platform for people who want to make their next skill useful.</p><div className="mt-5 flex gap-2"><SocialIcon>Facebook</SocialIcon><SocialIcon>Instagram</SocialIcon><SocialIcon>LinkedIn</SocialIcon><SocialIcon>Youtube</SocialIcon></div></div>
          <FooterColumn title="Platform" links={['Courses', 'For creators', 'Community', 'Pricing']} />
          <FooterColumn title="Company" links={['About us', 'Careers', 'Contact', 'Privacy']} />
          <FooterColumn title="Resources" links={['Help center', 'Blog', 'Terms', 'FAQ']} />
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">© 2026 Pranto. All rights reserved.</div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return <div><h4 className="text-sm font-black">{title}</h4><div className="mt-4 space-y-3">{links.map((link) => <a key={link} href="#" className="block text-sm text-slate-400 hover:text-white">{link}</a>)}</div></div>
}

function SocialIcon({ children }) {
  return <a href="#" className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-slate-300 hover:bg-[#c8ff27] hover:text-slate-950">{children}</a>
}

export default Home
