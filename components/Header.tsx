import Link from 'next/link';
export default function Header() {
  return (
    <header style={styles.container}>
      <Link href="/">
        <h2 className="routerLink headerText">Ferdinand Steen-Johnsen</h2>
      </Link>
      <div style={styles.bottomSection}>
        <div style={styles.subPages}>
          <Link href="/about-me">
            <h2 className="headerLink routerLink">👋 Learn more about me</h2>
          </Link>

          <Link className="routerLink" href="/contact">
            <h2 className="headerLink routerLink">👀 Get in touch</h2>
          </Link>
        </div>
        {/* <span className="footer">
          Created with Figma, Typescript and Next.js
        </span> */}
      </div>
    </header>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '3.5em 0 0 4em',
    position: 'fixed',
    float: 'left',
    top: '0',
    width: '30%',
    height: '83%',
  },

  subPages: {
    display: 'flex',
    gap: '30px',
  },

  bottomSection: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '16px',
  },
} as const;
