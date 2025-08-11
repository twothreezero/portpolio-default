import React from 'react';
import Project from '../routes/Project';

import './Home.css';

function Home() {
  return (
    <main className="home">
      <section className="main">
        <div className="container">
          {/* <img className="main__img" src="" alt="background" /> */}
          <div className="main__text">
            Pslam 23:1
          </div>
        </div>
      </section>
      <Project />
    </main>
  )
}

export default Home;