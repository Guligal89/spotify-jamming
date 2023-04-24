import Track from "./Track";
import { useState } from "react";

export default function TrackList({ tracks, handleAddToPlaylist }) {

    const trackComponents = tracks.map(track => 
        <Track track={track} handleAddToPlaylist={handleAddToPlaylist}/>)

    return (
        <div className="
        flex flex-col
        h-100 w-2/5 bg-gray-900
        rounded-lg bg-opacity-90
        p-6
        ">
            <h2 className="text-2xl mb-3">Results</h2>
            <ul>
                {trackComponents}
            </ul>
        </div>
    )
}