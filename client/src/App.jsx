import { useState, useEffect, useRef } from "react";

// ══════════════════════════════════════════════════════════════════════════════
//  CONFIGURATION
// ══════════════════════════════════════════════════════════════════════════════
const CONFIG = {
  firstName: "SIVALINGAM",
  lastName: "P",
  role: "MERN Stack Developer",
  taglines: [
    "MERN Stack Developer",
    "Frontend | Backend Developer",
    "🎯 I measure my growth not by courses completed",
     "but by products shipped", 
     "Every repository here is a real-world solution", 
     "I built from scratch — and I'm just getting started",
    "Turning Ideas Into Products",
  ],
  tagline: "I build scalable and user-friendly web applications that matter.",
  email: "sivadmaddy@gmail.com",
  phone: "+91 7358426620",
  location: "Bangalore, Karnataka, India",
  github: "https://github.com/sivadmaddy-cloud",
  linkedin: "https://www.linkedin.com/in/siva-lingam-p-5716a323b/",
  resumeLink: "https://drive.google.com/file/d/your-resume-id/view",
  appScriptURL:"https://script.google.com/macros/s/AKfycbwm_wCCONMmrmNcUd3vd3pQqQZH3sDzdoCKNDkf09Xb3ECT1Du3OAYcdfdda-i5T2jW/exec",

  heroStats: [
    { value: "20+", label: "PROJECTS BUILT" },
    { value: "3+",  label: "YEARS EXP" },
    { value: "MERN", label: "STACK FOCUS" },
    { value: "15+", label: "CLIENTS" },
  ],

  about: {
    bio: `I'm a passionate MERN Stack Developer with 3+ years of experience building robust, scalable web applications. I thrive at the intersection of clean code and intuitive design — turning complex requirements into seamless digital experiences.`,
    bio2: `Currently sharpening my Full Stack skills, building real-world projects, and always exploring emerging technologies that push the web forward.`,
    highlights: [
      "💻 MERN Stack Developer — MongoDB, Express, React, Node.js",
      "📚 Continuously improving Full Stack Development skills",
      "🛠️ Skilled in building responsive and dynamic web applications",
      "🎯 Delivered 20+ real-world projects for clients",
      "🌱 Always exploring new technologies and best practices",
      "🚀 Open to Full-Time / Internship opportunities",
    ],
    stats: [
      { label: "Projects", value: "20+" },
      { label: "Experience", value: "3 Yrs" },
      { label: "Clients", value: "15+" },
      { label: "Commits", value: "500+" },
    ],
  },

  skills: [
    { category: "Frontend", icon: "🎨", color: "#e879f9", items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Redux", "Framer Motion"] },
    { category: "Backend",  icon: "⚙️", color: "#38bdf8", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
    { category: "Database", icon: "🗄️", color: "#34d399", items: ["MongoDB", "Mongoose"] },
    { category: "Tools",    icon: "🛠️", color: "#fb923c", items: ["Git", "GitHub", "VS Code", "Postman", "ThunderClient"] },
  ],

  projects: [
    { title: "Crackers Mart", description: "Full-stack e-commerce with real-time inventory, payment gateway integration, and an admin dashboard.", tags: ["React", "Node.js", "MongoDB", "Stripe"], live: "https://zippy-dango-5a7c26.netlify.app/", github: "https://github.com/sivadmaddy-cloud/Crackersmart.git", accent: "#a855f7", featured: true },
    { title: "Multi-Page React App", description: "Multi-room real-time web app with smooth routing, clean UX and modular React architecture.", tags: ["React", "React Router", "CSS Modules"], live: "https://frolicking-torte-00aeca.netlify.app/", github: "https://github.com/sivadmaddy-cloud/Build-a-Multi-page-React.git", accent: "#06b6d4", featured: true },
    { title: "Mini Project", description: "Collaborative project management tool with Kanban boards, time tracking, and team analytics.", tags: ["React", "Node.js", "MongoDB"], live: "https://leafy-sprite-6705f8.netlify.app/", github: "https://github.com/sivadmaddy-cloud/miniproject.git", accent: "#10b981", featured: true },
    { title: "E-Com Shop", description: "Responsive e-commerce storefront with product listings, cart, and checkout flow.", tags: ["HTML", "CSS", "JavaScript"], live: "https://sivadmaddy-cloud.github.io/Responsive-web-site/", github: "https://github.com/sivadmaddy-cloud/Responsive-web-site.git", accent: "#f97316", featured: false },
    { title: "Product Listing — React", description: "Dynamic product listing UI with filtering, sorting, and responsive card grid.", tags: ["React", "API", "CSS"], live: "https://rainbow-muffin-3e40fb.netlify.app/", github: "https://github.com/sivadmaddy-cloud/Product-React.git", accent: "#8b5cf6", featured: false },
    { title: "CRM App", description: "Customer relationship management app with contact management and activity tracking.", tags: ["React", "Node.js", "MongoDB"], live: "https://netlilycrm.netlify.app/", github: "https://github.com/sivadmaddy-cloud/CRM.git", accent: "#ec4899", featured: false },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
//  APPS SCRIPT (paste in Extensions → Apps Script → Deploy as Web App)
//
//  function doPost(e) {
//    try {
//      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//      var data = e.parameter;
//      if (sheet.getLastRow() === 0)
//        sheet.appendRow(["Timestamp","Name","Email","Subject","Message"]);
//      sheet.appendRow([data.timestamp||new Date().toISOString(),data.name||"",data.email||"",data.subject||"",data.message||""]);
//      return ContentService.createTextOutput(JSON.stringify({status:"success"})).setMimeType(ContentService.MimeType.JSON);
//    } catch(err) {
//      return ContentService.createTextOutput(JSON.stringify({status:"error",error:err.toString()})).setMimeType(ContentService.MimeType.JSON);
//    }
//  }
//  Execute as: Me  |  Who can access: Anyone  |  → New Deployment each time you change code
// ══════════════════════════════════════════════════════════════════════════════

// ── ICONS ──────────────────────────────────────────────────────────────────────
const GH = ({ s = 20 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
const LI = ({ s = 20 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const Ext = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);
const Download = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);
const Mail = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);
const Grid = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);
const Sun = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);
const Moon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);
const MenuIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);
const CloseIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

// ── TYPING ANIMATION HOOK ──────────────────────────────────────────────────────
function useTyping(lines, speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const cur = lines[lineIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(cur.slice(0, charIdx + 1));
        if (charIdx + 1 === cur.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplay(cur.slice(0, charIdx - 1));
        if (charIdx === 0) {
          setDeleting(false);
          setLineIdx(i => (i + 1) % lines.length);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, lineIdx, lines, speed, pause]);
  return display;
}

// ── INTERSECTION OBSERVER ──────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, vis];
}
function Fade({ children, delay = 0, className = "" }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateY(28px)",
      transition: `opacity .65s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .65s cubic-bezier(.22,1,.36,1) ${delay}ms`,
    }}>{children}</div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const typed = useTyping(CONFIG.taglines);

  const nav = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY + 100;
      nav.forEach(id => { const el = document.getElementById(id); if (el && y >= el.offsetTop) setActive(id); });
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const submit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error"); setTimeout(() => setStatus(null), 3500); return;
    }
    setStatus("sending");
    try {
      const fd = new FormData();
      Object.entries({ ...form, timestamp: new Date().toISOString() }).forEach(([k, v]) => fd.append(k, v));
      await fetch(CONFIG.appScriptURL, { method: "POST", mode: "no-cors", body: fd });
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch { setStatus("error"); }
    setTimeout(() => setStatus(null), 4500);
  };

  const projects = filter === "featured" ? CONFIG.projects.filter(p => p.featured) : CONFIG.projects;

  const bg      = dark ? "#0a0a0f" : "#f5f5fa";
  const bgAlt   = dark ? "#0d0d16" : "#ebebf5";
  const text     = dark ? "#f0efff" : "#0f0f1a";
  const muted    = dark ? "#7a7899" : "#6a6880";
  const cardBg   = dark ? "rgba(16,15,28,0.95)" : "rgba(255,255,255,0.97)";
  const cardBdr  = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)";
  const inputStyle = {
    width: "100%", padding: "12px 14px", borderRadius: 10, fontSize: 14,
    outline: "none", fontFamily: "inherit",
    background: dark ? "#13121f" : "#f0f0fb",
    border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
    color: text,
    transition: "border-color .2s",
  };

  return (
    <div style={{ background: bg, color: text, fontFamily: "'Inter','DM Sans',sans-serif", minHeight: "100vh", transition: "background .3s,color .3s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#7c3aed;border-radius:4px}
        a{text-decoration:none;color:inherit}
        button{font-family:inherit;cursor:pointer}
        input,textarea{font-family:inherit}
        input:focus,textarea:focus{border-color:#38bdf8 !important;box-shadow:0 0 0 3px rgba(56,189,248,.12)}
        .mono{font-family:'Space Mono',monospace}
        .cyan{color:#38bdf8}
        .gt{background:linear-gradient(135deg,#a855f7,#38bdf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes spin-slow{to{transform:rotate(360deg)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes pulse-green{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.4)}70%{box-shadow:0 0 0 8px rgba(34,197,94,0)}}
        @keyframes gradient-bg{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .float{animation:float 4s ease-in-out infinite}
        .spin-slow{animation:spin-slow 10s linear infinite}
        .blink{animation:blink 1s step-end infinite}
        .pulse-green{animation:pulse-green 2s infinite}
        .hero-bg{background:linear-gradient(-45deg,#0d0221,#0a0a0f,#050d1a,#100520);background-size:400% 400%;animation:gradient-bg 14s ease infinite}
        .btn-primary{background:linear-gradient(135deg,#7c3aed,#0ea5e9);border:none;color:#fff;font-weight:700;transition:opacity .2s,transform .2s;display:inline-flex;align-items:center;gap:8px}
        .btn-primary:hover{opacity:.88;transform:translateY(-2px)}
        .btn-outline{background:transparent;border:1.5px solid rgba(255,255,255,0.2);color:#f0efff;font-weight:600;transition:background .2s,transform .2s,border-color .2s;display:inline-flex;align-items:center;gap:8px}
        .btn-outline:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.4);transform:translateY(-2px)}
        .btn-outline-light{background:transparent;border:1.5px solid rgba(0,0,0,0.15);color:#0f0f1a;font-weight:600;transition:background .2s,transform .2s;display:inline-flex;align-items:center;gap:8px}
        .btn-outline-light:hover{background:rgba(0,0,0,.05);transform:translateY(-2px)}
        .card-hover{transition:transform .3s,box-shadow .3s}
        .card-hover:hover{transform:translateY(-5px);box-shadow:0 24px 60px rgba(124,58,237,.15)}
        .nav-active{background:rgba(124,58,237,.18);color:#a78bfa}
        .nav-btn{padding:8px 18px;border-radius:999px;border:none;font-size:15px;font-weight:500;text-transform:capitalize;transition:background .2s,color .2s;background:transparent}
        .skill-pill{display:inline-flex;align-items:center;padding:5px 14px;border-radius:999px;font-size:12px;font-weight:600;letter-spacing:.03em}
        .marquee-wrap{overflow:hidden;mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent)}
        .marquee-inner{display:flex;gap:16px;width:max-content;animation:marquee 28s linear infinite}
        .hire-btn{background:linear-gradient(135deg,#7c3aed,#9333ea);border:none;color:#fff;font-weight:700;font-size:14px;padding:10px 22px;border-radius:999px;cursor:pointer;transition:opacity .2s,transform .2s;letter-spacing:.01em}
        .hire-btn:hover{opacity:.9;transform:scale(1.04)}
        .stat-divider{width:1px;background:rgba(255,255,255,.1);height:40px;align-self:center}
        @media(max-width:768px){
          .desktop-nav{display:none!important}
          .desktop-only{display:none!important}
          .mobile-btn{display:flex!important}
          .hero-h1{font-size:clamp(2.6rem,12vw,4rem)!important}
          .hero-grid{grid-template-columns:1fr!important}
          .contact-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* ══════ NAVBAR ══════════════════════════════════════════════════════════ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: dark ? "rgba(10,10,15,0.88)" : "rgba(245,245,250,0.88)",
        backdropFilter: "blur(20px)", bordertop: `1px solid ${cardBdr}`,
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo — like <Abishek/> but for Siva */}
          <span className="mono" style={{ fontSize: 17, fontWeight: 700, color: dark ? "#e2e0ff" : "#1a1a2e" }}>
            &lt;<span style={{ color: "#a78bfa" }}>Siva</span>/&gt;
          </span>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: "flex", gap: 4 }}>
            {nav.map(n => (
              <button key={n} onClick={() => go(n)}
                className={`nav-btn ${active === n ? "nav-active" : ""}`}
                style={{ color: active === n ? "#a78bfa" : muted }}>
                {n.charAt(0).toUpperCase() + n.slice(1)}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button onClick={() => setDark(d => !d)} style={{
              width: 36, height: 36, borderRadius: 8, border: `1px solid ${cardBdr}`,
              background: "transparent", color: muted, display: "flex", alignItems: "center", justifyContent: "center",
            }}>{dark ? <Sun /> : <Moon />}</button>
            <button className="hire-btn desktop-only" onClick={() => go("contact")}>Hire Me</button>
            <button className="mobile-btn" onClick={() => setMenuOpen(m => !m)} style={{ display: "none", width: 36, height: 36, border: "none", background: "transparent", color: text, alignItems: "center", justifyContent: "center" }}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ background: cardBg, borderTop: `1px solid ${cardBdr}`, padding: "14px 24px 20px" }}>
            {nav.map(n => (
              <button key={n} onClick={() => go(n)} style={{
                display: "block", width: "100%", textAlign: "left", padding: "12px 16px",
                borderRadius: 10, border: "none", fontSize: 15, fontWeight: 500, textTransform: "capitalize",
                background: active === n ? "rgba(124,58,237,.15)" : "transparent",
                color: active === n ? "#a78bfa" : text, marginBottom: 4,
              }}>{n.charAt(0).toUpperCase() + n.slice(1)}</button>
            ))}
            <button className="hire-btn" style={{ width: "100%", marginTop: 8, borderRadius: 10 }} onClick={() => go("contact")}>Hire Me</button>
          </div>
        )}
      </nav>

      {/* ══════ HERO ════════════════════════════════════════════════════════════ */}
      <section id="home" className={dark ? "hero-bg" : ""} style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        paddingTop: 100, paddingBottom: 0, position: "relative", overflow: "hidden",
        background: dark ? undefined : "linear-gradient(135deg,#f5f5fa,#ebe8ff,#e8f4ff)",
      }}>
        {/* Background orbs */}
        {dark && <>
          <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,.14) 0%,transparent 70%)", top: "-10%", left: "-8%", pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(14,165,233,.1) 0%,transparent 70%)", bottom: "5%", right: "-5%", pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(236,72,153,.08) 0%,transparent 70%)", top: "40%", right: "20%", pointerEvents: "none" }} />
        </>}

        <div style={{ position: "relative", zIndex: 1, maxWidth: 860, width: "100%", padding: "0 28px", textAlign: "left" }}>

          {/* Open to opportunities badge */}
          <div style={{ marginBottom: 28 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              padding: "9px 20px", borderRadius: 999,
              background: dark ? "rgba(34,197,94,0.12)" : "rgba(34,197,94,0.1)",
              border: "1.5px solid rgba(34,197,94,0.35)",
              fontSize: 14, fontWeight: 600, color: "#22c55e",
            }}>
              <span className="pulse-green" style={{ width: 8, height: 10, borderRadius: "50%", background: "#22c55e", display: "inline-block", flexShrink: 0 , gap : "20px" }} />
              Open to work — Full Time / Internship
            </span>
          </div>

          {/* Name — two-tone like Abishek A */}
          <h1 className="hero-h1" style={{
            fontSize: "clamp(3.2rem,8vw,6rem)", fontWeight: 900, lineHeight: 1.0,
            letterSpacing: "-.04em", marginBottom: 20,
          }}>
            <span style={{ color: dark ? "#f0efff" : "#0f0f1a" }}>{CONFIG.firstName} </span>
            <span style={{ color: "#38bdf8" }}>{CONFIG.lastName}</span>
          </h1>

          {/* Role line with dash like the reference */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ width: 40, height: 2, background: "linear-gradient(90deg,#7c3aed,#38bdf8)" }} />
            <span className="mono" style={{ fontSize: "clamp(.85rem,2vw,1rem)", color: "#38bdf8", letterSpacing: ".06em", fontWeight: 700 }}>
              {CONFIG.role.toUpperCase()}
            </span>
          </div>

          {/* Typing tagline */}
          <p style={{ fontSize: "clamp(1.1rem,3vw,1.35rem)", color: dark ? "#c4c2de" : "#3a3850", maxWidth: 560, lineHeight: 1.6, marginBottom: 36, fontWeight: 400 }}>
            I build <strong style={{ color: dark ? "#f0efff" : "#0f0f1a", fontWeight: 700 }}>scalable</strong> and{" "}
            <strong style={{ color: dark ? "#f0efff" : "#0f0f1a", fontWeight: 700 }}>user-friendly</strong>{" "}
            web applications that matter.
          </p>

          {/* Typing animation line */}
          <div className="mono" style={{ fontSize: 15, color: "#38bdf8", marginBottom: 40, letterSpacing: ".04em", minHeight: 24 }}>
            <span>{typed}</span><span className="blink" style={{ borderRight: "2px solid #38bdf8", marginLeft: 2 }}>&nbsp;</span>
          </div>

          {/* CTA Buttons — 3 buttons like reference */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
            <button onClick={() => go("projects")} className="btn-primary" style={{ padding: "12px 26px", borderRadius: 999, fontSize: 15 }}>
              <Grid /> View Projects
            </button>
            <button onClick={() => go("contact")} className={dark ? "btn-outline" : "btn-outline-light"} style={{ padding: "12px 26px", borderRadius: 999, fontSize: 15 }}>
              <Mail /> Get In Touch
            </button>
            <a href={CONFIG.resumeLink} target="_blank" rel="noreferrer" className={dark ? "btn-outline" : "btn-outline-light"} style={{ padding: "12px 26px", borderRadius: 999, fontSize: 15 }}>
              <Download /> Resume
            </a>
          </div>

          {/* Social pills */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { href: CONFIG.github, icon: <GH s={16} />, label: "GitHub" },
              { href: CONFIG.linkedin, icon: <LI s={16} />, label: "LinkedIn" },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "9px 20px", borderRadius: 999,
                background: dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)",
                border: `1.5px solid ${cardBdr}`,
                fontSize: 14, fontWeight: 600, color: muted,
                transition: "background .2s,color .2s",
              }}>{icon}{label}</a>
            ))}
          </div>
        </div>

        {/* Stats bar — at the bottom of hero like reference */}
        <div style={{
          position: "relative", zIndex: 1, width: "100%", maxWidth: 860, margin: "52px 0 0",
          padding: "24px 28px", display: "flex", flexWrap: "wrap", gap: 0,
          background: dark ? "rgba(16,15,28,0.7)" : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(12px)",
          border: `1px solid ${cardBdr}`,
          borderRadius: 16,
        }}>
          {CONFIG.heroStats.map((s, i) => (
            <div key={s.label} style={{ flex: "1 1 140px", textAlign: "center", padding: "4px 16px", borderRight: i < CONFIG.heroStats.length - 1 ? `1px solid ${cardBdr}` : "none" }}>
              <div className="mono" style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 700, color: ["#a78bfa","#38bdf8","#f472b6","#34d399"][i], marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: muted, letterSpacing: ".1em", fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 11, color: muted, letterSpacing: ".12em" }}>SCROLL</span>
          <div style={{ width: 1, height: 36, background: `linear-gradient(to bottom,#7c3aed,transparent)` }} />
        </div>
      </section>

      {/* ══════ ABOUT ═══════════════════════════════════════════════════════════ */}
      <section id="about" style={{ padding: "110px 28px", background: bgAlt }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="mono" style={{ fontSize: 13, color: "#a78bfa", letterSpacing: ".14em" }}>// ABOUT_ME</span>
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-.03em", marginTop: 10 }}>Who I Am</h2>
            </div>
          </Fade>

          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
            <Fade delay={60}>
              <div className="card-hover" style={{ background: cardBg, border: `1px solid ${cardBdr}`, borderRadius: 20, padding: 32, backdropFilter: "blur(12px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg,#7c3aed,#0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>👨‍💻</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16 }}>{CONFIG.firstName} {CONFIG.lastName}</div>
                    <div className="mono" style={{ fontSize: 12, color: "#38bdf8", marginTop: 2 }}>{CONFIG.role}</div>
                  </div>
                </div>
                <p style={{ color: muted, lineHeight: 1.78, marginBottom: 16, fontSize: 14.5 }}>{CONFIG.about.bio}</p>
                <p style={{ color: muted, lineHeight: 1.78, fontSize: 14.5 }}>{CONFIG.about.bio2}</p>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${cardBdr}` }}>
                  {[["📍", CONFIG.location], ["✉️", CONFIG.email], ["📱", CONFIG.phone]].map(([ic, v]) => (
                    <div key={v} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: 13.5, color: muted }}>
                      <span style={{ fontSize: 17 }}>{ic}</span>{v}
                    </div>
                  ))}
                </div>
              </div>
            </Fade>

            <Fade delay={130}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Highlights — like the GitHub about me list */}
                <div className="card-hover" style={{ background: cardBg, border: `1px solid ${cardBdr}`, borderRadius: 20, padding: 28, backdropFilter: "blur(12px)" }}>
                  <div className="mono" style={{ fontSize: 12, color: "#a78bfa", letterSpacing: ".1em", marginBottom: 16 }}>🚀 ABOUT_ME</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {CONFIG.about.highlights.map((h, i) => (
                      <div key={i} style={{ fontSize: 13.5, color: muted, lineHeight: 1.6 }}>{h}</div>
                    ))}
                  </div>
                </div>

                {/* Stats grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {CONFIG.about.stats.map(({ label, value }) => (
                    <div key={label} className="card-hover" style={{ background: cardBg, border: `1px solid ${cardBdr}`, borderRadius: 16, padding: "20px 16px", textAlign: "center", backdropFilter: "blur(12px)" }}>
                      <div className="gt" style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-.02em" }}>{value}</div>
                      <div style={{ fontSize: 12, color: muted, marginTop: 4 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══════ SKILLS ══════════════════════════════════════════════════════════ */}
      <section id="skills" style={{ padding: "110px 28px", background: bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="mono" style={{ fontSize: 13, color: "#38bdf8", letterSpacing: ".14em" }}>// TECH_STACK</span>
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-.03em", marginTop: 10 }}>Skills & Tools</h2>
              <p style={{ color: muted, marginTop: 12, fontSize: 15, maxWidth: 440, margin: "12px auto 0" }}>Technologies I use to build fast, scalable, and beautiful products.</p>
            </div>
          </Fade>

          {/* Marquee skill tape */}
          <Fade delay={50}>
            <div className="marquee-wrap" style={{ marginBottom: 50 }}>
              <div className="marquee-inner">
                {[...CONFIG.skills.flatMap(s => s.items), ...CONFIG.skills.flatMap(s => s.items)].map((sk, i) => (
                  <span key={i} className="skill-pill mono" style={{
                    background: dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)",
                    border: `1px solid ${cardBdr}`, color: muted, whiteSpace: "nowrap",
                  }}>{sk}</span>
                ))}
              </div>
            </div>
          </Fade>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {CONFIG.skills.map(({ category, icon, color, items }, i) => (
              <Fade key={category} delay={i * 70}>
                <div className="card-hover" style={{ background: cardBg, border: `1px solid ${cardBdr}`, borderRadius: 20, padding: 26, height: "100%", backdropFilter: "blur(12px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: `${color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{icon}</div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{category}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                    {items.map((sk, j) => (
                      <div key={sk}>
                        <div style={{ fontSize: 13, color: muted, marginBottom: 5 }}>{sk}</div>
                        <div style={{ height: 3, borderRadius: 99, background: dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.07)" }}>
                          <div style={{ height: "100%", borderRadius: 99, background: `linear-gradient(90deg,${color},${color}77)`, width: `${72 + (j * 8) % 24}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROJECTS ════════════════════════════════════════════════════════ */}
      <section id="projects" style={{ padding: "110px 28px", background: bgAlt }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="mono" style={{ fontSize: 13, color: "#ec4899", letterSpacing: ".14em" }}>// PROJECTS</span>
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-.03em", marginTop: 10 }}>What I've Built</h2>
              <p style={{ color: muted, marginTop: 12, fontSize: 15 }}>From ideas to shipped products — a selection of my work.</p>
            </div>
          </Fade>

          <Fade>
            <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 44 }}>
              {["all", "featured"].map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{
                  padding: "9px 24px", borderRadius: 999, fontSize: 13, fontWeight: 700, border: "none",
                  background: filter === f ? "linear-gradient(135deg,#7c3aed,#0ea5e9)" : (dark ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.07)"),
                  color: filter === f ? "#fff" : muted, transition: "all .2s", textTransform: "capitalize",
                }}>
                  {f === "all" ? `All (${CONFIG.projects.length})` : `Featured (${CONFIG.projects.filter(p => p.featured).length})`}
                </button>
              ))}
            </div>
          </Fade>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 22 }}>
            {projects.map((p, i) => (
              <Fade key={p.title} delay={i * 60}>
                <div className="card-hover" style={{ background: cardBg, border: `1px solid ${cardBdr}`, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", backdropFilter: "blur(12px)" }}>
                  <div style={{ height: 4, background: `linear-gradient(90deg,${p.accent},${p.accent}66)` }} />
                  <div style={{ padding: "24px 24px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3, flex: 1 }}>{p.title}</h3>
                      {p.featured && <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999, background: `${p.accent}22`, color: p.accent, whiteSpace: "nowrap", marginLeft: 8 }}>★ Featured</span>}
                    </div>
                    <p style={{ fontSize: 13.5, color: muted, lineHeight: 1.7, flex: 1, marginBottom: 18 }}>{p.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                      {p.tags.map(tg => (
                        <span key={tg} className="mono" style={{
                          fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999,
                          background: dark ? "rgba(255,255,255,.07)" : "rgba(0,0,0,.06)", color: muted,
                        }}>{tg}</span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                      <a href={p.live} target="_blank" rel="noreferrer" style={{
                        flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                        padding: "10px 0", borderRadius: 10, fontSize: 13, fontWeight: 700,
                        background: `linear-gradient(135deg,${p.accent},${p.accent}88)`, color: "#fff",
                      }}><Ext /> Live Demo</a>
                      <a href={p.github} target="_blank" rel="noreferrer" style={{
                        width: 44, display: "flex", alignItems: "center", justifyContent: "center",
                        borderRadius: 10, border: `1px solid ${cardBdr}`, color: muted,
                        background: dark ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.04)",
                      }}><GH s={16} /></a>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          <Fade>
            <div style={{ textAlign: "center", marginTop: 50 }}>
              <a href={CONFIG.github} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 30px",
                borderRadius: 10, fontSize: 14, fontWeight: 600, border: `1px solid ${cardBdr}`,
                color: muted, background: dark ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)",
              }}><GH s={17} /> View All on GitHub</a>
            </div>
          </Fade>
        </div>
      </section>

      {/* ══════ CONTACT ═════════════════════════════════════════════════════════ */}
      <section id="contact" style={{ padding: "110px 28px", background: bg }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="mono" style={{ fontSize: 13, color: "#10b981", letterSpacing: ".14em" }}>// CONTACT</span>
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-.03em", marginTop: 10 }}>Let's Work Together</h2>
              <p style={{ color: muted, marginTop: 12, fontSize: 15 }}>Have a project idea or want to say hello? Let's make it real.</p>
            </div>
          </Fade>

          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 24, alignItems: "start" }}>
            <Fade delay={60}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: "✉️", label: "Email", value: CONFIG.email, href: `mailto:${CONFIG.email}` },
                  { icon: "📱", label: "Phone", value: CONFIG.phone, href: `tel:${CONFIG.phone}` },
                  { icon: "📍", label: "Location", value: CONFIG.location, href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} style={{ background: cardBg, border: `1px solid ${cardBdr}`, borderRadius: 16, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, backdropFilter: "blur(12px)" }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,rgba(124,58,237,.3),rgba(14,165,233,.3))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div className="mono" style={{ fontSize: 10, color: muted, letterSpacing: ".1em", marginBottom: 3 }}>{label.toUpperCase()}</div>
                      {href ? <a href={href} style={{ fontSize: 13.5, fontWeight: 500, color: text }}>{value}</a> : <div style={{ fontSize: 13.5, fontWeight: 500 }}>{value}</div>}
                    </div>
                  </div>
                ))}
                <div style={{ background: cardBg, border: `1px solid ${cardBdr}`, borderRadius: 16, padding: "18px 20px", backdropFilter: "blur(12px)" }}>
                  <div className="mono" style={{ fontSize: 10, color: muted, letterSpacing: ".1em", marginBottom: 14 }}>FIND_ME_ONLINE</div>
                  <div style={{ display: "flex", gap: 10 }}>
                    {[
                      { href: CONFIG.github, icon: <GH s={15} />, label: "GitHub", bg: dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.07)" },
                      { href: CONFIG.linkedin, icon: <LI s={15} />, label: "LinkedIn", bg: "rgba(0,119,181,.2)" },
                    ].map(({ href, icon, label, bg: ibg }) => (
                      <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                        flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                        padding: "10px 0", borderRadius: 10, fontSize: 13, fontWeight: 600, background: ibg, color: text,
                      }}>{icon}{label}</a>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>

            <Fade delay={140}>
              <div style={{ background: cardBg, border: `1px solid ${cardBdr}`, borderRadius: 20, padding: 32, backdropFilter: "blur(12px)" }}>
                <h3 style={{ fontWeight: 800, fontSize: 19, marginBottom: 24 }}>Send a Message</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    {[
                      { key: "name", label: "Name *", ph: "Your Name", type: "text" },
                      { key: "email", label: "Email *", ph: "you@example.com", type: "email" },
                    ].map(({ key, label, ph, type }) => (
                      <div key={key}>
                        <label className="mono" style={{ display: "block", fontSize: 10, fontWeight: 700, color: muted, letterSpacing: ".1em", marginBottom: 8 }}>{label.toUpperCase()}</label>
                        <input type={type} value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} placeholder={ph} style={inputStyle} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="mono" style={{ display: "block", fontSize: 10, fontWeight: 700, color: muted, letterSpacing: ".1em", marginBottom: 8 }}>SUBJECT</label>
                    <input value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder="Project Inquiry / Freelance / Job" style={inputStyle} />
                  </div>
                  <div>
                    <label className="mono" style={{ display: "block", fontSize: 10, fontWeight: 700, color: muted, letterSpacing: ".1em", marginBottom: 8 }}>MESSAGE *</label>
                    <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={5} placeholder="Tell me about your project or idea..." style={{ ...inputStyle, resize: "none" }} />
                  </div>
                  <button onClick={submit} disabled={status === "sending"} style={{
                    width: "100%", padding: "14px 0", borderRadius: 12, fontSize: 15, fontWeight: 700, border: "none",
                    background: "linear-gradient(135deg,#7c3aed,#0ea5e9)", color: "#fff",
                    opacity: status === "sending" ? .6 : 1, cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "opacity .2s",
                  }}>
                    {status === "sending" ? "⏳ Sending..." : "Send Message 🚀"}
                  </button>
                  {status === "success" && (
                    <div style={{ textAlign: "center", padding: "12px", borderRadius: 10, background: "rgba(16,185,129,.12)", color: "#10b981", fontSize: 14, fontWeight: 600 }}>
                      ✅ Message sent! I'll get back to you soon.
                    </div>
                  )}
                  {status === "error" && (
                    <div style={{ textAlign: "center", padding: "12px", borderRadius: 10, background: "rgba(239,68,68,.12)", color: "#f87171", fontSize: 14, fontWeight: 600 }}>
                      ❌ Please fill in all required fields.
                    </div>
                  )}
                  <p style={{ textAlign: "center", fontSize: 12, color: muted }}>📊 Responses are saved directly to Google Sheets.</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER ══════════════════════════════════════════════════════════ */}
      <footer style={{ padding: "28px 28px", borderTop: `1px solid ${cardBdr}` }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <p style={{ fontSize: 13, color: muted }}>
            © {new Date().getFullYear()}{" "}
            <span className="mono" style={{ color: "#a78bfa", fontWeight: 700 }}>{CONFIG.firstName} {CONFIG.lastName}</span>
            {" "}— Built with React & ❤️
          </p>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <a href={CONFIG.github} target="_blank" rel="noreferrer" style={{ color: muted }}><GH s={18} /></a>
            <a href={CONFIG.linkedin} target="_blank" rel="noreferrer" style={{ color: "#0ea5e9" }}><LI s={18} /></a>
            <a href={CONFIG.resumeLink} target="_blank" rel="noreferrer" style={{ fontSize: 12, fontWeight: 700, color: muted }}>Resume ↗</a>
          </div>
        </div>
      </footer>
    </div>
  );
}