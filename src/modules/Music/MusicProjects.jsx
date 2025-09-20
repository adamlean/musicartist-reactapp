// src/components/MusicProjects.jsx
import "./MusicProjects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItunes, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";

function MusicProjects() {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-content">

          <div className="projects-image">
            <img src="/assets/img/blackout.jpg" alt="Project" />
          </div>

          <div className="projects-list">
            <div className="projects-item">
              <div className="projects-text">
                <h3>Project 1</h3>
                <div className="project-links">
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" title="Listen on Spotify">
                    {/* FontAwesome Spotify icon */}
                    <FontAwesomeIcon icon={faSpotify} />
                  </a>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" title="Listen on Spotify">
                    {/* FontAwesome Spotify icon */}
                    <FontAwesomeIcon icon={faItunes} />
                  </a>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" title="Listen on Spotify">
                    {/* FontAwesome Spotify icon */}
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-content">

          <div className="projects-image">
            <img src="/assets/img/wumassacre.jpeg" alt="Project" />
          </div>

          <div className="projects-list">
            <div className="projects-item">
              <div className="projects-text">
                <h3>Project 1</h3>
                <div className="project-links">
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" title="Listen on Spotify">
                    {/* FontAwesome Spotify icon */}
                    <FontAwesomeIcon icon={faSpotify} />
                  </a>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" title="Listen on Spotify">
                    {/* FontAwesome Spotify icon */}
                    <FontAwesomeIcon icon={faItunes} />
                  </a>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" title="Listen on Spotify">
                    {/* FontAwesome Spotify icon */}
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default MusicProjects;
