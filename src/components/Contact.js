import React from "react"

function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <div className="social-medias">
                    <div className="social-media">
                        <div className="flex">
                            <i class="fa-brands fa-github"></i>
                            <h3>GitHub:</h3>
                        </div>
                        <a href="https://github.com/tamanchichan" target="_blank">
                            <span>https://github.com/tamanchichan</span>
                        </a>
                    </div>
                    <div className="social-media">
                        <div className="flex">
                            <i class="fa-brands fa-linkedin"></i>
                            <h3>LinkedIn:</h3>
                        </div>
                        <a href="https://www.linkedin.com/in/tamanchichan/" target="_blank">
                            <span>https://www.linkedin.com/in/tamanchichan/</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;