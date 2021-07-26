import Search from "./pages/Search";

import {
  loginSpotify,
  getAccessTokenFromURL,
  getProfile,
} from "./functions/auth";

function App() {
  return (
    <div className="app">
      <div className="content">
        {/* <Search getAccessTokenFromURL={getAccessTokenFromURL} /> */}
        <CreatePlaylist
          getAccessTokenFromURL={getAccessTokenFromURL}
          getProfile={getProfile}
        />
      </div>
    </div>
  );
}

export default App;