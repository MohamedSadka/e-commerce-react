import {
  AboutServicesSVG,
  AboutSocialIconsSVG,
  AboutStatFoursSVG,
  AboutStatsOneSVG,
  AboutStatsThreeSVG,
  AboutStatsTwoSVG,
} from "../components/Svgs";

const About = () => {
  return (
    <div className="page">
      <div className="about-links">
        <span className="home-link">Home</span> /{" "}
        <span className="about-link">About</span>
      </div>

      <div className="story-container mt-3 d-flex ">
        <div className="about-story">
          <h4 className="story-title mb-5">Our Story</h4>
          <p className="story-content">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="story-content">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="about-sideImg"></div>
      </div>

      <div className="about-stats">
        <div className="stats-card">
          <AboutStatsOneSVG />
        </div>
        <div className="stats-card">
          <AboutStatsTwoSVG />
        </div>
        <div className="stats-card">
          <AboutStatsThreeSVG />
        </div>
        <div className="stats-card">
          <AboutStatFoursSVG />
        </div>
      </div>

      <div className="about-people d-flex gap-5">
        <div className="person-card ">
          <div className="img-container mb-3">
            <img src="/images/about-person-1.png" alt="person" />
          </div>
          <h2>Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <AboutSocialIconsSVG />
        </div>
        <div className="person-card ">
          <div className="img-container mb-3">
            <img src="/images/about-person2.png" alt="person" />
          </div>
          <h2>Emma Watson</h2>
          <p>Managing Director</p>
          <AboutSocialIconsSVG />
        </div>
        <div className="person-card ">
          <div className="img-container mb-3">
            <img src="/images/about-person2.png" alt="person" />
          </div>
          <h2>Will Smith</h2>
          <p>Product Designer</p>
          <AboutSocialIconsSVG />
        </div>
      </div>

      <div className="about-services d-flex gap-3 justify-content-around align-items-center">
        <div>
          <AboutServicesSVG />
        </div>
      </div>
    </div>
  );
};

export default About;
