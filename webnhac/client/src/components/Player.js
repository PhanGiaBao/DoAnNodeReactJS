import React from "react";
import "../css/MusicPlayer.css"; // Đảm bảo CSS của bạn có các kiểu cho player.

const Player = ({ currentSong }) => {
  return (
    <div className="player-container">
      {currentSong ? (
        <div className="current-song">
          <h3>Now Playing</h3>
          <p>{currentSong.title} - {currentSong.artist}</p>
          <audio controls src={currentSong.url} autoPlay />
        </div>
      ) : (
        <p>No song selected</p>
      )}
    </div>
  );
};

export default Player;