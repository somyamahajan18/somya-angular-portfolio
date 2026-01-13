import { Experience } from "@/core/models/experience.interface";

export const experiences: Experience[] = [
 {
    id: 1,
    title: 'Senior Software Engineer – Frontend Angular Developer',
    company: "Netradyne | Bengaluru, India",
    duration: "January 2026 – Present",
    details: [
      'Driving development of a multi-tenant dashboard supporting multiple users, roles, languages, and themes used by 100+ tenants.',
      'Managing and resolving JIRA tickets with high estimate plan days(6) (defects and user stories) for a legacy AngularJS application, ensuring business continuity.',
      'Playing a key role in UI architecture and design decisions for a new dashboard built with Angular and TypeScript.',
      'Implementing localization/internationalization (i18n) and theme management, improving product adaptability across regions and customer needs.',
      'Collaborating closely with cross-functional teams using JIRA, Confluence, and GitHub to deliver scalable UI solutions.',
      'Assisting in the AngularJS to Angular migration strategy.'
    ]
  },
  {
    id: 2,
    title: 'Software Engineer - Full Stack Developer',
    company: "Wabtec Corporation | Bengaluru, India",
    duration: "July 2022 – December 2025",
    details: [
      'Developed and maintained core features for Smart Secure Mobile Client (SSMC), a Single Page Application used by railroad workers, built with Angular and Typescript.',
      'Implemented Print Fax integration, Service Worker, Generic & End-to-End metrics, and Error Dictionary (Angular, RxJS, REST APIs), delivering 250+ story points over 25+ sprints.',
      'Fixed 100+ high-priority UI and API defects, improving UI rendering and PDF handling workflows.',
      'Increased developer efficiency by 20% through adoption of GitHub AI Copilot, GitHub Actions CI/CD, and refactoring Angular components.',
      'Contributed as part of the LEAD Program, rotating across 3 cross-functional teams over 2 years, delivering features using Angular and Java + Quarkus REST APIs. Built a Kafka + Elasticsearch DLQ Dashboard with an Angular frontend, increasing data-failure visibility by 25%. Created a C# Excel Data Validation Tool to automate test comparisons, reducing manual validation effort by 40%.'
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