import "./StatsSection.css";
import React from "react";
import { FaBookOpen, FaBriefcase, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      icon: <FaUsers />,
      count: '5000+',
      label: 'Students',
      description: 'Currently enrolled'
    },
    {
      icon: <FaChalkboardTeacher />,
      count: '300+',
      label: 'Faculty',
      description: 'Expert members'
    },
    {
      icon: <FaBriefcase />,
      count: '2000+',
      label: 'Placements',
      description: 'Yearly offers'
    },
    {
      icon: <FaBookOpen />,
      count: '50+',
      label: 'Courses',
      description: 'Programs offered'
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3 className="stat-count">{stat.count}</h3>
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;