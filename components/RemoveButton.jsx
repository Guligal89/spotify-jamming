
export default function RemoveButton({ handleRemoveFromPlaylist, track }) {

    return (
        <button onClick={() => handleRemoveFromPlaylist(track)} className="
        row-start-2 row-span-2 
        col-start-8 col-span-1 
        m-auto opacity-95
        triangle">
    </button>
    )
}