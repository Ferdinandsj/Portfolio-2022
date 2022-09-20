import Link from 'next/link';
import { relative } from 'path';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="detail" style={style.footer}>
      Created with Figma, Typescript and Next.js
    </footer>
  );
}

const style = {
  footer: {
    paddingTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    height: '100px',
    textTransform: 'none',
  },
} as const;
