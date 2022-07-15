import * as React from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { alpha } from "@mui/material";

export default function UniqueMusic({ sortedTracks, sortedArtists }) {
  return (
    <div className="unique-music">
      <div className="unique-tracks">
        <h1>Your most unique tracks</h1>
        <div>
          <div className="row">
            {sortedTracks
              .sort((a, b) =>
                a.popularity > b.popularity
                  ? 1
                  : b.popularity > a.popularity
                  ? -1
                  : 0
              )
              .slice(0, 7)
              .map((track) => (
                <div className="col-sm padding-0" key={track.index}>
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
                          <Typography color="#FBFBFB">{track.title}</Typography>
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
                                  <span style={{ color: "darkgrey" }}>
                                    {track.artist}
                                  </span>
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
                                  <span style={{ color: "darkgrey" }}>
                                    {track.artist}
                                  </span>
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
                                Track No. {track.trackNumber} of{" "}
                                {track.totalTracks}
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
                      <div className="title">
                        {track.title.substring(0, 20)}
                      </div>
                      <div className="text-mute">{track.artist}</div>
                    </div>
                  </Tooltip>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="unique-artists">
        <h1>Your most unique artists</h1>

        <div className="row">
          {sortedArtists
            .sort((a, b) =>
              a.popularity > b.popularity
                ? 1
                : b.popularity > a.popularity
                ? -1
                : 0
            )
            .slice(0, 7)
            .map((artist) => (
              <div className="col-sm padding-0" key={artist.index}>
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
                        <Typography color="#FBFBFB">{artist.name}</Typography>

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
                      <img
                        src={artist.image}
                        alt="artist"
                        className="top-artist-img"
                      />
                    </a>
                    <div className="title">{artist.name}</div>
                  </div>
                </Tooltip>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
