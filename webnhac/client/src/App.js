import React, { useState } from "react";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SongList from './components/SongList';
import Player from './components/Player';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './styles.css';

function App() {
  const [mode, setMode] = useState("home");
  const [currentSong, setCurrentSong] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  const playlists = [
    {
      name: "Playlist 1",
      songs: [
        { title: "Gió", artist: "Nghệ sĩ ?", url: "/music/wind.mp3" },
        { title: "Hoa Cỏ Lau", artist: "Nghệ sĩ ??", url: "/music/Hoa Cỏ Lau.mp3" },
      ],
    },
    {
      name: "Playlist 2",
      songs: [
        { title: "Bài hát 2.1", artist: "Nghệ sĩ ???", url: "/music/Bác Đang Cùng Chúng Cháu Hành Quân.mp3" },
        { title: "Bài hát 2.2", artist: "Nghệ sĩ 2", url: "/music/31072 Lofi Ver.mp3" },
      ],
    },
  ];

  const handleSelectPlaylist = (playlist) => {
    setCurrentPlaylist(playlist.songs);
  };

  const handleSelectSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="App">
      <Navbar setMode={setMode} />
      <div className="main-content">
        {mode === "home" && (
          <>
            <Sidebar playlists={playlists} onSelectPlaylist={handleSelectPlaylist} />
            <div className="content">
              <SongList songs={currentPlaylist} onSelectSong={handleSelectSong} />
            </div>
          </>
        )}
        {mode === "login" && <LoginForm />}
        {mode === "register" && <RegisterForm />}
      </div>
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
