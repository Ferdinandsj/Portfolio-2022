import Image, { StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData;
  altText: string;
  content?: string;
  creator?: string;
  width?: string | number;
  height?: string | number;
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
        placeholder="blur"
      />
      <div style={style.captionFlex}>
        <span className="contentCaption">{content}</span>
        <span className="contentCaption" style={{ color: 'black' }}>
          {creator}
        </span>
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
