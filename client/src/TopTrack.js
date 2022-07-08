import React from "react";

export default function TopTrack({ track }) {
  return (
    <div className="top-track-card">
      <a href={track.uri}>
        <img src={track.albumUrl} alt="track-cover" />
      </a>
      <div className="title">{track.title.substring(0, 20)}</div>
      <div className="text-mute">{track.artist}</div>
    </div>
  );
}
