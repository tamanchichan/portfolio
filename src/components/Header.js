function Header() {
  const user = {
    name: "Taman Chi Chan",
    role: "Fullstack Developer",
    email: "tamanchichan@gmail.com"
  }
  
  return(
    <div className="container">
      <div className="header-user">
        <h1 className="user-name">{user.name}</h1>
        <p className="user-role">{user.role}</p>
        <p className="user-email"><a href="mailto:tamanchichan@gmail.com">{user.email}</a></p>
      </div>
      <nav className="flex header-menu">
        <ul className="flex">
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
