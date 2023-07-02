//Dependencies
import ExternalLink from './ExternalLink';
import ImageAndCaption from './ImageAndCaption';
import Image from 'next/image';
import Head from 'next/head';

// Image imports
import topImage from '../public/images/quality-system/giga-no-text.png';
import pros from '../public/images/quality-system/pros-qms.png';
import userCenteredDesign from '../public/images/quality-system/ucd-diagram.png';
import interviewSetting from '../public/images/quality-system/interview-setting.jpg';
import mapping from '../public/images/quality-system/mapping.png';
import coCreation from '../public/images/quality-system/co-creation.jpg';
import mappingPeople from '../public/images/quality-system/mapping-process.png';
import firstWorkshop from '../public/images/quality-system/first-workshop.png';
import secondWorkshop from '../public/images/quality-system/second-workshop.png';
import team from '../public/images/quality-system/the-team.png';
import gigaMap from '../public/images/quality-system/full-giga-map.png';
import solutionGigaMap from '../public/images/quality-system/solution-giga-map.png';
import creatingSolutions from '../public/images/quality-system/creating-solutions.jpg';

export default function QualitySystemContent() {
  const title = 'Quality system';
  const date = '2022';
  const category = 'Halogen // Service and system design';

  return (
    <>
      <Head>
        <title>{title} - Ferdinand portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper">
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
                  How do you help a design bureau have control over its
                  procedures, routines and methods to deliver quality?
                </span>
                <p>
                  Halogen wanted to ensure that their employees were satisfied,
                  had the right set of competencies and learning opportunities
                  to deliver great products to their clients. The quality system
                  should also enable the company to keep up with the current
                  standardizations and enable them to have a working environment
                  that satisfies environment, health and safety concerns.
                  <br />
                  <br />
                  During the spring semester of 2022 Hedda Valeur Ottmann, Khai
                  Sigve Nguyen Litleskare, Jenny Leth Skjetne and I had the
                  opportunity to write our bachelor thesis with Halogen. We had
                  two weeks of field studies at Halogen&apos;s offices in Oslo
                  and presented our findings to the management team at the
                  company by the end of May.
                </p>
              </div>
            </div>
            <div>
              <Image
                style={style.topImage}
                width={1500}
                height={821}
                layout="fixed"
                src={topImage}
                alt="GIGA-map of the work process at Halogen"
                priority
                className="animate-reveal animate-first"
              />
            </div>
          </div>
          <div className="marker" style={style.marker}>
            Process
          </div>
          <div style={style.firstContainer}>
            <div style={style.projectContent}>
              <div style={style.underH2section}>
                <div style={style.textAndLandscapeContainer}>
                  <div>
                    <div style={style.HeadingAndText}>
                      <h2>What is a quality system?</h2>
                      <p>
                        A quality management system (QMS) is defined as a
                        formalized system that documents processes, procedures,
                        and responsibilities for achieving quality policies and
                        objectives. A QMS helps coordinate and direct an
                        organization’s activities to meet customer and
                        regulatory requirements and improve its effectiveness
                        and efficiency on a continuous basis.
                        <br />
                        <br />
                        Traditionally a QMS is used in a production heavy
                        business and not in a consulting. Therefore we wanted to
                        to adapt the outcomes for a traditional business into
                        positive effects for the design bureau.
                      </p>
                    </div>
                  </div>

                  <Image
                    layout="intrinsic"
                    alt="Man quality controlling chips on conveyor belt"
                    src={
                      'https://thumbs.gfycat.com/IdioticHonoredAltiplanochinchillamouse-size_restricted.gif'
                    }
                    width={400}
                    height={400}
                  />
                </div>
                <div>
                  <h3>Positive effects for consulting</h3>
                  <br />
                  <ImageAndCaption
                    layout="intrinsic"
                    altText="Pros of having a quality management system"
                    src={pros}
                  />
                </div>
              </div>
              <div style={style.underH2section}>
                <div style={style.headingAndUserCenteredDiagram}>
                  <h2>User-centered design</h2>
                  <ImageAndCaption
                    layout="intrinsic"
                    altText="Diagram of user centered design process"
                    src={userCenteredDesign}
                  />
                </div>
                <div style={style.textAndPortraitContainer}>
                  <div>
                    <div style={style.HeadingAndText}>
                      <h3>Gaining insight</h3>
                      <p>
                        We used a human-centered design approach to ensure that
                        the users needs where at the center of our focus. To
                        discover and explore user needs we conducted 8
                        semi-structured contextual interviews and did
                        non-participatory observations around the office. To
                        cluster and contextualize the information we created an
                        affinity diagram. From the affinity we narrowed the
                        insights into nine key findings to guide our process.
                      </p>
                    </div>
                  </div>

                  <ImageAndCaption
                    layout="intrinsic"
                    altText="Interview setting at Halogen office"
                    content="At the Halogen offices"
                    src={interviewSetting}
                    width={500}
                    height={500}
                  />
                </div>
                <div style={style.mappingSection}>
                  <div>
                    <div style={style.HeadingAndText}>
                      <h3>Mapping</h3>
                      <p>
                        Collaborating in a visual way is more fun and engaging
                        for all parties involved. It creates a common
                        understanding between the stakeholders and can be used
                        as a point of reference during and after the design
                        process.
                      </p>
                    </div>
                  </div>

                  <ImageAndCaption
                    layout="intrinsic"
                    altText="Different types of mapping used in the process"
                    src={mapping}
                  />
                  <br />
                  <ImageAndCaption
                    layout="intrinsic"
                    content="Getting a grasp of how the organization operated"
                    altText="Diagram of user centered design process"
                    src={mappingPeople}
                  />
                </div>
              </div>

              <div style={style.textAndPortraitContainer}>
                <div style={style.HeadingAndText}>
                  <h2>Co-creation</h2>
                  <p>
                    In all the insight methods we included the Halogenians in
                    decision making and took their opinions into consideration.
                    After all they were the ones that would eventually have to
                    implement the solutions, therefore we wanted to make sure
                    our solutions fit their work as well as gaining good will in
                    letting the stakeholders have ownership of the process.
                  </p>
                </div>
                <ImageAndCaption
                  layout="intrinsic"
                  content="Workshop with the stakeholders"
                  altText="Workshop with the stakeholders"
                  src={coCreation}
                  width={500}
                  height={500}
                />
              </div>

              <div style={style.workshopSection}>
                <div style={style.HeadingAndText}>
                  <span className="contentCaption">First workshop</span>
                  <h2>Idea generation</h2>
                  <p>
                    From the nine key insights collected we created problem
                    formulations for each one. We let the Halogenians come up
                    with ideas by attacking the problems with lateral thinking;
                    Giving them instructions such as &quot;How would you solve
                    this if you were IKEA?&quot;
                    {/* For example:
                    {/* <br />
                    <br />
                    <i>"How would you solve this problem if you were IKEA?"</i> */}
                  </p>
                </div>
                <ImageAndCaption
                  layout="intrinsic"
                  altText="First workshop logic"
                  src={firstWorkshop}
                  width={900}
                  height={260}
                />
              </div>
              <div style={style.workshopSection}>
                <div style={style.HeadingAndText}>
                  <span className="contentCaption">Second workshop</span>
                  <h2>Creating concepts</h2>
                  <p>
                    In the aftermath of the first workshop the team and I
                    elaborated on some of the ideas that were created by the
                    Halogenians. We explored some of the ideas, combined a few
                    of them and made them ready to be conceptualized and
                    detailed.
                  </p>
                </div>
                <ImageAndCaption
                  layout="intrinsic"
                  altText="Second workshop logic"
                  src={secondWorkshop}
                  width={898}
                  height={298}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={style.sectionContainer}>
          <div className="marker" style={style.marker}>
            Result
          </div>
          <div style={style.resultContainer}>
            <div>
              <h2>The GIGA-map</h2>
              <br />
              <ImageAndCaption
                layout="intrinsic"
                altText="Second workshop logic"
                src={gigaMap}
                width={903}
                height={495}
              />
              <div style={style.HeadingAndText}>
                <p>
                  During the project we filled in and visualized the full
                  process of a usual client-project at Halogen. It begins with
                  initialization of the project and ends with reflecting on a
                  project after it has been delivered to a client. We visualized
                  where the pain points were in the process and added all the
                  interactions between employees. After creating solutions
                  together with Halogen in the concept workshop we added those
                  solutions back into the map to see what the consequences would
                  be.
                </p>
              </div>
              <br />
              <ImageAndCaption
                layout="intrinsic"
                altText="Second workshop logic"
                content="Solution leads to one less step in the client-project."
                src={solutionGigaMap}
                width={800}
                height={553}
              />
            </div>
            <div>
              <div>
                <div style={style.conceptsContainer}>
                  <div style={style.conceptTextContainer}>
                    <h2>Concepts</h2>
                    <p>
                      All in all there were eight solutions that we proposed in
                      our thesis. We gave concrete evidence of why it would be a
                      good solution to one or more problems, pros and cons of
                      implementation and easy to follow steps to initiate the
                      change.
                    </p>
                  </div>
                  <ImageAndCaption
                    layout="intrinsic"
                    altText="Hedda and Khai creating solutions"
                    src={creatingSolutions}
                    width={302}
                    height={500}
                  />
                </div>
              </div>
            </div>
            <div style={style.onlyTextSection}>
              <div style={style.HeadingAndText}>
                <h2>Reflections</h2>
                <p>
                  This is one of the best groups I have ever worked with. We
                  were all highly motivated for the project and hungry to learn
                  about design segments that were new to us. I fell lucky to
                  have been part of a work dynamic where we were able to have a
                  lot of fun and deliver a very professional result. The faith
                  and backing that we received from Halogen was also
                  extraordinary. They went out of their way for us, sometimes
                  outside work-hours, to give us advice and make us feel
                  confident in our decisions. A special thanks to Line and Stein
                  at Halogen, you were great!
                  <br />
                  <br />
                  After this experience I feel more confident in conducting
                  interviews, asking stupid questions and creating (many) silly
                  ideas. I also now realize more than ever that including
                  stakeholders in the process is key to a great partnership.
                </p>
              </div>
            </div>
            <ImageAndCaption
              layout="intrinsic"
              src={team}
              altText="Jenny, Hedda, Khai and I"
              content="The team"
              creator="Jenny, Hedda, Khai and I"
            />
            <div style={style.externalLinkContainer}>
              <ExternalLink
                url={
                  'https://drive.google.com/file/d/11ND9y8SxmHXYyOEOuDfZfN47phHxI_BD/view?usp=sharing'
                }
                text={'Download the bachelor report here (Norwegian)'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const style = {
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
    gap: '200px',
    marginBottom: '50px',
  },

  topImage: {
    margin: '0 200px 0 0',
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

  firstContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '200px',
    padding: '0px 15em',
    margin: '0 auto',
    marginBottom: '200px',
    // marginBottom: '150px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '200px',
    padding: '0px 15em',
    margin: '0 auto',
    // marginBottom: '150px',
  },

  resultContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '100px',
    padding: '0px 15em',
    margin: '0',
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

  underH2section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '150px',
  },

  textAndSquareContainer: {
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

  textAndPortraitContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'auto auto',
    gap: '50px',
    width: '100%',
    margin: '0 0',

    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
  },

  conceptsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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

  headingAndUserCenteredDiagram: {
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    marginBottom: '40px',
  },

  workshopSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },

  mappingSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
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
  conceptTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    marginBottom: '100px',
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

  externalLinkContainer: {
    margin: '0 auto 100px auto',
  },
} as const;
