import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Header from '../components/Header';
import matter from 'gray-matter';
import Post from '../components/Post';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  posts: Array<any>;
}

export default function About(props: Props) {
  return (
    <>
      <Link href="/">
        <a style={style.linkContainer}>
          <Image
            // width="20px"
            // height="20px"
            layout="fill"
            src="/icons/leftArrow.png"
            alt="left arrow"
          />
          Go back
        </a>
      </Link>

      <div style={style.wrapper}></div>
      <div />
    </>
  );
}

const style = {
  wrapper: { margin: '124px 0 0 0' },

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

  markdownContent: { margin: '0 64px auto 700px', position: 'relative' },
} as const;
