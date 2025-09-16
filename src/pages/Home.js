import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="feed">
        {/* Posts will go here */}
        <h2>Instagram Feed</h2>
      </div>
      <div className="sidebar">
        {/* Stories and suggestions will go here */}
        <h3>Stories</h3>
        <h3>Suggestions For You</h3>
      </div>
    </div>
  );
};

export default Home;
