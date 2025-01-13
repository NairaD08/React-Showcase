function Card({ project }) {
  return (
    <div className="card">
      <h1>{project.title}</h1>
      <img className="card-image" src={project.image} />
    </div>
  );
}

export default Card;
