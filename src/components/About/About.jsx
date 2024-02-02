import "../About/About.css";
import profPic from "../../assets/Untitled.png";
import Card from "../Card.jsx";
import techImage from "../../assets/tech.png";
import sportsImage from "../../assets/sports.png";
import designImage from "../../assets/design.png";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <img src={profPic} alt="profile picture" />
        <h2>Hello!</h2>
        <h3>
          I'm, a final-year student in the Faculty of Computer Systems and
          Technologies at the "Technical University of Sofia".
        </h3>
      </div>
      <div id="card-container">
        <Card image={sportsImage} />
        <Card image={techImage} />
        <Card image={designImage} />
      </div>
      <br />
      <br />
    </section>
  );
}
