
import PlayListNameBar from "./PlayListNameBar"
import Track from "./Track";

export default function PlayList({ playList, handleRemoveFromPlaylist }) {
    const trackComponents = playList.map(track => 
        <Track track={track} handleRemoveFromPlaylist={handleRemoveFromPlaylist}/>)

    return (
        <div className="
        flex flex-col
        h-100 w-2/5 bg-gray-900
        rounded-lg bg-opacity-90
        p-6">
            <PlayListNameBar />
            <ul>
                {trackComponents}  
            </ul>
        </div>
    )
}