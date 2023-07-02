import Link from 'next/link';
import { useGlobalContext } from '../context/GlobalContext';
import ToggleSwitch from '../components/ToggleSwitch';

export default function Header() {
  const { aboutMe } = useGlobalContext();
  const { setAboutMe } = useGlobalContext();
  const { contactMe } = useGlobalContext();
  const { setContactMe } = useGlobalContext();

  const aboutClass = aboutMe === false ? 'buttonToggled' : 'buttonDefault';
  const contactClass = contactMe === false ? 'buttonToggled' : 'buttonDefault';

  const aboutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setAboutMe(aboutMe === true ? false : true);
    if (aboutMe) {
      setContactMe(true);
    }
  };

  const contactHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setContactMe(contactMe === true ? false : true);
    if (contactMe) {
      setAboutMe(true);
    }
    console.log(contactMe);
  };
  return (
    <header style={styles.container}>
      <Link href="/">
        <h2 className="routerLink headerText">Ferdinand Steen-Johnsen</h2>
      </Link>
      <div style={styles.bottomSection}>
        <div style={styles.subPages}>
          <ToggleSwitch
            className={aboutClass}
            handleClick={aboutHandler}
            text="👋 Learn more about me"
          />
          <ToggleSwitch
            className={contactClass}
            handleClick={contactHandler}
            text="👀 Get in touch"
          />
        </div>
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
    zIndex: '5',
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
