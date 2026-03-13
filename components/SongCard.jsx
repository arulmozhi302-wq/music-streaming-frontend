import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext.jsx";

function SongCard({ song }) {

const { setCurrentSong } = useContext(PlayerContext);

return (

<div className="bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition cursor-pointer">

<img
src={song.coverImage}
alt={song.title}
className="rounded-lg"
/>

<h3 className="text-white mt-3 font-semibold">
{song.title}
</h3>

<p className="text-gray-400 text-sm">
{song.artist}
</p>

<p className="text-gray-500 text-xs">
{song.album}
</p>

<button
onClick={()=>setCurrentSong(song)}
className="mt-3 bg-green-500 px-3 py-1 rounded"
>
Play
</button>

</div>

);

}

export default SongCard;