import React from "react";

const handleLogout = () => {
  window.open(" https://accounts.spotify.com/en/logout");
};

export default function Footer() {
  return (
    <div className="homepage-footer">
      <p>Made out of love for Music &amp; Spotify</p>
      <span>|</span>
      <a
        href="https://github.com/hemani-gajjar/Topify#usage"
        target="_blank"
        rel="noreferrer"
      >
        About
      </a>
      <span>|</span>
      <a href="/" onClick={handleLogout}>
        Logout
      </a>
    </div>
  );
}
