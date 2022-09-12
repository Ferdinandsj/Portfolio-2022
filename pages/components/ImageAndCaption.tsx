interface Props {
  src: string;
  altText: string;
  content?: string;
  creator?: string;
}

export default function ExternalLink({
  src,
  altText,
  content,
  creator,
}: Props) {
  return (
    <div style={style.imageWrapper}>
      <img src={src} alt={altText} />
      <div style={style.captionFlex}>
        <text className="contentCaption">{content}</text>
        <text className="contentCaption" style={{ color: 'black' }}>
          {creator}
        </text>
      </div>
    </div>
  );
}

const style = {
  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '0px',
    gap: '12px',
  },

  captionFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0px',
    gap: '4px',
  },
} as const;
