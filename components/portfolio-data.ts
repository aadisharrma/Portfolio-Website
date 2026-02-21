export type Project = {
  title: string;
  summary: string;
  metrics: string[];
  stack: string[];
  github: string;
  caseStudy?: string;
};

export const portfolioData = {
  name: "Aadi Gautam Sharma",
  location: "Boston, MA",
  email: "aadigs@bu.edu",
  linkedin: "https://linkedin.com/in/aadigautamsharma/",
  github: "https://github.com/aadisharrma",
  tagline: "Data Science • ML • Data Engineering",
  credibility: "MS Data Science @ BU (GPA 3.8) • Ex-ReversingLabs • ETL + modeling",
  about:
    "Data Science graduate student building reliable data products across ETL, analytics, and machine learning. I focus on systems that improve decision quality, reduce manual work, and ship measurable outcomes.",
  featuredProject: {
    title: "CHAPA Housing Data Analytics Pipeline",
    org: "Boston University",
    description:
      "Built an end-to-end housing analytics workflow with robust ingestion, cleaning, geocoding, and modeling to support better policy and planning decisions.",
    metrics: ["10k+ records", "60% time reduced", "Geocoding + ML"],
    points: [
      "Built production-style ETL pipelines with data validation and quality checks.",
      "Performed EDA and trained scikit-learn models for downstream prediction tasks.",
    ],
    github: "https://github.com/aadisharrma",
  },
  projects: [
    {
      title: "Lead Routing Intelligence Pipeline",
      summary:
        "Real-time ETL and scoring workflow for inbound sales leads with validation, enrichment, and routing logic.",
      metrics: ["500+ leads/day", "80% manual work reduced"],
      stack: ["Python", "REST APIs", "Pipedrive", "Automation"],
      github: "https://github.com/aadisharrma",
    },
    {
      title: "Support Operations Analytics",
      summary:
        "Integrated Salesforce, Zendesk, and Slack data into SQL-driven reporting to improve reporting speed and clarity.",
      metrics: ["50% faster reporting", "Cross-system ETL"],
      stack: ["SQL", "ETL", "Analytics"],
      github: "https://github.com/aadisharrma",
    },
    {
      title: "Network Performance Insights",
      summary:
        "Analyzed large network datasets and automated KPI reporting to surface statistically meaningful trends.",
      metrics: ["Automated reporting", "Leadership-ready insights"],
      stack: ["Python", "Pandas", "Statistics"],
      github: "https://github.com/aadisharrma",
    },
  ] as Project[],
  experience: [
    {
      company: "Seamless Automation",
      role: "Automation & Data Engineering Intern",
      period: "Jun 2025 – Jul 2025",
      bullets: [
        "Built real-time ETL workflows handling 500+ inbound leads/day across CRM systems.",
        "Implemented validation + deduplication logic, reducing manual processing by 80%.",
      ],
    },
    {
      company: "ReversingLabs",
      role: "Data & Applications Engineering Co-op",
      period: "Jan 2024 – Jun 2024",
      bullets: [
        "Integrated Salesforce, Zendesk, and Slack into unified analytics pipelines.",
        "Built SQL workflows that reduced recurring reporting time by 50%.",
      ],
    },
    {
      company: "Examity",
      role: "Software Developer in Test",
      period: "Jan 2023 – Jun 2023",
      bullets: [
        "Developed Python validation tooling for high-volume test data checks.",
        "Designed automated regression suites that cut regression time by 40%.",
      ],
    },
    {
      company: "Viasat",
      role: "Data Analysis Intern",
      period: "Jun 2022 – Aug 2022",
      bullets: [
        "Analyzed network performance datasets and automated recurring metrics reports.",
        "Presented statistical findings that informed engineering optimization priorities.",
      ],
    },
  ],
  skills: {
    "Data / ML": [
      "Python",
      "SQL",
      "R",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "EDA",
      "Statistical Modeling",
    ],
    Engineering: ["ETL", "REST APIs", "Data Validation", "Automation Engineering", "Java"],
    "Tools / Cloud": ["MySQL", "SQLite", "Docker", "Git", "Make.com", "Zapier", "Pipedrive", "Azure"],
  },
};
