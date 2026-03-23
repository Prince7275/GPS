import "./Academics.css";
import React, { useState } from "react";
import { FaBook, FaCalendarAlt, FaSearch, FaUserGraduate } from "react-icons/fa";
import { courses, departments, faculty } from "../data/dummyData";

const Academics = () => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const academicCalendar = [
    { id: 1, event: 'Semester Begins', date: 'Aug 1, 2024' },
    { id: 2, event: 'Mid-Term Examinations', date: 'Sep 15-30, 2024' },
    { id: 3, event: 'Diwali Break', date: 'Oct 20-30, 2024' },
    { id: 4, event: 'Final Examinations', date: 'Dec 1-20, 2024' },
    { id: 5, event: 'Winter Break', date: 'Dec 21 - Jan 5, 2025' },
    { id: 6, event: 'Result Declaration', date: 'Jan 15, 2025' }
  ];

  const filteredFaculty = faculty.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="academics-page">
      {/* Hero Section */}
      <section className="academics-hero">
        <div className="container">
          <h1>Academics</h1>
          <p className="subtitle">Excellence in Education & Research</p>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments-section">
        <div className="container">
          <h2 className="section-title">Departments</h2>
          <div className="departments-grid">
            {departments.map(dept => (
              <div 
                key={dept.id} 
                className="department-card"
                onClick={() => setSelectedDept(selectedDept === dept.id ? null : dept.id)}
              >
                <div className="department-header">
                  <FaBook className="dept-icon" />
                  <h3>{dept.name}</h3>
                  <span className="faculty-count">{dept.facultyCount} Faculty</span>
                </div>
                <p className="department-description">{dept.description}</p>
                <div className="courses-list">
                  <strong>Courses Offered:</strong>
                  <div className="course-tags">
                    {dept.courses.map((course, idx) => (
                      <span key={idx} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
                <div className="department-hod">
                  <strong>HOD:</strong> {dept.hod}
                </div>
                {selectedDept === dept.id && (
                  <div className="department-details">
                    <button className="btn">View Department Details</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="courses-section">
        <div className="container">
          <h2 className="section-title">Courses Offered</h2>
          <div className="courses-table">
            <table>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Duration</th>
                  <th>Seats</th>
                  <th>Eligibility</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>{course.duration}</td>
                    <td>{course.seats}</td>
                    <td>{course.eligibility}</td>
                    <td>
                      <button className="btn btn-small">Apply Now</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="all-courses-link">
            <a href="/courses" className="btn btn-secondary">View All Courses</a>
          </div>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="faculty-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Faculty Directory</h2>
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search faculty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          <div className="faculty-grid">
            {filteredFaculty.map(prof => (
              <div key={prof.id} className="faculty-card">
                <div className="faculty-avatar">
                  {prof.name.charAt(0)}
                </div>
                <h3>{prof.name}</h3>
                <p className="faculty-dept">{prof.department}</p>
                <p className="faculty-designation">{prof.designation}</p>
                <div className="faculty-details">
                  <p><strong>Qualification:</strong> {prof.qualification}</p>
                  <p><strong>Experience:</strong> {prof.experience}</p>
                  <p><strong>Email:</strong> {prof.email}</p>
                </div>
                <button className="btn btn-small">View Profile</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="calendar-section">
        <div className="container">
          <h2 className="section-title">Academic Calendar 2024-25</h2>
          <div className="calendar-timeline">
            {academicCalendar.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-marker">
                  <FaCalendarAlt />
                </div>
                <div className="timeline-content">
                  <h3>{item.event}</h3>
                  <p className="timeline-date">{item.date}</p>
                </div>
                {index < academicCalendar.length - 1 && <div className="timeline-connector"></div>}
              </div>
            ))}
          </div>
          <div className="download-calendar">
            <button className="btn">
              <FaCalendarAlt /> Download Academic Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="research-section">
        <div className="container">
          <h2 className="section-title">Research & Publications</h2>
          <div className="research-stats">
            <div className="research-stat">
              <h3>150+</h3>
              <p>Research Papers Published</p>
            </div>
            <div className="research-stat">
              <h3>₹2.5Cr+</h3>
              <p>Research Grants</p>
            </div>
            <div className="research-stat">
              <h3>25+</h3>
              <p>Patents Filed</p>
            </div>
            <div className="research-stat">
              <h3>10+</h3>
              <p>International Collaborations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;