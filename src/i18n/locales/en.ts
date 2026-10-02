import type { MessageCatalog } from './zh-TW'

// Existing English design text stays in the templates or shared data.
const en = {
  "common": {
    "language": { "label": "Website language" },
    "skipToContent": "Skip to main content",
    "dimensions": "Six dimensions",
    "moreDetails": "More details",
    "backHome": "Back to home",
    "navbar": {
      "mainNavigation": "Main navigation",
      "mobileNavigation": "Mobile navigation",
      "downloadResume": "Download resume",
      "downloadResumePdf": "Download resume PDF",
      "mobileDownloadResume": "Download resume (PDF)",
      "preparing": "Preparing…",
      "preparingResume": "Preparing resume…",
      "printFrameTitle": "Full resume print preview",
      "contact": "Contact",
      "closeMenu": "Close menu",
      "openMenu": "Open menu"
    },
    "contact": {
      "label": "Contact me",
      "copyEmail": "Click to copy Email: {email}",
      "emailCopied": "Email address copied"
    },
    "theme": {
      "switchToLight": "Switch to light theme",
      "switchToDark": "Switch to dark theme"
    },
    "project": {
      "viewSource": "View GitHub source code",
      "viewDemo": "Open Live Demo preview"
    },
    "metadata": {
      "description": "Portfolio - Personal profile",
      "resumeTitle": "Full resume {'|'} Portfolio of Fay",
      "notFoundTitle": "404 Page not found {'|'} Portfolio"
    }
  },
  "home": {
    "who": {
      "title": "About me",
      "subtitle": "Senior frontend, and more."
    },
    "when": {
      "title": "Experience",
      "subtitle": "After becoming an engineer, and before."
    },
    "what": {
      "title": "Tech stack",
      "subtitle": "Usually building websites. Occasionally, something else."
    },
    "where": {
      "title": "Where to find me",
      "subtitle": "Where you can find me, and how far I can travel to find you."
    },
    "why": {
      "title": "Motivation",
      "subtitle": "Reasons matter, though sometimes the results arrive first."
    },
    "how": {
      "title": "How I work",
      "subtitle": "I'd suggest starting with how this website was made."
    }
  },
  "who": {
    "title": "About me",
    "subtitle": "A senior frontend engineer with some backend knowledge.",
    "identity": {
      "question": "Who am I?",
      "highlight": "A senior frontend engineer with four years of industry experience.",
      "workName": "I go by Fay at work, and use different nicknames in different communities.",
      "realName": "If you came here from LinkedIn or another recruiting platform, you'll have seen my real name there.",
      "architecture": "I focus on modern frontend architecture, regularly working with the {vue} and {react} ecosystems.",
      "backend": "For backend work, I use NodeJS and have extensive experience collaborating with backend engineers",
      "design": "I understand design systems and interaction design principles, and can implement UI that closely matches Figma designs"
    },
    "interests": {
      "question": "What (and who) do I follow?",
      "highlight": "Frontend technology at work; indie games in my own time.",
      "gameDevelopment": "Before becoming a frontend engineer, I was exploring indie game development.",
      "presentation": "Back then, the PM and I wrestled with the details of how everything looked and behaved every day. At some point, I realized what I was writing was essentially 80% identical to web frontend code.",
      "coincidence": "As for that game development tool's next-generation core actually becoming HTML / CSS / JS later on, that was a happy coincidence.",
      "communities": "These days, I follow Hacker News for industry news and browse indie game developer communities for new technologies in my spare time."
    }
  },
  "when": {
    "employment": {
      "employer": "Previous employer (anonymized)",
      "roles": "Frontend Engineer → Senior Frontend Engineer",
      "promotion": "Promoted during tenure"
    },
    "project": {
      "title": "Product upgrade and Vue 3 rebuild",
      "summary": "As one of three frontend engineers, contributed to rebuilding an existing Vue 2 website in Vue 3 while retaining the established product architecture. Implemented updated visual designs and interactions provided by the design team.",
      "outcome": "The new version launched on schedule.",
      "labels": {
        "delivery": "Feature delivery:",
        "requirements": "Requirements clarification:",
        "api": "API collaboration:",
        "verification": "Delivery verification:"
      },
      "delivery": "Integrated UI, user flows, and API calls into feature-based page modules that could be connected to the Router, and maintained shared components used across pages. Used Pinia for state management, RxJS for asynchronous backend data updates, and WebSocket for real-time interaction messages.",
      "requirements": "Identified discrepancies between existing documentation, live product behavior, and updated designs. Worked with the PM and designers to confirm the new flows, identify the required components and APIs, and update outdated specifications.",
      "api": "Defined frontend data requirements and expected response structures, agreed on them with backend engineers, and integrated the APIs after backend implementation.",
      "verification": "Personally checked the implementation against Figma designs and verified cross-browser behavior before acceptance by designers and QA. Unit tests were defined jointly by the frontend team."
    },
    "title": "Experience",
    "subtitle": "The AI era is moving a little too fast. It makes my past, hand-coding self feel older than it really is.",
    "careerStart": {
      "question": "When did I become a frontend engineer?",
      "highlight": "December 2021.",
      "hobby": "I started programming in high school, but it remained a hobby. I didn't major in computer science at university, either.",
      "pandemic": "The COVID pandemic changed a lot in 2020. It hit the field I was working in hard, and I realized it wasn't a sustainable path for my career.",
      "transition": "I resigned, took a structured course to refresh the necessary skills for frontend development at the time, landed a frontend role, and that was that."
    },
    "previousRole": {
      "question": "When did my previous job start and end?",
      "highlight": "2021.12–2026.05",
      "tenure": "My previous job was also my first in the industry. I stayed for more than four years.",
      "company": "It was a company where both the product and team were growing rapidly. The team's technical lead was a highly skilled engineer dedicated to the open-source community, and learning under him was immensely rewarding.",
      "studyGroups": "Beyond technologies directly related to our work, the company held regular study groups where we kept learning and revisiting what we knew together.",
      "family": "In early 2026, a family matter needed my full attention. I couldn't keep stretching myself between both responsibilities, so I left to focus on the situation at home."
    }
  },
  "what": {
    "evidence": {
      "title": "Technologies in practice",
      "vue": "Implemented UI and user flows as feature-based pages connected to the Router.",
      "pinia": "Managed page state.",
      "rxjs": "Handled asynchronous backend data updates.",
      "websocket": "Received real-time interaction messages.",
      "readCase": "Read the work experience and case study"
    },
    "title": "Tech stack",
    "subtitle": "The simple and challenging things across my career.",
    "web": {
      "question": "What kind of development am I most familiar with?",
      "highlight": "Web development across platforms, devices, and browsers."
    },
    "skills": {
      "frontend": {
        "title": "Core frontend ecosystem",
        "typescript": "TypeScript (strong type safety)",
        "browserCompatibility": "Handling browser differences"
      },
      "backend": {
        "title": "Backend and data",
        "websocket": "WebSocket real-time communication"
      },
      "design": {
        "title": "UI/UX and QA",
        "figma": "Figma collaboration",
        "responsive": "Responsive layouts (RWD)"
      }
    },
    "beyondFrontend": {
      "question": "What else do I know besides frontend development?",
      "tauri": "A cross-platform application framework built on Rust. I've recently been using it for a side project.",
      "flutter": "A cross-platform development toolkit from Google. One project at my previous job used it.",
      "python": "The language I mainly used at university. I haven't used it much since focusing on frontend development."
    },
    "ai": {
      "question": "What do I think about developing with AI?",
      "highlight": "Very powerful autopilot — if you know where you're going.",
      "bicycle": "If software development is like going out on a bicycle, AI adds an engine and navigation, and even steers the handlebars for you.",
      "destination": "If you don't have a destination in mind, it may take you on plenty of detours;",
      "balance": "if you don't know how to position yourself on a bumpy road or a downhill turn, you'll probably fall off.",
      "benefit": "But if you know how to ride and have decided where you're going, it will save you a lot of effort compared with pedaling yourself."
    }
  },
  "where": {
    "title": "Where to find me",
    "subtitle": "Aside from living in Kaohsiung for less than a year, I rarely leave Taipei.",
    "location": {
      "question": "Where am I?",
      "highlight": "Taipei, and online.",
      "home": "I'm based in Taipei. Since I live with my family, I don't plan to move elsewhere in the near future.",
      "socialIntro": "Besides meeting in person, you can find me in these places:"
    },
    "social": {
      "github": "Projects currently under active development are not yet public, but you can see my commit frequency.",
      "plurk": "A social platform without an algorithm deciding what you want to see.",
      "linkedin": "Professional experience and connections.",
      "cake": "I'll get a notification if you message me there."
    },
    "work": {
      "question": "How far can I travel for work?",
      "highlight": "Greater Taipei, or anywhere remote with a solid internet connection.",
      "rangeLabel": "Travel range:",
      "range": "Places in Greater Taipei that I can reach by MRT, bus, and bicycle.",
      "preferenceLabel": "Preference:",
      "preference": "Hybrid work. I have extensive remote collaboration experience and can work smoothly with colleagues across locations and time zones."
    }
  },
  "why": {
    "title": "Motivation",
    "subtitle": "The JavaScript journey is long and demanding; I'm still on the way.",
    "frontend": {
      "question": "Why did I choose frontend development?",
      "highlight": "It wasn't my initial choice. I just happened to end up heading this way.",
      "interest": "At first, it was just a personal interest: I started programming to make games.",
      "fullStack": "Game development includes both frontend and backend work, so strictly speaking, my original direction was closer to full-stack engineering.",
      "firstRole": "When programming finally became my job, my first role was in frontend development. Over time, that naturally came to take the overwhelming majority of my attention."
    }
  },
  "how": {
    "case": {
      "summary": "Clarify discrepancies, then agree on user flows, data requirements, and verification responsibilities.",
      "labels": {
        "differences": "Identify discrepancies:",
        "agreement": "Agree on the flow:",
        "api": "Define data and implementation responsibilities:",
        "verification": "Verify the delivery:"
      },
      "differences": "During the upgrade, the updated designs introduced a different interaction flow, while the live product also differed from its existing documentation. I checked the documentation against actual behavior to identify what needed clarification.",
      "agreement": "After discussing the differences with the PM and designers, we agreed to implement the updated flow, revise outdated specifications, and identify the new components and APIs it required.",
      "api": "I defined frontend data requirements and expected response structures with backend engineers. The backend team implemented the APIs, and I completed the frontend integration.",
      "verification": "I personally checked the implementation against Figma designs and verified cross-browser behavior before handing it over to designers and QA for acceptance. Unit tests were defined jointly by the frontend team."
    },
    "title": "How I work",
    "subtitle": "There are always more solutions than problems. And there are a lot of problems.",
    "website": {
      "question": "How was this website made?",
      "highlight": "I do the thinking; the agent handles the execution.",
      "scope": "I defined the website's purpose, the devices it would be viewed on, the frameworks and tools to use, and the platform to deploy it on.",
      "specification": "Following how PMs wrote specifications at my previous job, I wrote down my intended goals and started directing the agent.",
      "timeSaved": "What it produced was essentially comparable to what I'd write by hand, but took a fifth of my time or less.",
      "technicalIntro": "If you're interested in the technical details:",
      "stack": "This is a static website built with Vue / Vue Router / Vite / TypeScript,",
      "deployment": "deployed to GitHub Pages through GitHub Actions."
    },
    "collaboration": {
      "question": "How do I collaborate with people from other disciplines?",
      "highlight": "With good communication sustained over time, you eventually start reading each other's minds.",
      "experience": "Throughout my four-and-a-half-year career, I've worked closely with backend engineers, designers, and product managers.",
      "sharedPicture": "We reached a shared conclusion: the key to smooth collaboration can be reduced to one sentence — “I know what you're picturing.”",
      "basicKnowledge": "Even a little introductory knowledge helps me understand more accurately what the other person is trying to convey.",
      "lessFriction": "The clearer our shared picture, the less friction there is in communication during development.",
      "backend": "I have the necessary knowledge of common backend architectures, along with practical experience working with backend engineers over the long term;",
      "designCourse": "to improve how I collaborate with designers, I'm also taking the Google UX Design Certificate course to learn about UI/UX design."
    }
  },
  "resume": {
    "project": {
      "delivery": "Delivered feature-based page modules integrating UI, user flows, and APIs for the Router, and maintained shared components. Used Pinia for state management, RxJS for asynchronous data updates, and WebSocket for real-time interaction messages.",
      "requirements": "Clarified discrepancies between documentation, live behavior, and updated designs with the PM and designers, agreed on the new flows, and updated outdated specifications.",
      "api": "Defined frontend data requirements and expected structures with backend engineers, then integrated the APIs implemented by the backend team.",
      "verification": "Personally checked the UI against Figma designs and verified cross-browser behavior before acceptance by designers and QA."
    },
    "toolbar": {
      "print": "Print / Save as PDF"
    },
    "profile": {
      "title": "Senior Frontend Engineer",
      "summary": "Focused on modern frontend architecture (Vue 3 / React / TypeScript), with 4+ years of intensive product development and cross-disciplinary collaboration experience. I value clear code architecture, user experience, and efficient communication.",
      "location": "Taipei, Taiwan {location}"
    },
    "when": {
      "family": "In early 2026, a family matter needed my full attention. I couldn't keep stretching myself between both responsibilities.",
      "handover": "The product I'd been primarily responsible for developing had entered a stable phase after delivery, so I used that opportunity to finish the handover and leave to focus on the situation at home."
    },
    "social": {
      "github": "Personal development and project repositories",
      "plurk": "Technology discussions and everyday life",
      "linkedin": "Professional experience and connections",
      "cake": "Online resume and contact channel"
    },
    "how": {
      "scope": "I thought through many things: the website's purpose, the devices it would be viewed on, the frameworks and tools to use, and the platform to deploy it on.",
      "specification": "Then, following how PMs wrote specifications at my previous job, I wrote down what I'd decided and started directing Gemini."
    }
  },
  "notFound": {
    "title": "Page not found",
    "description": "Sorry, the page you're looking for doesn't exist or has moved. Check the URL or use the button below to return home."
  }
} satisfies MessageCatalog

export default en
