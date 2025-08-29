import React, { useEffect } from 'react';
import TrackList from '../components/Tracklist';
import Subscribe from "../components/Subscribe";

function Beats() {
  useEffect(() => {
    document.title = 'Beats | Music Artist';
  }, []);

  return (
    <main className='container'>
      <div className="tracks-section">
        <TrackList />
      </div>
      );
      <Subscribe />
    </main>
  );
}

export default Beats;
