import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
import { alpha } from "@mui/material";

export default function TopTrack({ artist }) {
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
              {artist.index} {artist.name}
            </Typography>

            <Typography
              color="#FBFBFB"
              sx={{
                minWidth: 300,
              }}
            >
              {" "}
              Genres -{" "}
              <strong>
                <span style={{ color: "darkgrey" }}>
                  {artist.genres.join(", ")}
                </span>
              </strong>
            </Typography>

            <Typography color="#FBFBFB">
              Popularity on Spotify - {artist.popularity}
            </Typography>
          </Typography>
        </React.Fragment>
      }
      arrow
    >
      <div className="top-artist-card">
        <a href={artist.uri}>
          <img src={artist.image} alt="artist" className="top-artist-img" />
        </a>
        <div className="title">{artist.name}</div>
      </div>
    </Tooltip>
  );
}
