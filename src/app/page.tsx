import ScrollBar from "./components/ScrollBar";

const Home = () => {
  return (
    <main>
      <ScrollBar />
      <div className="video-container">
        <video autoPlay muted loop id="bg-video">
        <source src="output.mp4" type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
      </div>
      <section id="hero-section">
        <div className="top">
          <div className="left">
            <h1>FULLSTACK <br/>
            <span>DEVELOPER</span>
            </h1>
            <p>Hey! I'm <span>Ruzul</span>, a fullstack developer with 2+ years of experience working in corporate and freelanding, building highly scalable and reliable web and mobile solutions.</p>
            <button>HIRE ME</button>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom">
          <div className="left"></div>
          <div className="right">
            <div>
              <h2>2+</h2>
              <p>Years of Experience</p>
            </div>
            <div>
              <h2>8+</h2>
              <p>Projects Delivered</p>
            </div>
            <div>
              <h2>10K+</h2>
              <p>Hours Developing</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about-me"></section>
      <section id="tech"></section>
      <section id="projects"></section>
      <section id="contact"></section>
    </main> 
  );
}

export default Home;