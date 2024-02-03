import "../About/About.css";
import Card from "../Card.jsx";
import techImage from "../../assets/tech.png";
import sportsImage from "../../assets/sports.png";
import designImage from "../../assets/design.png";
import Reveal from "../utils/Reveal.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <Reveal>
          <h2>About</h2>
        </Reveal>
        <hr />
        <Reveal>
          <h3>
            I'm, a final-year student in the Faculty of Computer Systems and
            Technologies at the "Technical University of Sofia".
          </h3>
        </Reveal>
      </div>
      <div id="card-container">
        <Reveal>
          <Card image={sportsImage} />
        </Reveal>
        <Reveal>
          <Card image={techImage} />
        </Reveal>
        <Reveal>
          <Card image={designImage} />
        </Reveal>
      </div>
      <br />
      <br />
    </section>
  );
}
