import "./StudentCorner.css";
import React, { useState } from "react";
import { FaArrowRight, FaBook, FaCalendar, FaDownload, FaFilePdf, FaSearch, FaUserGraduate } from "react-icons/fa";

const StudentCorner = () => {
  const [activeTab, setActiveTab] = useState('syllabus');
  const [searchTerm, setSearchTerm] = useState('');

  const syllabusData = [
    { id: 1, course: 'B.Tech CSE - Semester 1', file: 'btech-cse-sem1.pdf', size: '2.4 MB' },
    { id: 2, course: 'B.Tech CSE - Semester 2', file: 'btech-cse-sem2.pdf', size: '2.8 MB' },
    { id: 3, course: 'MBA - Semester 1', file: 'mba-sem1.pdf', size: '1.9 MB' },
    { id: 4, course: 'M.Tech CSE - Semester 1', file: 'mtech-cse-sem1.pdf', size: '3.1 MB' },
  ];

  const timetableData = [
    { id: 1, class: 'B.Tech CSE 3rd Year', schedule: 'Mon-Fri: 9 AM - 4 PM', file: 'timetable-cse-3yr.pdf' },
    { id: 2, class: 'MBA 2nd Year', schedule: 'Mon-Fri: 10 AM - 5 PM', file: 'timetable-mba-2yr.pdf' },
    { id: 3, class: 'B.Tech ME 2nd Year', schedule: 'Mon-Fri: 8 AM - 3 PM', file: 'timetable-me-2yr.pdf' },
  ];

  const resultsData = [
    { id: 1, exam: 'Semester 1 Results 2024', date: 'Jan 15, 2024', link: '#' },
    { id: 2, exam: 'Semester 2 Results 2024', date: 'Jun 30, 2024', link: '#' },
    { id: 3, exam: 'Backlog Results 2024', date: 'Mar 15, 2024', link: '#' },
  ];

  const eLearningResources = [
    { id: 1, title: 'Learning Management System', description: 'Access course materials online', link: '#' },
    { id: 2, title: 'Digital Library', description: 'E-books and journals', link: '#' },
    { id: 3, title: 'Online Labs', description: 'Virtual lab experiments', link: '#' },
    { id: 4, title: 'Video Lectures', description: 'Recorded classroom sessions', link: '#' },
  ];

  const studentPortalLinks = [
    { title: 'Attendance Portal', description: 'Check your attendance', icon: <FaCalendar /> },
    { title: 'Grade Card', description: 'View academic performance', icon: <FaUserGraduate /> },
    { title: 'Fee Payment', description: 'Pay fees online', icon: <FaBook /> },
    { title: 'Exam Portal', description: 'Exam schedule & hall tickets', icon: <FaFilePdf /> },
  ];

  return (
    <div className="student-corner-page">
      {/* Hero Section */}
      <section className="student-hero">
        <div className="container">
          <h1>Student Corner</h1>
          <p className="subtitle">Your Gateway to Academic Resources</p>
        </div>
      </section>

      {/* Student Portal Links */}
      <section className="portal-section">
        <div className="container">
          <div className="portal-grid">
            {studentPortalLinks.map((link, index) => (
              <a key={index} href="#" className="portal-card">
                <div className="portal-icon">{link.icon}</div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="resources-section">
        <div className="container">
          <div className="tabs-header">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'syllabus' ? 'active' : ''}`}
                onClick={() => setActiveTab('syllabus')}
              >
                <FaBook /> Syllabus
              </button>
              <button 
                className={`tab ${activeTab === 'timetable' ? 'active' : ''}`}
                onClick={() => setActiveTab('timetable')}
              >
                <FaCalendar /> Time Table
              </button>
              <button 
                className={`tab ${activeTab === 'results' ? 'active' : ''}`}
                onClick={() => setActiveTab('results')}
              >
                <FaUserGraduate /> Results
              </button>
            </div>
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Syllabus Tab */}
          {activeTab === 'syllabus' && (
            <div className="tab-content">
              <h3>Download Syllabus</h3>
              <div className="resources-grid">
                {syllabusData.map(item => (
                  <div key={item.id} className="resource-card">
                    <FaFilePdf className="resource-icon" />
                    <div className="resource-info">
                      <h4>{item.course}</h4>
                      <p className="file-info">{item.file} • {item.size}</p>
                    </div>
                    <a href="#" className="download-btn">
                      <FaDownload /> Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timetable Tab */}
          {activeTab === 'timetable' && (
            <div className="tab-content">
              <h3>Academic Timetables</h3>
              <div className="resources-grid">
                {timetableData.map(item => (
                  <div key={item.id} className="resource-card">
                    <FaCalendar className="resource-icon" />
                    <div className="resource-info">
                      <h4>{item.class}</h4>
                      <p className="schedule">{item.schedule}</p>
                      <p className="file-info">{item.file}</p>
                    </div>
                    <a href="#" className="download-btn">
                      <FaDownload /> Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <div className="tab-content">
              <h3>Examination Results</h3>
              <div className="results-table">
                <table>
                  <thead>
                    <tr>
                      <th>Examination</th>
                      <th>Declaration Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultsData.map(item => (
                      <tr key={item.id}>
                        <td>{item.exam}</td>
                        <td>{item.date}</td>
                        <td>
                          <a href={item.link} className="result-link">
                            View Results <FaArrowRight />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* E-Learning Resources */}
      <section className="elearning-section">
        <div className="container">
          <h2 className="section-title">E-Learning Resources</h2>
          <div className="elearning-grid">
            {eLearningResources.map(resource => (
              <a key={resource.id} href={resource.link} className="elearning-card">
                <div className="elearning-content">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <span className="access-link">Access Now <FaArrowRight /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Student Announcements */}
      <section className="announcements-section">
        <div className="container">
          <h2 className="section-title">Student Announcements</h2>
          <div className="announcements-list">
            <div className="announcement-card">
              <div className="announcement-date">Mar 15, 2024</div>
              <h3>Hostel Fee Payment Deadline Extended</h3>
              <p>The last date for hostel fee payment has been extended to March 30, 2024.</p>
            </div>
            <div className="announcement-card">
              <div className="announcement-date">Mar 10, 2024</div>
              <h3>Cultural Fest Registrations Open</h3>
              <p>Register for various cultural events by March 25, 2024.</p>
            </div>
            <div className="announcement-card">
              <div className="announcement-date">Mar 5, 2024</div>
              <h3>Library Summer Schedule</h3>
              <p>Library will remain open 24x7 during final examinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quicklinks-section">
        <div className="container">
          <h2 className="section-title">Quick Links</h2>
          <div className="quicklinks-grid">
            <a href="#" className="quicklink-card">
              <h4>Academic Calendar</h4>
              <p>Important dates and deadlines</p>
            </a>
            <a href="#" className="quicklink-card">
              <h4>Student Handbook</h4>
              <p>Rules and regulations</p>
            </a>
            <a href="#" className="quicklink-card">
              <h4>Grievance Portal</h4>
              <p>Submit complaints and feedback</p>
            </a>
            <a href="#" className="quicklink-card">
              <h4>Campus Facilities</h4>
              <p>Labs, library, sports facilities</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentCorner;