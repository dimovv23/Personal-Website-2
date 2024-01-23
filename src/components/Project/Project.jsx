export default function Project({
  technologies,
  url,
  projectName,
  description,
}) {
  return (
    <a target="_blank" href={url}>
      <div id="single-project">
        <h3>{projectName}</h3>
        <p>{description}</p>
        <p>{technologies}</p>
      </div>
    </a>
  );
}
