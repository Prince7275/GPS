import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Home.css";
import HeroSection from "../components/home/HeroSection";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaChartLine,
  FaBriefcase, 
  FaChalkboardTeacher, 
  FaFire, 
  FaUsers,
  FaGraduationCap,
  FaBuilding,
  FaMicroscope,
  FaCalendarAlt,
  FaChevronRight,
  FaExternalLinkAlt,
  FaNewspaper,
  FaBullhorn,
  FaAward,
  FaHandshake
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    students: 0,
    faculty: 0,
    placements: 0,
    courses: 0,
    companies: 0,
    labs: 0
  });

  // News data
  const news = [
    { id: 1, title: "Parent-Teacher Meeting", date: "2026-02-14", category: "Education / School Events" },
    { id: 2, title: "Industrial Visit", date: "2026-02-24", category: "Education / Experiential Learning" },
    { id: 3, title: "Dr. B.R. Ambedkar Jayanti", date: "2026-04-14", category: "Cultural Events" },
    { id: 4, title: "Technical Fest 'TechVista'", date: "2024-11-28", category: "Events" },
    { id: 5, title: "MoU Signed with Industry Partner", date: "2024-11-20", category: "Academics" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        students: prev.students < 122 ? prev.students + 122 : 122,
        faculty: prev.faculty < 15 ? prev.faculty + 15 : 15,
        courses: prev.courses < 3 ? prev.courses + 3 : 3,
        placements: prev.placements < 95 ? prev.placements + 95 : 95,
      }));
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Main banner slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Campus life slider settings
  const campusSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  // Custom arrow components
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{ ...style, display: "block", right: "15px" }}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow`}
        style={{ ...style, display: "block", left: "15px", zIndex: 1 }}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  }

  const banners = [
    {
      id: 1,
      title: "Admissions Open 2026",
      subtitle: "Apply Now for Various Programs",
      image: "images/main gate.png",
      cta: "Apply Now"
    },
    {
      id: 2,
      title: "Industry Interaction Program",
      subtitle: "Seminar by Digicoder - Skill Training",
      image: "images/digi.jpg",
      cta: "Register"
    },
    {
      id: 3,
      title: "Modern Learning Environment",
      subtitle: "Engineering Graphics Classroom",
      image: "images/class1.png",
      cta: "Explore"
    },
    {
      id: 4,
      title: "Award Distribution Ceremony",
      subtitle: "Recognizing Student Achievements",
      image: "images/acd3.jpeg",
      cta: "Explore"
    },
    {
      id: 5,
      title: "Saroswati Puja Celebration",
      subtitle: "Celebrating Academic Excellence",
      image: "images/sar1.jpeg",
      cta: "View Gallery"
    },
      {
      id: 6,
      title: "CSC MD Visit",
      subtitle: "Inspiring Leadership & Vision",
      image: "images/mdmeet.jpg",
      cta: "View Gallery"
    },
  ];

  const campusLife = [
    {
      id: 1,
      title: "Library & Learning Center",
      description: "Fully equipped library with digital resources",
      image: "images/akb.jpg"
    },
    {
      id: 2,
      title: "CSC MD Visit",
      description: "Inspiring leadership and vision for our institution",
      image: "images/pep5.jpeg"
    },
    {
      id: 3,
      title: "Seminar on Artificial Intelligence",
      description: "Interactive seminar on AI with industry experts",
      image: "images/pep.jpeg"
    },
    {
      id: 4,
      title: "Library & Learning Center",
      description: "Fully equipped library with digital resources",
      image: "images/lib.png"
    },
    {
      id: 5,
      title: "Campus Infrastructure",
      description: "Spacious classrooms and green campus",
      image: "images/mdmeet.jpg"
    },
    {
      id: 6,
      title: "Campus Infrastructure",
      description: "Spacious classrooms and green campus",
      image: "images/acd2.jpeg"
    },
    {
      id: 7,
      title: "Campus Infrastructure",
      description: "Spacious classrooms and green campus",
      image: "images/acd3.jpeg"
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Computer Science Engineering",
      description: "Programming, Software Development & IT Skills",
      image: "images/cse.jpeg",
      duration: "3 Years",
      seats: "60 Seats"
    },
    {
      id: 2,
      title: "Mechanical Engineering",
      description: "Manufacturing, Mechanics & Industrial Training",
      image: "images/me.jpg",
      duration: "3 Years",
      seats: "60 Seats"
    },
    {
      id: 3,
      title: "Electrical Engineering",
      description: "Power Systems, Machines & Electrical Labs",
      image: "images/ee.jpg",
      duration: "3 Years",
      seats: "60 Seats"
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* ================= LATEST NEWS TICKER ================= */}
      <section className="news-ticker-section">
        <div className="container">
          <div className="news-ticker-wrapper">
            <div className="ticker-header">
              <FaBullhorn className="ticker-icon" />
              <h3>Latest Updates</h3>
              <span className="live-dot"></span>
            </div>
            <div className="ticker-container">
              <div className="ticker-content">
                {news.map((item, index) => (
                  <div key={item.id} className="ticker-item">
                    <span className="ticker-category">{item.category}</span>
                    <span className="ticker-title">{item.title}</span>
                    <span className="ticker-date">
                      <FaCalendarAlt /> {new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <a href="/news" className="view-all-news">
              View All <FaChevronRight />
            </a>
          </div>
        </div>
      </section>

      {/* ================= IMAGE SLIDER ================= */}
      <section className="slider-section">
        <div className="container">
          <Slider {...sliderSettings} className="banner-slider">
            {banners.map((banner) => (
              <div key={banner.id} className="banner-slide">
                <div className="banner-image-container">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="banner-image"
                    loading="lazy"
                  />
                  <div className="banner-overlay"></div>
                </div>
                <div className="banner-content">
                  <div className="banner-badge">Featured</div>
                  <h2>{banner.title}</h2>
                  <p>{banner.subtitle}</p>
                  <button className="btn btn-primary banner-btn">
                    {banner.cta} <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ================= COURSES SECTION ================= */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <FaGraduationCap /> Our Courses
            </h2>
            <p className="section-subtitle">Industry-relevant diploma programs for bright careers</p>
          </div>
          
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-image-container">
                  <img src={course.image} alt={course.title} loading="lazy" />
                  <div className="course-overlay">
                    <div className="course-info">
                      <span>{course.duration}</span>
                      <span>{course.seats}</span>
                    </div>
                  </div>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <a
      onClick={() => navigate(`/courses`)}
      className="course-link"
      style={{ cursor: "pointer" }}
    >
      Learn More <FaChevronRight />
    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DIRECTOR MESSAGE ================= */}
      <section className="director-section">
        <div className="container">
          <div className="director-wrapper">
            <div className="director-image">
              <img src="images/dir.png" alt="Director" loading="lazy" />
              <div className="director-badge">
                <FaAward /> Director
              </div>
            </div>
            <div className="director-content">
              <div className="section-header">
                <h2 className="section-title-dr">
                  <FaHandshake /> Director's Message
                </h2>
              </div>
              <div className="message-card">
                <blockquote>
                  "हमारे राजकीय पॉलिटेक्निक संस्थान में आपका हार्दिक स्वागत है।
                  हम गुणवत्तापूर्ण तकनीकी शिक्षा, व्यावहारिक प्रशिक्षण तथा मूल्य-आधारित शिक्षण के माध्यम से कुशल, सक्षम एवं जिम्मेदार अभियंताओं के निर्माण के लिए प्रतिबद्ध हैं, जो भविष्य की चुनौतियों का आत्मविश्वास के साथ सामना कर सकें।"
                </blockquote>
                <div className="director-details">
                  <h4>Director, CSC SPV</h4>
                  <p>Government Polytechnic College</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COLLEGE AT A GLANCE ================= */}
      <section className="stats-section">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">
        <FaBuilding /> College at a Glance
      </h2>
      <p className="section-subtitle">Our achievements and milestones</p>
    </div>
    
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon-wrapper">
          <FaUsers />
        </div>
        <div className="stat-content">
          <h3>{stats.students.toLocaleString()}+</h3>
          <p>Students Enrolled</p>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="stat-icon-wrapper">
          <FaChalkboardTeacher />
        </div>
        <div className="stat-content">
          <h3>{stats.faculty}+</h3>
          <p>Faculty & Staff</p>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="stat-icon-wrapper">
          <FaGraduationCap />
        </div>
        <div className="stat-content">
          <h3>{stats.courses}+</h3>
          <p>Courses Offered</p>
        </div>
      </div>
             <div className="stat-card">
        <div className="stat-icon-wrapper">
          <FaChartLine />
        </div>
        <div className="stat-content">
          <h3>{stats.placements}%</h3>
          <p>Placement Rate</p>
        </div>
      </div>


    </div>
  </div>
</section>

      {/* ================= CAMPUS LIFE ================= */}
      <section className="campus-life-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <FaBuilding /> Campus Life
            </h2>
            <p className="section-subtitle">Experience our vibrant campus environment</p>
          </div>
          
          <div className="campus-slider-wrapper">
            <Slider {...campusSliderSettings} className="campus-slider">
              {campusLife.map((item) => (
                <div key={item.id} className="campus-slide">
                  <div className="campus-image-container">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="campus-overlay"></div>
                  </div>
                  <div className="campus-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          
          <div className="campus-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🏆</div>
              <h4>Sports Excellence</h4>
              <p>State-level achievements</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🎭</div>
              <h4>Cultural Events</h4>
              <p>Annual fest & competitions</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🔬</div>
              <h4>Research & Innovation</h4>
              <p>Projects & workshops</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LATEST NEWS SECTION ================= */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <FaNewspaper /> Latest News & Events
            </h2>
            <a href="/news" className="view-all-btn">
              View All News <FaExternalLinkAlt />
            </a>
          </div>
          
          <div className="news-grid">
            {news.slice(0, 3).map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-card-header">
                  <span className={`news-category category-${item.category.toLowerCase()}`}>
                    {item.category}
                  </span>
                  <span className="news-date">
                    <FaCalendarAlt /> {new Date(item.date).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="news-card-body">
                  <h3>{item.title}</h3>
                  <p>Stay updated with the latest happenings at our campus...</p>
                </div>
                <div className="news-card-footer">
                  <a href={`/news/${item.id}`} className="news-link">
                    Read More <FaChevronRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;