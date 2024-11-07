import { ProjectDetail } from "../types";

//Makes any string URL friendly
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "") // Remove any non-word characters
    .replace(/ +/g, "-"); // Replace spaces with hyphens
};

export const projects: ProjectDetail[] = [
  /* NAER */
  {
    id: 1,
    slug: slugify("Naer"), // Add the slug here
    indexImage:
      "/images/naer/naer-square-image.png",
    title:
      "A Cross-Platform Design System for Web and VR",
    categories: ["UI", "UX", "XR"],
    date: "2024",
    employer: "Naer",

    overview: {
      heroImage: {
        image1:
          "/images/naer/naer-cliff-loop.mp4",
        caption: "Illustrations by",
        sourceName: "Umble",
        link: "https://www.umble.no/",
      },
      challenge:
        "Naer, a Norwegian XR startup, needed a robust design system for its web app and VR application to streamline development and improve design consistency. With a small startup team and limited resources, the challenge was to create a flexible, scalable system that could be easily implemented by developers while also being adaptable for future iterations across both 2D and 3D platforms.",
      responsabilitites:
        "As the sole designer on this project, I created the entire design system, including all components, UI assets, and documentation. I integrated Tailwind CSS and ShadCN for efficient developer handoff, organized assets in Figma and adapted the system for VR usage.",
      result:
        "Launched the design system, ensuring seamless UI/UX for Naer’s web app and supporting its expansion in VR. The system provides consis-tent UI and improved development speeds across both Web and VR.",
      role: "UI & UX Designer",
      timeline: "9 months",
      tags: [
        "Atomic Design system",
        "UX",
        "UI",
        "VR",
        "Unity",
        "Tailwind",
      ],
    },

    process: [
      {
        type: "image-left-text-right",
        textSize: "wide",
        h2title: "Research and discovery",
        src: "/images/naer/vr-usertest.png",

        text: "I organized and conducted user testing for both the web and VR platforms, and created a user testing suite in Notion to collect the feedback. Weekly user testing sessions with in-house and remote participants helped identify key issues, which I incorporated into the user flows and design system. The research included understanding user behavior in 2D and 3D environments. By understanding our developers preferred workflows, I could easily tailor the design system to their visual languages/technologies; Tailwind and Unity. In this way our developers were already familiar with the tech and could implement immediately. ",
      },
      {
        type: "text-left-video-right",
        textSize: "wide",
        h3title: "One building block at a time",
        src: "/images/naer/label-animation.mp4",
        text: "I based the design system on atomic design principles, using atoms, molecules, and organisms to ensure the components were modular and adaptable across platforms. The system was built in Figma with semantic naming, variables and animations to streamline wireframe creation and facilitate faster design iterations. It also incorporated cross-platform compatibility, ensuring consistency between web, mobile, and VR experiences. As Figma is based in 2D, the developers brought exports of 2D wireframes into 3D to recreate components in Unity.",
      },
      {
        type: "video-left-text-right",
        textSize: "small",
        h3title: "Making implementation easier",
        src: "/images/naer/responsive-animation.mp4",
        text: "Working closely with Naer’s development team, I ensured the design system was developer-friendly by reusing Tailwind CSS base metrics for fast, scalable imple-mentation. The system was continually updated as both design and development progressed, ensuring it remained the source of truth for all assets used across Naer’s platforms.",
      },
      {
        type: "image-left-text-right",
        textSize: "small",
        src: "/images/naer/component-documentation.png",
        text: "Each component was neatly documented to inform developers about the intended use-case. This included accessibility concerns, naming cenvention, empty-states, error, success and loading where it was relevant.",
      },
    ],
    result: [
      {
        h2title: "The Design System",
        textSize: "full",
        type: "full-media",
        src: "/images/naer/button-animation.mp4",
        text: "At the end of the project, the entire webapp had been rebuildt using the new Design System. The 2D aesthetics had also been applied and transformed to work with the 2D surfaces within the 3D app (whiteboards, menus and onboarding). The user experience therefore became more coherent as the users transitioned between our 2D and 3D environments.",
      },

      {
        type: "text-left-video-right",
        textSize: "wide",
        h3title: "Implementation",
        src: "/images/naer/naer-mobile-live.mp4",
        text: "The design system built in Figma is now used by the Naer team across its web app and XR app. It incorporates responsive, reusable components that can be adapted to different platforms, from 2D UI on the web to 3D interactions in VR through Unity. This design system has improved collaboration between designers and developers, reduced production time and increased overall design consistency across Naer’s platforms. This is a live demonstration of the webapp on mobile today.",
      },

      {
        type: "full-media",
        textSize: "full",
        src: "/images/naer/2d-ui-in-naer.png",
        caption:
          "Showcase of the 2D UI in the 3D environment of naer",
      },
      {
        type: "full-img-full-text",
        textSize: "full",
        h3title: "Impact for Naer",
        src: "/images/naer/naer-hero-image.png",
        text: "With a reliable design system across platforms, Naer has been rewarded the best educational VR experience in the nordics and holds the position as the number 1 productivity app in the Meta app store. The app has also been featured in The New York Times, Wired and Bloomberg as a refreshing and exciting way of brainstorming.",
      },
    ],

    footer: {
      title:
        "Curious about building cross-platform design systems?",
      description:
        "Read my university report on how 3D UI differs from 2D UI and its design principles.",
      link: "https://drive.google.com/file/d/1kxaarvNgw-LlHyHxIS7Z3h-Mby9b2Ren/view",
      buttonText: "Download Report",
    },
  },

  /* ITERATE DEMO */
  {
    id: 2,
    indexImage:
      "/images/iterate/squirl-animation.mp4",
    title:
      "Testing Market Interest of Product Ideas Early",
    categories: ["UI", "UX"],
    date: "2022",
    employer: "Iterate",
    slug: slugify("Iterate"),
    overview: {
      heroImage: {
        image1: "/images/iterate/demo-hero1.png",
        image2: "/images/iterate/demo-hero2.png",
      },

      challenge:
        "Startups often fail at the seed or concept stage due to a lack of product-market fit. The challenge was to create a tool that could help entrepreneurs test their prototypes on real customers and gather market feedback earlier and more cheaply than traditional methods, improving the chances of success. We developed a tool that allows startups to test market interest in their products by using Figma prototypes to gather real-world user engagement data and assess product-market fit.",
      responsabilitites:
        "As the sole designer, I led the design process, conducted over 20 interviews, and worked closely with two developers. I was responsible for developing the UI, branding and animating the product. I also led user testing, workshops and maintained stakeholder relationships.",
      result:
        "Successfully developed a tool that allows entrepreneurs to test their Figma prototypes in real-world settings. The tool tracks user interactions, provides engagement metrics, and offers actionable insights to improve product-market fit. The MVP was validated by two startups, with Iterate continuing development post-internship.",
      role: "UX & UI Designer",
      timeline: "2 months",
      crew: "Product Trio",
      tags: [
        "User Testing",
        "UX",
        "UI",
        "Product management",
        "Graph UI",
      ],
    },
    process: [
      {
        h2title: "Getting caught up to speed",
        textSize: "wide",
        type: "text-left-image-right",
        src: "/images/iterate/rocketship-adventure.webp",
        text: "At a 24-hour hackaton, a team at iterate had come up with the idea of gathering data from Figma prototypes. My team's task was to elaborate on their idea in order to create an MVP of the solution which could be used by actual startups. We began by interviewing the team that came up with the idea and investigated the need behind the idea. The initial findings were that innovators tend to sit too long with an idea within a team before probing the market and gaining knowledge about the actual market interest. We therefore set out to better understand how we could tailor this tool towards innovators and help them understand market interest earlier.",
      },
      {
        h3title: "Finding collaborators",
        textSize: "small",
        type: "image-left-text-right",
        src: "/images/iterate/emil-max-working.jpg",
        text: "We conducted interviews to understand the needs of potential users. We interviewed designers, developers, entrepreneurs, and product managers. Following the Lean startup methodology, we set up seven problem interviews to gather insights. We found that five out of seven interviewees were interested and became co-creators in the process, participating in weekly feedback sessions.",
      },
      {
        h3title:
          "Information in the right context",
        textSize: "small",
        type: "text-left-image-right",
        src: "/images/iterate/affinity.jpg",
        text: "I was the lead designer in the team and we all participated in interviews and activities to ensure everyone was aligned. After conducting interviews, we organized our findings into an affinity diagram, which helped us identify key insights and formulate a problem statement to guide development. We followed a structured weekly process: Mondays were for organizing and prioritizing tasks, Tuesday to Thursday were for development, and Fridays were for solution interviews with stakeholders.",
      },
      {
        h3title:
          "Information in the right context",
        textSize: "small",
        type: "image-left-text-right",
        src: "/images/iterate/funnel.jpg",
        text: "In the process we were taught a lot on the subject of product management. We realized that to make our application have value for our users we needed to implement these theories in a simple way. In several of the interviews we experimented with how we could convey the information with explanations and visualizations. The result of our project relied heavily on what explanations worked with our stakeholders.",
      },
    ],
    result: [
      {
        h2title: "Iterate DEMO",
        textSize: "wide",
        type: "full-media",
        mediaRounded: "rounded-xl",
        src: "/images/iterate/onboarding.mp4",
        text: "The webapp Iterate DEMO allowed entrepreneurs to gain quantitative user-data on Figma prototypes. This was achieved by tracking clicks and time spent in each page of the Figma prototype. This flow showcases how an entrepreneur submits their prototype and how they could flag buttons that were important in the app. They would then recieve a costumizable link they to provide to users through social media or any preffered platform. Once the prototype was sent out to users, the data on each prototype was showcased in realtime on that Demo's dashboard.",
      },
      {
        textSize: "wide",
        h3title: "Acquisition funnel",
        type: "full-media",
        mediaRounded: "rounded-xl",
        src: "/images/iterate/metrics-animation.mp4",
        text: "Product owners were selected as the primary user group, as they tend to have a holistic view of the product or idea. In interviewing product owners (and others) we found that the acquisition funnel was a good benchmark for analysing the market value of the prototype. The funnel visualised acquisition, engagement, activation and retention of the users – which led to an increased understanding of the products strengths and faults.",
      },
      {
        textSize: "full",
        h3title: "Value for Iterate",
        type: "full-img-full-text",
        mediaRounded: "rounded-xl",
        src: "/images/iterate/dashboard.mp4",
        text: "In just six weeks, the team and I had created and published a working version of the webapp. The webapp was pilot tested together with two startups; Hjernelæring and Byks and had immediate impact. Byks achieved value by publishing their entire webapp as a Figma prototype – in addition to gaining data on their users in a format that was easy to understand. This allowed Byks to offer a range of workouts to their users and better understand which workouts were the most popular. Hjernelæring tested different types of content with their users and made a decision on which to pursue further. All in all, this project was a success and was continued after our internship.",
      },
    ],
    footer: {},
  },

  /* AESTHETIC GUIDE */
  {
    id: 3,
    indexImage:
      "/images/aesthetic-guide/hero-square.jpg",
    title:
      "How Can We Build a Beautiful, Sustainable Oslo?",
    categories: [
      "Service",
      "Graphic",
      "UI/UX Design",
    ],
    date: "2022",
    employer: "KOI",
    slug: slugify("KOI"),
    overview: {
      heroImage: {
        image1:
          "/images/aesthetic-guide/hero-filipstad-blueprint.png",
      },

      challenge:
        "With minimal regulatory oversight on materials and design, Oslo’s city-development has increasingly overlooked aesthetic considerations, impacting the quality of life for its residents. How can we help stakeholders make better aesthetic city planning decisions? For Oslo’s revamp of the Filipstad District, a team of thirty students was tasked with pro-posing a new approach to integrating aesthetics and functionality into urban design. The goal was to advocate for the importance of aesthe-tics to policymakers in shaping the city’s future.",
      responsabilitites:
        "Shaped the branding, book layout, and website as a lead in the design team. I oversaw the curation and organization the content that went into the final publication, ensuring that the information, imagery, and design were cohesive and answered our project goals.",
      result:
        "Published a book about urban aesthetic city planning which was handed to the Oslo’s Head of Urban Planning. The project sparked a public debate about urban aesthetics and was an inspiration for Oslo’s fargeveileder.",
      role: "Lead editor, designer & web developer",
      timeline: "18 Months",
      crew: "30 Volunteers, KOI & Oslo Municipality ",
      tags: [
        "Service Design",
        "UX",
        "Giga-map",
        "Branding",
        "Webflow",
      ],
    },
    process: [
      {
        h2title: "Filipstad District [2022]",
        textSize: "full",
        type: "full-img-full-text",
        mediaRounded: "rounded-xl",
        src: "/images/aesthetic-guide/field-study-collage.png",
        text: "We initially conducted a field study of Filipstad  and its surrounding districts in groups of 6 students. We were accompanied by the Director of Cultural Heritage Management, who highlighted which aspects of the area the City would like to preserve. We had a closer look at the district’s materials, location and its characteristic buildings. Afterward, we triangulated these findings together with a survey and ethnographic studies of the neighboring districts inhabitants to map their user needs.",
        caption: "Foto:",
        sourceName: "Einar Rosenhaug",
      },
      {
        h3title: "Visualising Insights",
        textSize: "wide",
        type: "text-left-image-right",
        src: "/images/aesthetic-guide/filipstad-winter-activity-survey.png",
        text: "My group chose to visualise findings from the three insight methods in a GIGA-map to make relations between insights more apparent. The GIGA-map served us as our source of truth, and made it easier to communicate with stakeholders and the other teams. From our research, we identified a need for year-round usability of the district, particularly addressing the oversight in previous city planning that focused heavily on warmer seasons. To tackle this, we used a table to analyze how different age groups interact with the district across all seasons, ensuring our design solutions were inclusive of cold winter challenges.",
      },
      {
        h3title: "Design by committee",
        textSize: "small",
        type: "image-left-text-right",
        src: "/images/aesthetic-guide/maja-aurora-workshop.png",
        text: "The biggest challenge of the project was to include the voices and opinions of the 30 collaborators. To manage and decide on the content of the book, we chose one person from each team to champion that teams opinions. Each team champion would have frequent meetings with the editorial team led by me. To manage the opinions, we chose to use Google Docs for version control and later on InDesign Online in order to place the opinion at the specific area in question. The editorial team also produced the layout and branding in addition to making the final decisions on content that was published.",
      },
    ],
    result: [
      {
        h2title: "The Book",
        textSize: "full",
        type: "full-img-full-text",
        mediaRounded: "rounded-xl",
        src: "/images/aesthetic-guide/book-collage.png",
        text: "The book was crafted as an easy to use encyclopedia for urban development. It covered building facades, materials, colors, universal design and green areas. Each chapter had a summary with a toolkit of what one should keep in mind for each of the categories. Multiple copies were handed to the key stakeholders; Oslo municipality, Multiconsult, Oslo Havn KF, Arkitekturopprøret and ROM Eiendom AS.",
      },

      {
        h2title: "Hasvold Seaside Pool Concept",
        textSize: "full",
        type: "full-media",
        mediaRounded: "rounded-xl",
        src: "/images/aesthetic-guide/hasvold-bad.png",
      },

      {
        textSize: "full",
        type: "full-img-full-text",
        mediaRounded: "rounded-xl",
        text: "Creating spaces in our city that encourage social interaction and activity is crucial, but how do we ensure this when autumn and winter bring darkness and cold? The concept of a year-round city focuses on making urban spaces accessible and active throughout all seasons. There are many benefits to developing a year-round city, from fostering a sense of belonging to providing enjoyable activities. This is something the community strongly desires. By introducing year-round activities, we create a vibrant city that invites people outdoors, helping them feel connected to their local area without the need to travel elsewhere for experiences.",
        src: "/images/aesthetic-guide/hasvold-facilities.png",
      },
      {
        textSize: "full",
        type: "full-img-full-text",
        mediaRounded: "rounded-xl",
        src: "/images/aesthetic-guide/hasvold-pool.png",
      },
    ],
    footer: {},
  },

  /*   {
    id: 3,
    slug: slugify("Koi-color-studio"), 
    squareImage:
      "/images/aesthetic-guide/hero-square.jpg",
    title:
      "How can we ensure an aesthetic and sustainable urban development for the city of Oslo?",
    categories: [
      "Service",
      "graphic",
      "web design",
    ],
    date: "2022",
    employer:
      "KOI Color studio \n Oslo Municipality",
    overview: {
      heroImage:
        "/images/aesthetic-guide/aesthetic-hero-image.png",
      challenge:
        "With minimal regulatory oversight on materials and design, Oslo’s city-development has increasingly overlooked aesthetic consi-derations, impacting the quality of life for its residents. How can we help stakeholders make better aesthetic city planning decisions? \n For Oslo’s revamp of the Filipstad District, a team of thirty students in collaboration with KOI Color-studio was tasked with proposing a new approach to integrating aesthetics and functionality into urban design. The goal was to advocate for the importance of aesthetics to policymakers in shaping the city’s future.",
      responsabilitites:
        "Shaped the branding, book layout, and website as a lead in the design team. I oversaw the curation and organization the content that went into the final publication, ensuring that the information, imagery, and design were cohesive and answered our project goals.",
      result:
        "Published a book about urban aesthetic city planning which was handed to the Oslo’s Head of Urban Planning. The project sparked a public debate about urban aesthetics and was an inspiration for Oslo’s color-guide.",
      role: "Editor and lead graphic designer",
      timeline: "18 months",
      crew: "30 students",
      tags: [
        " Service design",
        "UX",
        "GIGA-map",
        "Indesign",
        "Figma",
        "Webflow",
        "Branding",
      ],
    },
    process: [],
    result: [],
    footer: {
      title: "Title",
    },
  }, */
];
