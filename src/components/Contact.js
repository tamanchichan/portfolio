import React from "react"

function Contact() {
  return (
    <section id="contact">
      <div class="container">
        <h2>Contact Me</h2>
        <div className="flex mailto">
          <form action="mailto:tamanchichan@gmail.com" encType="multipart/form-data" method="POST">
            <fieldset>
              {/* <legend>Hello</legend> */}
              <div>
                <label for="first-name">First name:</label>
                <input type="text" name="first-name" id="first-name"></input>
              </div>
              <div>
                <label for="last-name">Last name:</label>
                <input type="text" name="last-name" id="last-name"></input>
              </div>
              <div>
                <label for="message">Message:</label>
                <textarea name="message" id="message"></textarea>
                <button type="submit" className="button">Send</button>
              </div>
            </fieldset>
          </form>
        </div>
        <div class="flex social-media">
          <ul>
            <li>
              <a href="https://github.com/tamanchichan" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tamanchichan/"
              target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tamanchichan/"
              target="_blank">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default Contact;