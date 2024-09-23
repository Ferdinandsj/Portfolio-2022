import { ProjectDetail } from "../types";

//Makes any string URL friendly
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "") // Remove any non-word characters
    .replace(/ +/g, "-"); // Replace spaces with hyphens
};

export const projects: ProjectDetail[] = [
  {
    id: 1,
    slug: slugify("Naer"), // Add the slug here
    squareImage:
      "/images/naer/naer-square-image.png",
    title:
      "A Cross-Platform Design System for Web and VR",
    categories: ["UI", "UX", "XR"],
    date: "2024",
    employer: "Naer",

    article: [
      {
        type: "image-left-text-right",
        title: "Research and discovery",
        src: "/images/naer/rnd-image.png",
        text: "I organized and conducted user testing for both the web and VR platforms, and created a user testing suite in Notion to collect the feedback. Weekly user testing sessions with in-house and remote participants helped identify key issues, which I incorporated into the user flows and design system. The research included understanding user behavior in 2D and 3D environments. By understanding our developers preferred workflows, I could easily tailor the design system to their visual languages/technologies; Tailwind and Unity. In this way our developers were already familiar with the tech and could implement immediately. ",
      },
      {
        type: "text-left-video-right",
        title: "One building block at a time",
        src: "/images/naer/label-animation.mp4",
        text: "I based the design system on atomic design principles, using atoms, molecules, and organisms to ensure the components were modular and adaptable across platforms. The system was built in Figma with semantic naming, variables and animations to streamline wireframe creation and facilitate faster design iterations. It also incorporated cross-platform compatibility, ensuring consistency between web, mobile, and VR experiences. As Figma is based in 2D, the developers brought exports of 2D wireframes into 3D to recreate components in Unity.",
      },
      {
        type: "video-left-text-right",
        title: "Making implementation easier",
        src: "/images/naer/responsive-animation.mp4",
        text: "Working closely with Naer’s development team, I ensured the design system was developer-friendly by reusing Tailwind CSS base metrics for fast, scalable implementation. The system was continually updated as both design and development progressed, ensuring it remained the source of truth for all assets used across Naer’s platforms.",
      },
      {
        type: "image-left-text-right",
        src: "/images/naer/component-documentation.png",
        text: "Each component was neatly documented with intended use-case and other design decisions. This included empty-states, error, success and loading. Upon recreating the old user journeys each flow and interaction was organized for responsive screen sizes and kept tidy by using appropriate spacings and arrows. ",
      },
    ],
    overview: {
      heroImage:
        "/images/naer/naer-hero-image.png",
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
  },
  {
    id: 2,
    squareImage:
      "/images/iterate-demo/iterate-demo-1.gif",
    title:
      "Testing Market Interest of Product Ideas Early",
    categories: ["UI", "UX"],
    date: "2022",
    employer: "Iterate",
    slug: slugify("Iterate"), // Add the slug here
    article: [
      /*       {
        type: "text",
        content:
          "Is it possible to test the market value of an idea earlier and cheaper than we do today?",
      },
      {
        type: "image",
        content: "/images/iterate-demo/iterate-demo-1.gif",
        alt: "Iterate Demo dashboard",
      },
      {
        type: "text",
        content:
          "During my summer internship at Iterate my team and I had 6 weeks to dive into the challenge...",
      },
      {
        type: "video",
        content: "/videos/animation-of-pixelated-wave.mp4",
      }, */
      // More sections as needed
    ],
    overview: {
      heroImage:
        "/images/iterate/iterate-hero.png",
      challenge:
        "Startups often fail at the seed or concept stage due to a lack of product-market fit. The challenge was to create a tool that could help entrepreneurs test their prototypes on real customers and gather market feedback earlier and more cheaply than traditional methods, improving the chances of success. We developed a tool that allows startups to test market interest in their products by using Figma prototypes to gather real-world user engagement data and assess product-market fit.",
      responsabilitites:
        "As the sole designer, I led the design process, conducted over 20 interviews, and worked closely with two developers. I was responsible for developing the UI, branding, and animating the product, as well as creating the design system from scratch. I also led user testing, workshops, and maintained stakeholder relationships.",
      result:
        "Successfully developed a tool that allows entrepreneurs to test their Figma prototypes in real-world settings. The tool tracks user interactions, provides engagement metrics, and offers actionable insights to improve product-market fit. The MVP was validated by two startups, with Iterate continuing development post-internship.",
      role: "UX & UI Designer",
      timeline: "2 months",
      crew: "Product Trio",
      tags: ["User Testing", "UX", "UI"],
    },
  },

  /*   {
    id: 2,
    image: "/images/master-thesis/hero-square.png",
    title:
      "How we can use projectors on cruise ships to enhance educational tourism on the West Coast",
    categories: ["Service", "UX"],
    date: "2024",
    employer: "Kystruten",
    article: [],
  }, */

  {
    id: 3,
    slug: slugify("Koi-color-studio"), // Add the slug here
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
    article: [],
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
  },
  // More projects
];
