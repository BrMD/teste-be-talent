import { useMemo } from "react";
import { Employee, TableBodyType } from "../../types";
import { filterArrayEmployees } from "../../utils";
import TableRow from "./TableRow";
import "./tablebody.css";

const TableBody = ({ employees, searched }: TableBodyType) => {
  const filteredEmployees = useMemo(() => {
    return employees !== undefined
      ? employees.filter((employee) => filterArrayEmployees(searched, employee))
      : [];
  }, [employees, searched]);

  const renderContent = () => {
    if (employees === undefined) {
      return (
        <div className="errorFetchData">
          <h3>Erro ao requisitar dados</h3>
        </div>
      );
    }

    if (!filteredEmployees || filteredEmployees.length === 0) {
      return (
        <div className="errorFetchData">
          <h3>Nenhum resultado encontrado</h3>
        </div>
      );
    }

    return filteredEmployees.map((employee: Employee) => (
      <TableRow key={employee.name} employee={employee} />
    ));
  };
  return <>{renderContent()}</>;
};

export default TableBody;
