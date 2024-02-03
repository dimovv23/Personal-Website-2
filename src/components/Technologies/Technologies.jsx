import "../Technologies/Technologies.css";

export default function Technologies({ icon, title, content }) {
  return (
    <div className="technologies">
      <h4>
        {icon}
        <span> </span>
        {title}
      </h4>
      <p>{content}</p>
    </div>
  );
}
