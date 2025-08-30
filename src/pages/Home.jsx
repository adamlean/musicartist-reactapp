import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home | Music Artist";
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Method Man</h1>
          <p>Musician • Producer • Creator</p>
          <div className="hero-buttons">
            <button onClick={() => navigate("/discography")} className="btn">
              Explore Music
            </button>
            <button onClick={() => navigate("/gallery")} className="btn btn-outline">
              View Gallery
            </button>
          </div>
        </div>
      </section>

      <section className="latest">
        <h2>Latest Release</h2>
        <div className="release-card">
          <img src="/assets/img/methlab.jpg" alt="Meth Lab" />
          <div className="release-info">
            <h3>Meth Lab 3: The Rehab</h3>
            <span>2022</span>
            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="listen-link"
            >
              Listen on Spotify
            </a>
          </div>
        </div>
      </section>

      <section className="subscribe">
        <Subscribe />
      </section>
    </div>
  );
}

export default Home;
