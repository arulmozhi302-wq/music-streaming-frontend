import { useEffect,useState } from "react";
import API from "../services/api";
import SongCard from "../components/SongCard";

function Home(){

const [songs,setSongs] = useState([]);

useEffect(()=>{

API.get("/songs")
.then(res=>setSongs(res.data))
.catch(err=>console.log(err));

},[]);

return(

<div className="p-6 text-white">

<h2 className="text-2xl mb-6">
Trending Songs
</h2>

<div className="grid grid-cols-5 gap-6">

{songs.map(song=>(
<SongCard key={song._id} song={song}/>
))}

</div>

</div>

);

}

export default Home;