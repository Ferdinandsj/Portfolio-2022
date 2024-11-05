import Image from "next/image";

interface Props {
  url: string;
  text: string;
  className?: string;
}

export default function ExternalLink({ url, text, className }: Props) {
  return (
    <a
      style={style.linkContainer}
      href={url}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {text}
      <Image
        alt="Arrow pointing upward-right"
        src="/icons/externalArrow.png"
        width="24"
        height="24"
        priority
      />
    </a>
  );
}

const style = {
  linkContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "9px",
  },
} as const;
