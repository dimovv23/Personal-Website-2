import "../components/About/About.css";

export default function Card({ cardTitle }) {
  return (
    <>
      <div id="about-card" className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{cardTitle}</p>
          </div>
          <div className="flip-card-back">
            <h1>This is h1</h1>
            <p>This is p</p>
            <p>This is p</p>
          </div>
        </div>
      </div>
    </>
  );
}
