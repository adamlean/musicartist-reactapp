// src/components/AlbumCard.jsx
import React from "react";

function AlbumCard({ album }) {
  return (
    <div className="album-card">
      <img src={album.cover} alt={album.title} />
      <div className="info-row">
        <div className="info">
          <p>{album.title}</p>
          <span>{album.date}</span>
        </div>
        {album.link && (
          <div className="actions">
            <a href={album.link} target="_blank" rel="noopener noreferrer" title="Listen">
              <i className={album.icon}></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default AlbumCard;
