import "./CampusLife.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaCamera, FaFutbol, FaMusic, FaPaintBrush, FaTheaterMasks, FaUsers } from "react-icons/fa";
import { gallery } from "../data/dummyData";

const CampusLife = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const clubs = [
    {
      id: 1,
      name: 'Tech Club',
      icon: <FaCamera />,
      description: 'For tech enthusiasts and innovators',
      members: 150
    },
    {
      id: 2,
      name: 'Sports Club',
      icon: <FaFutbol />,
      description: 'Various sports activities and tournaments',
      members: 200
    },
    {
      id: 3,
      name: 'Music Club',
      icon: <FaMusic />,
      description: 'For music lovers and performers',
      members: 120
    },
    {
      id: 4,
      name: 'Drama Club',
      icon: <FaTheaterMasks />,
      description: 'Theatre and performing arts',
      members: 80
    },
    {
      id: 5,
      name: 'Art Club',
      icon: <FaPaintBrush />,
      description: 'Painting, sketching and creative arts',
      members: 90
    },
    {
      id: 6,
      name: 'Literary Club',
      icon: <FaUsers />,
      description: 'Debates, quizzes and literary activities',
      members: 110
    }
  ];

  const sportsFacilities = [
    'Cricket Ground', 'Football Field', 'Basketball Court', 'Tennis Court',
    'Swimming Pool', 'Gymnasium', 'Badminton Courts', 'Table Tennis'
  ];

  const culturalEvents = [
    {
      title: 'Annual Fest',
      description: '3-day cultural extravaganza',
      month: 'February'
    },
    {
      title: 'Tech Fest',
      description: 'Technical competitions and workshops',
      month: 'October'
    },
    {
      title: 'Sports Meet',
      description: 'Annual inter-college sports tournament',
      month: 'December'
    }
  ];

  const filteredGallery = activeCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  return (
    <div className="campus-life-page">
      {/* Hero Section */}
      <section className="campus-hero">
        <div className="container">
          <h1>Campus Life</h1>
          <p className="subtitle">Beyond Academics - A Vibrant Community</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Campus Gallery</h2>
          
          {/* Gallery Filter */}
          <div className="gallery-filter">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'Cultural' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Cultural')}
            >
              Cultural
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'Sports' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Sports')}
            >
              Sports
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'Technical' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Technical')}
            >
              Technical
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'Academic' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Academic')}
            >
              Academic
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredGallery.map(item => (
              <div key={item.id} className="gallery-item">
                <img src={item.image} alt={item.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <div className="gallery-category">{item.category}</div>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="view-all-btn">
            <button className="btn">View All Photos</button>
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="clubs-section">
        <div className="container">
          <h2 className="section-title">Clubs & Societies</h2>
          <div className="clubs-grid">
            {clubs.map(club => (
              <div key={club.id} className="club-card">
                <div className="club-icon">{club.icon}</div>
                <h3>{club.name}</h3>
                <p>{club.description}</p>
                <div className="club-members">
                  <FaUsers /> {club.members} Members
                </div>
                <button className="btn btn-small">Join Club</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="sports-section">
        <div className="container">
          <h2 className="section-title">Sports Facilities</h2>
          <div className="sports-facilities">
            {sportsFacilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <FaFutbol className="facility-icon" />
                <h4>{facility}</h4>
              </div>
            ))}
          </div>
          <div className="sports-achievements">
            <h3>Sports Achievements</h3>
            <div className="achievements-grid">
              <div className="achievement-card">
                <h4>Inter-University Champions</h4>
                <p>Basketball Tournament 2023</p>
              </div>
              <div className="achievement-card">
                <h4>State Level Winners</h4>
                <p>Cricket Tournament 2023</p>
              </div>
              <div className="achievement-card">
                <h4>National Participants</h4>
                <p>Athletics Championship 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Activities */}
      <section className="cultural-section">
        <div className="container">
          <h2 className="section-title">Cultural Activities</h2>
          <div className="events-slider">
            <Slider {...sliderSettings}>
              {culturalEvents.map((event, index) => (
                <div key={index} className="event-slide">
                  <div className="event-card">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <div className="event-month">{event.month}</div>
                    <button className="btn btn-small">Know More</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="cultural-highlights">
            <h3>Annual Events</h3>
            <ul className="events-list">
              <li>Freshers' Welcome Party</li>
              <li>Diwali Celebration</li>
              <li>Annual Day Celebration</li>
              <li>Farewell Party</li>
              <li>Festival Celebrations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="facilities-section">
        <div className="container">
          <h2 className="section-title">Campus Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-feature">
              <div className="feature-icon">🏠</div>
              <h4>Hostel Accommodation</h4>
              <p>Separate hostels for boys and girls with modern amenities</p>
            </div>
            <div className="facility-feature">
              <div className="feature-icon">🍽️</div>
              <h4>Cafeteria & Food Court</h4>
              <p>Multi-cuisine food options available</p>
            </div>
            <div className="facility-feature">
              <div className="feature-icon">🏥</div>
              <h4>Medical Center</h4>
              <p>24/7 medical facility with ambulance service</p>
            </div>
            <div className="facility-feature">
              <div className="feature-icon">📚</div>
              <h4>Central Library</h4>
              <p>1,00,000+ books and digital resources</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;