import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import ProfilePicture from "../assets/ProfilePicture.png";

function Home() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="home">
      <div className="about">
        {/* Add alt attribute to img element */}
        <img
          src={ProfilePicture}
          alt="Nir Neuman's Profile"
          className="profilePicture"
        />
        <h2>Nir Neuman</h2>
        <div className="prompt">
          <p>iOS Developer, Full Stack Developer</p>
          <a
            href="https://linkedin.com/in/nirneu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => openInNewTab("https://linkedin.com/in/nirneu")}>
            <LinkedInIcon />
          </a>
          <a href="mailto:nir.neuman@icloud.com">
            <EmailIcon />
          </a>
          <a
            href="https://github.com/nirneu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => openInNewTab("https://github.com/nirneu")}>
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>iOS Development</h2>
            <span>
              Swift, SwiftUI, UIKit, Cocoa Touch, Core Data, Combine, MVVM,
              Xcode
            </span>
          </li>
          <li className="item">
            <h2>Full Stack Development</h2>
            <span>
              JavaScript, TypeScript, Angular, Node.js, Express, PostgreSQL
            </span>
          </li>
          <li className="item">
            <h2>Other</h2>
            <span>
              Object-Oriented Programming, RESTful APIs, Firebase, Azure Cloud,
              Git, Scrum, UI/UX
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>English, Hebrew, Swedish</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
