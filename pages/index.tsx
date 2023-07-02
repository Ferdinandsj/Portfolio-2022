import fs from 'fs';
import path from 'path';
import Header from '../components/Header';
import matter from 'gray-matter';
import Post from '../components/Post';
import { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import MobilePrompt from '../components/MobilePrompt';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';

interface Props {
  posts: Array<any>;
}

export default function Home(props: Props) {
  const { aboutMe } = useGlobalContext();
  const { contactMe } = useGlobalContext();

  if (!aboutMe) {
    return (
      <div>
        <MobilePrompt />
        <Header />
        <div style={style.projectWrapper}>
          <AboutMe />
        </div>
      </div>
    );
  } else if (!contactMe) {
    return (
      <div>
        <MobilePrompt />
        <Header />
        <div style={style.projectWrapper}>
          <ContactMe />
        </div>
      </div>
    );
  }

  return (
    <div>
      <MobilePrompt />
      <Header />
      <div
        className="projectWrapper animate-first-slide-up animate-slide-up"
        style={style.projectWrapper}
      >
        {aboutMe ? (
          props.posts.map((post, index) => {
            return <Post key={index} post={post} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  console.log(files);

  const posts = files
    .map((filename) => {
      const slug = filename.replace('.md', '');

      const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
      );

      const { data: frontmatter } = matter(markdownWithMeta);
      console.log('inside get static props:');
      console.log(frontmatter);

      return {
        slug,
        frontmatter,
      };
    })
    .sort((a, b) => (a.frontmatter.id > b.frontmatter.id ? 1 : -1));

  return {
    props: {
      posts,
    },
  };
}

const style = {
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  projectWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '213px',
    left: '0px',
    top: '0px',
    padding: '4em 3em 5em 3em',
  },

  projectWrapperHidden: {
    display: 'none',
  },

  imgContainer: {
    width: '640px',
    height: '640px',
  },
} as const;
