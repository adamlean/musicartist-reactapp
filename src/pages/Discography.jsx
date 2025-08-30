import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Discography.css";
import Subscribe from "../components/Subscribe";

function Discography() {
  useEffect(() => {
    document.title = 'Discography | Music Artist';
  }, []);

  return (
    <main className='content'>


      {/* Chronology + Albums */}
      <section className="albums-section">
        <div className="container">
          <div className="latest-release">
            <h2>Chronology</h2>
            <ul>
              <li>Tical<span>(1994)</span></li>
              <li>Tical 2000: Judgement Day<span>(1998)</span></li>
              <li>Tical 0: The Prequel<span>(2004)</span></li>
              <li>4:21... The Day After<span>(2006)</span></li>
              <li>The Meth Lab<span>(2015)</span></li>
              <li>Meth Lab Season 2: The Lithium<span>(2018)</span></li>
              <li>Meth Lab Season 3: The Rehab<span>(2022)</span></li>
              <li>Blackout! (with Redman)<span>(1999)</span></li>
              <li>Blackout! 2 (with Redman)<span>(2009)</span></li>
              <li>Wu-Massacre (with Ghostface Killah and Raekwon)<span>(2010)</span></li>
            </ul>
            <Link to="/albums" className="library_buttom">
              Explore Library
            </Link>
          </div>

          <div className="albums-gallery">
            <h2>ALBUMS</h2>
            <div className="gallery-grid">
              <div className="album-card">
                <img src="/assets/img/tical.jpg" alt="Tical" />
                <div className="info-row">
                  <div className="info">
                    <p>Tical</p>
                    <span>1994</span>
                  </div>
                  <div className="actions">
                    <a
                      href="https://www.example.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Listen"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="album-card">
                <img src="/assets/img/methlab.jpg" alt="Meth Lab" />
                <div className="info-row">
                  <div className="info">
                    <p>Meth Lab</p>
                    <span>2015</span>
                  </div>
                  <div className="actions">
                    <a
                      href="https://www.example.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Listen"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="album-card">
                <img src="../assets/img/blackout.jpg" alt="Blackout!" />
                <div className="info-row">
                  <div className="info">
                    <p>Blackout!</p>
                    <span>1999</span>
                  </div>
                  <div className="actions">
                    <a
                      href="https://www.example.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Listen"
                    >
                      <i className="fa-brands fa-soundcloud"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="album-card">
                <img src="../assets/img/wumassacre.jpeg" alt="Wu-Massacre" />
                <div className="info-row">
                  <div className="info">
                    <p>Wu-Massacre</p>
                    <span>2010</span>
                  </div>
                  <div className="actions">
                    <a
                      href="https://www.example.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Listen"
                    >
                      <i className="fa-brands fa-soundcloud"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Projects */}
      <section className="projectsmusic-section">
        <div className="projectsmusic-container">
          <h2>Music Projects</h2>
          <div className="projectsmusic-grid">
            <div className="projectmusic-card">
              <div className="project-info">
                <h3>Method Man & Redman</h3>
                <p>
                  Collaboration 2000s
                  <span>2000s</span>
                </p>
                <div className="project-meta">
                  <a
                    href="https://www.example.com/"
                    className="live-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spotify
                  </a>

                </div>
              </div>
            </div>

            <div className="projectmusic-card">
              <div className="project-info">
                <h3>Wu Massacre</h3>
                <p>
                  Method Man with Chostface Killah, Raekwon
                  <span>2010</span>
                </p>
                <div className="project-meta">
                  <a
                    href="https://www.example.com/"
                    className="live-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spotify
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Subscribe />
    </main>

  );
};

export default Discography;
