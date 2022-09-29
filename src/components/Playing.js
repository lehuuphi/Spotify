import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../content";
export default function Playing() {
  const { song,HandleSetSong } = useContext(Songs)




  const HandleClickNext = ()=>{
    HandleSetSong(song.id + 1)
  }
  const HandleClickPev = ()=>{
    HandleSetSong(song.id - 1)
  }
  return (
    <div>
      <AudioPlayer
        src={song.url}
        className="play-music"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={HandleClickNext}
        onClickPrevious={HandleClickPev}
      />
    </div>
  );
}
