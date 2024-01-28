import "../About/About.css";
import profPic from "../../assets/Untitled.png";
import Card from "../Card.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <img src={profPic} alt="profile picture" />
        <h2>Hello!</h2>
        <h3>
          I'm, a final-year student in the Faculty of Computer Systems and
          Technologies at the "Technical University of Sofia".
          <br />
          Here is more about me
        </h3>
      </div>
      <div id="card-container">
        <Card
          cardTitle={"sports"}
          paragraph={
            "I really do have a passion for any kind of physical activities. Whether it's hitting the gym, swimming or running. This passion of mine outside the world of coding keeps me energized and balanced, fueling my creativity."
          }
        />
        <Card cardTitle={"tech"} paragraph={""} />
        <Card cardTitle={"design"} paragraph={""} />
      </div>
      <br />
      <br />
    </section>
  );
}
