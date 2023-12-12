import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Nir</h2>
        <div className="prompt">
          <p>An iOS Developer, former Full Stack Developer</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>iOS Development</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>Full Stack</h2>
            <span></span>
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
