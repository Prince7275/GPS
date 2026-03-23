import "./AcademicCalendar.css";
import React from "react";
import { CalendarDays } from "lucide-react";

const academicData = [
  {
    month: "July 2025",
    events: [
      "Commencement of Odd Semester",
      "Orientation Program for New Students",
    ],
  },
  {
    month: "August 2025",
    events: [
      "Independence Day Celebration",
      "Internal Assessment – I",
    ],
  },
  {
    month: "September 2025",
    events: [
      "Teacher’s Day Celebration",
      "Mid-Semester Examination",
    ],
  },
  {
    month: "October 2025",
    events: [
      "Gandhi Jayanti",
      "Technical & Cultural Fest",
    ],
  },
  {
    month: "November 2025",
    events: [
      "Internal Assessment – II",
      "Industrial Visit",
    ],
  },
  {
    month: "December 2025",
    events: [
      "End Semester Examination",
      "Winter Vacation Begins",
    ],
  },
];

const AcademicCalendar = () => {
  return (
    <div className="academic-page">
      {/* Header */}
      <div className="academic-header">
        <CalendarDays size={42} />
        <h1>Academic Calendar</h1>
        <p>Academic Year 2025 – 2026</p>
      </div>

      {/* Calendar Cards */}
      <div className="calendar-container">
        {academicData.map((item, index) => (
          <div className="calendar-card" key={index}>
            <h2>{item.month}</h2>
            <ul>
              {item.events.map((event, i) => (
                <li key={i}>{event}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicCalendar;
