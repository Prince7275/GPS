import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import About from "./pages/About";
import AcademicCalendar from "./pages/AcademicCalendar";
import Academics from "./pages/Academics";
import Admission from "./pages/Admissions";
import CampusLife from "./pages/CampusLife";
import Contact from "./pages/Contact";
import ContactFloat from "./components/Layout/ContactFloat";
import Courses from "./pages/Courses";
import Event from "./pages/Event";
import Faculty from "./pages/Faculty";
import Footer from "./components/layout/Footer";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Navbar from "./components/Layout/Navbar";
import NewsSection from "./components/home/NewsSection";
import Placements from "./pages/Placements";
import React from "react";
import ScrollToTop from "./components/common/ScrollTop";
import Sport from "./pages/Sport";
import StudentCorner from "./pages/StudentCorner";
import Syllabus from "./pages/Syllabus";
import Timetable from "./pages/TimeTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Fixed Contact Icons

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admission" element={<Admission />} />
            
            <Route path="/student-corner" element={<StudentCorner />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<NewsSection />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/calendar" element={<AcademicCalendar />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/events" element={<Event />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sports" element={<Sport />} />
            <Route path="/timetable" element={<Timetable />} />
            
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Fixed WhatsApp & Call Icons */}
        <ContactFloat />
      </div>
    </Router>
  );
}

export default App;
