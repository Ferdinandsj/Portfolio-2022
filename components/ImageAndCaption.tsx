import Image from 'next/image';

interface Props {
  src: string;
  altText: string;
  content?: string;
  creator?: string;
  width?: string;
  height?: string;
  layout?: 'responsive' | 'fill' | 'intrinsic' | 'fixed';
  placeholder?: string;
}

export default function ExternalLink({
  src,
  altText,
  content,
  creator,
  width,
  height,
  layout,
}: Props) {
  return (
    <div style={style.imageWrapper}>
      <Image
        layout={layout}
        width={width}
        height={height}
        src={src}
        alt={altText}
        // sizes="(max-width: 768px) 100vw,
        // (max-width: 1200px) 50vw,
        // 33vw"
        // placeholder="blur"
      />
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
