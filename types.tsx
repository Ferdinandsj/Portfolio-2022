export interface ProjectDetail {
  id: number;
  indexImage: string;
  title: string;
  categories: string[];
  date: string;
  employer: string;
  slug: string;
  process: ArticleSection[];
  result: ArticleSection[];
  overview: {
    heroImage: string;
    heroImage2?: string;
    challenge: string;
    responsabilitites: string;
    result: string;
    role: string;
    timeline: string;
    crew?: string;
    tags: string[];
  };

  footer: {
    title: string;
    description?: string;
    link?: string;
    buttonText?: string;
  };
}

export interface ArticleSection {
  h2title?: string;
  h3title?: string;
  type:
    | "image-left-text-right"
    | "text-left-video-right"
    | "video-left-text-right"
    | "full-img-full-text"
    | "full-video";

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
