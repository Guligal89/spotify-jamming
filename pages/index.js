import BigLogo from "@components//BigLogo";
import PlayList from "@components//PlayList";
import SearchBar from "@components//SearchBar";
import TrackList from "@components//TrackList";
import { useState } from "react";

const tracks = [
  {name: 'Awawa Quu', author: 'Sybyby', id: 1},
  {name: 'Samba Quu', author: 'Aytu', id: 2},
  {name: 'Samba Quu', author: 'Aytu', id: 3},
  {name: 'Samba Quu', author: 'Aytu', id: 4},
  {name: 'Samba Quu', author: 'Aytu', id: 5},
  {name: 'Samba Quu', author: 'Aytu', id: 6},
]

export default function Home() {
  const [playList, setPlayList] = useState([]);

  function handleAddToPlaylist(trackToAdd) {
    if (playList.includes(trackToAdd)) {
      return;
    }
    const newPlayList = playList.slice();
    newPlayList.push(trackToAdd);
    setPlayList(newPlayList);
    console.log(playList);
  }

  function handleRemoveFromPlaylist(trackToRemove) {
    const trackToRemoveId = trackToRemove.id;
    const newPlayList = playList.filter(track => track.id !== trackToRemoveId);
    setPlayList(newPlayList);
  }

  return(
    <div className="flex flex-col items-center w-100">
      <BigLogo />
      <SearchBar />
      <div className="flex w-[80vw] min-h-[50vh] mt-20 justify-around text-gray-200 font-bold">
        <TrackList tracks={tracks} handleAddToPlaylist={handleAddToPlaylist}/>
        <PlayList playList={playList} handleRemoveFromPlaylist={handleRemoveFromPlaylist}/>
      </div>
    </div>
  )
}
