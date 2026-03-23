import "./Faculty.css";
import React, { useEffect, useState } from "react";
import { Award, BookOpen, Briefcase, Calendar, ChevronRight, Globe, GraduationCap, Mail, Phone, X } from "lucide-react";

const facultyData = [
  {
    name: "Dr. Ruman Alam",
    designation: "Academic Head & Dean",
    image: "images/Ruman.jpg",
    qualification: "PhD in Computer Science (Stanford University), M.S. in Artificial Intelligence",
    experience: "12+ Years",
    about: "Expert in machine learning and computer vision with extensive research experience. Published over 30 papers in top-tier conferences and journals. Currently leading research on explainable AI for healthcare applications.",
    email: "r.kumar@university.edu",
    phone: "+1 (555) 123-4567",
    department: "Applied Science",
  },
  {
    name: "Mr. Abhimanyu Yadav",
    designation: "HOD Mechanical Engineering",
    image: "images/Abhi sir.png",
    qualification: "B.Tech (Mechanical Engineering)",
    experience: "8+ Years",
    about: "Department Head with extensive research and administrative experience. Specialized in quantum computing and advanced algorithms. Recipient of the National Science Foundation Career Award.",
    email: "abhimanyu.yadav@university.edu",
    department: "Mechanical Engineering",
  
  },
  {
    name: "Mr. Virendra Singh",
    designation: "HOD Electrical Engineering",
    image: "images/virendra.jpeg",
    qualification: "PhD (Data Science, Carnegie Mellon), M.S. Statistics",
    experience: "6+ Years",
    about: "Data Science specialist with industry experience at leading tech firms. Focuses on big data analytics and predictive modeling. Currently consulting for Fortune 500 companies on data strategy.",
    email: "p.mehta@university.edu",
   
 
  },
  {
    name: "Mr. Prince Kumar",
    designation: "HOD Computer Science",
    image: "images/pk.jpg",
    qualification: "B.Tech in Computer Science",
    experience: "03+ Years",
    about: "Industry professional sharing real-world experience with students. Former CTO at TechCorp with expertise in cloud architecture and scalable systems. Focuses on practical software engineering principles.",
    email: "r.wilson@university.edu",
  },
  {
    name: "Ms. Ankita Yadav",
    designation: "Lecturer, Computer Science",
    image: "images/ankita.jpg",
    qualification: "MCA",
    experience: "5+ Years",
    about: "Medical researcher specializing in biomedical devices. Holds 15 patents in medical technology. Leads interdisciplinary research between engineering and medical schools.",
    email: "s.johnson@university.edu",
    phone: "+1 (555) 567-8901",
    department: "Biomedical Engineering",
    research: "Medical Devices"
  },
  {
    name: "Ms. Shashiprabha Ramji Sharma",
    designation: "Associate Professor",
    image: "images/shashi.jpg",
    qualification: "MBA",
    experience: "6+ Years",
    about: "Expert in robotics and automation systems. Former lead engineer at automotive company. Focuses on sustainable energy solutions and autonomous systems.",
    email: "m.rodriguez@university.edu",
    phone: "+1 (555) 678-9012",
    department: "Mechanical Engineering",
    research: "Robotics & Automation"
  },
  {
    name: "Ms. Narendra Singh",
    designation: "Lecturer",
    image: "images/d.jpg",
    qualification: "B.Tech.",
    experience: "3+ Years",
    about: "Expert in robotics and automation systems. Former lead engineer at automotive company. Focuses on sustainable energy solutions and autonomous systems.",
    email: "m.rodriguez@university.edu",
    phone: "+1 (555) 678-9012",
    department: "Mechanical Engineering",
    research: "Robotics & Automation"
  }
];

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (faculty) => {
    setSelectedFaculty(faculty);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedFaculty(null), 300);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="faculty-premium-container">
      {/* Header */}
      <div className="faculty-premium-header">
        <h1 className="premium-title">Our Faculty</h1>
        <p className="premium-subtitle">
          Meet our distinguished educators and researchers dedicated to academic excellence 
          and innovation across multiple disciplines
        </p>
      </div>

      {/* Faculty Grid */}
      <div className="premium-faculty-grid">
        {facultyData.map((faculty, index) => (
          <div 
            key={index}
            className="premium-faculty-card"
            onClick={() => openModal(faculty)}
          >
            <div className="card-image-premium">
              <img src={faculty.image} alt={faculty.name} />
              <div className="profile-badge">
                <Award size={14} />
                <span>{faculty.experience}</span>
              </div>
            </div>
            
            <div className="card-content-premium">
              <h3 className="faculty-name-premium">{faculty.name}</h3>
              <p className="faculty-designation-premium">{faculty.designation}</p>
              
              

            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="stats-bar-premium">
        <div className="stat-item-premium-bar">
          <span className="stat-number">{facultyData.length}</span>
          <span className="stat-label">Faculty Members</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item-premium-bar">
          <span className="stat-number">6+</span>
          <span className="stat-label">Departments</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item-premium-bar">
          <span className="stat-number">100%</span>
          <span className="stat-label">PhD Qualified</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item-premium-bar">
          <span className="stat-number">75+</span>
          <span className="stat-label">Research Papers</span>
        </div>
      </div>

      {/* Modal */}
      {selectedFaculty && (
        <div className={`premium-modal-overlay ${modalOpen ? 'open' : ''}`} onClick={closeModal}>
          <div className="premium-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-premium">
              <div className="modal-image-container">
                <img 
                  src={selectedFaculty.image} 
                  alt={selectedFaculty.name}
                  className="modal-image-premium"
                />
             
              </div>
              
              <div className="modal-header-content">
                <h2 className="modal-name-premium">{selectedFaculty.name}</h2>
                <p className="modal-designation-premium">{selectedFaculty.designation}</p>
                
                <div className="modal-contact">
                  <div className="contact-item">
                    <Briefcase size={20} />
                    <span>{selectedFaculty.experience} Teaching & Research Experience</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={20} />
                    <span>{selectedFaculty.email}</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={20} />
                    <span>{selectedFaculty.phone}</span>
                  </div>
                </div>
              </div>
              
              <button className="modal-close-premium" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-content-premium">
              <div className="modal-section">
                <h3 className="section-title-premium">
                  <BookOpen size={20} />
                  Qualifications
                </h3>
                <p className="qualification-text">{selectedFaculty.qualification}</p>
              </div>
              
              <div className="modal-section">
                <h3 className="section-title-premium">
                  <Award size={20} />
                  Research Focus
                </h3>
                <p className="about-text">{selectedFaculty.research} - {selectedFaculty.about}</p>
              </div>
              
              <div className="modal-section">
                <h3 className="section-title-premium">
                  <Globe size={20} />
                  Department
                </h3>
                <p className="about-text">{selectedFaculty.department}</p>
              </div>
              
              <div className="modal-actions-premium">
                <button className="action-btn primary-btn">
                  <Mail size={20} />
                  Send Email
                </button>
                <button className="action-btn secondary-btn">
                  <Calendar size={20} />
                  Schedule Office Hours
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;
