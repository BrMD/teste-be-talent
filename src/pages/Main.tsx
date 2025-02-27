import { useState } from "react";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";
import "./main.css";

function Main() {
  const [searched, setSearched] = useState("");
  return (
    <main className="main">
      <Header />
      <section className="wrapper">
        <h1>Funcionários</h1>
        <SearchBar setState={setSearched} />
      </section>
    </main>
  );
}

export default Main;
