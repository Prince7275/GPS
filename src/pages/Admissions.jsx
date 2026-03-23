import "./Admissions.css";
import React from "react";

const Admission = () => {
  return (
    <div className="admission-wrapper">

      {/* HERO */}
      <section className="admission-hero">
        <h1 className="moving-text">Admission Open 2026-27</h1>
        <p>Admissions Open: Government and Private seats are available.
Eligible students are invited to apply and secure their seats.</p>
      </section>

      {/* FLOW */}
      <section className="flow-section">
        <div className="flow-card">
          <span>1</span>
          <h3>Apply JEECUP</h3>
          <p>JEECUP entrance exam is compulsory for Government & Private seats</p>
        </div>

        <div className="flow-card">
          <span>2</span>
          <h3>Entrance Exam</h3>
          <p>Appear in JEECUP (Group A / Group K – Lateral Entry)</p>
        </div>

        <div className="flow-card">
          <span>3</span>
          <h3>Counselling</h3>
          <p>Online choice filling & seat allotment</p>
        </div>

        <div className="flow-card">
          <span>4</span>
          <h3>Admission</h3>
          <p>Document verification & fee submission at institute</p>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="info-section">
        <div className="info-card">
          <h2>Eligibility Criteria</h2>
          <ul>
            <li>Passed 10th (35% marks required)</li>
            <li>Maths & Science compulsory (Engineering Diploma)</li>
            <li>No age limit for JEECUP</li>
            <li>JEECUP required for both Government & Private seats</li>
          </ul>
        </div>

        <div className="info-card lateral">
          <h2>Lateral Entry (2nd Year Direct)</h2>
          <ul>
            <li>10+2 (Science) OR ITI passed</li>
            <li>Admission directly in 2nd year</li>
            <li>JEECUP Group K mandatory</li>
            <li>Limited seats available</li>
          </ul>
        </div>
      </section>

      {/* FEES */}
      <section className="fee-section">
        <h2>Fee Structure</h2>

        <div className="fee-grid">
          <div className="fee-box govt">
            <h3>Government Seat</h3>
            <p>₹ 10,500 / Year</p>
            <span>JEECUP Required</span>
          </div>

          <div className="fee-box private">
            <h3>Private Seat</h3>
            <p>₹ 30,150 / Year</p>
            <span>JEECUP Required</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Admission;
