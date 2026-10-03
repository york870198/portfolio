import type { MessageCatalog } from './zh-TW'

// Existing English design text stays in the templates or shared data.
const en = {
  "common": {
    "labelSeparator": ":",
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
      "copyEmail": "Copy email address: {email}",
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
      "subtitle": "Senior frontend engineer with backend knowledge."
    },
    "when": {
      "title": "Experience",
      "subtitle": "Work experience and a selected project."
    },
    "what": {
      "title": "Tech stack",
      "subtitle": "Skills and their application in projects."
    },
    "where": {
      "title": "Where to find me",
      "subtitle": "Contact details and work preferences."
    },
    "why": {
      "title": "Motivation",
      "subtitle": "Learning and turning ideas into visible results."
    },
    "how": {
      "title": "How I work",
      "subtitle": "A collaboration case and how this website was built."
    }
  },
  "who": {
    "title": "About me",
    "subtitle": "A senior frontend engineer with backend knowledge.",
    "identity": {
      "question": "Who am I?",
      "highlight": "A senior frontend engineer with over four years of frontend development experience.",
      "workName": "I go by Fay at work.",
      "architecture": "I focus on modern frontend architecture, regularly working with the {vue} and {react} ecosystems.",
      "backend": "I use Node.js for backend work and have extensive experience collaborating with backend engineers.",
      "design": "I understand design systems and interaction design principles, and can implement UI that closely matches Figma designs."
    },
  },
  "when": {
    "employment": {
      "employer": "Previous employer (name withheld)",
      "roles": "Frontend Engineer → Senior Frontend Engineer",
      "promotion": "Promoted during tenure"
    },
    "project": {
      "title": "Product upgrade and Vue 3 rebuild",
      "summary": "Contributed as one of three frontend engineers to rebuilding an existing Vue 2 website in Vue 3, retaining the established product architecture and implementing the design team’s updated brand visuals and interactions.",
      "outcome": "The new version launched on schedule.",
      "labels": {
        "delivery": "Feature delivery:",
        "requirements": "Requirements clarification:",
        "api": "API collaboration:",
        "verification": "Delivery verification:"
      },
      "delivery": "Built modular pages organized by feature, combining UI, user flows, and API integration for use in the site’s routing, and maintained shared components across pages. Used Pinia for state management, RxJS to handle asynchronous backend data updates, and WebSocket to receive real-time interaction messages.",
      "requirements": "Identified discrepancies between existing documentation, live product behavior, and updated designs. Agreed on the new flows and required components and APIs with the PM and designers, and updated outdated specifications.",
      "api": "Defined frontend data requirements and expected response structures, confirmed them with backend engineers, and integrated the APIs they implemented.",
      "verification": "Checked the implementation against Figma designs and verified cross-browser behavior, then handed it over to designers and QA for acceptance testing. Unit tests were defined jointly by the frontend team."
    },
    "title": "Experience",
    "subtitle": "Roles, career progression, and product delivery.",
    "previousRole": {
      "highlight": "Dec 2021–May 2026",
    }
  },
  "what": {
    "evidence": {
      "title": "Technologies in practice",
      "vue": "Implemented UI and user flows as feature-based pages for use in the site’s routing.",
      "pinia": "Managed page state.",
      "rxjs": "Handled asynchronous backend data updates.",
      "websocket": "Received real-time interaction messages.",
      "readCase": "Read the work experience and case study"
    },
    "title": "Tech stack",
    "subtitle": "Skills and their application in projects.",
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
      "question": "What other technologies have I used?",
      "tauri": "Currently using it for a personal project in development.",
      "flutter": "Used on a project in my previous role.",
      "python": "My main language at university; used less in recent years."
    },
  },
  "where": {
    "title": "Where to find me",
    "subtitle": "Contact details and work preferences.",
    "location": {
      "question": "Where am I?",
      "highlight": "Taipei, and online.",
      "home": "Based in Taipei, with no near-term relocation plans.",
    },
    "social": {
      "github": "Personal projects and code",
      "plurk": "Community and everyday life",
      "linkedin": "Professional experience and connections.",
      "cake": "Online resume and contact"
    },
    "work": {
      "question": "Where and how do I work?",
      "highlight": "I prefer hybrid work.",
      "rangeLabel": "Commuting range:",
      "range": "Locations in Greater Taipei accessible by public transport and bicycle.",
      "preferenceLabel": "Collaboration experience:",
      "preference": "Experienced in remote collaboration across locations and time zones."
    }
  },
  "why": {
    "title": "Motivation",
    "subtitle": "Learning and turning ideas into visible results.",
    "frontend": {
      "question": "Why do I continue working in frontend development?",
      "highlight": "I enjoy learning new tools and using them to create results users can see.",
      "interest": "With AI, I can put newly learned tools into practice and see results sooner, making exploration more rewarding. The frontend is what users encounter first. Seeing ideas take shape in the interface and its interactions keeps me engaged in this field.",
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
      "differences": "During the upgrade, the updated designs changed the user flows, and the live product also differed from its documentation. I compared the documentation with actual behavior to identify discrepancies that needed clarification.",
      "agreement": "I discussed the discrepancies with the PM and designers. We agreed to implement the updated flows, revise outdated specifications, and identify the new components and APIs needed.",
      "api": "I proposed the frontend data requirements and defined the expected response structures, then confirmed them with backend engineers. They implemented the APIs, and I integrated them into the frontend.",
      "verification": "I checked the implementation against Figma designs and verified cross-browser behavior, then handed it over to designers and QA for acceptance testing. Unit tests were defined jointly by the frontend team."
    },
    "title": "How I work",
    "subtitle": "A collaboration case and how this website was built.",
    "website": {
      "question": "How was this website made?",
      "scope": "I defined the website’s purpose, target devices, technologies, and deployment approach, and used specifications to guide AI-assisted implementation.",
      "stack": "The website uses Vue, Vue Router, Vite, and TypeScript, and is deployed to GitHub Pages through GitHub Actions.",
    },
    "collaboration": {
      "question": "How do I collaborate with people from other disciplines?",
      "designCourse": "Google UX Design Certificate: in progress, studying UI/UX design to improve collaboration with designers."
    }
  },
  "resume": {
    "concise": {
      "location": "Taipei, Taiwan",
      "developmentTitle": "Learning and additional experience",
      "uxCourse": "Google UX Design Certificate: in progress, studying UI/UX design to improve collaboration with designers.",
      "tauri": "Currently using it for a personal project in development.",
      "flutter": "Used on a project in my previous role.",
      "workTitle": "Work preferences",
      "work": "No near-term relocation plans. I prefer hybrid work, with a commuting range covering locations in Greater Taipei accessible by public transport and bicycle.",
      "remoteExperience": "Experienced in remote collaboration with colleagues across locations and time zones."
    },
    "project": {
      "delivery": "Built feature-based pages combining UI, user flows, and API integration for use in the site’s routing, and maintained shared components. Used Pinia for state management, RxJS for asynchronous backend data updates, and WebSocket for real-time interaction messages.",
      "requirements": "Clarified discrepancies between documentation, live behavior, and updated designs with the PM and designers, agreed on the new flows, and updated outdated specifications.",
      "api": "Defined frontend data requirements and expected response structures, confirmed them with backend engineers, and integrated the APIs they implemented.",
      "verification": "Checked the UI against Figma designs and verified cross-browser behavior, then handed it over to designers and QA for acceptance testing."
    },
    "toolbar": {
      "print": "Print / Save as PDF"
    },
    "profile": {
      "title": "Senior Frontend Engineer",
      "summary": "Focused on modern frontend architecture (Vue 3 / React / TypeScript), with over four years of product development and cross-disciplinary collaboration experience. I value clear code architecture, user experience, and efficient communication.",
    },
  },
  "notFound": {
    "title": "Page not found",
    "description": "Sorry, the page you're looking for doesn't exist or has moved. Check the URL or use the button below to return home."
  }
} satisfies MessageCatalog

export default en
