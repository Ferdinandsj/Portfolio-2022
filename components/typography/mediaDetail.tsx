import { FC, ReactNode } from "react";
import Subtle from "./subtle";

interface MediaCaptionProps {
  media: ReactNode;
  caption?: string;
  sourceName: string;
  link?: string;
}

const MediaCaption: FC<MediaCaptionProps> = ({
  media,
  caption,
  link,
  sourceName,
}) => {
  return caption ? (
    <div className="media-description flex flex-col gap-2 items-end">
      {media}
      <Subtle>
        {caption} <a href={link}>{sourceName}</a>
      </Subtle>
    </div>
  ) : (
    media
  );
};

export default MediaCaption;
