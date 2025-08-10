import React from 'react';
import Project from '../routes/Project';
import './Home.css';

function Home() {
  return (
    <main className="home">
      <section className="main">
        <div className="container">
          <div className="text-area">
            Pslam 23:1
          </div>
        </div>
      </section>
      <Project />
    </main>
  )
}

export default Home;