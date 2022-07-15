import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import Tooltip from "@mui/material/Tooltip";
import { alpha } from "@mui/material";

export default function GeneratePlaylist({
  handlePlaylistBtn,
  pickedArtists,
  handleRefresh,
}) {
  return (
    <div className="generate-playlist-container">
      <h1>Discover Music based on your taste</h1>
      <div className="generate-playlist">
        <div className="left">
          <div className="picked-artists">
            <div className="row">
              {pickedArtists.map((artist) => (
                <div className="col-sm padding-0" key={artist.index}>
                  <div className="artist-card">
                    <a href={artist.uri}>
                      <img src={artist.image} alt="picked-artist"></img>
                    </a>
                    <p>{artist.name}</p>
                    <p>
                      <strong>
                        <span style={{ color: "darkgrey" }}>
                          {artist.genres.slice(0, 2).join(", ")}
                        </span>
                      </strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <Typography
            sx={{
              maxWidth: 320,
              pb: 3,
              pt: 3,
              fontSize: 22,
              color: "darkgrey",
            }}
          >
            <strong>
              {" "}
              Generate a mix of recommended tracks based on your top artists
            </strong>
          </Typography>
          <Button
            variant="contained"
            onClick={handleRefresh}
            size="large"
            sx={{
              m: 1,
              textTransform: "none",
              fontSize: 18,
              backgroundColor: "#46476d",
              ":hover": {
                backgroundColor: "#353753",
              },
            }}
          >
            <RefreshRoundedIcon sx={{ mr: 1 }} /> Refresh Artists
          </Button>
        </div>
      </div>

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
              color="#FBFBFB"
              sx={{
                p: 2,
                minWidth: 300,
                textAlign: "center",
              }}
            >
              Generate a playlist in your spotify account with the recommended
              tracks!
            </Typography>
          </React.Fragment>
        }
        arrow
      >
        <Button
          variant="contained"
          onClick={handlePlaylistBtn}
          sx={{
            m: 1,
            fontSize: 18,
            textTransform: "none",
            backgroundColor: "#46476d",
            ":hover": {
              backgroundColor: "#353753",
            },
          }}
          size="large"
        >
          Generate Playlist
        </Button>
      </Tooltip>
      <p></p>
    </div>
  );
}
