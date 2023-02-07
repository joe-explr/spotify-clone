import React from "react";
import { accessUrl } from "./spotifyUrl";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login__page">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify_logo"
      />
      <a href={accessUrl} className="login_button">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
};
