// src/pages/Albums.jsx
import React, { useEffect } from "react";
import albumsData from "../data/albums.json";
import AlbumCard from "../components/AlbumCard";
import Subscribe from "../components/Subscribe";
import "./Albums.css";

function Albums() {
  useEffect(() => {
    document.title = "Albums | Music Artist";
  }, []);

  return (
    <main className="content">
      <div className="albums-section">
        <div className="container">
          <div className="albums-gallery">
            <div className="discography-grid">
              {albumsData.map((album, index) => (
                <AlbumCard key={index} album={album} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
    </main>
  );
}

export default Albums;
