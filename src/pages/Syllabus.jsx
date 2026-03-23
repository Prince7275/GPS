import "./Syllabus.css";
import React from "react";

const branches = [
  {
    title: "Computer Science Engineering",
    icon: "💻",
    pdf: "/syllabus/cse-syllabus.pdf",
  },
  {
    title: "Electrical Engineering",
    icon: "⚡",
    pdf: "/syllabus/ee-syllabus.pdf",
  },
  {
    title: "Mechanical Engineering",
    icon: "🏗",
    pdf: "/syllabus/civil-mech-syllabus.pdf",
  },
];

const Syllabus = () => {
  return (
    <div className="syllabus-page">
      <h1 className="syllabus-title">Syllabus</h1>
      <p className="syllabus-subtitle">
        Branch-wise Official Curriculum (PDF)
      </p>

      <div className="syllabus-grid">
        {branches.map((branch, index) => (
          <div className="syllabus-card" key={index}>
            <div className="syllabus-icon">{branch.icon}</div>
            <h2>{branch.title}</h2>

            <div className="syllabus-actions">
              <a href={branch.pdf} target="_blank" rel="noopener noreferrer">
                View
              </a>
              <a href={branch.pdf} download>
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
