//Dependencies
import ExternalLink from './ExternalLink';
import ImageAndCaption from './ImageAndCaption';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

// Image imports
import topImage from '../public/images/iterate-demo/dashboard-shadow.png';
import wave from '../public/images/iterate-demo/wave.gif';
import developersWorking from '../public/images/iterate-demo/emil-max-working.jpg';
import affinity from '../public/images/iterate-demo/affinity.jpg';
import team from '../public/images/iterate-demo/team.png';
import funnel from '../public/images/iterate-demo/funnel.jpg';
import informationCollage from '../public/images/iterate-demo/information-collage.png';
import begin from '../public/images/iterate-demo/begin.jpg';
import circle from '../public/images/iterate-demo/circle.gif';

export default function IterateDemoContent() {
  const title = 'Iterate Demo';
  const date = '2022';
  const category = 'UI / UX';

  return (
    <>
      <Head>
        <title>{title} - Ferdinand portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={style.wrapper}>
        <div style={style.sectionContainer}>
          <div style={style.topWrapper}>
            <div style={style.informationContainer}>
              <div style={style.dateAndCategory}>
                <span className="monoText">{category}</span>
                <span className="monoText">{date}</span>
              </div>
              <h1 style={style.projectTitle}>{title}</h1>
              <div style={style.preambleAndDescription}>
                <span style={style.preamble}>
                  Is it possible to test the market value of an idea earlier and
                  cheaper than we do today?
                </span>
                <p>
                  9 out of 10 start-ups fail according to{' '}
                  {
                    <Link href="https://startupgenome.com/reports/global-startup-ecosystem-report-2019">
                      <a
                        className="spanLink"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                      >
                        Startup Genome
                      </a>
                    </Link>
                  }
                  . Most of them fail early in the seed or concept stage because
                  the idea lacks a product-market fit. So how can we make sure
                  that the product is more likely to succeed?
                  <br />
                  <br />
                  During my summer internship at Iterate my team and I had 6
                  weeks to dive into the challange. The team was the developers
                  Emil Johannesen Haugstvedt and Maximilian von Stephanides and
                  myself as a designer/developer.
                </p>
              </div>
              <div style={style.externalLinkContainer}>
                <ExternalLink
                  url={'https://demo.ventures/squads_demo_free'}
                  text={'Test a live demo here (Mobile)'}
                />
              </div>
            </div>
            <div>
              <Image
                width={695}
                height={628}
                layout="fixed"
                src={topImage}
                alt="Iterate Demo dashboard"
                priority
              />
            </div>
          </div>
          <div className="marker" style={style.marker}>
            Process
          </div>
          <div style={style.container}>
            <div style={style.projectContent}>
              <div style={style.textAndLandscapeContainer}>
                <div>
                  <div style={style.HeadingAndText}>
                    <h2>Getting caught up to speed</h2>
                    <p>
                      A project team at Iterate had used 24 hours to come up
                      with an MVP for an internal contest. Their idea was to
                      take advantage of Figma prototypes and present it to
                      possible costumers as if it was a real product. By doing
                      this they could get real proof of concept by their
                      customers actually buying a product rather than relying on
                      their word for it.
                    </p>
                  </div>
                </div>

                <Image
                  layout="intrinsic"
                  alt="Animation of pixelated wave"
                  src={'https://c.tenor.com/EnZGimQ0SQ8AAAAC/speed.gif'}
                  width={500}
                  height={300}
                />
              </div>
              <div style={style.textAndSquareImageContainer}>
                <div>
                  <div style={style.HeadingAndText}>
                    <h2>Where do we begin?</h2>
                    <p>
                      Because we already had a (somewhat) working prototype we
                      wanted to interview possible users to discover their
                      needs. As far as we could tell from the initial brief we
                      wanted to talk to designers, developers, entrepreneurs and
                      those who had a background in product management.
                      Following the Lean startup methodology we set up seven
                      problem interviews to harvest more information about the
                      product and who we should focus on as the primary users.
                      <br />
                      <br />
                      The interviewees were in-house designers, developers,
                      start-up and scale-up entrepreneurs. In each interview we
                      had a hypothesis to evaluate wether or not the interviewee
                      was actually interested in the value of the product. To
                      measure that intent we ended each interview asking the the
                      user weather they wanted to continue with follow up
                      interviews every week for the next 6 weeks. Five out of
                      seven agreed and became co-creators in our process.
                    </p>
                  </div>
                </div>
                <ImageAndCaption
                  layout="intrinsic"
                  width={500}
                  height={500}
                  altText="Max and Emil working"
                  src={begin}
                />
              </div>
              <ImageAndCaption
                layout="intrinsic"
                content="The developers"
                creator="Emil and Maximilian"
                altText="Max and Emil working"
                src={developersWorking}
              />
              <div style={style.textAndGifContainer}>
                <Image
                  height={200}
                  width={250}
                  layout="intrinsic"
                  alt="Alternating circle animation"
                  src={circle}
                />

                <div style={style.textWrapper}>
                  <div style={style.textAndLink}>
                    <div style={style.HeadingAndText}>
                      <h2>Organizing information into context</h2>
                      <p>
                        During the internship i lead the design process in the
                        team. Both the developers joined in on all the
                        interviews and activities to make sure that we were all
                        on the same page, and to teach them about human centered
                        design. We discussed each interview together and made an
                        affinity diagram to document our findings. From the
                        affinity diagram we honed in on key findings, the target
                        user and a problem statement to use as a north star in
                        the development.
                        <br />
                        <br />
                        To ensure that we stayed in touch with the market and
                        our users we had weekly interviews and reflections to
                        steer the team. Monday was for organizing and
                        prioritizing tasks, Tuesday through thursday was for
                        development and Friday was for solution interviews with
                        our stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ImageAndCaption
                layout="intrinsic"
                content="Findings from first interviews"
                altText="Affinity diagram "
                src={affinity}
              />
              <div>
                <div style={style.textAndLandscapeContainer}>
                  <div style={style.HeadingAndText}>
                    <h2>Trying to become experts</h2>
                    <p>
                      In the process we were taught a lot on the subject of
                      product management. We realized that to make our
                      application have value for our users we needed to
                      implement these theories in a simple way. In several of
                      the interviews we experimented with how we could convey
                      the information with explanations and visualizations. The
                      result of our project relied heavily on what explanations
                      worked with our stakeholders.
                    </p>
                  </div>
                  <ImageAndCaption
                    layout="intrinsic"
                    content="First iterations of project management theory"
                    altText="Pool during both winter and summer"
                    src={funnel}
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div style={style.headingAndVideo}></div>
            </div>
          </div>
          <div className="marker" style={style.marker}>
            Result
          </div>
          <div style={style.container}>
            <div>
              <h2>Dashboard</h2>
              <br />
              <div>
                <video
                  loop
                  className="videoContainer"
                  autoPlay
                  muted
                  src={'/images/iterate-demo/dashboard.mp4'}
                  style={{ width: '1000px', height: '100%' }}
                  title="Video of the dashboard in the Iterate demo app"
                />
                <div style={style.HeadingAndText}>
                  <br />
                  <br />
                  <p>
                    In the process we were taught a lot on the subject of
                    product management. We realized that to make our application
                    have value for our users we needed to implement these
                    theories in a simple way. In several of the interviews we
                    experimented with how we could convey the information with
                    explanations and visualizations. The result of our project
                    relied heavily on what explanations worked with our
                    stakeholders.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2>Onboarding</h2>
              <br />
              <div>
                <video
                  loop
                  className="videoContainer"
                  autoPlay
                  muted
                  src={'/images/iterate-demo/onboarding.mp4'}
                  style={{ width: '1000px', height: '100%' }}
                  title="Video of onboarding in the Iterate demo app"
                />
              </div>
            </div>
            <div>
              <h2>Project management theory</h2>
              <video
                loop
                autoPlay
                muted
                src={'/images/iterate-demo/metrics-animation.mp4'}
                style={{ width: '1000px', height: '100%' }}
              />
            </div>

            <div style={style.onlyTextSection}>
              <div style={style.HeadingAndText}>
                <h2>Reflections</h2>
                <p>
                  I had a great experience working with the team and with the
                  mentorship we received at Iterate. I learned a lot about how I
                  work in a multidisciplinary team and methods to include the
                  developers in the design process.
                </p>
              </div>
            </div>
            <ImageAndCaption
              layout="intrinsic"
              src={team}
              altText="Maximian, Emil and I"
              content="The team"
              creator="Maximian, Emil and I"
            />
          </div>
        </div>
      </div>
    </>
  );
}

