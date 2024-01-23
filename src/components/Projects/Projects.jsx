import "../Projects/Projects.css";
import Project from "../Project/Project";

export default function Projects() {
  return (
    <section id="projects" className="gradient-background-dynamic">
      <h2>My Projects</h2>
      <div className="projects-container">
        <Project
          url={"https://github.com/dimovv23/Investment-Calculator"}
          projectName={"Investment Calculator"}
          technologies={"(HTML, CSS, React)"}
          description={
            "Web App for calculating investments for preffered period of time."
          }
        />
        <Project
          url={"https://github.com/dimovv23/Blockchain"}
          projectName={"Blockchain App"}
          technologies={"(CSS, EJS, JavaScript)"}
          description={"Web App for checking crypto-fiat rates using API."}
        />
        <Project
          url={"https://github.com/dimovv23/CarFuelCalculator"}
          projectName={"Fuel Calculator"}
          technologies={"(C++)"}
          description={
            "Console application for calculating car's fuel consumption, needed fuel, for given roadtrip"
          }
        />
        <Project
          url={"https://github.com/dimovv23/Pet_Adoption"}
          projectName={"Paw Finder"}
          technologies={"(Java, Spring, Thymeleaf)"}
          description={"Web App for adopting pets."}
        />
        <Project
          url={"https://dimovv23.github.io/Drum-Kit/"}
          projectName={"Drum Kit"}
          technologies={"(HTML, CSS, JavaScript)"}
          description={"Web App that simulates a drum kit."}
        />
        <Project
          url={"https://dimovv23.github.io/The-Simon-Game/"}
          projectName={"Simon Game"}
          technologies={"HTML, CSS, JavaScript"}
          description={"Web App that implements the Simon Game."}
        />
      </div>
    </section>
  );
}
