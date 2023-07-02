import { useGlobalContext } from '../context/GlobalContext';
import Image from 'next/image';
import contactImage from '../public/images/index/fram-ferdinand.jpg';

export default function AboutMe() {
  const { aboutMe } = useGlobalContext();
  const { setAboutMe } = useGlobalContext();

  const closeButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;

    setAboutMe(true);
  };
  return (
    <div className="aboutMeSection" style={styles.aboutMeSection}>
      <div style={styles.textContainer}>
        <h2>👋 Hello</h2>

        <p>
          My name is Ferdinand and I am 24 years old. I study Industrial Design
          at NTNU Trondheim, Norway. I love cooking, playing music, fishing and
          photography. As a designer i enjoy most complex problems - but at the
          moment especially animations and visual communication.
          <br />
          <br />
          Now im on exchange in Copenhagen studying Design and Innovation. Come
          say hi if you are in town!
        </p>
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
            alt="Picture of me"
            src={contactImage}
            width={500}
            height={800}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  aboutMeSection: {
    zIndex: '10',
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
    width: '414px',
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