const style = {
  wrapper: {
    margin: 'auto 0 200px auto',
    gap: '0',
    maxWidth: '1400px',
    overflow: 'hidden',
  },

  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  },

  topWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 'auto 10em',
    gap: '150px',
    marginBottom: '200px',
  },

  informationContainer: {
    margin: '0 auto',
    width: '500px',
    height: '100%',
  },

  dateAndCategory: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '0px 0px 4px',
    gap: '10px',

    fontFamily: 'messina_sans_mono',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '13px',
    textTransform: 'uppercase',
    opacity: '80%',
  },

  externalLinkContainer: {
    marginTop: '40px',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '200px',
    padding: '0px 15em',
    margin: '0 auto',
    // marginBottom: '150px',
  },

  marker: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',

    width: '125px',
    height: '25px',

    transform: 'rotate(90deg)',

    flex: 'none',
    order: '0',
    flexGrow: '0',
  },

  projectContent: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '175px',
  },

  headingAndVideo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '100px auto',
    gap: '50px',
    width: '800px',
    margin: '0 auto',

    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
  },

  textAndSquareImageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'end',
    padding: 'auto auto',
    gap: '50px',
    width: '100%',
    margin: '0 0',

    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
  },

  textAndLandscapeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'start',
    padding: 'auto auto',
    gap: '50px',
    width: '100%',
    margin: '0 0',

    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
  },

  textAndGifContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center',
    padding: '0',
    gap: '150px',
    width: '100%',
    margin: '0 0',

    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
  },

  headerAndImage: {
    display: 'flex',
    gap: '50px',
  },

  onlyTextSection: {
    margin: '0 auto',
    padding: '0 auto',
  },

  spaceBetweenSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '50px',
    margin: '0 auto',

    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
  },

  collage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    gap: '16px',
  },

  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // padding: '120px 0px 115px',
    gap: '24px',
    height: '100%',
  },

  textAndLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '60px',
    width: '414px',
  },

  HeadingAndText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
    width: '414px',
  },

  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '0px',
    gap: '12px',
    width: 'auto',
    height: '550px',
  },

  captionFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0px',
    gap: '4px',
  },

  collageContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },

  imgContainer: { height: '300px', position: 'relative' },

  collageImg: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },

  projectTitle: {
    borderTop: '1px solid #000000',
    paddingTop: '8px',
    lineHeight: '70px',
    letterSpacing: '2%',
    fontSize: '48px',
  },

  preamble: {
    marginTop: '2px',
    fontFamily: 'messina_sans_light',
    fontSize: '22px',
    opacity: '90%',
  },

  preambleAndDescription: {
    width: '435px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },

  tagContainer: {
    display: 'flex',
    marginBottom: '24px',
  },

  tag: {
    fontFamily: 'messina_sans_light',
    fontSize: '14px',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '4px 9px',
    gap: '16px',

    border: '0.5px solid #000000',
    borderRadius: '16px',
    marginRight: '8px',
  },
} as const;
