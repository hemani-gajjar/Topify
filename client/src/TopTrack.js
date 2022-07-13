import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import { alpha } from "@mui/material";

export default function TopTrack({ track }) {
  return (
    <Tooltip
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: alpha("#3c3f5f", 0.98),
            "& .MuiTooltip-arrow": {
              color: alpha("#3c3f5f", 0.98),
            },
            minWidth: 350,
          },
        },
      }}
      title={
        <React.Fragment>
          <Typography
            sx={{
              p: 2,
              minWidth: 300,
              textAlign: "left",
            }}
          >
            <Typography color="#FBFBFB">
              {track.index} {track.title}
            </Typography>
            {track.type === "SINGLE" ? (
              <>
                <Typography
                  color="#FBFBFB"
                  sx={{
                    minWidth: 300,
                  }}
                >
                  {" "}
                  Single By{" "}
                  <strong>
                    <span style={{ color: "darkgrey" }}>{track.artist}</span>
                  </strong>
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  color="#FBFBFB"
                  sx={{
                    minWidth: 300,
                  }}
                >
                  {" "}
                  Track By{" "}
                  <strong>
                    <span style={{ color: "darkgrey" }}>{track.artist}</span>
                  </strong>
                </Typography>
                <Typography color="#FBFBFB">
                  Appears on the album
                  <span style={{ color: "darkgrey" }}>
                    {" "}
                    <strong>{track.albumName}</strong>{" "}
                  </span>
                </Typography>
                <Typography color="#FBFBFB">
                  Track No. {track.trackNumber} of {track.totalTracks}
                </Typography>
              </>
            )}

            <Typography color="#FBFBFB">
              Popularity on Spotify - {track.popularity}
            </Typography>

            <Typography color="#FBFBFB">
              Released on {track.releaseDate}
            </Typography>
          </Typography>
        </React.Fragment>
      }
      arrow
    >
      <div className="top-track-card">
        <a href={track.uri}>
          <img src={track.albumUrl} alt="track-cover" />
        </a>
        <div className="title">{track.title.substring(0, 20)}</div>
        <div className="text-mute">{track.artist}</div>
      </div>
    </Tooltip>
  );
}
