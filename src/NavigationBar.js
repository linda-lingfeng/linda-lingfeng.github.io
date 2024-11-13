function NavigationBar(props) {
  return (<nav className="navbar">
    <button className="nav-button"
      onClick={() => props.setContentDisplayed("contact")}
    >Contact</button>
    <button className="nav-button"
      onClick={() => props.setContentDisplayed("about me")}
    >About</button>
    <button className="nav-button"
      onClick={() => props.setContentDisplayed("cv")}
    >CV</button>
    <button className="nav-button"
      onClick={() => props.setContentDisplayed("current work")}
    >Current Work</button>
  </nav>);
}

export default NavigationBar;