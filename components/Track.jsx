import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

export default function Track({ track, handleRemoveFromPlaylist, handleAddToPlaylist }) {

    let button;

    if (handleAddToPlaylist) {
        button = <AddButton handleAddToPlaylist={handleAddToPlaylist} track={track}/>;
    } else {
        button = <RemoveButton handleRemoveFromPlaylist={handleRemoveFromPlaylist} track={track}/>
    }

    return (
        <li className="grid grid-rows-3 grid-cols-8 px-1" key={track.id}>
            <span className="w-[100%] self-center bg-gray-200 h-[1px] my-2 opacity-20 rounded-full col-span-full"></span>
            <span className="
            row-start-2 row-span-1 
            col-span-7">{track.name}</span>
            <span className="
            row-start-3 row-span-1 
            col-span-7 
            opacity-40 font-normal">{track.author}</span>
            {button}
        </li>
    )
}