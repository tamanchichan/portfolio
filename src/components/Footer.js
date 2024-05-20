import React from "react"

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <div className="container">
      <p>
        Copyright &copy; {year} By <a href="https://www.linkedin.com/in/tamanchichan/" target="_blank" className="footer-username">@tamanchichan</a>
      </p>
    </div>
  )
};

export default Footer;