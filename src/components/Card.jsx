import "../components/About/About.css";

export default function Card({ cardTitle, paragraph }) {
  return (
    <>
      <div id="about-card" className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{cardTitle}</p>
          </div>
          <div className="flip-card-back">
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
}
