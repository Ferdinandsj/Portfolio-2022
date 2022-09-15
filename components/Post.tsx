import Link from 'next/link';
import { Url } from 'url';
import Image from 'next/image';

interface Props {
  post: {
    frontmatter: {
      image: string;
      title: string;
      tags: Array<string>;
      position: string;
    };
    slug: string;
  };
  key: string;
}

export default function Post(props: Props) {
  return (
    <>
      <div className="routerLink" style={style.projectContainer}>
        <Link href={`${props.post.slug}`}>
          <div style={style.imgContainer}>
            <Image
              height="600px"
              width="600px"
              alt="Post header image"
              className="sqaureImg"
              src={props.post.frontmatter.image}
            />
          </div>
        </Link>
        <Link href={`${props.post.slug}`}>
          <div style={style.textContainer}>
            <h1>{props.post.frontmatter.title}</h1>
            <div style={style.positionAndtype}>
              <text className="detailStrong">
                {props.post.frontmatter.position}
              </text>
              <div style={style.flexType}>
                {props.post.frontmatter.tags.map((tag) => (
                  <text key={props.post.frontmatter.title} className="detail">
                    {tag}
                  </text>
                ))}
              </div>
            </div>
          </div>
        </Link>

        {/* <figure className="pictureContainer routerLink">
            <img src={props.post.frontmatter.image} />
            <figcaption className="t-right">
              <div style={styles.flextag}>
                {props.post.frontmatter.tags.map((tag) => (
                  <p>{tag}</p>
                ))}
              </div>
            </figcaption>
          </figure>
          <h2 className="routerLink" style={styles.displayTitle}>
            {props.post.frontmatter.title}
          </h2> */}
      </div>
    </>
  );
}

const style = {
  flextag: {
    display: 'flex',
    gap: '12px',
  },

  projectContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
  },

  imgContainer: {
    width: '600px',
    height: '600px',
    overflow: 'hidden',
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '14px',
  },

  positionAndtype: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '0',
  },
  displayTitle: { marginTop: '0px', paddingLeft: '2px' },

  flexType: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '6px',
  },
} as const;
