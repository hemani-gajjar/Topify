  <h1> <a href="https://topify-web.herokuapp.com/">
    <img src="https://github.com/hemani-gajjar/Topify/blob/master/client/public/topify-logo.svg" alt="Logo" width="40" height="40">
  </a> Topify</h1>
  <p>
      Web interface for Spotify users to look at their top tracks and artists statistics. Users are authenticated with Spotify to get the required data.
  </p>
  
  
- Note: Spotify introduced a few changes to the developer platform mentioned [here(https://developer.spotify.com/community/news/2021/05/27/improving-the-developer-and-user-experience-for-third-party-apps/). Topify comes under `Development Mode` which designed to help developers explore Spotify APIs, and caters for apps that are under development, personal use, or are intended for a small number of users. I can invite up to 25 Spotify users to use the Development Mode app. So reach out to me if you need access to the web application :)

## Application Functionalities

1. Authentication using Spotify Account with required permissions from the user
2. View top tracks with the following details (based on the chosen time duration from the options `last month` `last 6 months` and `all time`):

   - Full Title of the track
   - First Artist of the track (If multiple)
   - Type of the track (Single / Part of an Album)
   - Album Name (If the track is part of an Album)
   - Track No. in the Album
   - Popularity on Spotify (Out of 100)
   - Release Date

3. View top artists with the following details (based on the chosen time duration from the options `last month` `last 6 months` and `all time`):

   - Full name of the artist
   - Artist Genres
   - Popularity on Spotify (Out of 100)

4. Expand / Collapse the number of top tracks and artists.<br/>
5. View your most unique tracks and artists on Spotify (Tracks and Artists that user has listened to having lesser popularity on Spotify)
6. Discover music based on your taste:

   - Generate a playlist of recommended tracks based on a random mix of your top artists
   - Refresh the artists list to choose from the combinations

## Demonstration video

Take a look at the video or find the video [here](https://github.com/hemani-gajjar/Topify/tree/master/client/public/Videos)

https://user-images.githubusercontent.com/68991381/179614154-1de3a530-b7e5-4f0a-aebc-4b88aab1c89d.mp4

## Installation

To get a local copy up and running follow these simple steps:

### Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [npm](https://docs.npmjs.com/cli/v8/configuring-npm/install)

#### Client-Side Setup

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

#### Server-Side Setup

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
- [Material UI](https://mui.com/)
