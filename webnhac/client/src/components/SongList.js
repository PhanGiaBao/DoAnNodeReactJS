import React from 'react';
import "../css/SongList.css";

const SongList = ({ songs, onSelectSong }) => {
  return (
    <div className="song-list">
      <h3>Danh sách nhạc</h3>
      <ul>
        {songs.map((song, index) => (
          <li key={index} onClick={() => onSelectSong(song)}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
