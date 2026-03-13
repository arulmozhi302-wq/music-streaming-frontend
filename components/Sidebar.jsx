import { Link } from "react-router-dom";

function Sidebar() {
  return (

    <div className="w-60 bg-zinc-900 text-white h-screen p-6">

      <ul className="space-y-6">

        <li>
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
        </li>

        <li>
          <Link to="/search" className="hover:text-green-400">
            Search
          </Link>
        </li>

        <li>
          <Link to="/playlist" className="hover:text-green-400">
            Playlists
          </Link>
        </li>

        <li>
          <Link to="/downloads" className="hover:text-green-400">
            Downloads
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;