/* ============== Arpon portfolio — vanilla JS ============== */

// ---------- Theme ----------
(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) document.documentElement.classList.add('dark');
})();
document.addEventListener('click', (e) => {
  const t = e.target.closest('#theme-toggle');
  if (!t) return;
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});

// ---------- Mobile menu ----------
document.addEventListener('click', (e) => {
  const btn = e.target.closest('#menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (btn) { menu.classList.toggle('hidden'); return; }
  if (e.target.closest('#mobile-menu a')) menu.classList.add('hidden');
});

// ---------- Nav scroll state + progress ----------
const nav = document.getElementById('site-nav');
const progress = document.getElementById('scroll-progress');
function onScroll() {
  if (window.scrollY > 20) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  progress.style.width = pct + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

// ---------- Typewriter ----------
(function typewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  const words = ['Web Developer', 'UI/UX Designer', 'Machine Learning Enthusiast', 'Researcher'];
  let i = 0, text = '', del = false;
  function tick() {
    const cur = words[i % words.length];
    text = del ? cur.slice(0, text.length - 1) : cur.slice(0, text.length + 1);
    el.textContent = text;
    let speed = del ? 40 : 90;
    if (!del && text === cur) { speed = 1400; del = true; }
    else if (del && text === '') { del = false; i++; }
    setTimeout(tick, speed);
  }
  tick();
})();

// ---------- Counters ----------
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target;
    const to = +el.dataset.to;
    const start = performance.now(), dur = 1200;
    function step(t) {
      const p = Math.min(1, (t - start) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    counterIO.unobserve(el);
  });
}, { threshold: 0.4 });
document.querySelectorAll('.counter').forEach((el) => counterIO.observe(el));

// ---------- Data ----------
const eduItems = [
  { year: 'June 2023 — June 2027', title: 'B.Sc. in Computer Science & Engineering', place: 'Varendra University, Bangladesh', note: 'Currently in 6th Semester — focus on AI, algorithms & web systems.' },
  { year: 'July 2018 — January 2021', title: 'Higher Secondary Certificate (Science)', place: 'Varendra College, Rajshahi', note: 'Foundation in mathematics, physics and computing.' },
  { year: '2016 — 2017', title: 'Secondary School Certificate (Science)', place: 'BB Hindu Academy, Rajshahi', note: 'Early interest in problem-solving and technology.' },
];

