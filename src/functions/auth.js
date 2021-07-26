const CLIENT_ID = "a94477da47e340cba87ea9859da1744b";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000";
const SCOPE = "playlist-modify-private";

const loginSpotify = () => {
  window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE}&response_type=token&show_dialog=true`;
};

const getAccessTokenFromURL = (hash) => {
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

const getProfile = (accessToken) => {
  return fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

export { loginSpotify, getAccessTokenFromURL, getProfile };
