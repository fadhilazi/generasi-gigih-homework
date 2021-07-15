import './App.css';
import Title from './components/title/Title';
import Button from './components/button/button';
import Image from './components/img/img';
import Album from './components/album/album';
import Data from './data/Data';

function App() {
  return (
    <div className="App">
      <h1>Create Playlist</h1>
      <div className="body">
        <Image src={Data.album.images[1].url} alt={Data.album.id}/>
        <Album value={Data.name}/>
        <Album value={Data.album.artists[0].name}/>
        <Title name={Data.album.name}/>
        <Button name="Select"/>
      </div>
    </div>
  );
}

export default App;