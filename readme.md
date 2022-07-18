<p align="center">
  <h1>![topify-logo](https://github.com/hemani-gajjar/Topify/blob/master/client/public/topify-logo.svg) Topify</h1>
  <p>
   Web Application for Spotify users to view  their top tracks and artists statistics.
    <br />
    <a href="https://topify-web.herokuapp.com/"><strong>View Live</strong></a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

<p>Topify is a web interface for Spotify users to look at their top tracks and artists.
Users are authenticated with spotify to get the required data. </p>
Project Repository Link: https://github.com/hemani-gajjar/Topify

## Application Functinalties

1. Authentication using Spotify Account with required permissions from the user.<br/>
2. View top tracks with the following details (based on the chosen time duration from the options "last month", "last 6 months" and "all time"):

   1. Full Title of the track
   2. First Artist of the track
   3. Type of the track (Single / Part of an Album)
   4. Album Name (If the track is part of an Album)
   5. Track No. in the Album
   6. Popularity on Spotify (Out of 100)
   7. Release Date

3. View top artists with the following details (based on the chosen time duration from the options "last month", "last 6 months" and "all time"):

   1. Full name of the artist
   2. Artist Genres
   3. Popularity on Spotify (Out of 100)

4. Expand / Collapse the number of top tracks and artists.<br/>
5. View your most unique tracks and artists on Spotify (Tracks and Artists that have listedn to having the lesser popularity on Spotify)
6. Discover music based on your taste:

- Generate a plylist of recommended tracks based on a random mix of your top artists
- Refresh the artists list to choose from the combinations

## Demonstration video

Take a look at the video or find the video [here](https://github.com/hemani-gajjar/Topify/tree/master/client/public/Videos)

https://user-images.githubusercontent.com/68991381/178066955-7e9ef2d5-6939-4359-a6d3-554f889bb7f5.mp4

### Installation

To get a local copy up and running follow these simple steps:

### Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [npm](https://docs.npmjs.com/cli/v8/configuring-npm/install)

### Installation

---

### Client-Side Setup

1. Clone the repo

   ```sh
   git clone https://github.com/hemani-gajjar/Topify.git

   ```

2. In the `client` directory, install required NPM packages

   ```sh
   npm install
   ```

   ```
   npm start
   ```

   This command runs the react app in the development mode. Open http://localhost:3000 to view it in the browser. The server will reload if you make edits. You will also see any lint errors in the console.

### Server-Side Setup

1. In the `server` directory, install required NPM packages
   ```sh
   npm install
   ```
2. In the `server` directory, run:

   ```sh
   npm run dev-start
   ```

   This command runs the server at the port 5000. The server will reload if you make edits.

### Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.dev/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)

### Deployed using

- [Heroku](https://www.heroku.com/home)

### Acknowledgements

- [Axios](https://axios-http.com/docs/intro)
- [Font Awesome](https://fontawesome.com/)
- [Bootstrap](https://getbootstrap.com/)
