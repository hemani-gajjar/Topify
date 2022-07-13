import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import TopTrack from "./TopTrack";
import TopArtist from "./TopArtist";
import DropDownTracks from "./DropDownTracks";
import DropDownArtists from "./DropDownArtists";
import "font-awesome/css/font-awesome.min.css";
import UserIcon from "./UserIcon";
import GeneratePlaylist from "./GeneratePlaylist";
import ByTheDecades from "./ByTheDecades";
import Footer from "./Footer";

const spotifyApi = new SpotifyWebApi({
  clientId: "b256d996ac324a3fa6765ae4287a195f",
});

export default function HomePage({ code }) {
  const accessToken = useAuth(code);
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [trackDuration, setTrackDuration] = useState("long_term");
  const [artistsDuration, setArtistsDuration] = useState("short_term");
  const [userDetails, setUserDetails] = useState({});
  const screenWidth = window.screen.width;

  const secondTopArtist = topArtists.slice(0, 1).map((artist) => artist.name);
  const topArtist = topArtists.slice(0, 1).map((artist) => artist.name);

  //Button Collapse / Expand
  document.addEventListener("DOMContentLoaded", function () {
    const tracksExpandBtn = document.querySelector(".expand-btn-tracks");
    tracksExpandBtn.addEventListener("click", (e) => {
      const expandTracksContent = document.querySelector(
        ".grid-container-tracks"
      );

      //stlying on button
      tracksExpandBtn.classList.toggle("button-pressed");

      if (tracksExpandBtn.classList.contains("button-pressed")) {
        expandTracksContent.style.maxHeight =
          expandTracksContent.scrollHeight + "px";
        if (tracksExpandBtn.innerHTML === "See More") {
          tracksExpandBtn.innerHTML = "See Less";
        }
      } else {
        expandTracksContent.style.maxHeight = 0;
        if (tracksExpandBtn.innerHTML === "See Less") {
          tracksExpandBtn.innerHTML = "See More";
        }
      }

      //prevent trigerring click event twice
      e.stopImmediatePropagation();
    });
  });

  //Button Collapse / Expand
  document.addEventListener("DOMContentLoaded", function () {
    const artistsExpandBtn = document.querySelector(".expand-btn-artists");
    artistsExpandBtn.addEventListener("click", (e) => {
      const expandArtistsContent = document.querySelector(
        ".grid-container-artists"
      );
      //stlying on button
      artistsExpandBtn.classList.toggle("button-pressed");

      if (artistsExpandBtn.classList.contains("button-pressed")) {
        expandArtistsContent.style.maxHeight =
          expandArtistsContent.scrollHeight + "px";
        if (artistsExpandBtn.innerHTML === "See More") {
          artistsExpandBtn.innerHTML = "See Less";
        }
      } else {
        expandArtistsContent.style.maxHeight = 0;
        if (artistsExpandBtn.innerHTML === "See Less") {
          artistsExpandBtn.innerHTML = "See More";
        }
      }

      //prevent trigerring click event twice
      e.stopImmediatePropagation();
    });
  });

  function changeSelect() {
    const dropDownTracks = document.querySelector(".drop-down-tracks");
    setTrackDuration(dropDownTracks.value);
  }

  function handleChangeArtist() {
    const dropDownArtists = document.querySelector(".drop-down-artists");
    setArtistsDuration(dropDownArtists.value);
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    // Get a User’s Top Tracks
    spotifyApi.getMyTopTracks({ limit: 50, time_range: trackDuration }).then(
      function (data) {
        console.log(data.body);
        setTopTracks(
          data.body.items.map(function (track) {
            const largestAlbumImage = track.album.images.reduce(function (
              largest,
              image
            ) {
              if (image.height > largest.height) {
                return image;
              } else {
                return largest;
              }
            },
            track.album.images[0]);

            var date = new Date(track.album.release_date);
            var options = {
              year: "numeric",
              month: "long",
              day: "numeric",
            };

            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: largestAlbumImage.url,
              popularity: track.popularity,
              trackNumber: track.track_number,
              index: data.body.items.indexOf(track) + 1,
              type: track.album.album_type,
              albumName: track.album.name,
              releaseDate: date.toLocaleDateString("en-US", options),
              totalTracks: track.album.total_tracks,
            };
          })
        );
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [accessToken, trackDuration]);

  useEffect(() => {
    if (!accessToken) return;

    // Get a User’s Top Artists
    spotifyApi.getMyTopArtists({ limit: 50, time_range: artistsDuration }).then(
      function (data) {
        console.log(data.body.items);
        setTopArtists(
          data.body.items.map(function (artist) {
            const largestAlbumImage = artist.images.reduce(function (
              largest,
              image
            ) {
              if (image.height > largest.height) {
                return image;
              } else {
                return largest;
              }
            },
            artist.images[0]);

            return {
              name: artist.name,
              popularity: artist.popularity,
              uri: artist.uri,
              image: largestAlbumImage.url,
              index: data.body.items.indexOf(artist) + 1,
              genres: artist.genres,
            };
          })
        );
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [accessToken, artistsDuration]);

  useEffect(() => {
    if (!accessToken) {
      console.log("No Acces Token");
      return;
    }

    spotifyApi.getMe().then(
      function (data) {
        console.log("Some information about the authenticated user", data.body);
        var user = data.body;
        setUserDetails({
          name: user.display_name,
          image: user.images[0].url,
        });
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );

  return (
    <Container fluid className="main-container">
      <UserIcon user={userDetails} />
      <h1>
        Your top tracks of <DropDownTracks changeSelect={changeSelect} />
      </h1>{" "}

      <div className="grid-container">
        {screenWidth < 660 &&
          screenWidth > 460 &&
          topTracks
            .slice(0, 2)
            .map((track) => <TopTrack track={track} key={track.uri} />)}
        {screenWidth < 860 &&
          screenWidth >= 660 &&
          topTracks
            .slice(0, 3)
            .map((track) => <TopTrack track={track} key={track.uri} />)}
        {screenWidth < 1100 &&
          screenWidth >= 860 &&
          topTracks
            .slice(0, 4)
            .map((track) => <TopTrack track={track} key={track.uri} />)}
        {(screenWidth >= 1100 || screenWidth <= 460) &&
          topTracks
            .slice(0, 5)
            .map((track) => <TopTrack track={track} key={track.uri} />)}
      </div>
      <div className=" grid-container grid-container-tracks">
        {screenWidth < 660 &&
          screenWidth > 460 &&
          topTracks
            .slice(2, 51)
            .map((track) => <TopTrack track={track} key={track.uri} />)}
        {screenWidth < 860 &&
          screenWidth >= 660 &&
          topTracks
            .slice(3, 51)
            .map((track) => <TopTrack track={track} key={track.uri} />)}
        {screenWidth < 1100 &&
          screenWidth >= 860 &&
          topTracks
            .slice(4, 51)
            .map((track) => <TopTrack track={track} key={track.uri} />)}
        {(screenWidth >= 1100 || screenWidth <= 460) &&
          topTracks
            .slice(5, 51)
            .map((track) => <TopTrack track={track} key={track.uri} />)}
      </div>
      <div className="btn-container">
        <button type="button" className="expand-btn-tracks">
          See More
        </button>
      </div>
      <h1>
        Your top artists of{" "}
        <DropDownArtists handleChangeArtist={handleChangeArtist} />
      </h1>
      <div className="grid-container ">
        {screenWidth < 660 &&
          screenWidth > 460 &&
          topArtists
            .slice(0, 1)
            .map((artist) => <TopArtist artist={artist} key={artist.uri} />)}
        {screenWidth < 860 &&
          screenWidth >= 660 &&
          topArtists
            .slice(0, 2)
            .map((artist) => <TopArtist artist={artist} key={artist.uri} />)}
        {screenWidth < 1100 &&
          screenWidth >= 860 &&
          topArtists
            .slice(0, 3)
            .map((artist) => <TopArtist artist={artist} key={artist.uri} />)}
        {(screenWidth >= 1100 || screenWidth <= 460) &&
          topArtists
            .slice(0, 4)
            .map((artist) => <TopArtist artist={artist} key={artist.uri} />)}

        <div className="text-container">
          {artistsDuration === "medium_term" && (
            <h3>
              You listen to a lot of
              <strong>{" " + topArtist + " "}</strong>
            </h3>
          )}
          {artistsDuration === "long_term" && (
            <h3>
              Your top artist of all time is
              <strong>{" " + topArtist + " "}</strong>
            </h3>
          )}
          {artistsDuration === "short_term" && (
            <h3>
              You've been listening to a lot of
              <strong>{" " + secondTopArtist + " "}</strong>
              lately
            </h3>
          )}
        </div>
      </div>
      <div className="grid-container  grid-container-artists">
        {screenWidth < 660 &&
          screenWidth > 460 &&
          topArtists
            .slice(1, 49)
            .map((artist) => <TopArtist artist={artist} key={artist.uri} />)}
        {screenWidth < 860 &&
          screenWidth >= 660 &&
          topArtists
            .slice(2, 49)
            .map((artist) => <TopArtist artist={artist} key={artist.uri} />)}
        {screenWidth < 1100 &&
          screenWidth >= 860 &&
          topArtists
            .slice(3, 49)
            .map((artist) => <TopArtist artist={artist} key={artist.uri} />)}
        {(screenWidth >= 1100 || screenWidth) < 460 &&
          topArtists
            .slice(4, 49)
            .map((artist) => <TopArtist artist={artist} key={artist.uri} />)}
      </div>
      <div className="btn-container">
        <button type="button" className="expand-btn-artists">
          See More
        </button>
      </div>
      <GeneratePlaylist />
      <ByTheDecades />
      <Footer />
    </Container>
  );
}
