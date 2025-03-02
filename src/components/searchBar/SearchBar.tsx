import { propSearchSetState } from "../types";
import "./searchbar.css";

const SearchBar = ({ setState }: propSearchSetState) => {
  return (
    <div className="searchBar">
      <input
        placeholder="Pesquisar"
        onChange={(e) => setState(e.target.value)}
      />
      <img src="./svg/lupa.svg" alt="lupa" />
    </div>
  );
};

export default SearchBar;
