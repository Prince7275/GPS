import "./Navbar.css";
import DarkModeToggle from "../common/DarkModeToggle";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const mobileNavRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open");
      // Focus first item for accessibility
      setTimeout(() => {
        const firstLink = mobileNavRef.current?.querySelector("a");
        firstLink?.focus();
      }, 100);
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    {
      path: "/academics",
      label: "Academics",
      dropdown: [
        
        { path: "/courses", label: "Courses" },
        { path: "/faculty", label: "Faculty" },
        { path: "/calendar", label: "Academic Calendar" },
      ],
    },
    { path: "/admission", label: "Admissions" },
    {
      path: "/student-corner",
      label: "Student Corner",
      dropdown: [
        { path: "/syllabus", label: "Syllabus" },
        { path: "/timetable", label: "Time Table" },
        
      ],
    },
    { 
      path: "/campus-life", 
      label: "Campus Life",
      dropdown: [
        { path: "events", label: "Events & Activities" },
        { path: "gallery", label: "Photo Gallery" },
        { path: "/sports", label: "Sports Facilities" },
      ]
    },
   
    { path: "/contact", label: "Contact Us" },
     { path: "/news", label: "NewsSection" },
  
  ];

  const handleDropdownToggle = (path) => {
    setActiveDropdown(activeDropdown === path ? null : path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* TOP HEADER SECTION - Collapses on scroll */}
      <div className={`header-section ${scrolled ? "collapsed" : ""}`}>
        <div className="container">
          <div className="logo-wrapper">
            {/* Left Logo - Visible on mobile */}
            <div className="logo-container left">
              <img
                src="/images/csc.png"
                alt="Govt Polytechnic Sahjanwa Logo"
                className="college-logo"
                loading="lazy" title="CSC Academy"
              />
            </div>

            {/* Center Title & Info */}
            <div className="college-info">
              <Link to="/" className="college-title-link">
                {/* Desktop version */}
                <h1 className="college-name">
                  Government Polytechnic Sahjanwa
                </h1>
                
                {/* Mobile version - Two lines */}
                <div className="college-name-mobile">
                  <h2 className="college-name-mobile-line1">
                    Government Polytechnic
                  </h2>
                  <p className="college-name-mobile-line2">
                    Sahjanwa, Gorakhpur
                  </p>
                </div>

                <div className="college-details">
                  <p className="college-tagline">Gorakhpur, Uttar Pradesh</p>
                  <p className="college-affiliation">
                    An Autonomous Institute of the Government of Uttar Pradesh,
                    Operated by CSC under Public–Private Partnership (PPP) Model
                  </p>
                </div>
              </Link>
            </div>

            {/* Right Logo - Visible on mobile */}
            <div className="logo-container right">
              <img
                src="/images/college-logo.png"
                alt="CSC Academy Logo"
                className="college-logo csc-logo"
                loading="lazy" title="Government Polytechnic Sahjanwa Gorakhpur"
              />
            </div>
          </div>
        </div>
      </div>

      {/* STICKY MENU BAR SECTION */}
      <div className={`menu-bar ${scrolled ? "scrolled" : ""}`}>
        <div className="menu-bar-inner">
          <div className="container">
            <div className="menu-container">
              {/* Logo for scrolled state */}
              <Link to="/" className={`scrolled-logo ${scrolled ? "visible" : ""}`}>
                <img 
                  src="/images/csc.png" 
                  alt="Govt Polytechnic Sahjanwa" 
                  className="compact-logo"
                  loading="lazy"
                />
                <span>GPS Sahjanwa</span>
              </Link>
              
              {/* DESKTOP NAVIGATION */}
              <div className="desktop-nav">
                {navLinks.map((link) => (
                  <div 
                    key={link.path} 
                    className={`nav-item ${link.dropdown ? "has-dropdown" : ""} 
                      ${activeDropdown === link.path ? "active-dropdown" : ""}`}
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.path)}
                    onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                  >
                    {link.dropdown ? (
                      <div className="dropdown-wrapper">
                        <button 
                          className="dropdown-toggle"
                          onClick={() => handleDropdownToggle(link.path)}
                          aria-expanded={activeDropdown === link.path}
                          aria-haspopup="true"
                        >
                          {link.label} <FaChevronDown size={10} className="dropdown-icon" />
                        </button>
                        <div className="dropdown-content">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="dropdown-link"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `nav-link ${isActive ? "active" : ""}`
                        }
                        onClick={() => setActiveDropdown(null)}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>

              {/* RIGHT CONTROLS - Mobile toggle on far right */}
              <div className="menu-actions">
                <DarkModeToggle />
                
                <button
                  className="mobile-toggle"
                  onClick={toggleMobileMenu}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION - Fixed Full Screen */}
      {isMobileMenuOpen && (
        <div className="mobile-nav" ref={mobileNavRef}>
          <div className="mobile-nav-header">
            <div className="mobile-nav-logo-container">
              <img 
                src="/images/college-logo.png" 
                alt="College Logo" 
                className="mobile-nav-logo"
              />
              <h2 className="mobile-nav-title">GPS</h2>
            </div>
            <button
              className="mobile-close-btn"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="mobile-nav-content">
            {navLinks.map((link) => (
              <div key={link.path} className="mobile-nav-item">
                {link.dropdown ? (
                  <>
                    <button 
                      className="mobile-dropdown-toggle"
                      onClick={() => handleDropdownToggle(link.path)}
                      aria-expanded={activeDropdown === link.path}
                    >
                      {link.label}
                      <FaChevronDown 
                        size={14} 
                        className={activeDropdown === link.path ? "rotated" : ""} 
                      />
                    </button>
                    {activeDropdown === link.path && (
                      <div className="mobile-dropdown">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="mobile-dropdown-link"
                            onClick={toggleMobileMenu}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? "active" : ""}`
                    }
                    onClick={toggleMobileMenu}
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
          
          <div className="mobile-nav-footer">
            <div className="mobile-contact">
              <p><strong>Helpline:</strong> +91 98765 43210</p>
              <p><strong>Email:</strong> info@gpssahjanwa.ac.in</p>
            </div>
            <div className="mobile-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">t</a>
              <a href="#" aria-label="Instagram">i</a>
              <a href="#" aria-label="YouTube">y</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;