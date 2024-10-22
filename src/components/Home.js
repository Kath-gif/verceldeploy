
import React from 'react';
import './Home.css';
import MyProfile from '../assets/MyProfile.jpg';


const Home = () => {
  return (
    <section id="home" className="home-container">
      <img src={MyProfile} alt="Profile" className="profile-image" />
      <div className="home-text">
        <h1>Welcome to My Portfolio</h1>
        <p>My name is CATHRINA PATISAR, I'm a passionate developer who loves creating amazing applications.</p>
      </div>
    </section>
  );
};

export default Home;
