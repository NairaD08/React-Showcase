import Card from "../components/Card";
import Pic1 from "../Project1.jpg";
import Pic2 from "../Project2.jpg";
import Pic3 from "../Project3.jpg";
import Pic4 from "../Project4.jpg";
import Pic5 from "../Project5.jpg";

function Portfolio() {
  const projects = [
    {
      title: "Intro to JS",
      image: Pic1,
      github: "https://github.com/NairaD08/Naira-s-Blog",
      deployed: "https://nairad08.github.io/Naira-s-Blog/",
    },
    {
      title: "Scribe",
      image: Pic2,
      github: "https://github.com/NairaD08/Scribe",
      deployed: "https://scribe-4vky.onrender.com/",
    },
    {
      title: "Content Drive Blog",
      image: Pic3,
      github: "https://github.com/NairaD08/Content-Driven-Blog",
      deployed: "https://content-driven-blog.onrender.com/",
    },
    {
      title: "NotePad",
      image: Pic4,
      github: "https://github.com/NairaD08/NotePad",
      deployed: "https://notepad-1-t0gr.onrender.com/",
    },
    {
      title: "Traveler's Weather Guide",
      image: Pic5,
      github: "https://github.com/NairaD08/Travelers-Weather-Guide",
      deployed: "https://nairad08.github.io/Travelers-Weather-Guide/",
    },
  ];

  return (
    <>
      <div className="main-container">
        <div className="portfolio-container">
          <h1>Welcome to my Portfolio page</h1>
          <div className="card-container">
            {projects.map((project) => {
              return <Card project={project} />;
            })}
          </div>
        </div>
      </div>
      {/* 

       */}
    </>
  );
}

export default Portfolio;
