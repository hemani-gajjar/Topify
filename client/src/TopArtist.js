import React from "react";

export default function TopTrack({ artist }) {
  return (
    <div className="top-artist-card">
      <a href={artist.uri}>
        <img src={artist.image} alt="artist" className="top-artist-img" />
      </a>
      <div className="title">{artist.name}</div>
    </div>
  );
}
