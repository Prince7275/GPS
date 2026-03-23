import "./Contact.css";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaClock, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const heroRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentFAQ, setCurrentFAQ] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const typingWords = ['संपर्क स्थापित करें', 'हमसे संपर्क करें', 'संपर्क करें', 'हमसे जुड़ें'];
  const typingSpeed = 100;
  const pauseDuration = 2000;

  // Handle scroll effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for hero visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentWord = typingWords[typingIndex];
    
    if (typingText.length < currentWord.length) {
      const timeout = setTimeout(() => {
        setTypingText(currentWord.substring(0, typingText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypingText('');
        setTypingIndex((prev) => (prev + 1) % typingWords.length);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }
  }, [typingText, typingIndex]);

  // FAQ auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFAQ((prev) => (prev + 1) % faqData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      alert('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);
    } else {
      setErrors(validationErrors);
      // Scroll to first error
      const firstError = Object.keys(validationErrors)[0];
      document.getElementById(firstError)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Campus Location',
      details: 'Hardi, Hasanpur, Magahar, Tahsil-Sahjanwa, Gorakhpur - 273209, Uttar Pradesh',
      link: 'https://goo.gl/maps/your-location',
      color: '#3B82F6'
    },
    {
      icon: <FaPhone />,
      title: 'Phone Support',
      details: '+91 8709413223\n+91 9876543210',
      link: 'tel:+918709413223',
      color: '#10B981'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      details: 'govtpolytechnicsahjanwa@gmail.com\ninfo@polytechnic.edu',
      link: 'mailto:govtpolytechnicsahjanwa@gmail.com',
      color: '#8B5CF6'
    },
    {
      icon: <FaClock />,
      title: 'Office Hours',
      details: 'Mon-Sat: 9:00 AM - 5:00 PM\nSunday: Closed',
      link: null,
      color: '#F59E0B'
    }
  ];

  const departments = [
    { 
      name: 'Admission Office', 
      phone: '+91 9876543210', 
      email: 'admissions@polytechnic.edu',
      icon: '📚',
      color: '#3B82F6'
    },
    { 
      name: 'Placement Cell', 
      phone: '+91 9876543211', 
      email: 'placement@polytechnic.edu',
      icon: '💼',
      color: '#10B981'
    },
    { 
      name: 'Examination Cell', 
      phone: '+91 9876543212', 
      email: 'exams@polytechnic.edu',
      icon: '📝',
      color: '#8B5CF6'
    },
    { 
      name: 'Accounts Office', 
      phone: '+91 9876543213', 
      email: 'accounts@polytechnic.edu',
      icon: '💰',
      color: '#F59E0B'
    },
  ];

  const faqData = [
    {
      question: "What are the admission requirements?",
      answer: "Admission requires 10th/12th pass certificate with minimum 45% marks. Visit admissions page for program-specific requirements."
    },
    {
      question: "How can I visit the campus?",
      answer: "Campus tours available Mon-Fri 10AM-4PM. Schedule through website or call admission office."
    },
    {
      question: "What are the office hours?",
      answer: "Administrative offices: Mon-Sat 9AM-5PM. Sunday & holidays closed."
    },
    {
      question: "How can I apply for scholarships?",
      answer: "Apply online through scholarship portal. Deadlines and requirements available on website."
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, name: 'Facebook', url: 'https://facebook.com', color: '#1877F2' },
    { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com', color: '#1DA1F2' },
    { icon: <FaLinkedinIn />, name: 'LinkedIn', url: 'https://linkedin.com', color: '#0A66C2' },
    { icon: <FaInstagram />, name: 'Instagram', url: 'https://instagram.com', color: '#E4405F' },
    { icon: <FaYoutube />, name: 'YouTube', url: 'https://youtube.com', color: '#FF0000' },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section with typing animation */}
      <section 
        ref={heroRef}
        className={`contact-hero ${isHeroVisible ? 'visible' : ''}`}
        id="hero"
      >
        {/* Gradient Overlays */}
        <div className="hero-gradient-overlay"></div>
        <div className="hero-pattern-overlay"></div>
        
        <div className="container hero-container">
          <div className="hero-content">
            {/* Animated text elements */}
            <div className="hero-text-wrapper">
              <div className="hero-badge">
                <div className="badge-pulse"></div>
              </div>
              
              <h1 className="hero-title">
                
                <span className="title-line highlight">
                  <span className="typing-text">{typingText}</span>
                  <span className="cursor">|</span>
                </span>
              </h1>
              
              <p className="hero-subtitle">
                प्रवेश, जानकारी या किसी भी सहायता के लिए हमारी समर्पित टीम से संपर्क करें। हम आपके शैक्षणिक लक्ष्यों को प्राप्त करने में आपकी सहायता के लिए प्रतिबद्ध हैं।
                </p>
            </div>

            {/* Stats Cards */}
            <div className="hero-stats-container">
              <div className="stats-card">
                <div className="stat-item">
                  <div className="stat-icon">📧</div>
                  <div className="stat-content">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Email Support</div>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">⏱️</div>
                  <div className="stat-content">
                    <div className="stat-number">2h</div>
                    <div className="stat-label">Avg. Response</div>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">⭐</div>
                  <div className="stat-content">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div 
              className="scroll-indicator" 
              onClick={() => handleScrollToSection('contact-info')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleScrollToSection('contact-info')}
            >
              <FaChevronDown className="scroll-icon" />
              <span className="scroll-text">Scroll to explore</span>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="hero-decorations">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
        </div>
      </section>

      {/* Contact Information - 2 cards per row on mobile */}
      <section className="contact-info-section" id="contact-info">
        <div className="container">
          <h2 className="section-title animate-title">Contact Information</h2>
          <p className="section-subtitle">Multiple ways to reach us</p>
          
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="info-card"
                style={{ '--card-color': info.color }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-icon-wrapper">
                  <div className="card-icon" style={{ backgroundColor: `${info.color}15` }}>
                    <span style={{ color: info.color }}>{info.icon}</span>
                  </div>
                  <div className="pulse-effect"></div>
                </div>
                <h3>{info.title}</h3>
                <p className="info-details">{info.details}</p>
                {info.link && (
                  <a 
                    href={info.link} 
                    className="info-link"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    {info.link.startsWith('tel') ? 'Call Now' : 
                     info.link.startsWith('mailto') ? 'Send Email' : 
                     'Get Directions'}
                    <span className="link-arrow">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="contact-container">
            {/* Contact Form */}
            <div className="contact-form-wrapper" data-aos="fade-right">
              <div className="form-header">
                <h2 className="section-title">Send Message</h2>
                <p className="form-subtitle">We usually respond within 2 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span className="error-message" id="name-error">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span className="error-message" id="email-error">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span className="error-message" id="phone-error">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input ${errors.subject ? 'error' : ''}`}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <span className="error-message" id="subject-error">
                        {errors.subject}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Please write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <span className="error-message" id="message-error">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button 
                  type="submit" 
                  className={`btn-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? "Sending message..." : "Send message"}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="map-wrapper" data-aos="fade-left">
              <div className="map-header">
                <h2 className="section-title">Visit Our Campus</h2>
                <p className="map-subtitle">Located in the heart of Gorakhpur</p>
              </div>
              
              <div className="map-container">
                <div className="map-placeholder">
                  <iframe
                    title="College Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.9951561514513!2d83.14800507430148!3d26.744530667300054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39913bc0377e6d4d%3A0x716e8a01cbcc7b9f!2sRajkiya%20Polytechnic%20Hardi%20bhiti%20Rawat%20sahjanwa%20gorakhpur%20273209!5e0!3m2!1sen!2sin!4v1770169719695!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                <div className="map-info">
                  <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <div>
                      <h4>How to Reach</h4>
                      <p>15 mins from Gorakhpur Railway Station, 45 mins from Airport</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts - 2 cards per row on mobile */}
      <section className="departments-section" id="departments">
        <div className="container">
          <h2 className="section-title animate-title">Department Contacts</h2>
          <p className="section-subtitle">Direct contacts for specific departments</p>
          
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div 
                key={index} 
                className="dept-card"
                style={{ '--dept-color': dept.color }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="dept-icon">{dept.icon}</div>
                <h3>{dept.name}</h3>
                <div className="dept-contact">
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <a href={`tel:${dept.phone}`} className="contact-link">{dept.phone}</a>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <a href={`mailto:${dept.email}`} className="contact-link">{dept.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section with auto-rotation */}
      <section className="faq-section" id="faq">
        <div className="container">
          <h2 className="section-title animate-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Quick answers to common questions</p>
          
          <div className="faq-container">
            <div className="faq-display" data-aos="fade-up">
              <div className="faq-question">
                <span className="question-icon">❓</span>
                <h3>{faqData[currentFAQ].question}</h3>
              </div>
              <div className="faq-answer">
                <p>{faqData[currentFAQ].answer}</p>
              </div>
            </div>
            
            <div className="faq-navigation">
              {faqData.map((_, index) => (
                <button
                  key={index}
                  className={`faq-dot ${index === currentFAQ ? 'active' : ''}`}
                  onClick={() => setCurrentFAQ(index)}
                  aria-label={`Go to question ${index + 1}`}
                  aria-current={index === currentFAQ}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {isScrolled && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <FaChevronDown className="back-to-top-icon" />
        </button>
      )}
    </div>
  );
};

export default Contact;