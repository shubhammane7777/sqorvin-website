// =============================================================================
// SQORVIN — SITE CONFIG
// -----------------------------------------------------------------------------
// This is the single file to edit when updating company details, contact
// info, nav links, services, process steps, FAQs or the case study.
// Nothing below should require touching component code.
//
// Every value marked "// TODO(placeholder)" is a placeholder that MUST be
// replaced with real information before this site goes live. See the
// checklist in README.md for the full list.
// =============================================================================

export const SITE = {
  name: "sqorvin",
  legalName: "Sqorvin Ltd", // TODO(placeholder): confirm registered legal entity name
  tagline: "Clear data. Confident decisions.",
  description:
    "sqorvin is a London data analytics, AI and business intelligence consultancy helping independent businesses and growing UK companies turn scattered data into automated dashboards and decisions they can trust.",
  url: "https://sqorvin.com", // confirmed — registered on Namecheap, connecting to Vercel next
  location: "London, United Kingdom",
  email: "hello@sqorvin.com", // confirmed — forwards to a real inbox (Namecheap free email forwarding)
  linkedin: "https://www.linkedin.com/company/sqorvin", // confirmed — real company page is live
  // TEMPORARY: cal.com/sqorvin/consultation isn't a real account yet (404s).
  // Routed to a real inbox via mailto so "Book a Free Consultation" actually
  // works today. TODO: once a Cal.com/Calendly event is set up, replace this
  // with that real booking URL — it's the only line that needs to change.
  bookingUrl:
    "mailto:hello@sqorvin.com?subject=Free%20Consultation%20Request%20%E2%80%94%20sqorvin&body=Hi%20Shubham%2C%0A%0AI'd%20like%20to%20book%20a%20free%20consultation.%20Here's%20a%20bit%20about%20what%20I'm%20looking%20for%3A%0A%0A",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const CTA = {
  primary: "Book a Free Consultation",
  secondary: "Explore Our Services",
} as const;

// -----------------------------------------------------------------------------
// Live demo — the self-serve "upload your data, get a dashboard" prototype.
// Self-hosted as a static file at /public/demo/index.html (a single
// self-contained page, own bundled copy of SheetJS) so it lives on sqorvin's
// own domain — no third-party sign-in wall, no external branding on a page
// prospects see. Deliberately index.html inside its own folder, not a loose
// demo.html at the public root: a bare .html file there collided with how
// Next's static export maps its own page routes to HTML files on Vercel and
// 404'd — verified live. A subfolder + index.html avoids that entirely.
// -----------------------------------------------------------------------------
export const DEMO = {
  url: "/demo/",
  navLabel: "Live Demo",
  eyebrow: "Try it yourself",
  headline: "See what your data could look like.",
  subcopy:
    "Drop in a CSV or Excel export — sales, bookings, stock, whatever you already track — and watch a dashboard build itself in seconds. The same instinct behind every dashboard sqorvin builds, just self-serve.",
  bullets: [
    "Works with any CSV or Excel export",
    "Runs entirely in your browser — nothing is uploaded to a server",
    "Takes about ten seconds, no sign-up needed",
  ],
  cta: "Try the live demo",
} as const;

// -----------------------------------------------------------------------------
// Hero
// -----------------------------------------------------------------------------
export const HERO = {
  eyebrow: "Data, AI & BI consultancy for growing UK businesses",
  headlineLines: ["Complex data.", "Confident decisions."],
  subcopy:
    "sqorvin helps independent businesses, restaurants and growing UK companies turn scattered spreadsheets and slow reporting into automated dashboards, trusted metrics and decisions you can act on today.",
  credibility:
    "Founder-led delivery — every engagement is built and handed over by the person who did the analysis, not passed between account managers.",
} as const;

// -----------------------------------------------------------------------------
// Trust strip — genuine capability statements, no invented client logos
// -----------------------------------------------------------------------------
export const TRUST_STRIP = [
  "Actionable insights, not just charts",
  "Automated reporting that runs itself",
  "Dashboards your team will actually open",
  "Decisions backed by clean, trusted data",
] as const;

// -----------------------------------------------------------------------------
// Services
// -----------------------------------------------------------------------------
export type Service = {
  id: string;
  title: string;
  outcome: string;
  description: string;
  bullets: string[];
  icon: "chart" | "layout-dashboard" | "refresh-cw" | "brain-circuit" | "compass";
};

export const SERVICES: Service[] = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    outcome: "Know what's actually driving your numbers.",
    description:
      "We dig into your sales, operations and customer data to find the patterns that matter, so decisions are based on evidence rather than gut feel.",
    bullets: [
      "Root-cause analysis on revenue, cost or churn questions",
      "Clean, well-documented data models you can build on",
      "Plain-English findings, not just spreadsheets",
    ],
    icon: "chart",
  },
  {
    id: "power-bi-dashboards",
    title: "Power BI Dashboards",
    outcome: "See performance in one place, updated automatically.",
    description:
      "We design and build Power BI dashboards that replace manual reporting, so your team checks one live view instead of chasing five spreadsheets.",
    bullets: [
      "Dashboards tailored to how your business actually operates",
      "Role-based views for owners, managers and staff",
      "Built for people who don't want to learn a BI tool",
    ],
    icon: "layout-dashboard",
  },
  {
    id: "reporting-automation",
    title: "Reporting Automation",
    outcome: "Get your week back from manual reporting.",
    description:
      "We connect your data sources and automate the reporting pipeline, so weekly and monthly reports arrive on time without anyone copying and pasting.",
    bullets: [
      "Automated data refreshes on the schedule you need",
      "Fewer manual steps, fewer copy-paste errors",
      "Reports that are consistent every single time",
    ],
    icon: "refresh-cw",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    outcome: "Turn historical data into forward-looking answers.",
    description:
      "Where the data supports it, we build forecasting and prediction models — demand, churn risk, staffing needs — that give you a head start, not a black box.",
    bullets: [
      "Forecasting models scoped to a real business question",
      "Clear explanation of what the model can and can't tell you",
      "No model shipped without a plain-language sanity check",
    ],
    icon: "brain-circuit",
  },
  {
    id: "data-strategy",
    title: "Data Strategy",
    outcome: "A practical roadmap, not a 60-page slide deck.",
    description:
      "For businesses without an in-house analytics function, we help define what to track, where data should live, and what to automate first.",
    bullets: [
      "An honest assessment of your current data maturity",
      "A prioritised roadmap matched to your budget and team size",
      "Guidance on tools that fit a growing business, not an enterprise",
    ],
    icon: "compass",
  },
];