const skillGroups = [
  { title: 'Programming Languages', icon: 'code-2', items: ['C', 'C++', 'Python', 'Java (Basic)'] },
  { title: 'Frontend Web Development', icon: 'globe', items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'] },
  { title: 'UI / UX Design', icon: 'palette', items: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research'] },
  { title: 'Machine Learning & Data Science', icon: 'brain', items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'scikit-learn', 'TensorFlow'] },
  { title: 'Tools & Platforms', icon: 'wrench', items: ['Jupyter Notebook', 'Google Colab', 'Git', 'GitHub', 'VS Code'] },
  { title: 'Core CS Knowledge', icon: 'cpu', items: ['Data Structures & Algorithms', 'Database Fundamentals', 'Computer Networks', 'AI & Immersive Tech'] },
];

const services = [
  { icon: 'palette', title: 'UI / UX Design', desc: 'Wireframes, prototypes and design systems in Figma — clean, accessible interfaces built around real user flows.' },
  { icon: 'globe', title: 'Web Design', desc: 'Responsive marketing pages and portfolio sites with modern typography, motion, and a strong visual identity.' },
  { icon: 'code-2', title: 'Website Development', desc: 'Fast, accessible websites built with React, TypeScript and Tailwind — from landing pages to dashboards.' },
  { icon: 'brain', title: 'Machine Learning Solutions', desc: 'Data exploration, model prototyping and applied ML using Python, scikit-learn and TensorFlow.' },
];

const research = [
  { title: '28th International Conference on Computing and Information Technology', tag: 'Published Paper', desc: 'Co-authored research published at ICCIT — focusing on applied computing and information systems.' },
  { title: '2nd IEEE International Conference on Computing Application and System', tag: 'Published Paper', desc: 'IEEE-indexed publication exploring practical applications of computing and intelligent systems.' },
  { title: 'Department Representative — Varendra University Research Club', tag: 'Leadership', desc: 'Coordinating research initiatives, supporting students with data analysis and documentation.' },
];

const distinctions = [
  { title: 'Completed Certification Course, Introduction to Research Modules', year: '2026' },
  { title: 'Participant, U.S. Startup UI/UX Bootcamp (American Corner Rajshahi)', year: '2026' },
  { title: 'Graduate, Machine Learning Training Program (RUET IoT Club)', year: '2026' },
  { title: 'NSDA Level 6 Certified in AI and Immersive Technology', year: '2026' },
  { title: 'Completed 42-hour training on "Python Programming" (BKIICT, BCC, ICT Division)', year: '2026' },
  { title: 'Tech Debate 3.0, organized by Dept. of CSE, Varendra University', year: '2026' },
  { title: 'Competitor, Hult Prize (Varendra University)', year: '2024' },
  { title: 'Participant, RURS Research Olympiad 2024', year: '2024' },
  { title: 'Participant, Professional ICT Skills Development for Smart Bangladesh (IICT, RUET)', year: '2023' },
  { title: 'Attendee, RUET Career Catalyst Forum', year: '2023' },
  { title: 'First Position in General Knowledge — Annual Literature & Cultural Competition, Rajshahi Bholanath Bishweshar Hindu Academy', year: '2017' },
  { title: 'Participant, 15th Bangladesh Mathematical Olympiad', year: '2017' },
  { title: 'Participant, 14th Bangladesh Mathematical Olympiad', year: '2016' },
  { title: 'Participant, City Bank – Prothom Alo Regional Science Project Competition', year: '2015' },
];

// ---------- Render ----------
function reveal(el) { el.setAttribute('data-reveal', ''); io.observe(el); return el; }

const eduList = document.getElementById('edu-list');
eduItems.forEach((it, i) => {
  const wrap = document.createElement('div');
  wrap.className = 'edu-item ' + (i % 2 === 1 ? 'right' : 'left');
  wrap.innerHTML = `
    <div class="edu-content">
      <div class="text-xs font-medium text-primary" style="color:var(--color-primary)">${it.year}</div>
      <h3 class="mt-1 font-display text-xl font-semibold">${it.title}</h3>
      <div class="text-sm text-muted-foreground">${it.place}</div>
      <p class="mt-2 text-sm text-muted-foreground">${it.note}</p>
    </div>
    <div class="hidden md:block"></div>
    <span class="edu-dot"><i data-lucide="graduation-cap" class="h-4 w-4"></i></span>`;
  eduList.appendChild(reveal(wrap));
});

const skillsGrid = document.getElementById('skills-grid');
skillGroups.forEach((g) => {
  const card = document.createElement('div');
  card.className = 'skill-card';
  card.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="skill-icon"><i data-lucide="${g.icon}" class="h-5 w-5"></i></span>
      <h3 class="font-display text-lg font-semibold">${g.title}</h3>
    </div>
    <div class="mt-4 flex flex-wrap gap-2">
      ${g.items.map((it) => `<span class="skill-chip">${it}</span>`).join('')}
    </div>`;
  skillsGrid.appendChild(reveal(card));
});

const servicesGrid = document.getElementById('services-grid');
services.forEach((s) => {
  const card = document.createElement('div');
  card.className = 'service-card';
  card.innerHTML = `
    <i data-lucide="${s.icon}" class="h-8 w-8" style="color:var(--color-primary)"></i>
    <h3 class="mt-4 font-display text-lg font-semibold">${s.title}</h3>
    <p class="mt-2 text-sm text-muted-foreground">${s.desc}</p>`;
  servicesGrid.appendChild(reveal(card));
});

const researchGrid = document.getElementById('research-grid');
research.forEach((r) => {
  const card = document.createElement('div');
  card.className = 'research-card';
  card.innerHTML = `
    <div class="flex items-center justify-between">
      <span class="tag">${r.tag}</span>
      <i data-lucide="sparkles" class="h-4 w-4" style="color:var(--color-accent)"></i>
    </div>
    <h3 class="mt-4 font-display text-base font-semibold leading-snug">${r.title}</h3>
    <p class="mt-2 text-sm text-muted-foreground">${r.desc}</p>`;
  researchGrid.appendChild(reveal(card));
});

const distGrid = document.getElementById('dist-grid');
distinctions.forEach((d) => {
  const card = document.createElement('div');
  card.className = 'dist-card';
  card.innerHTML = `
    <span class="dist-icon"><i data-lucide="award" class="h-4 w-4"></i></span>
    <span class="flex-1 text-sm font-medium leading-snug">${d.title}</span>
    <span class="year-pill">${d.year}</span>`;
  distGrid.appendChild(reveal(card));
});

// ---------- Lucide icons ----------
if (window.lucide) window.lucide.createIcons();

// ---------- EmailJS contact form ----------
const EMAILJS_SERVICE_ID = 'service_tyi9dmu';
const EMAILJS_TEMPLATE_ID = 'template_wtwyiz6';
const EMAILJS_PUBLIC_KEY = '8zxCsdjR0qCu4MC1E';

if (window.emailjs) emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

const form = document.getElementById('contact-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const ok = document.getElementById('form-success');
  const err = document.getElementById('form-error');
  const btn = document.getElementById('submit-btn');
  const lbl = document.getElementById('submit-label');
  ok.classList.add('hidden'); err.classList.add('hidden');
  btn.disabled = true; lbl.textContent = 'Sending...';
  try {
    await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, { publicKey: EMAILJS_PUBLIC_KEY });
    ok.classList.remove('hidden');
    form.reset();
  } catch (x) {
    err.textContent = (x && (x.text || x.message)) || 'Failed to send. Please try again.';
    err.classList.remove('hidden');
  } finally {
    btn.disabled = false; lbl.textContent = 'Send Message';
  }
});
