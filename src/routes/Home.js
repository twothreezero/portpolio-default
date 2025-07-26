import React from 'react';
import Project from '../routes/Project';
import './Home.css';

function Home() {
  return (
    <main className="home">
      <section className="main">
        <div className="container">
          <div className="text-area">
            <p>Psalm 23:1</p>
          </div>
        </div>
      </section>
      <Project />
    </main>
  )
}

export default Home;