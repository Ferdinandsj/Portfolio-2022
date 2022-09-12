import Link from 'next/link';
export default function Header() {
  return (
    <header style={styles.container}>
      <Link href="/">
        <h2 className="routerLink headerText">Ferdinand Steen-Johnsen</h2>
      </Link>
      <div>
        <Link href="/kontakt">
          <h2 className="headerLink routerLink">This is me</h2>
        </Link>

        {/* <Link className="routerLink routerLink" href="/cv">
          <h2 className="headerLink routerLink">Cv</h2>
        </Link> */}
      </div>
    </header>
  );
}

const styles = {
  container: {
    padding: '3em 0 0 4em',
    position: 'fixed',
    float: 'left',
    top: '0',
    width: '100%',
  },
} as const;
