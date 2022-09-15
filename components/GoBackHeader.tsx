import Link from 'next/link';
import { relative } from 'path';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function GoBackHeader() {
  const scrollDirection = useScrollDirection();
  return (
    <div className={`header ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
      <Link href="/">
        <a style={style.linkContainer}>
          <Image
            width="15px"
            height="15px"
            alt="go back arrow"
            src="/icons/leftArrow.png"
          />
          Go back
        </a>
      </Link>
    </div>
  );
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

const style = {
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '3em 0 0 2em',
    gap: '9px',
    position: 'fixed',
    top: '0',
    textDecoration: 'none',
  },
} as const;
