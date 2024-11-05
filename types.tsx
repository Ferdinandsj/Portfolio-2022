import { ReactElement } from "react";

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
    heroImage: {
      image1: string;
      image2?: string;
      caption?: string;
      sourceName?: string;
      link?: string;
    };
    challenge: string;
    responsabilitites: string;
    result: string;
    role: string;
    timeline: string;
    crew?: string;
    tags: string[];
  };

  footer: {
    title?: string;
    description?: string;
    link?: string;
    buttonText?: string;
  };
}

export interface ArticleSection {
  h2title?: string;
  h3title?: string;
  textSize: "small" | "wide" | "full";
  mediaRounded?: string;
  type:
    | "image-left-text-right"
    | "text-left-video-right"
    | "text-left-image-right"
    | "video-left-text-right"
    | "full-img-full-text"
    | "full-media";

  text?: string;
  src?: string;
  caption?: string;
  sourceName?: string;

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
