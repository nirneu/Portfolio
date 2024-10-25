import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#000000">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jul 2024 - Present"
          iconStyle={{ background: "#000000", color: "#f0f0f0" }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Software Engineering Team Lead</h3>
          <h4 className="vertical-timeline-element-subtitle">
            <a href="https://www.infotale.com" target="_blank" rel="noopener noreferrer">
              Infotale
            </a>
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2024 - Jul 2024"
          iconStyle={{ background: "#000000", color: "#f0f0f0" }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            <a href="https://www.infotale.com" target="_blank" rel="noopener noreferrer">
              Infotale
            </a>
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#000000", color: "#f0f0f0" }}
          icon={<PersonOutlineIcon />}>
          <h3 className="vertical-timeline-element-title">iOS Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Self Employed</h4>
          <p>
            Developed{" "}
            <a
              href="https://apps.apple.com/il/app/tagauto/id6470132798"
              target="_blank"
              rel="noopener noreferrer">
              TagAuto
            </a>{" "}
            - an app designed for vehicle parking location sharing within user groups. Easily locate
            and share your parked vehicles on a map, simplifying the process of vehicle sharing.
          </p>

          <p>
            Developed{" "}
            <a
              href="https://apps.apple.com/il/app/breathpause/id6478462845"
              target="_blank"
              rel="noopener noreferrer">
              BreathPause
            </a>{" "}
            - a simple guided breathing exercises app, designed to reduce stress, improve focus, and
            enhance overall well-being.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2023"
          iconStyle={{ background: "#000000", color: "#f0f0f0" }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Senior Full Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">IDF, Israel</h4>
          <p>
            Designed and developed responsive web applications for mobile utilizing the PEAN Stack
            (PostgreSQL, Express, Angular, Node.js), incorporating RESTful API integration.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#f0f0f0", color: "#000000" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">
            B.Sc - Computer Science with specialization in Mobile and Web development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            College of Management Academic Studies
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          iconStyle={{ background: "#000000", color: "#f0f0f0" }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">IDF, Israel</h4>
          <p>
            Developed and maintained web applications using Angular and Node.js, contributing to the
            functionality and user experience.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "#f0f0f0", color: "#000000" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">Mamram Programming Course</h3>
          <h4 className="vertical-timeline-element-subtitle">
            J6 & Cyber Defense Directorate, IDF
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
