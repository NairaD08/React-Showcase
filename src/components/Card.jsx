function Card({ project }) {
  return (
    <div className="card">
      <h1>{project.title}</h1>
      <img className="card-image" src={project.image} />
      <ul>
        <li>
          <a href={project.github}>Github Link</a>
        </li>
        <li>
          <a href={project.deployed}>Deployed Link</a>
        </li>
      </ul>
    </div>
  );
}

export default Card;
