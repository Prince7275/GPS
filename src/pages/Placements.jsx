import "./Placements.css";
import React, { useState } from "react";
import { FaArrowRight, FaBriefcase, FaBuilding, FaChartLine, FaGraduationCap, FaUsers } from "react-icons/fa";
import { placements } from "../data/dummyData";

const Placements = () => {
  const [yearFilter, setYearFilter] = useState('2023');

  const placementStats = [
    { year: 2023, total: 1250, average: '8.5 LPA', highest: '45 LPA', rate: '92%' },
    { year: 2022, total: 1150, average: '7.8 LPA', highest: '38 LPA', rate: '90%' },
    { year: 2021, total: 1050, average: '7.2 LPA', highest: '35 LPA', rate: '88%' },
  ];

  const trainingPrograms = [
    {
      title: 'Aptitude Training',
      description: 'Quantitative, logical and verbal reasoning',
      duration: '100+ hours'
    },
    {
      title: 'Technical Training',
      description: 'Coding, technical skills and domain knowledge',
      duration: '150+ hours'
    },
    {
      title: 'Soft Skills',
      description: 'Communication, group discussion and interview skills',
      duration: '80+ hours'
    },
    {
      title: 'Mock Interviews',
      description: 'Practice interviews with industry experts',
      duration: '50+ sessions'
    }
  ];

  const placementProcess = [
    { step: 1, title: 'Registration', description: 'Student registration with T&P cell' },
    { step: 2, title: 'Training', description: 'Comprehensive training programs' },
    { step: 3, title: 'Company Registration', description: 'Companies register for campus drive' },
    { step: 4, title: 'Pre-Placement Talk', description: 'Company presentations' },
    { step: 5, title: 'Written Test', description: 'Aptitude and technical tests' },
    { step: 6, title: 'Interviews', description: 'Technical and HR interviews' },
    { step: 7, title: 'Job Offer', description: 'Final job offers' },
    { step: 8, title: 'Acceptance', description: 'Students accept offers' },
  ];

  const topPackages = [
    { company: 'Google', package: '45 LPA', students: 5 },
    { company: 'Microsoft', package: '38 LPA', students: 8 },
    { company: 'Amazon', package: '35 LPA', students: 12 },
    { company: 'Adobe', package: '32 LPA', students: 6 },
    { company: 'Goldman Sachs', package: '30 LPA', students: 4 },
  ];

  return (
    <div className="placements-page">
      {/* Hero Section */}
      <section className="placements-hero">
        <div className="container">
          <h1>Training & Placements</h1>
          <p className="subtitle">Building Careers, Shaping Futures</p>
          <div className="placement-highlight">
            <div className="highlight-stat">
              <FaGraduationCap className="highlight-icon" />
              <div>
                <h3>{placements.placementRate}</h3>
                <p>Placement Rate</p>
              </div>
            </div>
            <div className="highlight-stat">
              <FaBriefcase className="highlight-icon" />
              <div>
                <h3>{placements.totalOffers.toLocaleString()}+</h3>
                <p>Total Offers</p>
              </div>
            </div>
            <div className="highlight-stat">
              <FaChartLine className="highlight-icon" />
              <div>
                <h3>{placements.averagePackage}</h3>
                <p>Average Package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Placement Statistics</h2>
            <div className="year-filter">
              <button 
                className={`year-btn ${yearFilter === '2023' ? 'active' : ''}`}
                onClick={() => setYearFilter('2023')}
              >
                2023
              </button>
              <button 
                className={`year-btn ${yearFilter === '2022' ? 'active' : ''}`}
                onClick={() => setYearFilter('2022')}
              >
                2022
              </button>
              <button 
                className={`year-btn ${yearFilter === '2021' ? 'active' : ''}`}
                onClick={() => setYearFilter('2021')}
              >
                2021
              </button>
            </div>
          </div>
          
          {placementStats.filter(stat => stat.year.toString() === yearFilter).map(stat => (
            <div key={stat.year} className="stats-cards">
              <div className="stat-card">
                <FaUsers className="stat-icon" />
                <h3>{stat.total.toLocaleString()}</h3>
                <p>Total Placements</p>
              </div>
              <div className="stat-card">
                <FaChartLine className="stat-icon" />
                <h3>{stat.average}</h3>
                <p>Average Package</p>
              </div>
              <div className="stat-card">
                <FaBriefcase className="stat-icon" />
                <h3>{stat.highest}</h3>
                <p>Highest Package</p>
              </div>
              <div className="stat-card">
                <FaGraduationCap className="stat-icon" />
                <h3>{stat.rate}</h3>
                <p>Placement Rate</p>
              </div>
            </div>
          ))}

          {/* Growth Chart */}
          <div className="growth-chart">
            <h3>Placement Growth Trend</h3>
            <div className="chart-bars">
              {placementStats.map(stat => (
                <div key={stat.year} className="chart-bar">
                  <div 
                    className="bar-fill"
                    style={{ height: `${(stat.total / 1300) * 100}%` }}
                  >
                    <span className="bar-value">{stat.total}</span>
                  </div>
                  <div className="bar-label">{stat.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="recruiters-section">
        <div className="container">
          <h2 className="section-title">Our Top Recruiters</h2>
          <div className="recruiters-grid">
            {placements.topRecruiters.map((recruiter, index) => (
              <div key={index} className="recruiter-logo">
                <FaBuilding className="company-icon" />
                <h4>{recruiter}</h4>
              </div>
            ))}
          </div>
          <div className="recruiter-count">
            <h3>200+ Companies Visit Campus Annually</h3>
          </div>
        </div>
      </section>

      {/* Top Packages */}
      <section className="packages-section">
        <div className="container">
          <h2 className="section-title">Top Placement Packages</h2>
          <div className="packages-table">
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Package (LPA)</th>
                  <th>Students Placed</th>
                  <th>Profile</th>
                </tr>
              </thead>
              <tbody>
                {topPackages.map((pkg, index) => (
                  <tr key={index}>
                    <td><strong>{pkg.company}</strong></td>
                    <td className="package-amount">{pkg.package}</td>
                    <td>{pkg.students}</td>
                    <td>Software Engineer</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Training & Placement Cell */}
      <section className="tpc-section">
        <div className="container">
          <div className="tpc-header">
            <h2 className="section-title">Training & Placement Cell</h2>
            <p className="tpc-description">
              Our dedicated T&P cell works relentlessly to bridge the gap between academia and industry.
            </p>
          </div>
          
          <div className="tpc-content">
            <div className="tpc-info">
              <h3>Our Mission</h3>
              <ul>
                <li>Provide industry-relevant training to students</li>
                <li>Establish strong corporate relationships</li>
                <li>Ensure 100% placement assistance</li>
                <li>Develop employability skills</li>
              </ul>
              
              <h3>Training Programs</h3>
              <div className="training-programs">
                {trainingPrograms.map((program, index) => (
                  <div key={index} className="program-card">
                    <h4>{program.title}</h4>
                    <p>{program.description}</p>
                    <span className="program-duration">{program.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tpc-process">
              <h3>Placement Process</h3>
              <div className="process-timeline">
                {placementProcess.map((step) => (
                  <div key={step.step} className="process-step">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Student Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="student-avatar">RJ</div>
              <h4>Rajesh Kumar</h4>
              <p className="company">Placed at Google</p>
              <p className="testimonial-text">
                "The training provided by the T&P cell was instrumental in my success. 
                The mock interviews and aptitude training helped me crack the Google interview."
              </p>
              <p className="package">Package: 45 LPA</p>
            </div>
            <div className="testimonial-card">
              <div className="student-avatar">SP</div>
              <h4>Priya Sharma</h4>
              <p className="company">Placed at Microsoft</p>
              <p className="testimonial-text">
                "The placement cell's constant support and guidance helped me secure my dream job. 
                The industry interaction sessions were particularly helpful."
              </p>
              <p className="package">Package: 38 LPA</p>
            </div>
            <div className="testimonial-card">
              <div className="student-avatar">AM</div>
              <h4>Amit Verma</h4>
              <p className="company">Placed at Amazon</p>
              <p className="testimonial-text">
                "From resume building to final interview preparation, the T&P cell was with me at every step. 
                Their efforts made all the difference."
              </p>
              <p className="package">Package: 35 LPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact T&P Cell */}
      <section className="contact-tp-section">
        <div className="container">
          <div className="contact-tp-card">
            <div className="contact-info">
              <h3>Contact Placement Cell</h3>
              <div className="contact-details">
                <p><strong>Training & Placement Officer:</strong> Dr. Anil Sharma</p>
                <p>📞 +1 (234) 567-8901</p>
                <p>📧 placement@techuniversity.edu</p>
                <p>🕒 Office Hours: 9:00 AM - 5:00 PM (Mon-Sat)</p>
              </div>
              <button className="btn">Schedule Appointment</button>
            </div>
            <div className="company-registration">
              <h3>For Companies</h3>
              <p>Looking to hire talented graduates?</p>
              <button className="btn btn-secondary">Register Your Company</button>
              <a href="#" className="download-brochure">
                Download Placement Brochure <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;