// src/components/MusicProjects.jsx
import "./MusicProjects.css";

function MusicProjects() {
  return (
    < section className="projectsmusic" >
      <div className="projectsmusic-container">
        <h2 className="projectmusic-title">Collaborations</h2>
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
  );
}

export default MusicProjects;
