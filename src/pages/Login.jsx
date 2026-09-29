import { useState } from "react";
import illustration from "../assets/signup-illustration.png";

/**
 * ByteSpace – Login page
 *
 * Setup:
 * 1. Keep signup-illustration.png in ./assets/ (same image as the sign up page)
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

function SocialButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ececf1] bg-white transition hover:bg-[#f5f5f8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0537F0] active:scale-[0.97]"
    >
      {children}
    </button>
  );
}

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call your login endpoint here
    console.log("Login payload:", form);
  };

  const handleSocial = (provider) => {
    // TODO: start OAuth flow for the provider
    console.log("Continue with", provider);
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
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path
                d="M6 3a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v6.2A11 11 0 0 1 17 8c6.075 0 11 4.925 11 11s-4.925 11-11 11c-2.9 0-5.4-1.2-7.2-3.2A3 3 0 0 1 6 24.3V3Z"
                fill="#D4F800"
                transform="translate(1 2) scale(.95)"
              />
              <circle cx="17.5" cy="20" r="4" fill="#0537F0" />
            </svg>
          </a>

          <div className="mt-6 max-w-[380px]">
            <h2 className="text-[17px] font-semibold">Sign in with ease</h2>
            <p className="mt-3 text-[14px] font-light leading-relaxed text-white/90">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          <img
            src={illustration}
            alt="Preview of ByteSpace courses and happy students"
            className="mt-8 w-full max-w-[460px] select-none self-start object-contain lg:mt-16"
            draggable="false"
          />
        </section>

        {/* ---------- Right: form card ---------- */}
        <section className="w-full max-w-[520px] self-center rounded-[28px] bg-white px-8 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] sm:px-11 sm:py-12">
          <p className="text-[14px] text-[#0537F0]">Sign In</p>
          <h1 className="mt-1 font-['Poppins',sans-serif] text-[38px] font-bold leading-[1.1] tracking-tight text-[#1f1f23] sm:text-[44px]">
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
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
              autoComplete="current-password"
            />

            <div className="flex justify-end pt-1">
              <button
                type="submit"
                className="rounded-full bg-[#D4F800] px-7 py-2.5 text-[14px] font-medium text-[#1a1a1f] transition hover:bg-[#c3e600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0537F0] focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-10 flex items-center gap-4" role="separator" aria-label="or">
            <span className="h-px flex-1 bg-[#e6e6ec]" />
            <span className="text-[12px] text-[#8a8a94]">or</span>
            <span className="h-px flex-1 bg-[#e6e6ec]" />
          </div>

          {/* Social sign in */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <SocialButton label="Continue with Facebook" onClick={() => handleSocial("facebook")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#111" aria-hidden="true">
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" />
              </svg>
            </SocialButton>
            <SocialButton label="Continue with Google" onClick={() => handleSocial("google")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#111" aria-hidden="true">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.08 1.08-2.77 2.26-5.73 2.26-4.56 0-8.13-3.68-8.13-8.24S8.3 4.08 12.86 4.08c2.46 0 4.26.97 5.58 2.2l2.31-2.31C18.8 2.09 16.3.7 12.86.7 6.6.7 1.5 5.8 1.5 12.06s5.1 11.36 11.36 11.36c3.38 0 5.94-1.11 7.94-3.19 2.06-2.06 2.7-4.95 2.7-7.29 0-.72-.05-1.39-.16-1.94l-10.86-.08Z" />
              </svg>
            </SocialButton>
          </div>

          <p className="mt-9 text-center text-[13px] text-[#55555c]">
            New user?{" "}
            <a href="/signup" className="text-[#0537F0] hover:underline">
              Create an account
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}