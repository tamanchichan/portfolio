import React from "react"

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <div class="container">
      <p>Copyright &copy; {year} By @tamanchichan</p>
    </div>
  )
};

export default Footer;