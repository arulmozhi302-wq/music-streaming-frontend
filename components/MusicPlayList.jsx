import { useContext, useRef, useEffect } from "react";
import { PlayerContext } from "../context/PlayerContext.jsx";

function MusicPlayList(){

const { currentSong } = useContext(PlayerContext);

const audioRef = useRef();

useEffect(()=>{

if(currentSong){

audioRef.current.src = currentSong.audioUrl;
audioRef.current.play();

}

},[currentSong]);

return(

<div className="fixed bottom-0 w-full bg-zinc-900 text-white p-4 flex justify-between items-center">

<div>

{currentSong ? (

<div>

<h4 className="font-semibold">
{currentSong.title}
</h4>

<p className="text-gray-400 text-sm">
{currentSong.artist} • {currentSong.album}
</p>

</div>

) : "No song playing"}

</div>

<audio ref={audioRef} controls />

</div>

);

}

export default MusicPlayList;