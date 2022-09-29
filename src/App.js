import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import {Songs} from "./content"
import DataSongs from "./data/songs.json"
import Playing from "./components/Playing";
import { useState } from "react";
function App() {
  const [ song , setSong ] = useState(DataSongs[0])
  const HandleSetSong = (idSong)=>{
    const song = DataSongs.find(song =>song.id === idSong)
    if(!song)
    setSong(DataSongs[0])
    else
    setSong(song)
  }
  return (
    <div className="App" >
     <Songs.Provider  value ={{DataSongs , song , HandleSetSong  }}>
     <Navbar /> 
      <div className="grid grid-cols-3 bg-slate-700 h-screen-nav-player overflow-hidden">
        {/* Span 1 */}
        <DetailSong />
        {/* Span 2 */}
        <ListSong />
      </div>
        <Playing />
     </Songs.Provider>
    </div>
  );
}

export default App;
