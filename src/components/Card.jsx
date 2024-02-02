import "../components/About/About.css";

export default function Card({ image }) {
  return (
    <>
      <button id="about-card" className="flip-card">
        <img src={image} alt="" />
      </button>
    </>
  );
}
