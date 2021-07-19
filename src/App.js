import './App.css';
import Title from './components/title/Title';
import Button from './components/button/button';
import Image from './components/img/img';
import Album from './components/album/album';
import Data from './constants/Data';
import Data2 from './constants/Data2';
import Track from './components/track/track';

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
    
    
    <div>
      {Data2.map((data) => {
        console.log(data.album.images[1].url);
        return (
          <Track
          key={data.id}
          image={data.album.images[1].url}
          title={data.name}/>
        )
      })}
    </div>
    </div>
  );
}

export default App;