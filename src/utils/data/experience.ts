import { Experience } from "@/core/models/experience.interface";

export const experiences: Experience[] = [
 {
    id: 1,
    title: 'Software Engineer – Frontend Developer',
    company: "Wabtec Corporation | Bengaluru, India",
    duration: "July 2024 – Present",
    details: [
      'Developed and maintained core features for Smart Secure Mobile Client (SSMC), a Single Page Application used by railroad workers, built with Angular + Typescript.',
      'Implemented Print Fax integration, Service Worker, Generic & End-to-End metrics, and Error Dictionary (Angular, RxJS, REST APIs), delivering 250+ story points over 25+ sprints.',
      'Fixed 100+ high-priority UI and API defects, improving UI rendering and PDF handling workflows.',
      'Increased developer efficiency by 20% through adoption of GitHub Copilot, GitHub Actions CI/CD, and refactoring Angular components.'
    ]
  },
  {
    id: 2,
    title: 'LEAD Program Engineer',
    company: "Wabtec Corporation | Bengaluru, India",
    duration: "July 2022 – July 2024",
    details: [
      'Full-stack development: Built and delivered 10+ features for WebSSMC via Angular components and Java + Quarkus REST APIs, improving user productivity for railroad dispatchers.',
      'Data Pipeline optimization: Built a Kafka + Elasticsearch-powered DLQ Dashboard with Angular frontend, increasing data failure visibility by 25%.',
      'Validation Tooling: Developed a C#-based Excel Data Validation Tool, automating test comparisons.'
    ]
  },
  {
    id: 3,
    title: 'Software Engineer Intern',
    company: "Wabtec Corporation",
    duration: "Jan 2022 – July 2022",
    details: [
      'Implemented UI features for WEB SSMC using Angular, achieved 95% coverage with Jasmine.'
    ]
  },
  {
    id: 4,
    title: 'Software Engineer Intern',
    company: "Optum",
    duration: "June 2021 – August 2021",
    details: [
      'Resolved login and registration incidents using SQL queries, improving issue resolution time.'
    ]
  }
]