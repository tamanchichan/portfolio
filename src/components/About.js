import resume from "../pdf/taman_chi_chan_resume.pdf";

function About() {
  return(
    <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="user"></div>
          <p>
            Hello! My name is Taman, and I am a Software Developer alumni of
            the Manitoba Institute of Trades & Technology, Winnipeg, Canada.
          </p>
          <p>
            I have experience in both front-end and back-end technologies, with
            expertise in programming languages in JavaScript and C#.
          </p>
          <p>
            I am also a critical thinker and effective problem-solver with the
            ability to anticipate and prevent setbacks, look for multiple
            solutions.
          </p>
          <p>
            I am a eager to keep on learning, can learn quickly and perform
            duties with minimal or zero supervision in a fast-paced environment.
          </p>
          <p>
            <a
            href={resume}
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
