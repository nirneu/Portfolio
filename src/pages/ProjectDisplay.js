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
      {/* Provide a meaningful description in the alt attribute */}
      <img src={project.image} alt={`Main image for ${project.name}`} />
      <h1>{project.name}</h1>
      <p>
        <b>{project.subtitle}</b>
      </p>
      <div className="screenshotsContainer">
        {project.screenshots.map((screenshot, index) => (
          // Use the index to provide a unique alt text for each screenshot
          <img
            key={index}
            src={screenshot}
            alt={`Screenshot ${index + 1} of ${project.name}`}
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