// -----------------------------------------------------------------------------
// Problem → Solution
// -----------------------------------------------------------------------------
export const PROBLEM_SOLUTION = {
  problems: [
    "Numbers live in five different spreadsheets that don't agree",
    "Reports take hours to put together, every single week",
    "Nobody fully trusts the figures in the meeting",
    "Decisions get made on instinct because the data is too slow",
  ],
  solutions: [
    "One connected data model as the single source of truth",
    "Dashboards that refresh automatically, on their own schedule",
    "Clearly defined metrics everyone agrees on and understands",
    "Answers ready before the meeting starts, not after it",
  ],
} as const;

// -----------------------------------------------------------------------------
// Case study — ILLUSTRATIVE EXAMPLE ONLY.
// This is explicitly a sample layout, not a real client result. The numbers
// are deliberately modest, tied to the "used to take half a day" detail in
// the copy below (not just picked to look impressive), and every label plus
// the badge and disclaimer say "illustrative" so this can never be mistaken
// for a real, measured outcome. Swap in a verified client story (with
// permission) the moment one exists — this section exists so the page isn't
// empty before then, not as a permanent stand-in.
// -----------------------------------------------------------------------------
export const CASE_STUDY = {
  isPlaceholder: true,
  label: "Sample case study — illustrative example",
  clientType: "Independent restaurant group, London", // TODO(placeholder): real client name once available, with permission
  challenge:
    "Three sites, three separate tills, and a manager manually rebuilding a sales spreadsheet every Monday morning before anyone could see how the week had gone.",
  approach: [
    "Connected till and booking data into a single Power BI model",
    "Built a daily dashboard covering sales, covers and labour cost",
    "Automated the Monday report that used to take half a day",
  ],
  metrics: [
    { value: "~85%", label: "estimated cut in time spent on manual reporting*" },
    { value: "~4 hrs", label: "estimated time saved per week, across three sites*" },
    { value: "Daily", label: "visibility instead of weekly, after the fact" },
  ],
  disclaimer:
    "*Illustrative estimates only, not measured results from a real client — modelled on the \"used to take half a day\" detail above. This will be replaced with a genuine, permissioned case study as soon as one exists.",
} as const;

