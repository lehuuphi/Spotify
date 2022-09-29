import React, { useContext } from "react";
import { Songs } from "../content";

export default function Detailsong() {
const {song} = useContext(Songs)


  return <div className="col-span-1 p-3">
    <h2 className="text-green-300 font-bold  " >Now Playing</h2>
    <h2 className="text-2xl text-teal-400 "> {song.name}</h2>
    <div className="w-[240px] m-auto mt-10">
      <img src= {song.links.images[0].url}  alt="avtar" />
    </div>
    <div className="flex justify-evenly items-center  mt-10 ">
    <img className="w-[70px] rounded-full " src={song.links.images[1].url} alt="avtar" />
    <span className="text-white text-xl">{song.author}</span>
    </div>
  </div>;
}
