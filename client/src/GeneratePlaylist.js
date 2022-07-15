import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

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
                <div className="col-sm padding-0">
                  <div className="artist-card">
                    <img src={artist.image} alt="picked-artist"></img>
                    <p>{artist.name}</p>
                    <p>
                      <strong>
                        <span style={{ color: "darkgrey" }}>
                          {artist.genres.slice(0, 4).join(", ")}
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
          <Typography sx={{ maxWidth: 200, p: 2 }}>
            Generate a mix of recommended tracks based on your top artists
          </Typography>
          <Button
            variant="contained"
            onClick={handleRefresh}
            sx={{
              m: 1,
              textTransform: "none",
              backgroundColor: "#353753",
              ":hover": {
                backgroundColor: "#46476d",
              },
            }}
          >
            <RefreshRoundedIcon sx={{ mr: 1 }} /> Refresh Artists
          </Button>
        </div>
      </div>
      <Button
        variant="contained"
        onClick={handlePlaylistBtn}
        sx={{
          textTransform: "none",
          backgroundColor: "#353753",
          ":hover": {
            backgroundColor: "#46476d",
          },
        }}
        size="large"
      >
        Generate Playlist
      </Button>
    </div>
  );
}
