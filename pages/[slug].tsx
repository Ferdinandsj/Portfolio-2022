import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import AesthticGuideContent from '../components/IterateDemoContent';
import GoBackHeader from '../components/GoBackHeader';
import IterateDemoContent from '../components/IterateDemoContent';

interface Props {
  slug: string;
}

export default function PostPage({ slug }: Props) {
  return (
    <>
      <GoBackHeader />
      <div style={style.wrapper}>
        {slug === 'aesthetic-guide' ? <AesthticGuideContent /> : ''}
        {slug === 'iterate-demo' ? <IterateDemoContent /> : ''}
        {slug === 'aesthetic-guide' ? <AesthticGuideContent /> : ''}
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
} as const;
