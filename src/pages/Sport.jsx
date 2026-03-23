import "./Sport.css";
import React from "react";

const sportsData = [
  {
    name: "Cricket",
    image: "/sports/cricket.jpg",
    desc: "Inter-college & annual cricket tournaments.",
  },
  {
    name: "Football",
    image: "/sports/football.jpg",
    desc: "Team spirit and competitive football matches.",
  },
  {
    name: "Volleyball",
    image: "/sports/volleyball.jpg",
    desc: "Indoor & outdoor volleyball championships.",
  },
  {
    name: "Badminton",
    image: "/sports/badminton.jpg",
    desc: "Singles & doubles badminton competitions.",
  },
  {
    name: "Kabaddi",
    image: "/sports/kabaddi.jpg",
    desc: "Traditional sport with strength and strategy.",
  },
  {
    name: "Athletics",
    image: "/sports/athletics.jpg",
    desc: "Track & field events for all students.",
  },
];

const Sport = () => {
  return (
    <div className="sport-page">
      {/* HERO */}
      <div className="sport-hero">
        <h1>Sports & Games</h1>
        <p>Building Strength, Discipline & Team Spirit</p>
      </div>

      {/* SPORTS GRID */}
      <div className="sport-grid">
        {sportsData.map((sport, index) => (
          <div className="sport-card" key={index}>
            <img src={sport.image} alt={sport.name} />
            <div className="sport-overlay">
              <h2>{sport.name}</h2>
              <p>{sport.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sport;
