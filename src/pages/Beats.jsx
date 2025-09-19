import React, { useEffect } from 'react';
import TrackList from '../modules/Music/Tracklist';

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
    </main>
  );
}

export default Beats;
