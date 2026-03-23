import "./NewsSection.css";
import React, { useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaNewspaper } from "react-icons/fa";

const NewsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsItems = [
   
    {
      id: 1,
      title: 'Admissions Open for 2026-27 Batch',
      date: '2026-03-10',
      description: 'Admissions open for CSE, EE, and ME. Join us for quality education and a bright career.',
      category: 'admission',
      image: './images/admission.png'
    },

     {
      id: 2,
      title: 'Parent Teacher Meeting Scheduled',
      date: '2026-02-14',
      description: 'Parent-teacher meetings scheduled for all classes. Please check your email for meeting details.',
      category: 'event',
      image: './images/ptm.jpg'
    },
    {
      id: 3,
      title: 'Industrial Visit to Tech Park',
      date: '2026-02-24',
      description: 'Students and faculty visited a leading tech park to gain insights into industry practices.',
      category: 'event',
      image: './images/ind.jpg'
    },
    {
      id: 4,
      title: 'Dr. Ambedkar Jayanti Celebration',
      date: '2026-04-14',
      description: 'Celebrating the birth anniversary of Dr. B.R. Ambedkar with cultural programs and awareness sessions.',
      category: 'cultural',
      image: './images/amb.jpg'
    },
    {
      id: 5,
      title: 'Sports Tournament Winners',
      date: '2026-03-12',
      description: 'Our Kabaddi team wins inter-college tournament. Celebration ceremony scheduled.',
      category: 'sports',
      image: '/images/sport.png'
    },
    {
      id: 6,
      title: 'Health Check-up Camp Organized',
      date: '2026-02-26',
      description: 'Comprehensive health check-up camp organized for all students and faculty members.',
      category: 'facilities',
      image: './images/health.jpg'
    }
  ];

  const categories = [
    { id: 'all', label: 'All News' },
    { id: 'event', label: 'Events' },
    { id: 'admission', label: 'Admissions' },
    { id: 'achievement', label: 'Achievements' },
    { id: 'placement', label: 'Placements' },
    { id: 'sports', label: 'Sports' },
    { id: 'facilities', label: 'Facilities' }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header">
          <div className="header-content">
            <FaNewspaper className="section-icon" />
            <h2 className="section-title">Latest News & Notices</h2>
          </div>
          <a href="/news" className="view-all-btn">
            View All <FaArrowRight />
          </a>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="news-grid">
          {filteredNews.map(news => (
            <div key={news.id} className="news-card">
              <div className="news-image">
                <img src={news.image} alt={news.title} />
                <div className="news-category">{news.category.toUpperCase()}</div>
              </div>
              <div className="news-content">
                <div className="news-date">
                  <FaCalendarAlt /> {formatDate(news.date)}
                </div>
                <h3 className="news-title">{news.title}</h3>
                <p className="news-description">{news.description}</p>
                <a href={`/news/${news.id}`} className="read-more">
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="no-news">
            <p>No news available for this category.</p>
          </div>
        )}

        
      </div>
    </section>
  );
};

export default NewsSection;