// -----------------------------------------------------------------------------
// Process
// -----------------------------------------------------------------------------
export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "A short, focused conversation about how your business runs today, what decisions you're trying to make, and where the current reporting falls short.",
  },
  {
    step: "02",
    title: "Connect & Clean",
    description:
      "We connect your existing data sources — POS, spreadsheets, booking systems, accounting software — and clean it into a model that's actually trustworthy.",
  },
  {
    step: "03",
    title: "Analyse & Build",
    description:
      "We analyse the data for what matters to your business, then build the dashboards, reports or models that answer your specific questions.",
  },
  {
    step: "04",
    title: "Deliver & Improve",
    description:
      "You get a walkthrough, documentation, and a plan for what's next — plus ongoing support to refine dashboards as your business changes.",
  },
] as const;

// -----------------------------------------------------------------------------
// Why choose us
// -----------------------------------------------------------------------------
export const WHY_CHOOSE_US = [
  {
    title: "Clarity over complexity",
    description:
      "Every dashboard and report is built to be understood by the person using it, not just the person who built it.",
  },
  {
    title: "Commercial thinking",
    description:
      "We start from the business question, not the tool. The analysis exists to support a decision, not to look impressive.",
  },
  {
    title: "Tailored, not templated",
    description:
      "No generic dashboard packs. What we build is shaped around how your business actually operates day to day.",
  },
  {
    title: "Accessible communication",
    description:
      "Findings are explained in plain English first, with the technical detail available if and when you want it.",
  },
  {
    title: "Practical implementation",
    description:
      "We care about what gets used after handover, not just what looks good in a first demo.",
  },
] as const;

// -----------------------------------------------------------------------------
// About / founder
// -----------------------------------------------------------------------------
export const FOUNDER = {
  name: "Shubham Mane",
  role: "Founder, sqorvin",
  bio: [
    "sqorvin was founded by Shubham Mane, who holds an MSc in Data Science and works hands-on across Python, SQL, Power BI and machine learning.",
    "Shubham's background spans business reporting and software development, which shapes how sqorvin approaches every engagement: analysis that's technically sound, but built to be genuinely usable by the people running the business — not just the person who built it.",
    "sqorvin exists because independent businesses and growing companies rarely have the budget for an in-house data team, but deserve the same clarity that larger companies get from theirs.",
  ],
} as const;

// -----------------------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------------------
export const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "A first dashboard or reporting build is usually delivered in a few weeks, depending on how many data sources are involved and how clean the underlying data is. Larger data strategy or machine learning projects are scoped individually after the discovery call.",
  },
  {
    question: "How is pricing worked out?",
    answer:
      "Every business's data situation is different, so pricing is scoped after an initial conversation rather than fixed upfront. You'll get a clear, itemised proposal before any work begins — no open-ended hourly billing.",
  },
  {
    question: "How do you handle data security?",
    answer:
      "We work only with the access needed for the agreed scope, use secure connections to your existing systems, and can sign an NDA before any data is shared. Your data is never used for anything beyond your project.",
  },
  {
    question: "What data sources can you work with?",
    answer:
      "Most common POS, booking, accounting, spreadsheet and CRM systems can be connected to Power BI. If you're unsure whether your systems are supported, mention them on the consultation call and we'll confirm before scoping anything.",
  },
  {
    question: "Who maintains the dashboard after it's built?",
    answer:
      "You own everything we build. We hand over full documentation and a walkthrough, and offer ongoing support plans for businesses that want us to maintain or extend the dashboard over time — but there's no obligation to continue after handover.",
  },
  {
    question: "Is this only for large companies?",
    answer:
      "No — sqorvin is built specifically for independent businesses, restaurants and growing UK companies that don't have an in-house analytics team, not for enterprise clients with existing data departments.",
  },
] as const;

// -----------------------------------------------------------------------------
// Final CTA
// -----------------------------------------------------------------------------
export const FINAL_CTA = {
  headline: "Let's talk about your data.",
  subcopy:
    "Book a free, no-pressure consultation to walk through what's slowing your reporting down — and what a clearer version could look like.",
} as const;

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------
export const FOOTER = {
  servicesLinks: SERVICES.map((s) => ({ label: s.title, href: `#${s.id}` })),
  privacyPolicyHref: "/privacy-policy", // real policy page, live
  copyright: `© ${new Date().getFullYear()} sqorvin. All rights reserved.`,
} as const;
