import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Header from '../components/Header';
import matter from 'gray-matter';
import Post from '../components/Post';

interface Props {
  posts: Array<any>;
}

export default function Home(props: Props) {
  return (
    <>
      <Header />
      <div style={style.wrapper}>
        <div style={style.projectWrapper}>
          {props.posts.map((post, index) => (
            <Post key={post} post={post} />
          ))}
        </div>
      </div>
      {/* <div style={styles.wrapper}>
        <div style={styles.leftContainer}></div>
        <div style={styles.content}>
          <div style={styles.projectContainer}>
            {props.posts.map((post, index) => (
              <Post post={post} />
            ))}
          </div>
        </div>
      </div> */}
      <footer className="detail" style={style.footer}>
        Created with Figma and Next.js
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const style = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '3em 60px 116px 0px',
    gap: '213px',
    left: '0px',
    top: '0px',
  },

  projectWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '0px 60px 116px 0px',
    gap: '213px',
    left: '0px',
    top: '0px',
  },

  imgContainer: {
    width: '640px',
    height: '640px',
  },

  footer: {
    paddingTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    height: '100px',
    textTransform: 'none',
  },
} as const;
