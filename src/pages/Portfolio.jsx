import Card from "../components/Card";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "https://placehold.co/600x400",
      github: "https://google.com",
      deployed: "https://google.com",
    },
    {
      title: "Project 2",
      image: "https://placehold.co/300x200",
      github: "https://google.com",
      deployed: "https://google.com",
    },
    {
      title: "Project 1",
      image: "https://placehold.co/600x400",
      github: "https://google.com",
      deployed: "https://google.com",
    },
    {
      title: "Project 2",
      image: "https://placehold.co/300x200",
      github: "https://google.com",
      deployed: "https://google.com",
    },
  ];

  return (
    <>
      <h1>This is the Portfolio page</h1>

      <div className="card-container">
        {projects.map((project) => {
          return <Card project={project} />;
        })}
      </div>
    </>
  );
}

export default Portfolio;
