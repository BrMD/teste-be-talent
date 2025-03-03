import { useState } from "react";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";
import Table from "../components/table/Table";
import TableBody from "../components/table/tableEmployees/TableBody";
import { EmployeesArrayType } from "../types";
import { headersArray } from "../constants/contants";
import "./main.css";

const Main = ({ employees }: EmployeesArrayType) => {
  const [searched, setSearched] = useState("");
  return (
    <main className="main">
      <Header />
      <section className="wrapper">
        <h1>Funcionários</h1>
        <SearchBar setState={setSearched} />
      </section>
      <section className="tableContainer">
        <Table tableHeaders={headersArray} hideMobileColumnIndex={1}>
          <TableBody employees={employees} searched={searched} />
        </Table>
      </section>
    </main>
  );
};

export default Main;
