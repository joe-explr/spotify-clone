import React, { useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-js"
import {useStateValue} from './StateProvider'
import {Login} from './Login'
import { getTokenFromResponse } from "./spotifyUrl"
import './App.css'
import Player from "./Player"

const spot = new SpotifyWebApi();
function App() {
  const [{ token }, dispatch] = useStateValue();
  useEffect(()=>{
    const hash= getTokenFromResponse();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token){
      spot.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spot.getUserPlaylists().then((playlists) => {
        // console.log("Setting Playlist",playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spot.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      dispatch({
        type:"SET_SPOTIFY",
        spotify: spot,
      });

      spot.getPlaylist("37i9dQZEVXcUxs445q9R3k").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );

    }

  },[token,dispatch])
  return (
    <div className="App">
      {!token && <Login />}
      {token && <Player spotify={spot}/>}
    </div>
  );
}

export default App;
