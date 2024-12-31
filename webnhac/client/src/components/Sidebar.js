import React, { useState } from "react";
import "../css/Sidebar.css";

const Sidebar = ({ playlists, onSelectPlaylist }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
    onSelectPlaylist(playlist); // Gửi playlist được chọn về parent component
  };

  return (
    <div className="sidebar">
      <h3>Danh sách Playlist</h3>
      <ul>
        {playlists.map((playlist, index) => (
          <li
            key={index}
            onClick={() => handlePlaylistClick(playlist)}
            className={playlist === selectedPlaylist ? "active" : ""}
          >
            {playlist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
