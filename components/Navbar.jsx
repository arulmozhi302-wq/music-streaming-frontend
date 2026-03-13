function Navbar() {
  return (
    <div className="bg-black text-white flex justify-between items-center px-6 py-4">
      
      <h1 className="text-xl font-bold text-green-500">
        Music Stream
      </h1>

      <div className="space-x-4">
        <button className="hover:text-green-400">
          Login
        </button>

        <button className="bg-green-500 px-4 py-1 rounded hover:bg-green-600">
          Register
        </button>
      </div>

    </div>
  );
}

export default Navbar;