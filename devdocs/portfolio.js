/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Somya Mahajan",
  title: "Hi all, I am Somya Mahajan",
  subTitle: emoji(
    "Frontend Developer with 4 years of experience in Angular, TypeScript, RxJS, JavaScript, and REST API integration, building high-performance, scalable single-page applications. Proven track record in improving application performance by 20%+ via code optimization and refactoring. Strong background in component-based architecture, unit testing (Jasmine/Karma), and Agile development. Recently pursued a Master’s in Project Management to transition into technical leadership and product ownership."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Vjo5-k-0tt8aY8ZY-JG2IUXX6XaZGOnb/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/somyamahajan18",
  linkedin: "https://linkedin.com/in/somya-mahajan-84b66916a",
  gmail: "somyamahajan18@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK MOBILE APPS DEVELOPER WHO WANTS TO EXPLORE MOBILE TECH STACK",
  skills: [
    emoji("⚡ Dream architect and design mobile applications that provide relentless pursuit to craft innovative solutions"),
    emoji("⚡ Amazing Mobile App Products with Clean and maintainable code"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Angular",
    fontAwesomeClassname: "Angular-icon"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "Typescript",
    fontAwesomeClassname: "fab fa-ts"
  },
   {
    skillName: "Rxjs",
    fontAwesomeClassname: "fab fa-rxjs"
  },
  {
    skillName: "Responsive Web Design",
    fontAwesomeClassname: "fab fa-responsive"
  },
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "scss",
    fontAwesomeClassname: "fab fa-scss-alt"
  },
  {
    skillName: "jasmine",
    fontAwesomeClassname: "fab fa-jasmine"
  },
  {
    skillName: "karma",
    fontAwesomeClassname: "fab fa-karma"
  },
  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git"
  },
  {
    skillName: "data strctures and algorithms",
    fontAwesomeClassname: "fab fa-data-structures"
  },
  {
    skillName: "oop",
    fontAwesomeClassname: "fab fa-oop"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  }
]
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The Pennsylvania State University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "The Pennsylvania State University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile Interface Layout and Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Restful API and 3rd Party Data Integration",
      progressPercentage: "90%"
    },
    {
      Stack: "Mobile Apps Architecture",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer – Frontend Developer",
      company: "Wabtec Corporation",
      companylogo: require("./assets/images/eeizo.png"),
      date: "July 2024 – Present",
      desc: "FullStack Web and Mobile Apps Developer",
      descBullets: [
        "WordPress Plugin Development and WordPress Custom Theme Development",
        "Developing and Consuming WordPress REST API",
        "Cross plate form mobile App development for Android and IOS with React Native",
        "Error and problem solving",
        "Explore new ideas",
      ]
    },
    {
      role: "Reactjs Nodejs Flutter Developer",
      company: "Wabtec Corporation",
      companylogo: require("./assets/images/gtek-logo.png"),
      date: "Nov 2018 – Mar 2020",
      desc: "FullStack Web and Mobile Apps Developer",
      descBullets: [
        "Developing FullStack MERN STACK web Applications",
        "Developing SailsJs NodeJs Rest Api for mobile apps.",
        "Flutter IOS/Android mobile application Development",
        "Error and problem solving",
        "Explore new ideas",
        "Upload app on App store and Play Store"
      ]
    },
    {
      role: "Mobile Apps Architect for Android, iOS, Flutter, Firebase",
      company: "Wabtec Corporation",
      companylogo: require("./assets/images/fluttercasa.png"),
      date: "Apr 2020 – Present",
      desc: "Flutter iOS/Android Apps Developer",
      descBullets: [
        "Architect and Engineer full Development life cycle of Mobile App",
        "Ensuring quality and performance of application to specifications",
        "Identifying potential problems and resolving application bottlenecks",
        "Error and problem solving",
        "Explore new ideas",
        "Upload app on App store and Play Store"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://play-lh.googleusercontent.com/f34ycdXzkIMYwDEgloU1BVt0Ug1EZbpuaEeraXhJT0N8sjbkkLnAJOIT6D-i0-yBFw8=w480-h960-rw",
      projectName: "Crunch Africa (iOS,Android)",
      projectDesc: "Fintech App, Mobile App Architect,Flutter UI, Bloc,QrCode Firebase Auth, Sentery, Unit, Widget and Integration Testing",
      footerLink: [
        {
          name: "AppStore",
          url: "https://apps.apple.com/us/app/crunch-africa/id1537297077"
        },
        {
          name: "PlayStore",
          url: "https://play.google.com/store/apps/details?id=africa.crunch.app"
        }
      ]
    },
    {
      image: "https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/31/3b/ad/313bad13-bc45-8529-ff0b-141a1634fd72/AppIcon-akyurt-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",
      projectName: "Akyurt Online (iOS, Android)",
      projectDesc: "Provider, Complex UI, Backend Api services Integration, Payment Integration",
      footerLink: [
        {
          name: "App Store link",
          url: "https://apps.apple.com/us/app/akyurt-online/id1542598367",
        },
        {
          name: "PlayStore",
          url: "https://apps.apple.com/us/app/akyurt-online/id1542598367",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://play-lh.googleusercontent.com/D1QMd1lBE0IEDfixVo03EZd-TMwFS6N0NcMCYGqWlbXok8lPkrhM-9eBQp6LH_lAd_I=w480-h960-rw",
      projectName: "Baredex",
      projectDesc: "Provider, Rest Api integration,",
      footerLink: [
        {
          name: "PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.breadex.app",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://play-lh.googleusercontent.com/sJAoXHEDWSvSV94ukJca-WxCLZaNLmbcFjK-QggNxQT7bgHL2VWrj10VoZ5BBA-ZLQ=w480-h960-rw",
      projectName: "Mocowi",
      projectDesc: "Internet of things Card device App, Rest Apis, real time data",
      footerLink: [
        {
          name: "PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.mocowi.mocowi",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "sabroso-logo.jpg",
      projectName: "Sabroso",
      projectDesc: "Bloc State Management, Cart checkout and payment System, Unit,,widget and integration testing",
      footerLink: [
        {
          name: "PlayStore",
          url: "#",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "sigma-app.png",
      projectName: "Sigma Math Quiz App",
      projectDesc: "Bloc State Management, Game App, sound, Animations",
      footerLink: [
        {
          name: "PlayStore",
          url: "#",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/daily-expense-manager.png"),
      projectName: "Daily Expense Manager",
      projectDesc: "Provider, Firebase Firestore, Google Auth",
      footerLink: [
        {
          name: "PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.aqua.regalsystem.pocket.manager",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/abcd.png"),
      projectName: "ABC Delivery",
      projectDesc: "Provider,Google Maps, Firebase Firestore, Google Auth",
      footerLink: [
        {
          name: "PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.eeizo.abcdelivery",
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [

    {
      title: "Full Stack Web and Multiplatform Mobile App Development",
      subtitle: "Front-End Web UI Frameworks and Tools,BootStrap, Angular,Ionic and Cordova, Server-side Development with NodeJS, Express and MongoDB",
      image: require("./assets/images/HKUST-original_0.svg"),
      footerLink: [
        { name: "Specialization Certification", url: "https://www.coursera.org/account/accomplishments/specialization/E2FUUDKBDZ5P" },

      ]
    },
    {
      title: "Full-Stack Web Development with React",
      subtitle: "Front-End Web UI Frameworks and Tools,React, React Native,Server-side Development with NodeJS, Express and MongoDB",
      image: require("./assets/images/coursera.svg"),
      footerLink: [
        { name: "Specialization Certification", url: "https://www.coursera.org/account/accomplishments/specialization/2FGBCJUE5DJZ" },

      ]
    },
    {
      title: "Learning Google Flutter for Mobile Developers",
      subtitle: "Flutter and Dart skills to develop Mobile Apps",
      image: require("./assets/images/linkedin.jpg"),
      footerLink: [
        { name: "Specialization Certification", url: "https://www.coursera.org/account/accomplishments/specialization/E2FUUDKBDZ5P" },

      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7814828738",
  email_address: "somyamahajan18@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo};
