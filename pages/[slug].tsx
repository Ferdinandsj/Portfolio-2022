import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import AesthticGuideContent from '../components/AestheticGuideContent';
import GoBackHeader from '../components/GoBackHeader';
import IterateDemoContent from '../components/IterateDemoContent';
import QualitySystemContent from '../components/QualitySystemContent';

interface Props {
  slug: string;
}

export default function PostPage({ slug }: Props) {
  console.log(slug);
  console.log(slug === 'aesthetic-guide');
  console.log(slug === 'iterate-demo');
  return (
    <>
      <GoBackHeader />
      <div style={style.wrapper}>
        <>
          {slug === 'aesthetic-guide' ? <AesthticGuideContent /> : null}
          {slug === 'iterate-demo' ? <IterateDemoContent /> : null}
          {slug === 'quality-system' ? <QualitySystemContent /> : null}
        </>
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
