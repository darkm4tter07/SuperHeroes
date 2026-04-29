import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="p-4 bg-slate-900">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <div className="text-white font-bold">NightWing</div>
        <SearchBar
          onSelect={(hero) => navigate(`/character/${hero.id}`)}
          onSubmit={(q) => navigate(`/search?q=${encodeURIComponent(q)}`)}
        />
      </div>
    </nav>
  );
}
export default Navbar;