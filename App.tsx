import { useState } from "react";
import profileScreenshot from "./imports/image-10.png";

const projects = [
  {
    id: "01",
    title: "Smart Room Automation System",
    category: "Embedded Systems",
    year: "2026",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=600&fit=crop&auto=format",
    tags: ["Arduino", "C/C++", "IoT", "Tinkercad"],
    description:
      "Capstone project during Embedded Systems Internship at LaunchED Global. Built a multi-sensor smart home simulation with temperature-based fan control, automatic lighting via LDR, PIR-based intruder alert, and servo-driven smart door control.",
  },
  {
    id: "02",
    title: "VLSI System on Chip Design",
    category: "Chip Architecture",
    year: "2026",
    image: "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=800&h=600&fit=crop&auto=format",
    tags: ["VLSI", "SoC", "Semiconductors", "Architecture"],
    description:
      "Deep-dive into SoC architecture — exploring how processors, memory, and communication interfaces integrate onto a single chip. Covered VLSI design fundamentals, design flow, and applications in embedded and consumer electronics. Certified by Maven Silicon.",
  },
  {
    id: "03",
    title: "IoT & Robotics Mentorship",
    category: "IoT / Robotics",
    year: "2026",
    image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=800&h=600&fit=crop&auto=format",
    tags: ["IoT", "Robotics", "Python", "Unibotix"],
    description:
      "Completed a structured Mentorship Program on IoT and Robotics conducted by Unibotix in association with Launched Global (May–June 2026). Gained hands-on exposure to IoT concepts, robotics fundamentals, and practical system design.",
  },
];

const skillGroups = [
  {
    label: "Programming",
    items: ["Python", "C / C++", "Embedded C", "Pandas", "NumPy"],
  },
  {
    label: "Hardware & Systems",
    items: ["VLSI / SoC Design", "Circuit Design", "Arduino UNO", "Sensor Interfacing", "Tinkercad Simulation"],
  },
  {
    label: "Domains",
    items: ["Embedded Systems", "IoT", "Robotics", "SOC Architecture", "Automation Logic"],
  },
  {
    label: "Soft Skills",
    items: ["Leadership", "Problem Solving", "Collaborative Mindset", "UI/UX Fundamentals", "Open to Learning"],
  },
];

const experience = [
  {
    role: "Senior Coordinator",
    org: "Enactus Manipal University Jaipur",
    type: "Part-time",
    period: "Sep 2025 – Present",
    detail: "Member of the Junior Working Team. Driving social entrepreneurship projects and leadership initiatives.",
    skills: ["Leadership", "Projects"],
  },
  {
    role: "IoT & Robotics Intern",
    org: "LaunchED Global × Unibotix",
    type: "Internship",
    period: "May 2026 – Jun 2026",
    detail:
      "Completed the Mentorship Program on IoT and Robotics. Built a Smart Room Automation System as capstone — using Arduino, sensors, and Embedded C in Tinkercad simulation.",
    skills: ["IoT", "Embedded Systems", "Robotics"],
  },
];

const certifications = [
  {
    title: "Internship Certificate — IoT & Robotics",
    issuer: "LaunchED Global",
    date: "May 2026",
    id: "LED007-IN1986",
  },
  {
    title: "VLSI System On Chip Design — Overview",
    issuer: "Maven Silicon",
    date: "Mar 2026",
    id: "MS38893",
  },
];

const education = [
  {
    degree: "B.Tech — Electronics & Communication Engineering",
    school: "Manipal University Jaipur",
    period: "2025 – 2029",
  },
  {
    degree: "HSC (Class XII)",
    school: "ST. Wilfred Education School CBSE, Panvel",
    period: "Feb 2023 – May 2024",
  },
  {
    degree: "SSC (Class X)",
    school: "HOC International School CBSE & JR. College",
    period: "Mar 2011 – May 2022",
  },
];

