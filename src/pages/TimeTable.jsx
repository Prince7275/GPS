import "./Timetable.css";
import { Download, FileText } from "lucide-react";

const Timetable = () => {
  const pdfLink = "/timetable/Academic_Timetable_All_Branches.pdf";

  const branches = [
    { name: "Computer Science Engineering", icon: "💻" },
    { name: "Electrical Engineering", icon: "⚡" },
    { name: "Civil / Mechanical Engineering", icon: "🏗" },
  ];

  return (
    <section className="timetable-page">
      <h1 className="page-title">Class Timetable</h1>
      <p className="page-subtitle">
        Academic Session 2025–26 <br />
        <span>📌 One official timetable for all branches</span>
      </p>

      <div className="timetable-grid">
        {branches.map((branch, index) => (
          <div className="timetable-card" key={index}>
            <div className="branch-icon">{branch.icon}</div>
            <h3>{branch.name}</h3>

            <div className="action-buttons">
              <a href={pdfLink} target="_blank" className="btn view">
                <FileText size={18} /> View
              </a>
              <a href={pdfLink} download className="btn download">
                <Download size={18} /> Download
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="update-note">
        Last Updated: <strong>15 July 2025</strong>
      </p>
    </section>
  );
};

export default Timetable;
