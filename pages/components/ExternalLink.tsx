import { relative } from 'path';

interface Props {
  url: string;
  text: string;
}

export default function ExternalLink({ url, text }: Props) {
  return (
    <a style={style.linkContainer} href={url} target="_blank">
      {text}
      <img src="/icons/externalArrow.svg" />
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
