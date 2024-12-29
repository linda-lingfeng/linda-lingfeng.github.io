function NavigationBar(props) {
  return (<nav className="navbar">
    <div className="navigation">
      <button className="nav-button"
        onClick={() => props.setContentDisplayed("about me")}
      >About Me</button>
      <button className="nav-button"
        onClick={() => props.setContentDisplayed("cv")}
      >Curriculum Vitae</button>
      <button className="nav-button"
        onClick={() => props.setContentDisplayed("current work")}
      >Recent Work</button>
      <button className="nav-button"
        onClick={() => props.setContentDisplayed("contact")}
      >Contact</button>
    </div>
    <div className="navigation-border"></div>
  </nav>);
}

export default NavigationBar;