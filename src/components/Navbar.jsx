
const Navbar = () => {
  return (
    // Class untuk sticky tetap ada
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* HANYA TAMPILKAN NAMA ANDA */}
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Fakhri</a>
        
        {/* Bagian link navigasi di sini sudah dihapus */}
      </div>
    </nav>
  );
};

export default Navbar;