function About() {
  return(
    <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="user"></div>
          <p>
            Hello! My name is Taman, and I am a Software Developer alumni of
            the Manitoba Institute of Trades & Technology, Winnipeg, Canada.
            I am from Rio de Janeiro, Brazil.
          </p>
          <p>
            I am proficient in both front-end and back-end technologies, with
            expertise in programming languages in JavaScript and C#.
          </p>
          <p>
            I am also a critical thinker and effective problem-solver with the
            ability to anticipate and prevent setbacks. Flexible with the
            aptitude to work well under pressure and fast-paced environments.
          </p>
          <p>
            My strong interpersonal communication skills, analytical and
            innovative skills, all geared towards approaching challenging
            situations with a solutions-oriented mindset.
          </p>
          <p>
            <a
            href="../pdf/taman_chi_chan_resume.pdf"
            className="button"
            download="taman_chi_chan_resume"
            >
              Download CV
              {/* <!-- UPDATE RESUME --> */}
            </a>
          </p>
        </div>
      </section>
  )
};

export default About;
