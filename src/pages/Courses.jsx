import "./Courses.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    name: "Computer Science & Engineering",
    description:
      "Explore the world of computing, programming, and modern software development.",
    status: "Running",
    image: "./images/cse.jpeg",
  },
  {
    id: 2,
    name: "Electrical Engineering",
    description:
      "Learn about electrical systems, circuits, and sustainable energy solutions.",
      status: "Running",
    image: "./images/ee.jpg",
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    description:
      "Dive into mechanics, robotics, and advanced manufacturing processes.",
    status: "Running",
    image: "./images/me.jpg",
  },
  {
    id: 4,
    name: "Artificial Intelligence & Machine Learning",
    description:
    "Upcoming course: Prepare for the future of AI and cutting-edge ML technologies.",
    status: "Upcoming",
    image: "./images/aiml.jpg",
  },
];

const Courses = () => {
  const navigate = useNavigate();
  return (
    <div className="courses-page-c">
      <h1 className="courses-title-c">Our Courses</h1>
      <div className="courses-container-c">
        {coursesData.map((course) => (
          <div
            className={`course-card-c ${
              course.status === "Upcoming" ? "upcoming" : ""
            }`}
            key={course.id}
          >
            <div className="course-image-c">
              <img src={course.image} alt={course.name} />
              {course.status === "Upcoming" && (
                <span className="badge-c">Upcoming</span>
              )}
            </div>
            <div className="course-info-c">
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              {course.status === "Running" && (
                <button className="btn-enroll-c" onClick={() => navigate("/admission")}>Enroll Now</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
