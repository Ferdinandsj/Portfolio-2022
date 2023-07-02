import { relative } from 'path';
import Image from 'next/image';

interface Props {
  url: string;
  text: string;
}

export default function ExternalLink({ url, text }: Props) {
  return (
    <a style={style.linkContainer} href={url} target="_blank" rel="noreferrer">
      {text}
      <Image
        width="15px"
        height="15px"
        alt="Arrow pointing upward-right"
        src="/icons/externalArrow.png"
        priority
      />
    </a>
  );
}

const style = {
  linkContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '9px',
  },
} as const;
