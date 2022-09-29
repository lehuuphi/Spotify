import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../content";

export default function ListSong() {
  const { DataSongs, HandleSetSong, song } = useContext(Songs);
  const [idSong, SetIdSong] = useState(0);
  const handlePlaySong = (idSong) => {
    SetIdSong(idSong);
    HandleSetSong(idSong);
    console.log(idSong);
  };
  useEffect(() => {
    SetIdSong(song.id);
  }, [song]);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className=" fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((DataSong, index) => {
            console.log(
              "first",
              idSong,
              DataSong.id,
              idSong.toString() === DataSong.id.toString()
            );
            return (
              <tr
                key={index}
                className={`bg-slate-800 h-12  hover:bg-slate-600  cursor-pointer  ${
                  idSong.toString() === DataSong.id.toString()
                    ? "bg-slate-600 text-teal-400"
                    : "text-gray-500"
                }`}
                onClick={() => handlePlaySong(DataSong.id)}
              >
                <td className="text-center">{index + 1}</td>

                <td>{DataSong.name}</td>
                <td className="text-center">{DataSong.author}</td>
                <td className="text-center">
                  {" "}
                  <a href={DataSong.url}>
                    {" "}
                    <i className="fa fa-download"></i>
                  </a>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
