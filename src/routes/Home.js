import React from 'react';
import Project from '../routes/Project';

import './Home.css';

function Home() {
  return (
    <main className="home">
      <section className="main">
        <div className="container">
          <div className="main__text">
            요 8:32 진리를 알지니 진리가 너희를 자유롭게 하리라
          </div>
        </div>
      </section>
      <Project />
    </main>
  )
}

export default Home;