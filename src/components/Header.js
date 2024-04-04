function Header() {
  return(
    <div className="container">
      <div className="header-user">
        <h1 className="user-name">Taman Chi Chan</h1>
        <p className="user-role">Fullstack Developer</p>
        <p className="user-email"><a href="mailto:tamanchichan@gmail.com">tamanchichan@gmail.com</a></p>
      </div>
      <nav className="flex header-menu">
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;