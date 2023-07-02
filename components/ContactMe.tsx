import { useGlobalContext } from '../context/GlobalContext';
import Image from 'next/image';

export default function ContactMe() {
  const { contactMe } = useGlobalContext();
  const { setContactMe } = useGlobalContext();

  const closeButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;

    setContactMe(true);
  };
  return (
    <div className="contactMeSection">
      <div style={styles.textContainer}>
        <h2>👀 Get in touch</h2>
        <br />
        <div style={styles.contactFlex}>
          <p>Phone</p>
          <a href="tel: +4748085049">+47 480 85 049</a>
        </div>
        <div style={styles.contactFlex}>
          <p>Email</p>
          <a href="mailto:ferdinand@steen-johnsen.com">
            ferdinand@steen-johnsen.com
          </a>
        </div>
      </div>
      <div style={styles.titleAndButton}>
        <button className="iconButton" onClick={closeButton}>
          <Image
            width="15px"
            height="15px"
            alt="Arrow pointing upward-right"
            src="/icons/X.png"
            priority
          />
        </button>
        <div style={styles.aboutImage}>
          <Image
            layout="intrinsic"
            alt="Animation of pixelated wave"
            src={
              'https://i.pinimg.com/originals/0d/75/dc/0d75dc22c9bead511907ffdefc1fdb9c.gif'
            }
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
    width: '414px',
  },
  contactFlex: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    width: '300px',
  },

  aboutImage: {
    maxWidth: '300px',
  },

  titleAndButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '0px',
    gap: '60px',
  },
} as const;
