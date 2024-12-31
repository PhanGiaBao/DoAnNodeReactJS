import React from "react";
import "../css/Navbar.css";

const Navbar = ({ setMode }) => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="links">
        <a href="#home" onClick={() => setMode("home")}>
          Home
        </a>
        <a href="#favorites" onClick={() => setMode("favorites")}>
          Yêu thích
        </a>
        <a href="#playlist" onClick={() => setMode("playlist")}>
          Playlist
        </a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Tìm kiếm..." />
      </div>
      <div className="auth-links">
        <a href="#register" onClick={() => setMode("register")}>
          Đăng ký
        </a>
        <a href="#login" onClick={() => setMode("login")}>
          Đăng nhập
        </a>
      </div>
    </div>
  );
};

export default Navbar;
