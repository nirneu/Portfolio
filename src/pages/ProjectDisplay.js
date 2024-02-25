import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project">
      <img src={project.image} />
      <h1>{project.name}</h1>
      <p>
        <b>{project.subtitle}</b>
      </p>
      <div className="screenshotsContainer">
        {project.screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot} className="screenshot" />
        ))}
      </div>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a
        href={project.gitHub}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => openInNewTab(project.gitHub)}>
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
