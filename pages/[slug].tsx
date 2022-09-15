import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import { title } from 'process';
import Header from '../components/Header';
import ExternalLink from '../components/ExternalLink';
import AesthticGuideContent from '../components/AestheticGuideContent';
import GoBackHeader from '../components/GoBackHeader';
import Image from 'next/image';

interface Props {
  frontmatter: {
    image: string;
    title: string;
    tags: Array<string>;
    date: string;
    description: string;
    preamble: string;
    externalLink: string;
    linkText: string;
    topImg: string;
  };
  slug: string;
  content: any;
}

export default function PostPage({
  slug,
  content,
  frontmatter: {
    image,
    title,
    tags,
    date,
    description,
    preamble,
    externalLink,
    linkText,
    topImg,
  },
}: Props) {
  return (
    <>
      <GoBackHeader />
      <div style={style.wrapper}>
        {/* <div style={style.topWrapper}>
          <div style={style.informationContainer}>
            <p style={style.date}>{date}</p>
            <h1 style={style.projectTitle}>{title}</h1>
            <div style={style.preambleAndDescription}>
              <text style={style.preamble}>{preamble}</text>
              <p>{description}</p>
            </div>

            {externalLink === '' ? null : (
              <ExternalLink url={externalLink} text={linkText} />
            )}
          </div>
          <div style={style.topImg}>
            <Image
              width="687px"
              height="485px"
              style={style.topImg}
              src={topImg}
            />
          </div>
        </div> */}
        <AesthticGuideContent />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

type StaticProps = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

const style = {
  wrapper: { margin: '50px auto' },

  topWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 'auto 150px',
    gap: '50px',
    marginBottom: '75px',
  },

  informationContainer: {
    margin: '0 auto',
    maxWidth: '500px',
    height: '100%',
  },

  projectTitle: {
    borderTop: '1px solid #000000',
    paddingTop: '8px',
    lineHeight: '70px',
    letterSpacing: '2%',
    fontSize: '48px',
  },

  date: {
    margin: '0 0 4px 0',
    opacity: '80%',
    fontFamily: 'messina_sans_mono',
  },

  preamble: {
    marginTop: '2px',
    fontFamily: 'messina_sans_light',
    fontSize: '22px',
    opacity: '90%',
  },

  preambleAndDescription: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },

  tagContainer: {
    display: 'flex',
    marginBottom: '24px',
  },

  tag: {
    fontFamily: 'messina_sans_light',
    fontSize: '14px',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '4px 9px',
    gap: '16px',

    border: '0.5px solid #000000',
    borderRadius: '16px',
    marginRight: '8px',
  },

  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '3em 0 0 2em',
    gap: '9px',
    position: 'fixed',
    top: '0',
    textDecoration: 'none',
    opacity: '70%',
  },

  topImg: { maxWidth: '100%' },

  markdownContent: { margin: '10% 5%', position: 'relative' },
} as const;
