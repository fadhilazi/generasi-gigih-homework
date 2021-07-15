import React from "react";
import Data from "../data/Data";

import "./Playlist.css";
export default function Playlist() {
  return (
    <div className="playlist">
      <h1>Create Playlist</h1>
      <div className="playlist-detail">
        <div className="details">
        <img src={Data.album.images[1].url} alt={Data.album.id} />
          <p>{Data.name}</p>
          <p>{(Data.album.artists[0].name)}</p>
          <p className="details-title">{Data.album.name}</p>          
          <button>Select</button>
        </div>
      </div>
    </div>
  );
}
