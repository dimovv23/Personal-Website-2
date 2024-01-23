import "../About/About.css";
import profPic from "../../assets/Untitled.png";
import { aboutText } from "../../about.js";
import Card from "../Card.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <img src={profPic} alt="profile picture" />
        <h2>Hello!</h2>
        <h3>{aboutText}</h3>
      </div>
      <div id="card-container">
        <Card cardTitle={"sports"} />
        <Card cardTitle={"tech"} />
        <Card cardTitle={"design"} />
      </div>
      <br />
      <br />
      <h2 className="divider line glow"></h2>
    </section>
  );
}
