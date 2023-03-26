import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="difdiv">

    <div className="p-heading">
        <h2>Projects</h2>
    </div>
    <div className="main-container">
      <div class="card">
        <div class="card-image">
          <img
            src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="user image"
            />
        </div>
        <div class="card-title">
          <p className = "p-heading">E-Commerce Website</p>
        </div>
        <div class="card-subtitle">
          <p>Using ReactJS</p>
        </div>
      </div>


      <div class="card">
        <div class="card-image">
          <img
            src="https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="user image"
            />
        </div>
        <div class="card-title">
          <p className = "p-heading">Railway Announcement System</p>
        </div>
        <div class="card-subtitle">
          <p>Using Python</p>
        </div>
      </div>


       <div class="card">
        <div class="card-image">
          <img
            src="https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="user image"
            />
        </div>
        <div class="card-title">
          <p className = "p-heading">Face Recognition System</p>
        </div>
        <div class="card-subtitle">
          <p>Using Python</p>
        </div>
      </div>


      <div class="card">
        <div class="card-image">
          <img
            src="https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="user image"
            />
        </div>
        <div class="card-title">
          <p className = "p-heading">Movie Recommendation System</p>
        </div>
        <div class="card-subtitle">
          <p>Using Python, HTML, CSS</p>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img
            src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="user image"
            />
        </div>
        <div class="card-title">
          <p className = "p-heading">OCR Engine</p>
        </div>
        <div class="card-subtitle">
          <p>Using HTML, CSS, JS</p>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="user image"
            />
        </div>
        <div class="card-title">
          <p className = "p-heading">Hotel Recommendation System</p>
        </div>
        <div class="card-subtitle">
          <p>Using Python, HTML, CSS</p>
        </div>
      </div>


      
    </div>
            </div>
            
  );
};

export default Cards;
