import { useState } from "react";
import illustration from "../assets/signup-illustration.png";
import SiteLogo from '../assets/site-logo.png'

/**
 * ByteSpace – Sign up page
 *
 * Setup:
 * 1. Put signup-illustration.png in ./assets/
 * 2. Add these fonts to index.html <head>:
 *    <link rel="preconnect" href="https://fonts.googleapis.com" />
 *    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
 *    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
 */

const gridStyle = {
  backgroundColor: "#0537F0",
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.13) 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

function Field({ id, label, type = "text", placeholder, value, onChange, autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] text-[#3a3a3f]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="h-12 w-full rounded-xl border border-[#ececf1] bg-[#f8f8fa] px-4 text-[14px] text-[#1c1c21] placeholder:text-[#a9a9b3] outline-none transition focus:border-[#0537F0] focus:bg-white focus:ring-2 focus:ring-[#0537F0]/20"
      />
    </div>
  );
}

export default function Register() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call your register endpoint here
    console.log("Sign up payload:", form);
  };

  return (
    <main
      style={gridStyle}
      className="min-h-screen w-full font-['Outfit',sans-serif] text-white"
    >
      <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col gap-10 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-16 lg:py-14">
        {/* ---------- Left: brand + copy + illustration ---------- */}
        <section className="flex w-full flex-col lg:min-h-[640px] lg:max-w-[560px] lg:self-stretch">
          {/* Logo */}
          <a href="/" aria-label="ByteSpace home" className="inline-block w-fit">
            <img src={SiteLogo}/>
          </a>

          <div className="mt-6 max-w-[380px]">
            <h2 className="text-[17px] font-semibold">Sign up and come in</h2>
            <p className="mt-3 text-[14px] font-light leading-relaxed text-white/90">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost.
            </p>
          </div>

          <img
            src={illustration}
            alt="Preview of ByteSpace courses and happy students"
            className="mt-8 w-full max-w-[460px] select-none self-start object-contain lg:mt-4"
            draggable="false"
          />
        </section>

        {/* ---------- Right: form card ---------- */}
        <section className="w-full max-w-[520px] self-center rounded-[28px] bg-white px-8 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] sm:px-11 sm:py-12 lg:self-center">
          <p className="text-[14px] text-[#0537F0]">Create an Account</p>
          <h1 className="mt-1 font-['Poppins',sans-serif] text-[38px] font-bold leading-[1.1] tracking-tight text-[#1f1f23] sm:text-[44px]">
            Welcome to
            <br />
            ByteSpace
          </h1>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5" noValidate={false}>
            <Field
              id="fullName"
              label="Full Name"
              placeholder="Jamie Davis"
              value={form.fullName}
              onChange={handleChange}
              autoComplete="name"
            />
            <Field
              id="email"
              label="Email"
              type="email"
              placeholder="designer@example.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <Field
              id="password"
              label="Password"
              type="password"
              placeholder="********"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
            />

            <div className="flex justify-end pt-1">
              <button
                type="submit"
                className="rounded-full bg-[#D4F800] px-7 py-2.5 text-[14px] font-medium text-[#1a1a1f] transition hover:bg-[#c3e600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0537F0] focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                Continue
              </button>
            </div>
          </form>

          <p className="mt-24 text-center text-[13px] text-[#55555c] sm:mt-32">
            Already have an account?{" "}
            <a href="/login" className="text-[#0537F0] hover:underline">
              Login
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}