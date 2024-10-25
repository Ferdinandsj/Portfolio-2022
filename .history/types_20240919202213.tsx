export interface ProjectDetail {
  id: number;
  squareImage: string;
  title: string;
  categories: string[];
  date: string;
  employer: string;
  slug: string;
  article: ArticleSection[];
  overview: {
    heroImage: string;
    challenge: string;
    responsabilitites: string;
    result: string;
    role: string;
    timeline: string;
    crew?: string;
    tags: string[];
  };
}

export interface ArticleSection {
  h2title?: string;
  h3title?: string;
  type:
    | "image-left-text-right"
    | "text-left-video-right"
    | "video-left-text-right";
  text?: string;
  src?: string;
  alt?: string; // Alt text for images
}

export interface ExperienceDetail {
  id: Number;
  employer: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string[];
}
