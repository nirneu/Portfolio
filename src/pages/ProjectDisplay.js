import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project">
      {/* Updated alt text to remove redundant words */}
      <img src={project.image} alt={`${project.name}`} />
      <h1>{project.name}</h1>
      <p>
        <b>{project.subtitle}</b>
      </p>
      <div className="screenshotsContainer">
        {project.screenshots.map((screenshot, index) => (
          // Updated alt text to remove redundant words and provide context
          <img
            key={index}
            src={screenshot}
            alt={`Screenshot ${index + 1} for ${project.name}`}
            className="screenshot"
          />
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
