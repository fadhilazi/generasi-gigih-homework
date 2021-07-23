import React, { useState, useEffect } from "react";

import style from "./search.module.css";
import TrackList from "../../components/tracklist/tracklist";

const CLIENT_ID = "a94477da47e340cba87ea9859da1744b";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000";
const SCOPE = "playlist-modify-private";

export default function Search() {
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [isSelected, setIsSelected] = useState(true);

  const getTokenFromUrl = (hash) => {
    const stringAfterHastag = hash.substring(1);
    const paramInUrl = stringAfterHastag.split("&");
    const paramSplitUp = paramInUrl.reduce((acc, currentValue) => {
      // console.log(currentValue);
      const [key, value] = currentValue.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return paramSplitUp;
  };

  const handleButtonLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE}&response_type=token&show_dialog=true`;
  };

  

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getTokenFromUrl(window.location.hash);
      // console.log(access_token, token_type, expires_in);
      setToken(access_token);
    }
    console.log(tracks);
  }, []);

  const buttonHandleSearch = () => {
    fetch(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=10`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setTracks(data.tracks.items));
  };
  console.log(tracks);

  return (
    <div className={style["wrapper"]}>
      <div className={style["navbar"]}>
        <button onClick={handleButtonLogin}>Login in Spotify</button>
      </div>

      <div className={style["search-bar"]}>
        <input
          id="search-input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <button id="search-btn" onClick={buttonHandleSearch}>
          Search
        </button>
      </div>

      <div className={style["list-track"]}>
        {tracks.length > 0 ? (
          <TrackList
            tracks={tracks}
            playlist={playlist}
            setPlaylist={setPlaylist}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        ) : (
          <tr>
            <td colSpan="5" style={{ color: "white" }}>
              Search your Music
            </td>
          </tr>
        )}
      </div>
    </div>
  );
}
