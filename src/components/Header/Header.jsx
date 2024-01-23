import "../Header/Header.css";
import logoImage from "../../assets/Picture12.png";

export default function Header() {
  return (
    <section id="intro" className="gradient-background">
      <nav id="navbar">
        <div id="navbar-logo">
          <a href="#intro">
            <img src={logoImage} alt="logo" />
          </a>
        </div>
        <div id="navbar-list">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="title-wrapper">
        <h2>
          I'M
          <br />
          GEORGI
        </h2>
        <img src={logoImage} alt="logo" />
        <h3 className="blink_me">a_software_engineer</h3>
      </div>
    </section>
  );
}