const filters = ["All", "Embedded Systems", "Chip Architecture", "IoT / Robotics"];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5"
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "rgba(8,8,8,0.88)",
          backdropFilter: "blur(14px)",
        }}
      >
        <a href="#" className="font-mono-label text-xs tracking-widest uppercase" style={{ color: "var(--foreground)", letterSpacing: "0.22em" }}>
          Yash Deore
        </a>
        <div className="hidden md:flex items-center gap-10">
          {["Projects", "About", "Skills", "Experience", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link font-mono-label text-xs tracking-widest uppercase pb-0.5 transition-colors"
              style={{ color: "var(--muted-foreground)", letterSpacing: "0.15em" }}
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:deoreyash13@gmail.com"
            className="font-mono-label text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)", letterSpacing: "0.15em" }}
          >
            Hire Me
          </a>
        </div>
        {/* mobile toggle */}
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-px transition-all duration-300" style={{ backgroundColor: "var(--foreground)", transform: menuOpen ? "rotate(45deg) translate(3px,3px)" : "" }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ backgroundColor: "var(--foreground)", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ backgroundColor: "var(--foreground)", transform: menuOpen ? "rotate(-45deg) translate(3px,-3px)" : "" }} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ backgroundColor: "var(--background)" }}>
          {["Projects", "About", "Skills", "Experience", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-display text-4xl" style={{ color: "var(--foreground)" }} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-10 pt-24 pb-12 overflow-hidden">
        {/* subtle bg texture */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562408590-e32931084e23?w=1800&h=1200&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.05 }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--background) 55%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 40%)" }} />
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <p className="font-mono-label text-xs tracking-widest uppercase mb-8 animate-fade-up" style={{ color: "var(--accent)", letterSpacing: "0.28em" }}>
            ECE Undergrad · VLSI & Embedded Systems
          </p>
          <h1 className="font-display text-[clamp(3.2rem,8vw,8.5rem)] leading-none mb-12 animate-fade-up-delay-1" style={{ color: "var(--foreground)" }}>
            Building<br />
            <em style={{ color: "var(--muted-foreground)" }}>systems</em><br />
            from silicon up
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-10 sm:gap-16 animate-fade-up-delay-2">
            <p className="max-w-sm text-base leading-relaxed" style={{ color: "var(--muted-foreground)", fontWeight: 300 }}>
              ECE student at Manipal University Jaipur, exploring the intersection of embedded systems, IoT, and VLSI chip design — one circuit at a time.
            </p>
            <div className="flex gap-6">
              <div style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1rem" }}>
                <p className="font-display text-4xl">2+</p>
                <p className="font-mono-label text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>Internships</p>
              </div>
              <div style={{ borderLeft: "2px solid var(--border)", paddingLeft: "1rem" }}>
                <p className="font-display text-4xl">3</p>
                <p className="font-mono-label text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>Projects</p>
              </div>
              <div style={{ borderLeft: "2px solid var(--border)", paddingLeft: "1rem" }}>
                <p className="font-display text-4xl">17</p>
                <p className="font-mono-label text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>Skills</p>
              </div>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, var(--muted-foreground), transparent)" }} />
          <p className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)", letterSpacing: "0.15em" }}>scroll</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-10 py-32" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
              <img
                src={profileScreenshot}
                alt="Yash Deore"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
              {/* gradient from bottom, label sits in lower-third */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.4) 35%, transparent 60%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display text-2xl mb-1">Yash Deore</p>
                <p className="font-mono-label text-xs" style={{ color: "var(--accent)" }}>B.Tech ECE · MUJ '29</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 pt-4">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-mono-label text-xs" style={{ color: "var(--accent)" }}>01</span>
              <h2 className="font-display text-4xl sm:text-5xl">About</h2>
            </div>
            <p className="text-lg leading-loose mb-8" style={{ color: "var(--muted-foreground)", fontWeight: 300 }}>
              I'm Yash — an Electronics and Communication Engineering student at Manipal University Jaipur with a deep curiosity for how electronic systems and communication technologies work at the hardware level.
            </p>
            <p className="text-base leading-loose mb-8" style={{ color: "var(--muted-foreground)", fontWeight: 300 }}>
              I'm building my foundation in embedded systems, IoT, circuit design, and SOC/VLSI architecture — driven by a belief that understanding silicon is understanding the future. Currently exploring Python, C++, and chip-level integration through real projects and structured internships.
            </p>
            <p className="text-base leading-loose mb-14" style={{ color: "var(--muted-foreground)", fontWeight: 300 }}>
              Beyond engineering, I contribute as Senior Coordinator at Enactus MUJ, applying systems thinking to social entrepreneurship. I'm looking for hands-on opportunities to learn, build, and collaborate with like-minded engineers.
            </p>
            <div className="grid grid-cols-2 gap-5 mb-12">
              {[
                { label: "Status", value: "Open to Internships" },
                { label: "Degree", value: "B.Tech ECE '29" },
                { label: "Focus", value: "VLSI & Embedded" },
                { label: "Languages", value: "English · Hindi · Marathi" },
              ].map((item) => (
                <div key={item.label} className="p-4" style={{ border: "1px solid var(--border)" }}>
                  <p className="font-mono-label text-xs mb-2" style={{ color: "var(--muted-foreground)" }}>{item.label}</p>
                  <p className="font-display text-lg">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-6">
              <a href="mailto:deoreyash13@gmail.com" className="nav-link font-mono-label text-xs pb-0.5" style={{ color: "var(--muted-foreground)" }}>Email</a>
              <a href="https://www.linkedin.com/in/yash-deore-9b976b377" target="_blank" rel="noreferrer" className="nav-link font-mono-label text-xs pb-0.5" style={{ color: "var(--muted-foreground)" }}>LinkedIn</a>
              <a href="https://instagram.com/yashdeore_13" target="_blank" rel="noreferrer" className="nav-link font-mono-label text-xs pb-0.5" style={{ color: "var(--muted-foreground)" }}>Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-10 py-24" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "2rem" }}>
            <div className="flex items-baseline gap-4">
              <span className="font-mono-label text-xs" style={{ color: "var(--accent)" }}>02</span>
              <h2 className="font-display text-4xl sm:text-5xl">Projects</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="font-mono-label text-xs px-3 py-1.5 tracking-wider transition-all duration-200"
                  style={{
                    letterSpacing: "0.1em",
                    backgroundColor: activeFilter === f ? "var(--accent)" : "transparent",
                    color: activeFilter === f ? "var(--accent-foreground)" : "var(--muted-foreground)",
                    border: `1px solid ${activeFilter === f ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((project) => (
              <div key={project.id} className="project-card group cursor-pointer" onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}>
                <div className="relative overflow-hidden bg-gray-900 aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image w-full h-full object-cover transition-transform duration-700 ease-out"
                    style={{ opacity: 0.75 }}
                  />
                  <div
                    className="project-overlay absolute inset-0 opacity-0 transition-opacity duration-300 flex items-end p-6"
                    style={{ background: "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.15) 60%, transparent 100%)" }}
                  >
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((t) => (
                          <span key={t} className="font-mono-label text-xs px-2 py-1" style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)" }}>Click to expand →</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between mt-4 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono-label text-xs" style={{ color: "var(--accent)" }}>{project.id}</span>
                      <h3 className="font-display text-xl">{project.title}</h3>
                    </div>
                    <p className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)" }}>{project.category}</p>
                  </div>
                  <span className="font-mono-label text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>{project.year}</span>
                </div>
                {expandedProject === project.id && (
                  <div className="mt-4 pb-4 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)", fontWeight: 300 }}>
                    {project.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-10 py-24" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--card)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono-label text-xs" style={{ color: "var(--accent)" }}>03</span>
            <h2 className="font-display text-4xl sm:text-5xl">Skills</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "var(--border)" }}>
            {skillGroups.map((group) => (
              <div key={group.label} className="p-8" style={{ backgroundColor: "var(--card)" }}>
                <h3 className="font-display text-xl mb-6">{group.label}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                      <span className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 md:px-10 py-24" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono-label text-xs" style={{ color: "var(--accent)" }}>04</span>
            <h2 className="font-display text-4xl sm:text-5xl">Experience</h2>
          </div>

          {/* Experience items */}
          <div className="space-y-0 mb-20">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div className="md:col-span-3">
                  <p className="font-mono-label text-xs mb-1" style={{ color: "var(--accent)" }}>{exp.period}</p>
                  <p className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)" }}>{exp.type}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl mb-1">{exp.role}</h3>
                  <p className="font-mono-label text-xs mb-4" style={{ color: "var(--muted-foreground)" }}>{exp.org}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted-foreground)", fontWeight: 300 }}>{exp.detail}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="font-mono-label text-xs px-2 py-1" style={{ border: "1px solid var(--border)", color: "var(--muted-foreground)" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex items-baseline gap-4 mb-10">
            <span className="font-mono-label text-xs" style={{ color: "var(--accent)" }}>04b</span>
            <h3 className="font-display text-2xl">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
            {certifications.map((cert) => (
              <div key={cert.id} className="p-6" style={{ border: "1px solid var(--border)" }}>
                <p className="font-mono-label text-xs mb-3" style={{ color: "var(--accent)" }}>{cert.date}</p>
                <h4 className="font-display text-xl mb-1">{cert.title}</h4>
                <p className="font-mono-label text-xs mb-3" style={{ color: "var(--muted-foreground)" }}>{cert.issuer}</p>
                <p className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)", opacity: 0.5 }}>ID: {cert.id}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="flex items-baseline gap-4 mb-10">
            <span className="font-mono-label text-xs" style={{ color: "var(--accent)" }}>04c</span>
            <h3 className="font-display text-2xl">Education</h3>
          </div>
          <div className="space-y-0">
            {education.map((edu, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-6 gap-2" style={{ borderTop: "1px solid var(--border)" }}>
                <div>
                  <p className="font-display text-lg mb-1">{edu.degree}</p>
                  <p className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)" }}>{edu.school}</p>
                </div>
                <p className="font-mono-label text-xs flex-shrink-0" style={{ color: "var(--accent)" }}>{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-10 py-32" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono-label text-xs" style={{ color: "var(--accent)" }}>05</span>
            <span className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)" }}>Get in touch</span>
          </div>
          <h2 className="font-display text-[clamp(2.8rem,7.5vw,7rem)] leading-none mb-12">
            Let's build<br /><em style={{ color: "var(--muted-foreground)" }}>something real</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--muted-foreground)", fontWeight: 300 }}>
                I'm actively looking for internship opportunities, collaborative projects, and mentorship in embedded systems, VLSI, and IoT. If you're working on something interesting — let's connect.
              </p>
              <div className="space-y-5">
                <a href="mailto:deoreyash13@gmail.com" className="flex items-baseline gap-4 group">
                  <span className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)" }}>Email</span>
                  <span className="font-display text-xl transition-colors group-hover:text-white" style={{ color: "var(--foreground)" }}>deoreyash13@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/yash-deore-9b976b377" target="_blank" rel="noreferrer" className="flex items-baseline gap-4 group">
                  <span className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)" }}>LinkedIn</span>
                  <span className="font-display text-xl transition-colors group-hover:text-white" style={{ color: "var(--foreground)" }}>yash-deore-9b976b377</span>
                </a>
                <a href="https://instagram.com/yashdeore_13" target="_blank" rel="noreferrer" className="flex items-baseline gap-4 group">
                  <span className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)" }}>Instagram</span>
                  <span className="font-display text-xl transition-colors group-hover:text-white" style={{ color: "var(--foreground)" }}>@yashdeore_13</span>
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-mono-label text-xs mb-6" style={{ color: "var(--muted-foreground)", letterSpacing: "0.15em" }}>QUICK MESSAGE</p>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-transparent text-sm outline-none transition-colors"
                style={{ border: "1px solid var(--border)", color: "var(--foreground)", fontFamily: "inherit" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-transparent text-sm outline-none"
                style={{ border: "1px solid var(--border)", color: "var(--foreground)", fontFamily: "inherit" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              <textarea
                placeholder="Tell me about your project or opportunity..."
                rows={4}
                className="w-full px-4 py-3 bg-transparent text-sm outline-none resize-none"
                style={{ border: "1px solid var(--border)", color: "var(--foreground)", fontFamily: "inherit" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              <button
                className="w-full py-4 font-mono-label text-xs tracking-widest uppercase transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)", letterSpacing: "0.2em" }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)" }}>© 2026 Yash Deore. All rights reserved.</p>
        <p className="font-mono-label text-xs" style={{ color: "var(--muted-foreground)" }}>Navi Mumbai, India · Open to opportunities</p>
      </footer>
    </div>
  );
}
