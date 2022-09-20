//Dependencies
import ExternalLink from './ExternalLink';
import ImageAndCaption from './ImageAndCaption';
import Image from 'next/image';
import Head from 'next/head';

// Image imports
import bookOnWallImage from '../public/images/aesthetic-guide/book-on-wall.jpg';
import overviewImage from '../public/images/aesthetic-guide/overview.png';
import bookCollageImage from '../public/images/aesthetic-guide/book-collage.png';
import personReadingImage from '../public/images/aesthetic-guide/person-reading.png';
import winterHasvoldImage from '../public/images/aesthetic-guide/winter-hasvold-sjøbad.png';
import poolImage from '../public/images/aesthetic-guide/pool-winter-summer.png';
import fieldCollageImage from '../public/images/aesthetic-guide/field-study-collage.png';
import MajaAuroraImage from '../public/images/aesthetic-guide/maja-aurora-tea.jpg';

interface Props {}

export default function PostPage(props: Props) {
  const title = 'Aesthetic guide';
  const date = '2021-2022';
  const topImage = '/images/aesthetic-guide/overview.png';
  const category = 'System, graphic and web design';

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
                <text className="monoText">{category}</text>
                <text className="monoText">{date}</text>
              </div>
              <h1 style={style.projectTitle}>{title}</h1>
              <div style={style.preambleAndDescription}>
                <text style={style.preamble}>
                  How can we ensure an aesthetic and sustainable urban
                  development for the city of Oslo?
                </text>
                <p>
                  In the last fifty years the city of Oslo has slowly begun to
                  neglect the value of aestethics in architecture and city
                  planning. There are very few parts of the law that regulate
                  what materials are used and how they are used - which has a
                  negative imapact on the people that live in the city.
                  <br />
                  <br />
                  The latest city planning project in Oslo is the new district
                  of Flipstad. To create a new perspective on how we should
                  approach aesthetics in city planning thirty students took on
                  the challange to convince the politicians and have the voice
                  of the youth heard in the public space.
                </p>
              </div>
              {/* <div style={style.externalLinkContainer}>
                <ExternalLink
                  url={'https://www.prosjektfilipstad.org/'}
                  text={'Visit the page to download'}
                />
              </div> */}
            </div>
            <div>
              <Image
                layout="fixed"
                width="1200px"
                height="848px"
                src={overviewImage}
                priority
              />
            </div>
          </div>
          <div className="marker" style={style.marker}>
            Result
          </div>
          <div style={style.container}>
            <div style={style.projectContent}>
              <div style={style.headingAndVideo}>
                <div style={style.textWrapper}>
                  <div style={style.textAndLink}>
                    <div style={style.HeadingAndText}>
                      <h2>The book</h2>
                      <p>
                        After a years work the result was a 111 page book filled
                        with ideas and recommendations. They included thought on
                        materials, facades, principles for outdoor areas and
                        specific colors that were found in the Oslo area. In may
                        of 2022 the book was handed over to the head of urban
                        development at the Oslo city council.
                      </p>
                    </div>
                  </div>
                </div>
                <div style={style.imageWrapper}>
                  <iframe
                    src="https://player.vimeo.com/video/744638399?background=1&h=944437320d&autoplay=1&color=000000&title=0&byline=0&portrait=0&muted=1"
                    style={{
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                      justifySelf: 'end',
                    }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div style={style.captionFlex}>
                    <text className="contentCaption">Video</text>
                    <text className="contentCaption" style={{ color: 'black' }}>
                      Ida Gulbrandsøy
                    </text>
                  </div>
                </div>
              </div>
              <div style={style.collage}>
                <Image
                  layout="intrinsic"
                  src={bookCollageImage}
                  alt="Filipstad book open"
                  style={style.collageImg}
                />
              </div>
            </div>
            <div>
              <div style={style.headingAndVideo}>
                <div>
                  <div style={style.HeadingAndText}>
                    <h2>Urban development for all seasons</h2>
                    <p>
                      Many building projects in the Oslo area are accepted based
                      upon what they will look like during summer. Norway has
                      however only 3 months of summer at the maximum. As a
                      result many areas of the city are not used during winter
                      becuase there are no public facilities to use. We wanted
                      to research what we could do differently to have
                      activities all year round.
                    </p>
                  </div>
                </div>

                <ImageAndCaption
                  layout="intrinsic"
                  content="Illustrations"
                  creator="Maja Meland"
                  altText="Person reading a book on a bench"
                  src={personReadingImage}
                />
              </div>
            </div>
            <ImageAndCaption
              layout="intrinsic"
              content="Hasvold sjøbad during winter"
              creator="Maja Meland"
              altText="Hasvold sjøbad during winter"
              src={winterHasvoldImage}
            />
            <div>
              <div style={style.onlyTextSection}>
                <div style={style.HeadingAndText}>
                  <h2>Hasvold sjøbad</h2>
                  <p>
                    We conceptualized a bathing area by the sea with multiple
                    cross-seasonal options. Hasvold sjøbad has two pools; one is
                    heated during winter, the other freezes over and becomes an
                    ice skating rink. There are also options for taking a
                    stroll, sitting at the benches and enjoying a hot beverage
                    in the café.
                  </p>
                </div>
              </div>
              <ImageAndCaption
                layout="intrinsic"
                content="Heated swimmingpool"
                creator="Maja Meland"
                altText="Pool during both winter and summer"
                src={poolImage}
              />

              {/* <ImageAndCaption
            content="Movement blueprint"
            creator=""
            altText="Movement blueprint of Hasvold sjøbad"
            src="images/aesthetic-guide/movement-blueprint.png"
          /> */}
            </div>
          </div>
          <div className="marker" style={style.marker}>
            Process
          </div>
          <div style={style.container}>
            <div>
              <h2 style={style.headerAndImage}>Field study</h2>
              <br />
              <ImageAndCaption
                layout="intrinsic"
                content="Foto"
                creator="Einar Rosenhaug"
                altText="Field study of the Filipstad area"
                src={fieldCollageImage}
              />
            </div>
            <div style={style.spaceBetweenSection}>
              <div>
                <div style={style.HeadingAndText}>
                  <h2>Multidiciplinary teams</h2>
                  <p>
                    After the field study we split into groups that included
                    city planners, architects, landscape architects and
                    industrial designers. We dug into Oslo&apos;s history and
                    collected a survey on the locals in the area. Thats when we
                    decided to bring the old colors of Oslo back to life with a
                    new interpretation. My group also chose to look closer at
                    how to bring the city to life during winter.
                  </p>
                </div>
              </div>

              <ImageAndCaption
                layout="intrinsic"
                content=""
                creator="Maja and Aurora"
                altText="Maja and Aurora working"
                src={MajaAuroraImage}
              />
            </div>

            <div>
              <h2>Crafting the book</h2>
              <br />

              <ImageAndCaption
                layout="intrinsic"
                content=""
                creator="First iteration on the classroom wall"
                altText="Layout of book on the wall"
                src={bookOnWallImage}
              />
              <div style={style.onlyTextSection}>
                <div style={style.HeadingAndText}>
                  <p>
                    I had the role as lead graphic designer for the book. The
                    industrial designers and I also worked as editors for both
                    the content and the layout of the entire document. It was a
                    huge challange seen as though none of us had ever created a
                    book before - let alone with 30 different collaborators.{' '}
                    <br />
                    <br />
                    We created systems for image and information collection and
                    tried to automate as much of the process as possible. During
                    the editing we learned the ins and outs of Adobe InDesign
                    and the challanges with actually sending a ready made
                    document to the publisher.
                    <br />
                    <br />
                    After we finished the book Solveig Davies Vittersø and I
                    created the website for the project. You can visit the site
                    and download the document in the link below.
                    <br />
                    <br />
                  </p>
                  <ExternalLink
                    url={'https://www.prosjektfilipstad.org/'}
                    text={'Download the aesthetic guide here'}
                  />
                </div>
              </div>
            </div>
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
    gap: '50px',
    marginBottom: '0',
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
    marginBottom: '150px',
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
    gap: '150px',
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
    padding: '120px 0px 115px',
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
