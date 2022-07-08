import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=b256d996ac324a3fa6765ae4287a195f&response_type=code&redirect_uri=https://topify-web.herokuapp.com/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played%20user-read-playback-state%20user-top-read";

const Login = () => {
  return (
    <Container fluid className="login-container">
      <div className="descript">
        <div className="topify-title">
          <img src="./topify-logo.svg" alt="logo-svg" className="topify-logo" />
          <h1>Topify</h1>
        </div>
        <h3> Find out your most listened Tracks and Artists on Spotify.</h3>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          <i class="fa fa-spotify" aria-hidden="true"></i> Connect with Spotify
        </a>
      </div>
      <div className="video-container">
        <div>
          <video autoPlay loop muted playsInLine>
            <source src="./Videos/topify.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <p>
          You can disconnect Topify from your Spotify account{" "}
          <a
            href="https://www.spotify.com/us/account/apps/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
      </div>
      <footer>A project by Hemani</footer>
    </Container>
  );
};

export default Login;
